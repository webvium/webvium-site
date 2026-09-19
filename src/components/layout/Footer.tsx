import {
  faFacebook,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import CookiePreference from "../common/CookiePreference";
import NotifyForm from "../NotifyForm";

const columns = [
  {
    title: "Products",
    links: [
      { label: "Webvium Browser", href: "/browser" },
      { label: "Web App", href: "/downloads" },
      { label: "Extensions", href: "/#extensions" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Changelog", href: "/changelog" },
      { label: "Donate", href: "/donate" },
      {
        label: "Privacy Policy",
        href: "https://www.melvinjonesrepol.com/legal/privacy-policy",
      },
      {
        label: "Terms of Service",
        href: "https://www.melvinjonesrepol.com/legal/terms-of-service",
      },
      {
        label: "Cookie Policy",
        href: "https://www.melvinjonesrepol.com/legal/cookie-policy",
      },
    ],
  },
];

const social = [
  { label: "GitHub", href: "https://github.com/webvium", icon: faGithub },
  {
    label: "Facebook",
    href: "https://facebook.com/the.webvium.project",
    icon: faFacebook,
  },
  { label: "YouTube", href: "https://youtube.com/@webvium", icon: faYoutube },
];

export default function Footer() {
  return (
    <footer id="community" className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:py-14">
        <section className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-8 shadow-[var(--shadow)] sm:px-8 sm:py-10">
          <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(24rem,1.1fr)] lg:items-center lg:gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Stay connected
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Good things are in the works.
              </h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-muted">
                A quiet note when we ship something worth your attention. No noise, no spam.
              </p>
            </div>
            <NotifyForm />
          </div>
        </section>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="text-xl font-semibold tracking-tight text-foreground">Webvium</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-muted lg:max-w-md">
              Lightweight software for a faster, more private web.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {social.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="grid size-9 place-items-center rounded-full border border-border text-sm text-muted transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-contrast"
                >
                  <FontAwesomeIcon icon={item.icon} />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:col-span-1 lg:col-span-4 lg:col-start-9">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Webvium. All rights reserved.</span>
          <CookiePreference />
          <span>
            Built and designed by{" "}
            <Link
              href="https://www.melvinjonesrepol.com"
              className="text-foreground transition-opacity hover:opacity-80"
            >
              melvinjonesrepol.com
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
