import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Webvium",
  description:
    "Learn about Webvium, an independent software ecosystem focused on performance, simplicity, and user control. Discover the story behind Webvium Browser and the philosophy that drives its development.",
  keywords: [
    "About Webvium",
    "Webvium",
    "Webvium Browser",
    "Melvin Jones Repol",
    "Android Browser",
    "Independent Software",
    "Software Development",
    "Open Web",
    "Performance",
    "Privacy",
  ],
  openGraph: {
    title: "About Webvium",
    description:
      "Discover the story behind Webvium Browser and the mission to build lightweight software that stays fast and practical.",
  },
  twitter: {
    title: "About Webvium",
    description:
      "Learn more about Webvium, its philosophy, projects, and commitment to building efficient software.",
  },
};

export default function About() {
  return (
    <main className="min-h-screen">
      <section className="py-32">
        <div className="mx-auto max-w-5xl px-6">
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            About Webvium
          </span>
          <h1 className="mt-8 text-5xl font-bold md:text-7xl">
            Software Built
            <br />
            For Everyday Use
          </h1>
          <p className="mt-8 max-w-3xl text-xl text-zinc-400">
            Webvium is an independent software ecosystem centered around Webvium
            Browser, a lightweight Android browser designed for speed,
            simplicity, and user control.
          </p>
        </div>
      </section>

      <section className="border-t border-zinc-800 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-4xl font-bold">Why Webvium Exists</h2>

          <p className="mt-8 text-lg leading-relaxed text-zinc-400">
            Webvium Browser began with a simple idea: browsing the web should
            feel fast, responsive, and uncomplicated.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Modern browsers often grow larger and more complex over time. While
            additional features can be useful, they can also add unnecessary
            overhead and complexity. Webvium takes a different approach by
            focusing on efficiency, usability, and practical functionality.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            The goal is not to create the largest ecosystem or the browser with
            the longest feature list. The goal is to create software that feels
            reliable every day.
          </p>
        </div>
      </section>

      <section className="border-t border-zinc-800 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-4xl font-bold">
            What Makes Webvium Different
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 p-8">
              <h3 className="text-xl font-semibold">Lightweight First</h3>

              <p className="mt-4 text-zinc-400">
                Performance is treated as a feature, not an afterthought.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 p-8">
              <h3 className="text-xl font-semibold">Built-In Functionality</h3>

              <p className="mt-4 text-zinc-400">
                Many useful capabilities are integrated directly into the
                browser instead of relying on external extensions.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 p-8">
              <h3 className="text-xl font-semibold">Independent Development</h3>

              <p className="mt-4 text-zinc-400">
                Developed independently with a focus on long-term sustainability
                and user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-4xl font-bold">Beyond The Browser</h2>

          <p className="mt-8 text-lg leading-relaxed text-zinc-400">
            While Webvium Browser remains the flagship project, the ecosystem
            has expanded to include tools and projects that share the same
            philosophy of simplicity and practicality.
          </p>

          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-xl font-semibold">Web App</h3>

              <p className="mt-2 text-zinc-400">
                Convert websites into lightweight Android applications.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Webvium Launcher</h3>

              <p className="mt-2 text-zinc-400">
                An upcoming Android launcher designed around speed and
                simplicity.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Browser Extensions</h3>

              <p className="mt-2 text-zinc-400">
                Productivity and developer tools for Chromium-based desktop
                browsers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-5xl font-bold">Still Just Getting Started</h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Webvium continues to evolve with new features, projects, and ideas
            while staying true to its original goal: building software that
            remains fast, useful, and enjoyable to use.
          </p>
        </div>
      </section>
    </main>
  );
}
