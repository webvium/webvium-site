import { Metadata } from "next";
import Reveal from "@/components/common/Reveal";

export const metadata: Metadata = {
  title: "Donate - Webvium",
  description:
    "Support the independent development of Webvium Browser and help fund continued improvements, maintenance, and new projects.",
};

const section = "flex min-h-screen flex-col justify-center px-5 py-24";
const sectionAlt = `${section} bg-surface`;
const innerClass = "mx-auto w-full max-w-5xl";
const eyebrow =
  "flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary before:h-px before:w-8 before:bg-primary";

const support = [
  {
    title: "Keep Webvium independent",
    description:
      "Donations help Webvium continue without investors, subscriptions, or pressure to monetize the browser in ways that compromise the experience.",
  },
  {
    title: "Fund development",
    description:
      "Support helps cover the time, infrastructure, testing, and services needed to maintain Webvium and build new features.",
  },
  {
    title: "Support the ecosystem",
    description:
      "Contributions also help maintain Webvium tools, browser extensions, websites, and future projects across the ecosystem.",
  },
];

const commitments = [
  {
    title: "No paywalled browser features",
    description:
      "Donations support development, but they do not create a separate premium version of Webvium or lock core browser features behind payment.",
  },
  {
    title: "No forced accounts",
    description:
      "Webvium is designed to work without requiring users to create an account just to browse the web.",
  },
  {
    title: "Performance stays a priority",
    description:
      "New features are evaluated against their impact on speed, application size, resource usage, and overall simplicity.",
  },
  {
    title: "Independent decisions",
    description:
      "The project remains free to make technical and product decisions based on what is best for Webvium instead of outside commercial pressure.",
  },
];

const otherWays = [
  {
    title: "Report bugs",
    description:
      "Good bug reports help identify problems faster and improve Webvium for everyone.",
  },
  {
    title: "Share feedback",
    description:
      "Suggestions and real-world feedback help shape future improvements and identify areas that need more attention.",
  },
  {
    title: "Recommend Webvium",
    description:
      "Sharing Webvium with someone who may find it useful is one of the simplest ways to help the project grow.",
  },
  {
    title: "Contribute on GitHub",
    description:
      "Developers can follow development, review public projects, report issues, and contribute where repositories are open.",
  },
];

