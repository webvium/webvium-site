import extensions, { Extension } from "@/lib/extensions";
import { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/common/Reveal";

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

interface Download {
  name: string;
  status: "Active" | "Coming soon" | "Deprecated";
  description: string;
  actions: { label: string; href: string; primary?: boolean }[];
}

const downloads: Download[] = [
  {
    name: "Webvium Browser",
    status: "Active",
    description:
      "Lightweight Android browser focused on performance and customization.",
    actions: [
      {
        label: "Download APK",
        href: "/downloads/thank-you?utm_source=webvium-browser&utm_medium=browser_download",
        primary: true,
      },
      { label: "Learn more", href: "/browser" },
    ],
  },
  {
    name: "Web App",
    status: "Active",
    description: "Convert websites into installable Android apps.",
    actions: [
      {
        label: "Fork on GitHub",
        href: "https://github.com/webvium/web-appp",
        primary: true,
      },
    ],
  },
  {
    name: "Webvium Launcher",
    status: "Coming soon",
    description:
      "A modern Android launcher currently under active development.",
    actions: [
      {
        label: "Pre-release APK",
        href: "/downloads/thank-you?utm_source=webvium-launcher&utm_medium=launcher_download",
        primary: true,
      },
      {
        label: "View on GitHub",
        href: "https://github.com/webvium/webvium-launcher",
      },
    ],
  },
  {
    name: "Webvium VPN",
    status: "Deprecated",
    description:
      "A lightweight Android VPN app focused on speed, simplicity, security and privacy.",
    actions: [
      {
        label: "Deprecated APK",
        href: "/downloads/thank-you?utm_source=webvium-vpn&utm_medium=vpn_download",
      },
    ],
  },
  {
    name: "Webvium Search",
    status: "Deprecated",
    description: "The default search homepage for Webvium.",
    actions: [
      {
        label: "View on GitHub",
        href: "https://github.com/mrepol742/mrepol742.github.io/tree/master/search",
      },
    ],
  },
];

const section = "flex min-h-screen flex-col justify-center px-5 py-24";
const sectionAlt = `${section} bg-surface`;
const innerClass = "mx-auto w-full max-w-5xl";
const eyebrow =
  "flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary before:h-px before:w-8 before:bg-primary";

export default function Downloads() {
  return (
    <div>
      <section className={`${section} relative overflow-hidden`}>
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative mx-auto w-full max-w-3xl text-center">
          <Reveal className="flex justify-center">
            <span className={eyebrow}>Downloads</span>
          </Reveal>
          <Reveal
            as="h1"
            delay={80}
            className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl"
          >
            Get Webvium
          </Reveal>
          <Reveal
            as="p"
            delay={160}
            className="mx-auto mt-6 max-w-md text-base text-muted sm:text-lg"
          >
            The latest Webvium software and projects, in one place.
          </Reveal>
        </div>
      </section>

      <section className={sectionAlt}>
        <div className={innerClass}>
          <Reveal>
            <span className={eyebrow}>Apps</span>
          </Reveal>
          <Reveal
            as="h2"
            delay={60}
            className="mt-5 text-3xl font-semibold sm:text-4xl"
          >
            Available downloads
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {downloads.map((item, i) => (
              <Reveal
                key={item.name}
                delay={(i % 2) * 80}
                className="card flex flex-col p-6"
              >
                <span className="text-xs font-medium uppercase tracking-wide text-muted">
                  {item.status}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted">
                  {item.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {item.actions.map((action) => (
                    <Link
                      key={action.label}
                      href={action.href}
                      className={
                        action.primary
                          ? "rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-contrast transition-transform hover:scale-[1.03] active:scale-95"
                          : "rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-surface-2"
                      }
                    >
                      {action.label}
                    </Link>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={section}>
        <div className={innerClass}>
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
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {extensions.map((extension: Extension, i: number) => (
              <Reveal
                key={extension.name}
                delay={i * 70}
                className="card flex flex-col p-6"
              >
                <h3 className="text-lg font-semibold">{extension.name}</h3>
                <p className="mt-3 flex-1 text-sm text-muted">
                  {extension.description}
                </p>
                {extension.github_url && (
                  <Link
                    href={extension.github_url}
                    className="mt-4 text-sm text-primary transition-opacity hover:opacity-80"
                  >
                    View on GitHub
                  </Link>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionAlt} relative overflow-hidden`}>
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative mx-auto w-full max-w-2xl text-center">
          <Reveal as="h2" className="text-3xl font-semibold sm:text-5xl">
            Built for speed
          </Reveal>
          <Reveal
            as="p"
            delay={80}
            className="mx-auto mt-5 max-w-md text-muted"
          >
            Every Webvium project shares the same focus on performance,
            simplicity, and user control.
          </Reveal>
        </div>
      </section>
    </div>
  );
}
