import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faArrowRight,
  faBolt,
  faShieldHalved,
  faSliders,
  faCubes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Reveal from "@/components/common/Reveal";
import Accordion from "@/components/ui/Accordion";
import Marquee from "@/components/ui/Marquee";
import extensions from "@/lib/extensions";

const projects = [
  {
    name: "Webvium Browser",
    description:
      "The flagship Android browser focused on speed, privacy and customization.",
    status: "Active",
    href: "/browser",
  },
  {
    name: "Web App",
    description: "Convert any website into a lightweight Android application.",
    status: "Active",
    href: "/downloads",
  },
  {
    name: "Webvium Launcher",
    description: "A modern, minimal Android launcher currently in development.",
    status: "In development",
    href: "/",
  },
  {
    name: "Webvium VPN",
    description: "An early experiment in private networking, now archived.",
    status: "Archived",
    href: "/",
  },
  {
    name: "Webvium Search",
    description:
      "A search prototype exploring a cleaner results page, now archived.",
    status: "Archived",
    href: "/",
  },
];

const features = [
  {
    icon: faBolt,
    title: "Fast",
    description:
      "A lightweight core that installs in seconds and loads instantly.",
  },
  {
    icon: faShieldHalved,
    title: "Private",
    description:
      "Tracking protection and data controls that stay out of your way.",
  },
  {
    icon: faSliders,
    title: "Customizable",
    description:
      "Themes, layout and behavior you can shape around your habits.",
  },
  {
    icon: faCubes,
    title: "Integrated",
    description:
      "Common tools are built into the browser, not bolted on later.",
  },
];

const timeline = [
  {
    year: "2018",
    text: "The open-source project begins as an experiment to learn programming, understand how web browsers work, and explore how applications interact with and handle data.",
  },
  {
    year: "2019",
    text: "The project had grown complex, relying heavily on AppCompat and other dependencies. I decided to rewrite it from scratch and named the new browser Webvium.",
  },
  {
    year: "2020",
    text: "Webvium's source code was made private and the project was migrated to Android Studio and Gradle. Development had previously been done entirely on mobile for two years using an APK builder.",
  },
  {
    year: "2021",
    text: "Webvium was uploaded to the Google Play Store with the help of someone from the community, but was quickly removed after the published version became outdated. Webvium was also released on Uptodown, the Samsung Galaxy Store, and the Amazon Appstore.",
  },
  {
    year: "2022",
    text: "Webvium underwent a major rewrite to support the latest Android SDK. Some features were removed, while others were improved or replaced with new functionality.",
  },
  {
    year: "2023",
    text: "Webvium VPN was launched as an experimental service, but the service was discontinued after about a year.",
  },
  {
    year: "2024",
    text: "Webvium Search was launched and became the default homepage for the browser.",
  },
  {
    year: "2025",
    text: "The Webvium browser extension ecosystem was announced, expanding the project's vision beyond the Android browser.",
  },
  {
    year: "2026",
    text: "Webvium Search was sunset in favor of a native homepage experience, and the Webvium.com domain was acquired to establish a dedicated home for the project.",
  },
];

const principles = [
  {
    title: "No dependencies",
    description:
      "Webvium is built without relying on third-party libraries or unnecessary frameworks. Every component is kept lean, intentional, and under control.",
  },
  {
    title: "Privacy by default",
    description:
      "Webvium does not require an account and is designed to minimize data collection. Your browsing activity stays yours.",
  },
  {
    title: "Modern security",
    description:
      "Webvium follows modern Android security practices and uses up-to-date security mechanisms to keep browsing and application data protected.",
  },
  {
    title: "Material Design",
    description:
      "Webvium follows Material Design principles to provide a clean, familiar, and consistent interface across the Android experience.",
  },
];

