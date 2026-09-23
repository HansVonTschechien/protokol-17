import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { caseHref, formatCaseNumber } from "@/lib/format";
import type { PublicCase } from "@/types";

const STATUS_LABEL: Record<PublicCase["status"], string> = {
  tutorial: "Tutoriál",
  available: "Dostupné",
  coming_soon: "Připravuje se",
  locked: "Brzy",
};

export function CaseCard({
  item,
  featured = false,
}: {
  item: PublicCase;
  featured?: boolean;
}) {
  const locked = item.status === "coming_soon" || item.status === "locked";
  const href = caseHref(item.id);
  const number = formatCaseNumber(item.number);

  const inner = (
    <article
      className={`dossier flex h-full flex-col p-5 sm:p-6 ${featured ? "min-h-56 sm:min-h-64" : ""}`}
    >
      <div className="flex items-start justify-between gap-4">
        <p className="font-mono text-[0.68rem] tracking-[0.22em] text-metal">
          SPIS {number}
        </p>
        <span className="shrink-0">
          <Badge tone={item.status === "available" || item.status === "tutorial" ? "accent" : "default"}>
            {locked ? "🔒 Brzy" : item.status === "tutorial" ? "✓ Tutoriál" : STATUS_LABEL[item.status]}
          </Badge>
        </span>
      </div>
      <h2 className="display-title mt-6 text-[clamp(1.45rem,3vw,1.9rem)] text-off-white">
        {item.title}
      </h2>
      {item.publicDateLabel ? (
        <p className="mt-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-paper-dim">
          {item.publicDateLabel}
        </p>
      ) : null}
      <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-paper/80">
        {item.publicSummary}
      </p>
    </article>
  );

  if (locked) {
    return <div className="block h-full opacity-80">{inner}</div>;
  }

  return (
    <Link href={href} className="block h-full no-underline">
      {inner}
    </Link>
  );
}
