import { EvidenceAsset } from "@/components/ui/EvidenceAsset";
import type { PublicCharacter } from "@/types";

export function CharacterCard({ person }: { person: PublicCharacter }) {
  return (
    <article className="dossier overflow-hidden">
      <div className="aspect-[4/5] bg-charcoal-2">
        <EvidenceAsset
          src={person.portraitAsset}
          alt={`Fotografie: ${person.name}`}
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="font-serif text-2xl text-balance text-off-white">{person.name}</h3>
        <dl className="mt-4 space-y-2 font-mono text-[0.64rem] uppercase tracking-[0.1em] text-metal-light sm:text-[0.68rem] sm:tracking-[0.14em]">
          <div className="flex items-baseline justify-between gap-3">
            <dt className="shrink-0">Věk</dt>
            <dd className="min-w-0 text-right text-paper">{person.ageLabel}</dd>
          </div>
          <div className="flex items-baseline justify-between gap-3">
            <dt className="shrink-0">Povolání</dt>
            <dd className="min-w-0 text-right text-paper">{person.occupation}</dd>
          </div>
          <div className="flex items-baseline justify-between gap-3">
            <dt className="shrink-0">Status</dt>
            <dd className="min-w-0 text-right text-paper">{person.statusLabel}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
