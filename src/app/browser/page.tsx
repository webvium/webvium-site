import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faSliders,
  faGaugeHigh,
  faPalette,
  faLock,
  faShieldHalved,
  faCloudArrowDown,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/common/Reveal";
import Accordion from "@/components/ui/Accordion";

const features = [
  {
    number: "01",
    icon: faSliders,
    title: "Endless customization",
    description:
      "Switch between light and dark themes, add soft screen curves, or set your favorite photo as the background. Webvium lets you redefine how your browser looks and feels.",
  },
  {
    number: "02",
    icon: faGaugeHigh,
    title: "Lightweight and fast",
    description:
      "Webvium installs in seconds, loads instantly, and runs smoothly. Faster browsing, quicker downloads, and effortless sharing in one ultra light package.",
  },
  {
    number: "03",
    icon: faPalette,
    title: "Material design",
    description:
      "A clean, modern interface inspired by Material Design, with carefully chosen colors, icons, and an elegant type system.",
  },
  {
    number: "04",
    icon: faLock,
    title: "Total control",
    description:
      "From web preferences to privacy settings, Webvium gives you complete control over how you browse. Adjust anything, anytime.",
  },
  {
    number: "05",
    icon: faShieldHalved,
    title: "Privacy protection",
    description:
      "Webvium never tracks, collects, or shares your browsing activity. Enjoy anonymity and peace of mind by design.",
  },
  {
    number: "06",
    icon: faCloudArrowDown,
    title: "Your data, your power",
    description:
      "Back up your history, bookmarks, searches, and settings with a tap. Export and restore your data whenever you need it.",
  },
];

const resources = [
  { label: "Introducing Webvium Browser for Android Devices", href: "#" },
  { label: "Download Webvium Browser on Uptodown", href: "#" },
  { label: "Follow Us on GitHub", href: "https://github.com/webvium" },
  {
    label: "Privacy Policy",
    href: "https://www.webvium.com/legal/privacy-policy",
  },
  {
    label: "Terms of Service",
    href: "https://www.webvium.com/legal/terms-of-service",
  },
];

const gallery = [
  "https://www.webvium.com/images/webvium-1.jpg",
  "https://www.webvium.com/images/webvium-2.jpg",
  "https://www.webvium.com/images/webvium-3.jpg",
  "https://www.webvium.com/images/webvium-4.jpg",
  "https://www.webvium.com/images/webvium-5.jpg",
  "https://www.webvium.com/images/webvium-6.jpg",
];

const requirements = [
  { label: "Platform", value: "Android 6.0 and later" },
  { label: "Download size", value: "A few megabytes" },
  { label: "Account", value: "Not required" },
  { label: "Permissions", value: "Storage for downloads only" },
];

const faqs = [
  {
    question: "How do I install the APK?",
    answer:
      "Open the downloaded file and follow the Android prompts. You may need to allow installs from your browser or file manager the first time.",
  },
  {
    question: "Is there a Play Store version?",
    answer:
      "Webvium Browser is distributed as a direct APK download so updates can ship quickly and independently.",
  },
  {
    question: "Does the ad blocker need setup?",
    answer:
      "No. Ad and tracker blocking is built in and on by default. You can adjust it in settings at any time.",
  },
  {
    question: "Can I move my data from another browser?",
    answer:
      "You can import and export bookmarks, and back up history, searches, and settings from within Webvium.",
  },
  {
    question: "Will it work on an old phone?",
    answer:
      "That is the point. Webvium is built to stay responsive on lower end and older Android devices.",
  },
];

const section = "flex min-h-screen flex-col justify-center px-5 py-24";
const sectionAlt = `${section} bg-surface`;
const innerClass = "mx-auto w-full max-w-5xl";
const eyebrow =
  "flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary before:h-px before:w-8 before:bg-primary";

