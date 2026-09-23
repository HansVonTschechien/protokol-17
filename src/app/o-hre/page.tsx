import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { getPageContent, getRelease } from "@/lib/content/repository";

export const metadata: Metadata = {
  title: "O hře",
  description: "PROTOKOL 17 je česká detektivní logická hra pro macOS.",
};

export default async function AboutPage() {
  const [page, release] = await Promise.all([
    getPageContent<{
      kicker: string;
      title: string;
      paragraphs: string[];
      facts: { label: string; value: string }[];
    }>("about"),
    getRelease(),
  ]);

  return (
    <Container className="page-section">
      <PageHeader kicker={page.kicker} title={page.title} />
      <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="max-w-2xl space-y-5 text-paper/90">
          {page.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <dl className="dossier h-fit divide-y divide-line">
          {page.facts.map((fact) => (
            <div key={fact.label} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-5 py-4 sm:px-6">
              <dt className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-metal">
                {fact.label}
              </dt>
              <dd className="min-w-0">{fact.value}</dd>
            </div>
          ))}
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-5 py-4 sm:px-6">
            <dt className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-metal">
              Verze
            </dt>
            <dd>{release.version}</dd>
          </div>
        </dl>
      </div>
    </Container>
  );
}