export default function DonatePage() {
  return (
    <main>
      <section className={`${section} relative overflow-hidden`}>
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-70" />

        <div className={`relative ${innerClass}`}>
          <Reveal>
            <span className={eyebrow}>Support Webvium</span>
          </Reveal>

          <Reveal
            as="h1"
            delay={80}
            className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl"
          >
            Help keep Webvium
            <span className="block text-primary">independent.</span>
          </Reveal>

          <Reveal
            as="p"
            delay={160}
            className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg"
          >
            Webvium is developed independently and made available without
            requiring subscriptions or accounts. If you find it useful, you can
            support its continued development.
          </Reveal>

          <Reveal
            as="p"
            delay={200}
            className="mt-4 max-w-xl text-sm leading-6 text-muted"
          >
            Donations are never required to use Webvium. They simply provide
            another way for people who value the project to help sustain it over
            the long term.
          </Reveal>

          <Reveal delay={240} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#donate"
              className="flex items-center justify-center rounded-full bg-primary px-6 py-3 font-medium text-primary-contrast transition-transform hover:scale-[1.03] active:scale-95"
            >
              Donate
            </a>

            <a
              href="https://github.com/webvium"
              className="flex items-center justify-center rounded-full border border-border px-6 py-3 font-medium transition-colors hover:bg-surface"
            >
              View on GitHub
            </a>
          </Reveal>
        </div>
      </section>

      <section className={sectionAlt}>
        <div className={innerClass}>
          <Reveal>
            <span className={eyebrow}>Why support</span>
          </Reveal>

          <Reveal
            as="h2"
            delay={60}
            className="mt-6 text-3xl font-semibold sm:text-4xl"
          >
            Where your support goes
          </Reveal>

          <Reveal as="p" delay={120} className="mt-5 max-w-2xl text-muted">
            Webvium is a long-term independent project. Contributions help keep
            development sustainable while allowing the project to stay focused
            on speed, simplicity, privacy, and user control.
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {support.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} className="card p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>

                <p className="mt-2 text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={section}>
        <div className={innerClass}>
          <Reveal>
            <span className={eyebrow}>Why donations matter</span>
          </Reveal>

          <Reveal
            as="h2"
            delay={80}
            className="mt-6 text-3xl font-semibold sm:text-5xl"
          >
            Small project.
            <span className="block text-muted">Long-term commitment.</span>
          </Reveal>

          <div className="mt-8 space-y-5 text-muted">
            <Reveal as="p" delay={120}>
              Webvium has been developed over many years as an independent
              project. It does not have a large company, development team, or
              external funding behind it.
            </Reveal>

            <Reveal as="p" delay={180}>
              Maintaining a browser still requires ongoing work. Android
              changes, WebView updates, security requirements, device
              compatibility, bug fixes, infrastructure, and new browser
              standards all require continued development.
            </Reveal>

            <Reveal as="p" delay={240}>
              Donations help make that work easier to sustain while keeping the
              project free to evolve at its own pace.
            </Reveal>
          </div>
        </div>
      </section>

      <section className={sectionAlt}>
        <div className={innerClass}>
          <Reveal>
            <span className={eyebrow}>Commitment</span>
          </Reveal>

          <Reveal
            as="h2"
            delay={80}
            className="mt-6 text-3xl font-semibold sm:text-4xl"
          >
            What support will not change
          </Reveal>

          <Reveal as="p" delay={140} className="mt-5 max-w-2xl text-muted">
            Supporting Webvium helps sustain development, but the philosophy
            behind the browser remains the same.
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {commitments.map((item, i) => (
              <Reveal key={item.title} delay={i * 70} className="card p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>

                <p className="mt-2 text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="donate" className={section}>
        <div className={innerClass}>
          <Reveal>
            <span className={eyebrow}>Donate</span>
          </Reveal>

          <Reveal
            as="h2"
            delay={80}
            className="mt-6 text-3xl font-semibold sm:text-5xl"
          >
            Support continued development.
          </Reveal>

          <Reveal as="p" delay={160} className="mt-5 max-w-xl text-muted">
            Any amount helps. Donations are completely optional and do not
            unlock special features or change how Webvium works.
          </Reveal>

          <Reveal
            as="p"
            delay={200}
            className="mt-3 max-w-xl text-sm leading-6 text-muted"
          >
            Whether it is a one-time contribution or recurring sponsorship,
            every contribution helps cover the practical costs of maintaining
            and improving the project.
          </Reveal>

          <div className="mt-10">
            <Reveal delay={240} className="card flex flex-col p-6 sm:p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                    GitHub
                  </span>

                  <h3 className="mt-4 text-2xl font-semibold">
                    GitHub Sponsors
                  </h3>
                </div>
              </div>

              <p className="mt-4 max-w-xl text-sm leading-6 text-muted">
                Support Webvium directly through GitHub Sponsors. Contributions
                help fund continued development, maintenance, infrastructure,
                testing, and future Webvium projects.
              </p>

              <div className="mt-8">
                <a
                  href="https://github.com/sponsors/mrepol742"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-contrast transition-transform hover:scale-[1.03] active:scale-95"
                >
                  Sponsor on GitHub
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={sectionAlt}>
        <div className={innerClass}>
          <Reveal>
            <span className={eyebrow}>No donation required</span>
          </Reveal>

          <Reveal
            as="h2"
            delay={80}
            className="mt-6 text-3xl font-semibold sm:text-4xl"
          >
            There are other ways to help.
          </Reveal>

          <Reveal as="p" delay={140} className="mt-5 max-w-2xl text-muted">
            Financial support is only one form of contribution. Helping improve
            the software or simply helping more people discover it can be just
            as valuable.
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {otherWays.map((item, i) => (
              <Reveal key={item.title} delay={i * 70} className="card p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>

                <p className="mt-2 text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`${section} relative overflow-hidden`}>
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-70" />

        <div className="relative mx-auto w-full max-w-2xl text-center">
          <Reveal as="h2" className="text-3xl font-semibold sm:text-5xl">
            Support is appreciated,
            <span className="block text-primary">never required.</span>
          </Reveal>

          <Reveal
            as="p"
            delay={80}
            className="mx-auto mt-5 max-w-lg leading-7 text-muted"
          >
            Webvium exists first and foremost to be useful. Using the browser,
            reporting problems, sharing ideas, contributing code, or simply
            recommending it to someone else already helps move the project
            forward.
          </Reveal>

          <Reveal
            delay={160}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="https://github.com/sponsors/mrepol742"
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 font-medium text-primary-contrast transition-transform hover:scale-[1.03] active:scale-95 sm:w-auto"
            >
              Support Webvium
            </a>

            <a
              href="https://github.com/webvium"
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center rounded-full border border-border px-6 py-3 font-medium transition-colors hover:bg-surface sm:w-auto"
            >
              Follow development
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
