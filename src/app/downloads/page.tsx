import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Downloads | Webvium",
  description:
    "Download Webvium Browser, Web App, and other Webvium projects. Access the latest releases, updates, and software downloads from the Webvium ecosystem.",
  keywords: [
    "Webvium Download",
    "Webvium Browser APK",
    "Android Browser Download",
    "Web App Download",
    "APK Download",
    "Webvium Software",
    "Android Apps",
    "Browser Download",
  ],
  openGraph: {
    title: "Downloads - Webvium",
    description:
      "Get the latest versions of Webvium Browser and other Webvium software projects.",
  },
  twitter: {
    title: "Downloads - Webvium",
    description:
      "Download Webvium Browser and explore the latest software releases from Webvium.",
  },
};

export default function Downloads() {
  return (
    <main className="min-h-screen">
      <section className="py-32">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            Downloads
          </span>
          <h1 className="mt-8 text-6xl font-bold md:text-7xl">Get Webvium</h1>
          <p className="mx-auto mt-8 max-w-3xl text-xl text-zinc-400">
            Download the latest Webvium software and projects.
          </p>
        </div>
      </section>

      <section className="border-t border-zinc-800 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-bold">Available Downloads</h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-zinc-800 p-8">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">Webvium Browser</h3>

                <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-400">
                  Active
                </span>
              </div>

              <p className="mt-4 text-zinc-400">
                Lightweight Android browser focused on performance and
                customization.
              </p>

              <div className="mt-8 flex gap-4">
                <Link
                  href="/downloads/thank-you"
                  className="rounded-xl bg-blue-600 text-white px-5 py-3"
                >
                  Download APK
                </Link>

                <Link
                  href="/browser"
                  className="rounded-xl border border-zinc-700 px-5 py-3"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-800 p-8">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">Web App</h3>

                <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-400">
                  Active
                </span>
              </div>

              <p className="mt-4 text-zinc-400">
                Convert websites into installable Android apps.
              </p>

              <div className="mt-8 flex gap-4">
                <Link
                  href="https://github.com/webvium/web-appp"
                  target="_blank"
                  className="rounded-xl bg-blue-600 text-white px-5 py-3"
                >
                  Fork on GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-bold">Coming Soon</h2>

          <div className="mt-12 rounded-3xl border border-zinc-800 p-8">
            <h3 className="text-2xl font-bold">Webvium Launcher</h3>

            <p className="mt-4 text-zinc-400">
              A modern Android launcher currently under active development.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="https://github.com/webvium/webvium-launcher"
                target="_blank"
                className="rounded-xl bg-blue-600 text-white px-5 py-3"
              >
                View on GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-bold">Browser Extensions</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Disable Control Shift C",
              "Floating Console",
              "Browser Storage Inspector",
              "Webvium Ad Blocker",
              "Awesome New Tab",
            ].map((extension) => (
              <div
                key={extension}
                className="rounded-3xl border border-zinc-800 p-6"
              >
                <h3 className="font-semibold">{extension}</h3>

                <p className="mt-3 text-sm text-zinc-500">Coming Soon</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
