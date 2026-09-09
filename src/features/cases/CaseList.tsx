import { CaseCard } from "@/features/cases/CaseCard";
import type { PublicCase } from "@/types";

export function CaseList({ cases }: { cases: PublicCase[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {cases.map((item) => (
        <CaseCard key={item.id} item={item} />
      ))}
    </div>
  );
}
