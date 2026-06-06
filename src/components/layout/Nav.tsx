"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  faChevronDown,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "@/hooks/theme";
import MenuLink from "../ui/MegaLink";
import MegaMenu from "../ui/MegaMenu";

export default function Nav() {
  const [menu, setMenu] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/50 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/transparent_webvium.png"
            alt="Webvium"
            width={40}
            height={40}
            className="rounded-xl"
          />

          <span className="text-xl font-bold">Webvium</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <div
            className="relative"
            onMouseEnter={() => setMenu("products")}
            onMouseLeave={() => setMenu(null)}
          >
            <button className="flex items-center gap-2">
              Products
              <FontAwesomeIcon icon={faChevronDown} />
            </button>

            {menu === "products" && (
              <MegaMenu>
                <div>
                  <h4 className="font-semibold">Core Products</h4>

                  <MenuLink
                    title="Webvium Browser"
                    description="Fast and lightweight Android browser"
                    href="/browser"
                  />

                  <MenuLink
                    title="Web App"
                    description="Convert websites into Android apps"
                    href="/web-app"
                  />
                </div>

                <div>
                  <h4 className="font-semibold">Future Projects</h4>

                  <MenuLink
                    title="Webvium Launcher"
                    description="Modern Android launcher"
                    href="/launcher"
                  />

                  <MenuLink
                    title="Webvium VPN"
                    description="Deprecated"
                    href="/vpn"
                  />

                  <MenuLink
                    title="Webvium Search"
                    description="Deprecated"
                    href="/search"
                  />
                </div>
              </MegaMenu>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setMenu("extensions")}
            onMouseLeave={() => setMenu(null)}
          >
            <button className="flex items-center gap-2">
              Extensions
              <FontAwesomeIcon icon={faChevronDown} />
            </button>

            {menu === "extensions" && (
              <MegaMenu>
                <div>
                  <h4 className="font-semibold">Browser Extensions</h4>

                  <MenuLink
                    title="Disable Control Shift C"
                    description="Developer protection utility"
                    href="/extensions"
                  />

                  <MenuLink
                    title="Floating Console"
                    description="Floating developer console"
                    href="/extensions"
                  />

                  <MenuLink
                    title="Browser Storage Inspector"
                    description="Inspect browser storage"
                    href="/extensions"
                  />
                </div>

                <div>
                  <MenuLink
                    title="Webvium Ad Blocker"
                    description="Ad blocking extension"
                    href="/extensions"
                  />

                  <MenuLink
                    title="Awesome New Tab"
                    description="Customizable new tab page"
                    href="/extensions"
                  />
                </div>
              </MegaMenu>
            )}
          </div>

          <Link href="/downloads" className="hover:text-[#4285f4]">Downloads</Link>

          <Link href="/about" className="hover:text-[#4285f4]">About</Link>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-700 hover:border-zinc-500"
          >
            <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
          </button>

          <Link
            href="/downloads"
            className="rounded-xl bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700"
          >
            Download
          </Link>
        </div>
      </nav>
    </header>
  );
}
