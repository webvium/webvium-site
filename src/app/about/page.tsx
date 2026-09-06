import { Metadata } from "next";
import Reveal from "@/components/common/Reveal";

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

const section = "flex min-h-screen flex-col justify-center px-5 py-24";
const sectionAlt = `${section} bg-surface`;
const innerClass = "mx-auto w-full max-w-3xl";
const eyebrow =
  "flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary before:h-px before:w-8 before:bg-primary";

const differences = [
  {
    title: "Lightweight first",
    description: "Performance is treated as a feature, not an afterthought.",
  },
  {
    title: "Built-in functionality",
    description:
      "Useful capabilities are integrated into the browser instead of relying on external extensions.",
  },
  {
    title: "Independent development",
    description:
      "Built independently with a focus on long-term sustainability and user experience.",
  },
];

const beyond = [
  {
    title: "Web App",
    description: "Convert websites into lightweight Android applications.",
  },
  {
    title: "Webvium Launcher",
    description:
      "An upcoming Android launcher designed around speed and simplicity.",
  },
  {
    title: "Browser Extensions",
    description:
      "Productivity and developer tools for Chromium based desktop browsers.",
  },
];

const history = [
  {
    year: "2018",
    text: "The project starts as WebView, a WebView based browser built to learn Android development.",
  },
  {
    year: "2019",
    text: "WebView is rewritten and rebranded to Webvium, with a clear goal: as light and as fast as possible.",
  },
  {
    year: "2020",
    text: "Early experiments with Webvium VPN and Webvium Search.",
  },
  {
    year: "2023",
    text: "Web App launches, turning any site into an Android app.",
  },
  { year: "2025", text: "The browser extension ecosystem is announced." },
  {
    year: "2026",
    text: "Webvium Launcher is announced.",
  },
  {
    year: "2026",
    text: "Webvium acquires www.webvium.com after its previous owner failed to renew it, and the site is rebuilt from scratch.",
  },
];

export default function About() {
  return (
    <div>
      <section className={`${section} relative overflow-hidden`}>
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-70" />
        <div className={`relative ${innerClass}`}>
          <Reveal>
            <span className={eyebrow}>About Webvium</span>
          </Reveal>
          <Reveal
            as="h1"
            delay={80}
            className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl"
          >
            Software built for everyday use
          </Reveal>
          <Reveal
            as="p"
            delay={160}
            className="mt-6 max-w-xl text-base text-muted sm:text-lg"
          >
            Webvium is an independent software ecosystem centered around Webvium
            Browser, a lightweight Android browser designed for speed,
            simplicity, and user control.
          </Reveal>
        </div>
      </section>

      <section className={sectionAlt}>
        <div className={innerClass}>
          <Reveal as="h2" className="text-3xl font-semibold sm:text-4xl">
            Why Webvium exists
          </Reveal>
          <div className="mt-8 space-y-5 text-muted">
            <Reveal as="p" delay={60}>
              Webvium did not begin as a browser project. It began as a way to
              learn Android development. The first version was called WebView,
              named after the component it was built on, and it did little more
              than load a page and display it.
            </Reveal>
            <Reveal as="p" delay={120}>
              Features were then added one at a time. For a long stretch there
              was no real goal beyond making it work, whatever the cost to size,
              and the app kept growing heavier with each addition.
            </Reveal>
            <Reveal as="p" delay={180}>
              The rewrite that became Webvium, short for WebView and Chromium,
              is where the goal finally became clear: make it as light and as
              fast as possible, so it runs well even on low end devices. Every
              change since has been measured against that.
            </Reveal>
          </div>
        </div>
      </section>

      <section className={section}>
        <div className="mx-auto w-full max-w-6xl">
          <Reveal as="h2" className="text-3xl font-semibold sm:text-4xl">
            What makes Webvium different
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {differences.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} className="card p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={sectionAlt}>
        <div className={innerClass}>
          <Reveal as="h2" className="text-3xl font-semibold sm:text-4xl">
            Beyond the browser
          </Reveal>
          <Reveal as="p" delay={80} className="mt-6 text-muted">
            Webvium Browser remains the flagship project, but the ecosystem has
            grown to include tools that share the same philosophy.
          </Reveal>
          <div className="mt-10 space-y-6">
            {beyond.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={section}>
        <div className={innerClass}>
          <Reveal as="h2" className="text-3xl font-semibold sm:text-4xl">
            From the developer
          </Reveal>
          <div className="mt-8 space-y-5 text-muted">
            <Reveal as="p" delay={60}>
              I started this while teaching myself Java and Android, first on a
              phone with AIDE and later on my first laptop with Android Studio.
              WebView was the project I built to learn, and it slowly turned
              into something I actually wanted to use.
            </Reveal>
            <Reveal as="p" delay={120}>
              It has stayed a small, independent effort by choice. There is no
              team to feed and no roadmap dictated by anyone else, which means
              the only real pressure is to keep the software good.
            </Reveal>
            <Reveal as="p" delay={180}>
              If something feels slow, heavy, or confusing, that is a bug worth
              fixing. That standard has not changed since the rewrite.
            </Reveal>
            <Reveal as="p" delay={240}>
              <a
                href="https://www.melvinjonesrepol.com/blog/from-aide-to-android-studio-my-journey"
                className="text-primary transition-opacity hover:opacity-80"
              >
                Read the full story
              </a>
            </Reveal>
            <Reveal as="p" delay={300} className="text-sm text-foreground">
              Melvin Jones Repol, creator of Webvium
            </Reveal>
          </div>
        </div>
      </section>

      <section className={sectionAlt}>
        <div className="mx-auto w-full max-w-2xl">
          <Reveal as="h2" className="text-3xl font-semibold sm:text-4xl">
            A short history
          </Reveal>
          <div className="mt-12 flex flex-col">
            {history.map((item, i) => (
              <Reveal
                key={item.text}
                delay={i * 70}
                className="flex gap-5 border-l border-border pb-8 pl-5 last:pb-0"
              >
                <span className="font-semibold text-primary">{item.year}</span>
                <span className="text-muted">{item.text}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`${section} relative overflow-hidden`}>
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative mx-auto w-full max-w-2xl text-center">
          <Reveal as="h2" className="text-3xl font-semibold sm:text-5xl">
            Get in touch
          </Reveal>
          <Reveal
            as="p"
            delay={80}
            className="mx-auto mt-5 max-w-md text-muted"
          >
            Questions, bug reports, and ideas are welcome. The project is built
            in public.
          </Reveal>
          <Reveal
            delay={160}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="https://github.com/webvium"
              className="flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 font-medium text-primary-contrast transition-transform hover:scale-[1.03] active:scale-95 sm:w-auto"
            >
              GitHub
            </a>
            <a
              href="https://youtube.com/@webvium"
              className="flex w-full items-center justify-center rounded-full border border-border px-6 py-3 font-medium transition-colors hover:bg-surface sm:w-auto"
            >
              YouTube
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