const faqs = [
  {
    question: "Is Webvium free?",
    answer:
      "Yes. Webvium Browser, Web App, and the extensions are all free to download and use.",
  },
  {
    question: "What platforms are supported?",
    answer:
      "Webvium Browser and Web App are Android apps. The extensions target Chromium based desktop browsers such as Chrome, Edge, and Brave.",
  },
  {
    question: "Does Webvium collect my data?",
    answer:
      "No. Webvium does not track, collect, or share your browsing activity. There is no account and no analytics built into the browser.",
  },
  {
    question: "Is Webvium open source?",
    answer:
      "The browser extensions and several supporting projects are open source on GitHub. Webvium Browser itself is developed independently and distributed as an APK.",
  },
  {
    question: "How often is it updated?",
    answer:
      "Updates ship at a steady, deliberate pace. The focus is on stability and keeping the app small rather than a constant stream of features.",
  },
  {
    question: "Where do I get support?",
    answer:
      "Open an issue on GitHub or reach out through the Webvium pages on Facebook and YouTube.",
  },
];

const community = [
  {
    label: "GitHub",
    description: "Source code, issues, and releases.",
    href: "https://github.com/webvium",
    icon: faGithub,
  },
  {
    label: "YouTube",
    description: "Walkthroughs and release notes.",
    href: "https://youtube.com/@webvium",
    icon: faYoutube,
  },
  {
    label: "Facebook",
    description: "Announcements and discussion.",
    href: "https://facebook.com/the.webvium.project",
    icon: faFacebook,
  },
];

const section = "flex min-h-screen flex-col justify-center px-5 py-24";
const sectionAlt = `${section} bg-surface`;
const inner = "mx-auto w-full max-w-6xl";
const eyebrow =
  "flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary before:h-px before:w-8 before:bg-primary";

