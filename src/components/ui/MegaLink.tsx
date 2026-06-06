import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function MenuLink({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href} className="group hover:text-[#4285f4]">
      <div className="flex items-center gap-3">
        {title}

        <FontAwesomeIcon
          icon={faArrowRight}
          className="opacity-0 transition group-hover:opacity-100"
        />
      </div>

      <p className="mt-2 text-sm text-zinc-500">{description}</p>
    </Link>
  );
}
