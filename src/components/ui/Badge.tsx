import type { ReactNode } from "react";

type Tone = "default" | "accent";

export function Badge({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: Tone;
}) {
  return (
    <span className={tone === "accent" ? "badge badge-accent" : "badge"}>
      {children}
    </span>
  );
}
