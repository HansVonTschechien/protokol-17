import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { EvidenceGrid } from "@/features/evidence/EvidenceGrid";
import { formatCaseNumber, parseCaseParam } from "@/lib/format";
import {
  getPublicCase,
  getPublicCases,
  getPublicEvidence,
} from "@/lib/content/repository";

type Props = PageProps<"/pripady/[id]">;

export async function generateStaticParams() {
  const cases = await getPublicCases();
  return cases.map((item) => ({ id: item.id.replaceAll("_", "-") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const record = await getPublicCase(parseCaseParam(id));
  if (!record) return { title: "Spis nenalezen" };
  return {
    title: `Spis ${formatCaseNumber(record.number)} · ${record.title}`,
    description: record.publicSummary.replaceAll("\n", " "),
  };
}

export default async function CaseDetailPage({ params }: Props) {
  const { id } = await params;
  const record = await getPublicCase(parseCaseParam(id));
  if (!record) notFound();

  const evidence =
    record.status === "coming_soon" || record.status === "locked"
      ? []
      : await getPublicEvidence(record.id);

  const locked = record.status === "coming_soon" || record.status === "locked";

  return (
    <Container className="py-16 sm:py-24">
      <p className="kicker">Spis {formatCaseNumber(record.number)}</p>
      <div className="mt-4 flex flex-wrap items-center gap-4">
        <h1 className="display-title text-4xl sm:text-6xl">{record.title}</h1>
        <Badge tone={locked ? "default" : "accent"}>
          {locked ? "🔒 Brzy" : record.status === "tutorial" ? "Tutoriál" : "Dostupné"}
        </Badge>
      </div>
      {record.publicDateLabel ? (
        <p className="mt-5 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-paper-dim">
          {record.publicDateLabel}
          {record.publicSetting ? ` · ${record.publicSetting}` : ""}
        </p>
      ) : record.publicSetting ? (
        <p className="mt-5 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-paper-dim">
          {record.publicSetting}
        </p>
      ) : null}
      <p className="mt-8 max-w-2xl whitespace-pre-line text-lg text-paper/90">
        {record.publicSummary}
      </p>

      {evidence.length > 0 ? (
        <section className="mt-16">
          <p className="kicker">Veřejné důkazy</p>
          <h2 className="display-title mt-3 text-3xl">Materiál bez vyhodnocení</h2>
          <div className="mt-8">
            <EvidenceGrid items={evidence} />
          </div>
        </section>
      ) : (
        <section className="dossier mt-16 p-8">
          <p className="kicker">Stav</p>
          <p className="mt-4 max-w-xl text-paper/85">
            {locked
              ? "Tento spis ještě není ve veřejném archivu. Žádné důkazy, stopy ani řešení zde nejsou."
              : "Veřejná část tohoto spisu obsahuje pouze metadata. Herní materiály zůstávají v aplikaci."}
          </p>
        </section>
      )}
    </Container>
  );
}
