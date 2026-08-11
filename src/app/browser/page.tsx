import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faArrowRight,
  faArrowLeft,
  faSliders,
  faGaugeHigh,
  faPalette,
  faLock,
  faShieldHalved,
  faCloudArrowDown,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
export default function WebviumBrowser() {
  const features = [
    {
      number: "01",
      icon: faSliders,
      title: "Endless Customization",
      description:
        "Personalize your browsing experience like never before. Switch between light and dark themes, add soft screen curves, or set your favorite photo as the background. Webvium lets you redefine how your browser looks and feels — just the way you like it.",
    },
    {
      number: "02",
      icon: faGaugeHigh,
      title: "Lightweight. Lightning Fast.",
      description:
        "Webvium is built with speed and simplicity in mind. It installs in seconds, loads instantly, and runs smoother than ever. Experience faster browsing, quicker downloads, and effortless sharing — all in one ultra-light package.",
    },
    {
      number: "03",
      icon: faPalette,
      title: "Beautiful Material Design",
      description:
        "Dive into a clean, modern interface inspired by Google's Material Design. With carefully chosen colors, icons, and an elegant type system, Webvium delivers a fresh, minimal, and intuitive browsing experience you'll love to use.",
    },
    {
      number: "04",
      icon: faLock,
      title: "Total Control at Your Fingertips",
      description:
        "You're always in charge. From web preferences to privacy settings, Webvium gives you complete control over how you browse. Adjust anything, anytime — because you're the true admin of your experience.",
    },
    {
      number: "05",
      icon: faShieldHalved,
      title: "Unmatched Privacy Protection",
      description:
        "Your data is yours alone. Webvium never tracks, collects, or shares your browsing activity. Enjoy complete anonymity and peace of mind with our commitment to total privacy.",
    },
    {
      number: "06",
      icon: faCloudArrowDown,
      title: "Your Data, Your Power",
      description:
        "Back up everything — your history, bookmarks, searches, and settings — with just a tap. Webvium lets you export and restore your data whenever you need it, keeping you in full control at all times.",
    },
  ];

  const resources = [
    { label: "Introducing Webvium Browser for Android Devices", href: "#" },
    { label: "Download Webvium Browser on Uptodown", href: "#" },
    { label: "Follow Us on GitHub", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ];

  const gallery = [
    "https://www.melvinjonesrepol.com/images/webvium-1.jpg",
    "https://www.melvinjonesrepol.com/images/webvium-2.jpg",
    "https://www.melvinjonesrepol.com/images/webvium-3.jpg",
    "https://www.melvinjonesrepol.com/images/webvium-4.jpg",
    "https://www.melvinjonesrepol.com/images/webvium-5.jpg",
    "https://www.melvinjonesrepol.com/images/webvium-6.jpg",
    "https://www.melvinjonesrepol.com/images/webvium-7.jpg",
    "https://www.melvinjonesrepol.com/images/webvium-8.jpg",
    "https://www.melvinjonesrepol.com/images/webvium-9.jpg",
    "https://www.melvinjonesrepol.com/images/webvium-10.jpg",
    "https://www.melvinjonesrepol.com/images/webvium-11.jpg",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,.25),transparent_50%)]" />

        <div className="relative mx-auto max-w-5xl px-6">
          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">
            Webvium Browser
          </h1>

          <p className="mt-6 max-w-2xl text-xl text-zinc-400">
            A lightweight, lightning-fast, ad-blocker and beautifully designed
            web browser for Android.
          </p>

          <div className="mt-10">
            <a
              href="/downloads"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-medium text-white hover:bg-blue-700"
            >
              <FontAwesomeIcon icon={faDownload} />
              Download
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-t border-zinc-800 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold">Overview</h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
            Webvium was built in 2018 with the vision of creating the lightest,
            fastest, most secure and private full-featured Android web browser —
            programmed and designed from scratch. It installs in seconds, loads
            instantly, and runs smoother than ever, giving you faster browsing,
            quicker downloads, and effortless sharing, all in one ultra-light
            package.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="border-t border-zinc-800 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold">Gallery</h2>
              <p className="mt-2 text-zinc-400">6 frames</p>
            </div>

            <div className="hidden gap-2 md:flex"></div>
          </div>

          <div className="mt-8 flex snap-x snap-mandatory scroll-smooth gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {gallery.map((_, i) => (
              <div
                key={i}
                className="relative flex h-80 w-44 shrink-0 snap-start scroll-ml-6 flex-col justify-end overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 p-4"
              >
                <Image
                  src={gallery[i]}
                  alt={`Gallery frame ${i + 1}`}
                  className="object-cover"
                  width={44}
                  height={80}
                />
                <span className="relative text-sm text-zinc-500">
                  {String(i + 1).padStart(2, "0")} / 06
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Set */}
      <section className="border-t border-zinc-800 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold">Feature Set</h2>

          <div className="mt-12 space-y-4">
            {features.map((feature) => (
              <div
                key={feature.number}
                className="grid gap-6 rounded-3xl border border-zinc-800 p-8 md:grid-cols-[auto_1fr] md:items-start"
              >
                <div className="flex items-center gap-4 md:flex-col md:items-start">
                  <span className="text-3xl font-bold text-zinc-700">
                    {feature.number}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 text-blue-500">
                    <FontAwesomeIcon icon={feature.icon} />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">{feature.title}</h3>
                  <p className="mt-3 max-w-2xl text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="border-t border-zinc-800 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold">Resources</h2>

          <div className="mt-8 divide-y divide-zinc-800 rounded-3xl border border-zinc-800">
            {resources.map((resource) => (
              <a
                key={resource.label}
                href={resource.href}
                className="group flex items-center justify-between gap-4 px-6 py-5 hover:bg-zinc-900/40"
              >
                <span className="text-zinc-300 group-hover:text-white">
                  {resource.label}
                </span>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="shrink-0 text-zinc-500 group-hover:text-blue-500"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-800 py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Start Browsing With Webvium
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-xl text-zinc-400">
            Download the latest version and experience a lightweight Android
            browser designed for speed.
          </p>

          <a
            href="/downloads"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-medium text-white hover:bg-blue-700"
          >
            <FontAwesomeIcon icon={faDownload} />
            Download Now
          </a>
        </div>
      </section>
    </div>
  );
}
