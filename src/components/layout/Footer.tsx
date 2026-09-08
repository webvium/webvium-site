import {
  faFacebook,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import CookiePreference from "../common/CookiePreference";

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
    <footer id="community" className="border-t border-border bg-surface-2">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">Webvium</h3>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Lightweight software built for speed, privacy and simplicity.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="text-sm font-semibold">{column.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-semibold">Follow</h4>
            <ul className="mt-4 space-y-2.5">
              {social.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-foreground"
                  >
                    <FontAwesomeIcon icon={item.icon} />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
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
