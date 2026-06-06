import { Metadata } from "next";
import ThankYou from "./components/ThankYou";

export const metadata: Metadata = {
  title: "Thank You for Downloading",
  description:
    "Thank you for downloading Webvium. Learn how to get started, explore release notes, and discover other projects in the Webvium ecosystem.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Thank You for Downloading - Webvium",
    description:
      "Your download is ready. Get started with Webvium and explore additional resources.",
  },
  twitter: {
    title: "Thank You for Downloading - Webvium",
    description:
      "Your Webvium download is ready. Explore installation instructions, updates, and more.",
  },
};

export default function DownloadedPage() {
  return <ThankYou />;
}
