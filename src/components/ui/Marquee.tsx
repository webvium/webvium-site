import { Fragment } from "react";

export default function Marquee({
  items,
  className = "",
}: {
  items: React.ReactNode[];
  className?: string;
}) {
  return (
    <div className={`marquee-mask overflow-hidden ${className}`}>
      <div className="marquee-track gap-4">
        {[0, 1].map((copy) => (
          <Fragment key={copy}>
            {items.map((item, i) => (
              <div key={`${copy}-${i}`} className="shrink-0">
                {item}
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
