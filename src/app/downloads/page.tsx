import extensions, { Extension } from "@/lib/extensions";
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
            <div className="rounded-2xl border border-zinc-800 p-8">
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

              <div className="mt-8 flex flex-col md:flex-row gap-4">
                <Link
                  href="/downloads/thank-you?utm_source=webvium-browser&utm_medium=browser_download"
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

            <div className="rounded-2xl border border-zinc-800 p-8">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">Web App</h3>

                <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-400">
                  Active
                </span>
              </div>

              <p className="mt-4 text-zinc-400">
                Convert websites into installable Android apps.
              </p>

              <div className="mt-8 flex flex-col md:flex-row gap-4">
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

          <div className="mt-12 rounded-2xl border border-zinc-800 p-8">
            <h3 className="text-2xl font-bold">Webvium Launcher</h3>

            <p className="mt-4 text-zinc-400">
              A modern Android launcher currently under active development.
            </p>

            <div className="mt-8 flex flex-col md:flex-row gap-4">
              <Link
                href="/downloads/thank-you?utm_source=webvium-launcher&utm_medium=launcher_download"
                className="rounded-xl bg-blue-600 text-white px-5 py-3"
              >
                Pre-release APK
              </Link>

              <Link
                href="https://github.com/webvium/webvium-launcher"
                target="_blank"
                className="rounded-xl border border-zinc-700 px-5 py-3"
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
            {extensions.map((extension: Extension, index: number) => (
              <div
                key={index}
                className="group rounded-2xl border border-zinc-800 p-6"
              >
                <h3 className="font-semibold">{extension.name}</h3>

                <p className="my-3 text-sm">{extension.description}</p>

                {extension.github_url && (
                  <Link
                    href={extension.github_url}
                    className="text-sm text-zinc-500 hover:text-zinc-400 group-hover:text-zinc-400"
                  >
                    {extension.github_url}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-bold">Deprecated</h2>

          <div className="mt-12 rounded-2xl border border-zinc-800 p-8">
            <h3 className="text-2xl font-bold">Webvium VPN</h3>

            <p className="mt-4 text-zinc-400">
              Inspired from Webvium, Webvium VPN is a lightweight android VPN
              app focuses in speed, simplicity, security and privacy.
            </p>

            <div className="mt-8 flex flex-col md:flex-row gap-4">
              <Link
                href="/downloads/thank-you?utm_source=webvium-vpn&utm_medium=vpn_download"
                className="rounded-xl bg-red-600 text-white px-5 py-3"
              >
                Deprecated APK
              </Link>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-zinc-800 p-8">
            <h3 className="text-2xl font-bold">Webvium Search</h3>

            <p className="mt-4 text-zinc-400">
              The default search homepage for Webvium.
            </p>

            <div className="mt-8 flex flex-col md:flex-row gap-4">
              <Link
                href="https://github.com/mrepol742/mrepol742.github.io/tree/master/search"
                className="rounded-xl bg-red-600 text-white px-5 py-3"
                target="_blank"
              >
                View on GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