export default function Home() {
  return (
    <div>
      <section className={`${section} relative overflow-hidden`}>
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative mx-auto w-full max-w-3xl text-center">
          <Reveal className="flex justify-center">
            <span className={eyebrow}>Independent software</span>
          </Reveal>

          <Reveal
            as="h1"
            delay={80}
            className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl"
          >
            Lightweight software built for speed
          </Reveal>

          <Reveal
            as="p"
            delay={160}
            className="mx-auto mt-6 max-w-xl text-base text-muted sm:text-lg"
          >
            Webvium is a small ecosystem of Android and web tools built around
            performance, privacy and simplicity.
          </Reveal>

          <Reveal
            delay={240}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              href="/downloads"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-contrast transition-transform hover:scale-[1.03] active:scale-95 sm:w-auto"
            >
              <FontAwesomeIcon icon={faDownload} />
              Download now
            </Link>

            <Link
              href="#ecosystem"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-border px-6 py-3 font-medium transition-colors hover:bg-surface-2 sm:w-auto"
            >
              Explore the ecosystem
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section id="features" className={sectionAlt}>
        <div className={inner}>
          <Reveal>
            <span className={eyebrow}>Features</span>
          </Reveal>
          <Reveal
            as="h2"
            delay={60}
            className="mt-5 text-3xl font-semibold sm:text-4xl"
          >
            Built into the browser
          </Reveal>
          <Reveal as="p" delay={120} className="mt-3 max-w-md text-muted">
            The essentials, integrated directly into Webvium.
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 80} className="card p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <FontAwesomeIcon icon={feature.icon} />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted">{feature.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="ecosystem" className={section}>
        <div className={inner}>
          <Reveal>
            <span className={eyebrow}>Ecosystem</span>
          </Reveal>
          <Reveal
            as="h2"
            delay={60}
            className="mt-5 text-3xl font-semibold sm:text-4xl"
          >
            The Webvium ecosystem
          </Reveal>
          <Reveal as="p" delay={120} className="mt-3 max-w-md text-muted">
            A handful of focused projects, past and present.
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal key={project.name} delay={i * 70}>
                <Link
                  href={project.href}
                  className="card group flex h-full flex-col p-6 transition-transform hover:-translate-y-1"
                >
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted">
                    {project.description}
                  </p>
                  <span className="mt-4 text-xs font-medium uppercase tracking-wide text-muted">
                    {project.status}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="extensions" className={sectionAlt}>
        <div className={inner}>
          <Reveal>
            <span className={eyebrow}>Extensions</span>
          </Reveal>
          <Reveal
            as="h2"
            delay={60}
            className="mt-5 text-3xl font-semibold sm:text-4xl"
          >
            Browser extensions
          </Reveal>
          <Reveal as="p" delay={120} className="mt-3 max-w-md text-muted">
            Small utilities for desktop browsers, built in the open.
          </Reveal>
        </div>

        <Reveal delay={160} className="mt-12">
          <Marquee
            items={extensions.map((extension) => (
              <Link
                key={extension.name}
                href={extension.github_url ?? "/"}
                className="card flex h-full w-72 flex-col p-6"
                style={{ boxShadow: "none" }}
              >
                <h3 className="text-lg font-semibold">{extension.name}</h3>
                <p className="mt-3 line-clamp-4 text-sm text-muted">
                  {extension.description}
                </p>
              </Link>
            ))}
          />
        </Reveal>
      </section>

      <section id="journey" className={section}>
        <div className="mx-auto w-full max-w-2xl">
          <Reveal>
            <span className={eyebrow}>Timeline</span>
          </Reveal>
          <Reveal
            as="h2"
            delay={60}
            className="mt-5 text-3xl font-semibold sm:text-4xl"
          >
            Development journey
          </Reveal>

          <div className="mt-12 flex flex-col">
            {timeline.map((item, i) => (
              <Reveal
                key={item.text}
                delay={i * 80}
                className="flex gap-5 border-l border-border pb-8 pl-5 last:pb-0"
              >
                <span className="font-semibold text-primary">{item.year}</span>
                <span className="text-muted">{item.text}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="principles" className={sectionAlt}>
        <div className={inner}>
          <Reveal>
            <span className={eyebrow}>Approach</span>
          </Reveal>
          <Reveal
            as="h2"
            delay={60}
            className="mt-5 text-3xl font-semibold sm:text-4xl"
          >
            Why lightweight matters
          </Reveal>
          <Reveal as="p" delay={120} className="mt-3 max-w-md text-muted">
            A smaller app starts faster, uses less memory and battery, and gives
            you less to worry about.
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {principles.map((principle, i) => (
              <Reveal
                key={principle.title}
                delay={(i % 2) * 80}
                className="card p-6"
              >
                <h3 className="text-lg font-semibold">{principle.title}</h3>
                <p className="mt-2 text-sm text-muted">
                  {principle.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className={section}>
        <div className="mx-auto w-full max-w-2xl">
          <Reveal>
            <span className={eyebrow}>Questions</span>
          </Reveal>
          <Reveal
            as="h2"
            delay={60}
            className="mt-5 text-3xl font-semibold sm:text-4xl"
          >
            Frequently asked questions
          </Reveal>
          <Reveal delay={120} className="mt-12">
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <section id="follow" className={sectionAlt}>
        <div className={inner}>
          <Reveal>
            <span className={eyebrow}>Community</span>
          </Reveal>
          <Reveal
            as="h2"
            delay={60}
            className="mt-5 text-3xl font-semibold sm:text-4xl"
          >
            Follow the project
          </Reveal>
          <Reveal as="p" delay={120} className="mt-3 max-w-md text-muted">
            Webvium is built in public. These are the best places to keep up.
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {community.map((item, i) => (
              <Reveal key={item.label} delay={i * 80}>
                <Link
                  href={item.href}
                  className="card flex h-full flex-col p-6 transition-transform hover:-translate-y-1"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <FontAwesomeIcon icon={item.icon} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{item.label}</h3>
                  <p className="mt-2 text-sm text-muted">{item.description}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`${section} relative overflow-hidden`}>
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative mx-auto w-full max-w-2xl text-center">
          <Reveal as="h2" className="text-3xl font-semibold sm:text-5xl">
            Start browsing with Webvium
          </Reveal>
          <Reveal
            as="p"
            delay={80}
            className="mx-auto mt-5 max-w-md text-muted"
          >
            Download the latest release and see how light a browser can feel.
          </Reveal>
          <Reveal delay={160} className="mt-10">
            <Link
              href="/downloads"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-medium text-primary-contrast transition-transform hover:scale-[1.03] active:scale-95"
            >
              <FontAwesomeIcon icon={faDownload} />
              Download now
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
