import type { ReactNode } from "react";
import { Link } from "react-router";

interface SectionLinkProps {
  children: ReactNode;
  href: string;
  className?: string;
  variant?: "light" | "dark";
}

export function SectionLink({
  children,
  href,
  className = "",
  variant = "dark",
}: SectionLinkProps) {
  return (
    <Link
      className={`section-link section-link--${variant} ${className}`.trim()}
      to={href}
    >
      <span>{children}</span>
      <span className="section-link__arrow" aria-hidden="true">
        ↗
      </span>
    </Link>
  );
}