export default function WebviumBrowser() {
  return (
    <div>
      <section className={`${section} relative overflow-hidden`}>
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-70" />
        <div className={`relative ${innerClass}`}>
          <Reveal>
            <span className={eyebrow}>Webvium Browser</span>
          </Reveal>
          <Reveal
            as="h1"
            delay={80}
            className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl"
          >
            A fast, private browser for Android
          </Reveal>
          <Reveal
            as="p"
            delay={160}
            className="mt-6 max-w-xl text-base text-muted sm:text-lg"
          >
            Lightweight, ad blocking, and beautifully designed. Built from
            scratch since 2018.
          </Reveal>
          <Reveal delay={240} className="mt-10">
            <Link
              href="/downloads"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-contrast transition-transform hover:scale-[1.03] active:scale-95"
            >
              <FontAwesomeIcon icon={faDownload} />
              Download
            </Link>
          </Reveal>
        </div>
      </section>

      <section className={sectionAlt}>
        <div className={innerClass}>
          <Reveal>
            <span className={eyebrow}>Overview</span>
          </Reveal>
          <Reveal
            as="h2"
            delay={60}
            className="mt-5 text-3xl font-semibold sm:text-4xl"
          >
            Overview
          </Reveal>
          <div className="mt-6 max-w-2xl space-y-5 text-muted">
            <Reveal as="p" delay={80}>
              Webvium was built in 2018 with a clear goal: the lightest,
              fastest, most private full featured Android web browser, designed
              from scratch.
            </Reveal>
            <Reveal as="p" delay={140}>
              Most browsers grow heavier with every release. Webvium goes the
              other way. The core stays small, the interface stays out of your
              way, and the features that matter most, like ad blocking and data
              backup, are built in rather than left to add-ons.
            </Reveal>
            <Reveal as="p" delay={200}>
              The result is a browser that installs in seconds, opens instantly,
              and keeps browsing, downloads, and sharing effortless, even on
              older hardware.
            </Reveal>
          </div>
        </div>
      </section>

      <section className={section}>
        <div className={innerClass}>
          <Reveal>
            <span className={eyebrow}>Requirements</span>
          </Reveal>
          <Reveal
            as="h2"
            delay={60}
            className="mt-5 text-3xl font-semibold sm:text-4xl"
          >
            What you need
          </Reveal>
          <Reveal as="p" delay={120} className="mt-3 max-w-md text-muted">
            No account, no sign up, nothing to configure before you start.
          </Reveal>
          <div className="card mt-10 overflow-hidden">
            {requirements.map((req, i) => (
              <Reveal
                key={req.label}
                delay={i * 60}
                className="flex items-center justify-between gap-4 border-b border-border px-5 py-4 last:border-b-0"
              >
                <span className="text-sm text-muted">{req.label}</span>
                <span className="text-sm font-medium">{req.value}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className={sectionAlt}>
        <div className="mx-auto w-full max-w-2xl">
          <Reveal>
            <span className={eyebrow}>Questions</span>
          </Reveal>
          <Reveal
            as="h2"
            delay={60}
            className="mt-5 text-3xl font-semibold sm:text-4xl"
          >
            Browser questions
          </Reveal>
          <Reveal delay={120} className="mt-12">
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <section className={section}>
        <div className={innerClass}>
          <Reveal>
            <span className={eyebrow}>Screenshots</span>
          </Reveal>
          <Reveal
            as="h2"
            delay={60}
            className="mt-5 text-3xl font-semibold sm:text-4xl"
          >
            Gallery
          </Reveal>
          <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {gallery.map((src, i) => (
              <Reveal
                key={src}
                delay={i * 60}
                className="card relative flex h-80 w-44 shrink-0 snap-start flex-col justify-end overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`Webvium Browser screenshot ${i + 1}`}
                  fill
                  className="object-cover"
                />
                <span className="relative m-3 rounded-full bg-background/70 px-2 py-1 text-xs text-muted">
                  {String(i + 1).padStart(2, "0")} / {gallery.length}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={sectionAlt}>
        <div className={innerClass}>
          <Reveal>
            <span className={eyebrow}>Features</span>
          </Reveal>
          <Reveal
            as="h2"
            delay={60}
            className="mt-5 text-3xl font-semibold sm:text-4xl"
          >
            Feature set
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {features.map((feature, i) => (
              <Reveal
                key={feature.number}
                delay={(i % 2) * 80}
                className="card p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-muted">
                    {feature.number}
                  </span>
                  <FontAwesomeIcon
                    icon={feature.icon}
                    className="text-primary"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted">{feature.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={section}>
        <div className={innerClass}>
          <Reveal>
            <span className={eyebrow}>More</span>
          </Reveal>
          <Reveal
            as="h2"
            delay={60}
            className="mt-5 text-3xl font-semibold sm:text-4xl"
          >
            Resources
          </Reveal>
          <div className="card mt-10 overflow-hidden">
            {resources.map((resource, i) => (
              <Reveal key={resource.label} delay={i * 50}>
                <Link
                  href={resource.href}
                  className="group flex items-center justify-between gap-4 border-b border-border px-5 py-4 last:border-b-0 transition-colors hover:bg-surface-2"
                >
                  <span className="text-sm">{resource.label}</span>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="shrink-0 text-muted transition-colors group-hover:text-primary"
                  />
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
            Download the latest version and see how light a browser can feel.
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
