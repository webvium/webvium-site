import { Metadata } from "next";
import ThankYou from "./components/ThankYou";

export const metadata: Metadata = {
  title: "Store Distribution - Webvium",
  description:
    "Webvium is distributed through Google Play and supported third-party stores. Direct APK downloads are no longer available.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Store Distribution - Webvium",
    description:
      "Get Webvium from Google Play or a supported third-party store.",
  },
  twitter: {
    title: "Store Distribution - Webvium",
    description:
      "Get Webvium from Google Play or a supported third-party store.",
  },
};

export default function DownloadedPage() {
  return <ThankYou />;
}
