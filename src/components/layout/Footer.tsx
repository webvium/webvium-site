import {
  faFacebook,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="community" className="border-t border-zinc-800">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="text-2xl font-bold">Webvium</h3>

            <p className="mt-4">
              Lightweight software built for speed, privacy and simplicity.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Products</h4>

            <ul className="mt-4 space-y-2">
              <li>Webvium Browser</li>
              <li>Web-App</li>
              <li>Extensions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Resources</h4>

            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/changelog"
                  className="inline-flex items-center gap-2 hover:text-[#4285f4]"
                >
                  Changelog
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.webvium.com/legal/privacy-policy"
                  className="inline-flex items-center gap-2 hover:text-[#4285f4]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.webvium.com/legal/terms-of-service"
                  className="inline-flex items-center gap-2 hover:text-[#4285f4]"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Follow Us</h4>

            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="https://github.com/webvium"
                  className="inline-flex items-center gap-2 hover:text-[#4285f4]"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://facebook.com/com.mrepol742.webvium"
                  className="inline-flex items-center gap-2 hover:text-[#4285f4]"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://youtube.com/@webvium"
                  className="inline-flex items-center gap-2 hover:text-[#4285f4]"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-6 text-center text-zinc-500">
          © 2026 Melvin Jones Repol. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
