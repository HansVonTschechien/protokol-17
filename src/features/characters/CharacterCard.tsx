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
        <h3 className="font-serif text-2xl text-off-white">{person.name}</h3>
        <dl className="mt-4 space-y-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-metal-light">
          <div className="flex justify-between gap-4">
            <dt>Věk</dt>
            <dd className="text-paper">{person.ageLabel}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>Povolání</dt>
            <dd className="text-right text-paper">{person.occupation}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>Status</dt>
            <dd className="text-paper">{person.statusLabel}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
