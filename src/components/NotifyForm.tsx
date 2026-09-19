"use client";

import { useState, type FormEvent } from "react";

export default function NotifyForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "done" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("submitting");
    setMessage("");
    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error);
      setStatus("done");
      setMessage(
        result.status === "already-joined"
          ? "You are already on the list."
          : "You are on the list. Check your inbox for confirmation.",
      );
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "done") {
    return <p className="text-sm font-medium text-primary">{message}</p>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row w-full flex-wrap gap-3"
    >
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <input
        id="email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@studio.com"
        className="min-w-0 flex-1 rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-primary focus:ring-4 focus:ring-primary/10"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-contrast transition-all hover:-translate-y-0.5 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 whitespace-nowrap"
      >
        {status === "submitting" ? "Joining…" : "Get early access"}
      </button>
      {status === "error" && (
        <p className="w-full text-sm text-red-500" role="alert">
          {message}
        </p>
      )}
    </form>
  );
}
