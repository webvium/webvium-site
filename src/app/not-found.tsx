import Link from "next/link";
import Reveal from "@/components/common/Reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export const dynamic = "force-static";

export default function NotFound() {
  return (
    <div>
      <section className="flex min-h-screen flex-col justify-center px-5 py-24 relative overflow-hidden">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-70" />

        <div className="relative mx-auto w-full max-w-5xl">
          <Reveal>
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary before:h-px before:w-8 before:bg-primary">
              404 Page Not Found
            </span>
          </Reveal>

          <Reveal
            as="h1"
            delay={80}
            className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl"
          >
            Looks like you took a wrong turn.
          </Reveal>

          <Reveal
            as="p"
            delay={160}
            className="mt-6 max-w-xl text-base text-muted sm:text-lg"
          >
            The page you&apos;re looking for doesn&apos;t exist or may have been
            moved somewhere else.
          </Reveal>

          <Reveal delay={240} className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-contrast transition-transform hover:scale-[1.03] active:scale-95"
            >
              <FontAwesomeIcon icon={faHouse} />
              Back to Home
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
