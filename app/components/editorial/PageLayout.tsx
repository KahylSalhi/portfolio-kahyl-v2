import type { ReactNode } from "react";

export function PageLayout({ children }: { children: ReactNode }) {
  return <div className="page-shell">{children}</div>;
}
