"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  faDownload,
  faMoon,
  faSun,
  faBars,
  faXmark,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "@/hooks/theme";

const links = [
  { label: "Browser", href: "/browser", index: "01" },
  { label: "Extensions", href: "/#extensions", index: "02" },
  { label: "Downloads", href: "/downloads", index: "03" },
  { label: "Donate", href: "/donate", index: "04" },
  { label: "About", href: "/about", index: "05" },
];

export default function Nav() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="relative mx-auto max-w-6xl px-5">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/images/transparent_webvium.png"
              alt="Webvium"
              width={32}
              height={32}
            />

            <span className="text-lg font-semibold tracking-tight">
              Webvium
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-foreground"
            >
              <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
            </button>

            <Link
              href="/downloads"
              className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-contrast transition-transform hover:scale-[1.03] active:scale-95 md:flex"
            >
              <FontAwesomeIcon icon={faDownload} />
              Download
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-foreground md:hidden"
            >
              <FontAwesomeIcon icon={open ? faXmark : faBars} />
            </button>
          </div>
        </div>

        {open && (
          <div
            id="mobile-navigation"
            className="absolute left-0 right-0 top-full z-50 overflow-hidden border-x border-b border-border bg-background shadow-2xl animate-fade-in md:hidden"
          >
            <div className="grid sm:grid-cols-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group flex min-h-16 items-center justify-between border-b border-border px-5 transition-colors hover:bg-surface"
                >
                  <span className="flex items-center gap-4">
                    <span className="text-[10px] text-muted">{link.index}</span>

                    <span className="font-medium text-foreground">
                      {link.label}
                    </span>
                  </span>

                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-xs text-muted transition-transform group-hover:translate-x-1"
                  />
                </Link>
              ))}

              <Link
                href="/downloads"
                onClick={() => setOpen(false)}
                className="group flex min-h-16 items-center justify-between px-5 transition-colors hover:bg-surface sm:col-span-2"
              >
                <span className="flex items-center gap-4">
                  <FontAwesomeIcon icon={faDownload} className="text-muted" />

                  <span className="font-medium text-foreground">Download</span>
                </span>

                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-xs text-muted transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
