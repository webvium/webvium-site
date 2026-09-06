"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faDownload } from "@fortawesome/free-solid-svg-icons";
import Reveal from "@/components/common/Reveal";

const cards = [
  {
    title: "Installation",
    description:
      "Open the downloaded APK and follow the installation prompts on your Android device.",
  },
  {
    title: "Changelog",
    description:
      "View the latest improvements, fixes, and new features included in this release.",
    link: { label: "View changelog", href: "/changelog" },
  },
  {
    title: "Community",
    description: "Follow development updates and future releases.",
    link: { label: "Join community", href: "https://www.hallofcodes.org" },
  },
];

export default function ThankYou() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const appName = params.get("utm_source") || "webvium-browser";
    window.location.href = `https://released.melvinjonesrepol.com/android/${appName}.apk`;
  }, []);

  return (
    <div>
      <section className="flex min-h-screen flex-col justify-center px-5 py-24">
        <div className="mx-auto w-full max-w-2xl text-center">
          <Reveal className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-soft text-primary">
            <FontAwesomeIcon icon={faCheck} className="text-xl" />
          </Reveal>
          <Reveal
            as="h1"
            delay={80}
            className="mt-8 text-4xl font-semibold sm:text-5xl"
          >
            Thank you for downloading
          </Reveal>
          <Reveal
            as="p"
            delay={160}
            className="mx-auto mt-5 max-w-md text-muted"
          >
            Your download should begin automatically. If it does not, start it
            again with the button below.
          </Reveal>
          <Reveal
            delay={240}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              href="https://released.melvinjonesrepol.com/android/webvium-browser.apk"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-contrast transition-transform hover:scale-[1.03] active:scale-95 sm:w-auto"
            >
              <FontAwesomeIcon icon={faDownload} />
              Download again
            </Link>
            <Link
              href="/browser"
              className="flex w-full items-center justify-center rounded-full border border-border px-6 py-3 font-medium transition-colors hover:bg-surface sm:w-auto"
            >
              Learn more
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="flex min-h-screen flex-col justify-center bg-surface px-5 py-24">
        <div className="mx-auto w-full max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-3">
            {cards.map((card, i) => (
              <Reveal key={card.title} delay={i * 80} className="card p-6">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm text-muted">{card.description}</p>
                {card.link && (
                  <Link
                    href={card.link.href}
                    className="mt-4 inline-flex text-sm text-primary transition-opacity hover:opacity-80"
                  >
                    {card.link.label}
                  </Link>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
