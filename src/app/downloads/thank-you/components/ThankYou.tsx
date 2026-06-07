"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ThankYou() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const appName = params.get("utm_source") || "webvium-browser";

    window.location.href = `https://released.melvinjonesrepol.com/android/${appName}.apk`;
  }, []);

  return (
    <main className="min-h-screen">
      <section className="py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-500/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="mt-10 text-5xl font-bold">
            Thank You For
            <br />
            Downloading
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-xl text-zinc-400">
            Your download should begin automatically. If it doesn't, you can
            start it again using the button below.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="https://released.melvinjonesrepol.com/android/webvium-browser.apk"
              className="rounded-xl bg-blue-600 px-6 py-4 text-white hover:bg-blue-700"
            >
              Download Again
            </Link>

            <Link
              href="/browser"
              className="rounded-xl border border-zinc-700 px-6 py-4 hover:border-zinc-500"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-zinc-800 p-8">
              <h3 className="text-xl font-semibold">Installation</h3>

              <p className="mt-4 text-zinc-400">
                Open the downloaded APK and follow the installation prompts on
                your Android device.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 p-8">
              <h3 className="text-xl font-semibold">Changelog</h3>

              <p className="mt-4 text-zinc-400">
                View the latest improvements, fixes, and new features included
                in this release.
              </p>

              <Link
                href="/changelog"
                className="mt-6 inline-flex text-blue-400"
              >
                View Changelog →
              </Link>
            </div>

            <div className="rounded-3xl border border-zinc-800 p-8">
              <h3 className="text-xl font-semibold">Community</h3>

              <p className="mt-4 text-zinc-400">
                Follow development updates and future releases.
              </p>

              <Link
                target="_blank"
                href="https://www.hallofcodes.org"
                className="mt-6 inline-flex text-blue-400"
              >
                Join Community →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[2rem] border border-zinc-800 p-12 text-center">
            <h2 className="text-4xl font-bold">
              Explore The Webvium Ecosystem
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
              Discover other projects built with the same focus on performance,
              simplicity, and user control.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/projects"
                className="rounded-xl border border-zinc-700 px-5 py-3"
              >
                View Projects
              </Link>

              <Link
                href="/about"
                className="rounded-xl border border-zinc-700 px-5 py-3"
              >
                About Webvium
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
