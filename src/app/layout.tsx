import type { Metadata } from "next";
import { Source_Code_Pro, Maven_Pro } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import NextTopLoader from "nextjs-toploader";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import ServiceWorkerRegister from "@/components/common/ServiceWorkerRegister";

config.autoAddCss = false;

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-heading",
});

const mavenPro = Maven_Pro({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-body",
});

export const revalidate = 43200; // 12 hours (in seconds)

export const metadata: Metadata = {
  metadataBase: new URL("https://www.webvium.com"),
  title: "Webvium - Lightweight Software Built for Speed",
  description:
    "Webvium is an independent software ecosystem focused on performance, simplicity, and user control. Explore Webvium Browser, Web App, browser extensions, and upcoming projects.",
  keywords: [
    "Webvium",
    "Webvium Browser",
    "Android Browser",
    "Web Browser",
    "Android",
    "Web App",
    "Website to App",
    "Browser Extensions",
    "Lightweight Software",
    "Privacy",
    "Performance",
    "Independent Software",
    "Webvium Launcher",
  ],
  authors: [
    {
      name: "Melvin Jones Repol",
      url: "https://www.webvium.com",
    },
  ],
  alternates: {
    canonical: "https://www.webvium.com",
    types: {
      "application/xml": "https://www.webvium.com/sitemap.xml",
    },
  },
  creator: "Melvin Jones Repol",
  openGraph: {
    title: "Webvium - Lightweight Software Built for Speed",
    description:
      "Discover Webvium Browser, Web App, browser extensions, and upcoming projects. Lightweight software focused on performance, privacy, and simplicity.",
    url: "https://www.webvium.com",
    siteName: "Webvium",
    images: [
      {
        url: "https://www.webvium.com/images/webvium-banner.png",
        width: 1200,
        height: 630,
        alt: "Webvium Software Ecosystem",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webvium - Lightweight Software Built for Speed",
    description:
      "Explore Webvium Browser, Web App, browser extensions, and future projects built around performance and simplicity.",
    images: ["https://www.webvium.com/images/webvium-banner.png"],
    creator: "@mrepol742",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
      },
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        sizes: "16x16",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const env = process.env.NEXT_PUBLIC_NODE_ENV || "production";
  const isProduction = env === "production";

  return (
    <html
      className={`${sourceCodePro.variable} ${mavenPro.variable}`}
      data-scroll-behavior="smooth"
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <meta name="hostname" content="www.webvium.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-background text-foreground">
        <Nav />

        <NextTopLoader showSpinner={false} color="#1a73e8" />

        <main className="flex-1">{children}</main>

        <Footer />

        {isProduction && (
          <>
            <ServiceWorkerRegister />
          </>
        )}
      </body>
    </html>
  );
}
