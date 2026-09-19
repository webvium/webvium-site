import { createHash } from "crypto";
import { Redis } from "@upstash/redis";
import { Resend } from "resend";
import { createElement } from "react";
import EarlyAccessConfirmationEmail from "@/emails/EarlyAccessConfirmationEmail";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const cacheTtl = Number(
  process.env.EARLY_ACCESS_DEDUPE_TTL_SECONDS ?? 31_536_000,
);

/**
 * Generates a cache key for the early access confirmation email based on the email address.
 *
 * @param email The email address to generate the cache key for.
 * @returns The generated cache key.
 */
function cacheKey(email: string) {
  return `webvium:early:access:${createHash("sha256").update(email).digest("hex")}`;
}

/**
 * Configures and returns the Redis client, if the environment variables are set.
 *
 * @returns The configured Redis client, or null if the environment variables are not set.
 */
function configuredRedis() {
  if (
    !process.env.UPSTASH_REDIS_REST_URL ||
    !process.env.UPSTASH_REDIS_REST_TOKEN
  )
    return null;
  return Redis.fromEnv();
}

export async function POST(request: Request) {
  let email = "";
  try {
    const body = await request.json();
    email =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  } catch {
    return Response.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email) || email.length > 254) {
    return Response.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const redis = configuredRedis();
  if (
    !redis ||
    !process.env.RESEND_API_KEY ||
    !process.env.EARLY_ACCESS_FROM_EMAIL
  ) {
    console.error("Early access is missing Resend or Upstash configuration.");
    return Response.json(
      {
        error:
          "Early access is temporarily unavailable. Please try again later.",
      },
      { status: 503 },
    );
  }

  const key = cacheKey(email);
  const reserved = await redis.set(key, "pending", { nx: true, ex: 300 });
  if (reserved !== "OK") {
    return Response.json({ status: "already-joined" });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const contact = await resend.contacts.create({
      email,
    });

    const segment = await resend.contacts.segments.add({
      email,
      segmentId: process.env.RESEND_WEBVIUM_SEGMENT_ID!,
    });

    if (segment.error && segment.error.statusCode !== 409) {
      throw new Error(segment.error.message);
    }

    const confirmation = await resend.emails.send(
      {
        from: process.env.EARLY_ACCESS_FROM_EMAIL,
        to: [email],
        subject: "You're on the Webvium early access",
        text: "You're on the Webvium early access. Thanks for joining us early. We'll email you when there is something useful to try. Visit https://webvium.com — Webvium",
        react: createElement(EarlyAccessConfirmationEmail),
      },
      {
        idempotencyKey: `webvium-early-access-${createHash("sha256").update(email).digest("hex")}`,
      },
    );

    const alreadyConfirmed =
      confirmation.error?.name === "invalid_idempotent_request";
    if (confirmation.error && !alreadyConfirmed) {
      throw new Error(confirmation.error.message);
    }
    await redis.set(key, "sent", {
      ex: Number.isFinite(cacheTtl) && cacheTtl > 0 ? cacheTtl : 31_536_000,
    });
    return Response.json(
      { status: alreadyConfirmed ? "already-joined" : "joined" },
      { status: alreadyConfirmed ? 200 : 201 },
    );
  } catch (error) {
    await redis.del(key);
    console.error("Early access signup failed", error);
    return Response.json(
      { error: "We could not add you right now. Please try again." },
      { status: 502 },
    );
  }
}
