import Link from "next/link";
import { CharacterGrid } from "@/features/characters/CharacterGrid";
import { EvidenceGrid } from "@/features/evidence/EvidenceGrid";
import { caseHref, formatCaseNumber } from "@/lib/format";
import type { PublicCase, PublicCharacter, PublicEvidence, PublicTimelineEvent } from "@/types";

export function ArchiveBrowser({
  cases,
  evidence,
  characters,
  timeline,
}: {
  cases: PublicCase[];
  evidence: PublicEvidence[];
  characters: PublicCharacter[];
  timeline: PublicTimelineEvent[];
}) {
  const openCases = cases.filter(
    (item) => item.status === "available" || item.status === "tutorial",
  );

  return (
    <div className="space-y-20">
      <section>
        <p className="kicker">Odemčené spisy</p>
        <div className="mt-6 divide-y divide-line border-y border-line">
          {openCases.map((item) => (
            <Link
              key={item.id}
              href={caseHref(item.id)}
              className="flex flex-col gap-2 py-5 no-underline sm:flex-row sm:items-baseline sm:justify-between"
            >
              <span className="font-mono text-[0.7rem] tracking-[0.2em] text-metal">
                SPIS {formatCaseNumber(item.number)}
              </span>
              <span className="font-serif text-2xl text-off-white">{item.title}</span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <p className="kicker">Časová osa — veřejný úsek</p>
        <ol className="mt-8 space-y-8 border-l border-line pl-6">
          {timeline.map((event) => (
            <li key={event.id}>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-metal">
                {event.datedLabel}
              </p>
              <h3 className="mt-2 font-serif text-2xl">{event.title}</h3>
              <p className="mt-2 max-w-2xl text-sm text-paper/85">{event.summary}</p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <p className="kicker">Cvičné důkazy</p>
        <h2 className="display-title mt-3 text-3xl">Spis 00</h2>
        <div className="mt-8">
          <EvidenceGrid items={evidence} />
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="kicker">Osoby v případu</p>
            <h2 className="display-title mt-3 text-3xl">Veřejný seznam</h2>
          </div>
          <Link href="/osoby" className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-metal">
            Všichni
          </Link>
        </div>
        <div className="mt-8">
          <CharacterGrid people={characters.slice(0, 6)} />
        </div>
      </section>
    </div>
  );
}
