import Reveal from "@/components/common/Reveal";

const changelog = [
  {
    version: "3.1.3",
    date: "February 2026",
    title: "Better reporting",
    description:
      "Introduced an in-app reporting system for bug reports and feedback, replacing the previous email-based reporting flow. Crash logs can now be passed directly to the report screen.",
  },
  {
    version: "3.1.2",
    date: "January 2026",
    title: "Better tabs",
    description:
      "Introduced a dedicated tab manager with persistent tab state, SQLite-based tab and favicon storage, improved tab switching, and better restoration of browsing sessions.",
  },
  {
    version: "3.1.1",
    date: "January 2026",
    title: "Smarter search",
    description:
      "Improved search across history, bookmarks, and downloads, added automatic update checking, improved user agent compatibility, and introduced update notifications on the homepage.",
  },
  {
    version: "3.1.0",
    date: "January 2026",
    title: "News discovery",
    description:
      "Added optional news discovery to the homepage with RSS-based feeds and local caching, alongside improvements to bookmarks, shortcuts, and recently visited pages.",
  },
  {
    version: "3.0.7",
    date: "November 2025",
    title: "Developer tools",
    description:
      "Improved the developer experience with a dedicated DevTools window, better search behavior, basic SpeechSynthesis support, and a cleaner web context menu.",
  },
  {
    version: "3.0.5",
    date: "November 2025",
    title: "Persistent browsing",
    description:
      "Introduced persistent tab handling, recently visited websites on the homepage, improved homepage searching, and a new approach to managing the tab queue.",
  },
  {
    version: "3.0.x",
    date: "November 2025",
    title: "Privacy controls",
    description:
      "Added support for Do Not Track and Global Privacy Control signals, improved request interception, and introduced support for multiple Webvium instances.",
  },
  {
    version: "3.0.x",
    date: "September 2025",
    title: "Built-in ad blocking",
    description:
      "Introduced EasyList support for built-in ad blocking, giving Webvium a cleaner browsing experience without depending on browser extensions.",
  },
  {
    version: "3.0.x",
    date: "2025",
    title: "Rolling releases",
    description:
      "Webvium moved toward a rolling-release development model, allowing improvements and fixes to be delivered continuously instead of relying on traditional release cycles.",
  },
  {
    version: "3.0.x",
    date: "2025",
    title: "The new Webvium",
    description:
      "A major rework of Webvium introduced a renewed foundation focused on performance, simplicity, privacy, and a more maintainable codebase.",
  },
];

export default function Changelog() {
  return (
    <main>
      <section className="relative flex min-h-screen items-center overflow-hidden px-5 py-24">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-70" />

        <div className="relative mx-auto w-full max-w-3xl">
          <Reveal>
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary before:h-px before:w-8 before:bg-primary">
              Changelog
            </span>
          </Reveal>

          <Reveal
            as="h1"
            delay={80}
            className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl"
          >
            Built over time.
            <span className="block text-muted">
              Improved with every release.
            </span>
          </Reveal>

          <Reveal
            as="p"
            delay={160}
            className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg"
          >
            A record of the changes, improvements, and ideas that have shaped
            Webvium into the browser it is today.
          </Reveal>
        </div>
      </section>

      <section className="bg-surface px-5 py-24">
        <div className="mx-auto w-full max-w-3xl">
          <Reveal as="h2" className="text-3xl font-semibold sm:text-4xl">
            Releases
          </Reveal>

          <div className="relative mt-12">
            <div className="absolute bottom-0 left-[5px] top-0 w-px bg-border" />

            <div className="space-y-12">
              {changelog.map((item, i) => (
                <Reveal
                  key={`${item.version}-${item.title}`}
                  delay={i * 60}
                  className="relative pl-8"
                >
                  <span className="absolute left-0 top-2 h-[11px] w-[11px] rounded-full border-2 border-primary bg-surface" />

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="font-mono text-sm font-semibold text-primary">
                      v{item.version}
                    </span>

                    <span className="text-sm text-muted">{item.date}</span>
                  </div>

                  <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
                    {item.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex min-h-screen items-center overflow-hidden px-5 py-24">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-70" />

        <div className="relative mx-auto w-full max-w-2xl text-center">
          <Reveal as="h2" className="text-3xl font-semibold sm:text-5xl">
            Still building.
          </Reveal>

          <Reveal
            as="p"
            delay={80}
            className="mx-auto mt-5 max-w-lg text-muted"
          >
            Webvium continues to evolve through small improvements, new ideas,
            and years of independent development.
          </Reveal>

          <Reveal delay={160} className="mt-8">
            <a
              href="https://github.com/webvium"
              className="inline-flex rounded-full bg-primary px-6 py-3 font-medium text-primary-contrast transition-transform hover:scale-[1.03] active:scale-95"
            >
              View on GitHub
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
