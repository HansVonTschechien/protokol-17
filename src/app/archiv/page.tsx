import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ArchiveBrowser } from "@/features/archive/ArchiveBrowser";
import { getPageContent, getPublicCases, getPublicCharacters, getPublicEvidence, getPublicTimeline } from "@/lib/content/repository";

export const metadata: Metadata = {
  title: "Archiv",
  description: "Veřejný investigativní archiv hry PROTOKOL 17. Bez spoilerů.",
};

export default async function ArchivePage() {
  const [page, cases, evidence, characters, timeline] = await Promise.all([
    getPageContent<{ kicker: string; title: string; intro: string; notice: string }>("archive"),
    getPublicCases(),
    getPublicEvidence("case_00"),
    getPublicCharacters(),
    getPublicTimeline(),
  ]);

  return (
    <Container className="py-16 sm:py-24">
      <PageHeader kicker={page.kicker} title={page.title}>
        <p>{page.intro}</p>
        <p className="mt-4 text-sm text-metal-light">{page.notice}</p>
      </PageHeader>
      <div className="mt-16">
        <ArchiveBrowser
          cases={cases}
          evidence={evidence}
          characters={characters}
          timeline={timeline}
        />
      </div>
    </Container>
  );
}
