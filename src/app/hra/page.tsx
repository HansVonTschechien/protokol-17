import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { getPageContent } from "@/lib/content/repository";

export const metadata: Metadata = {
  title: "Jak se hraje",
  description: "Prohlížej důkazy, hledej rozpory, propojuj stopy a rekonstruuj události.",
};

export default async function GameplayPage() {
  const page = await getPageContent<{
    kicker: string;
    title: string;
    intro: string;
    sections: { id: string; number: string; title: string; body: string }[];
  }>("gameplay");

  return (
    <Container className="page-section">
      <PageHeader kicker={page.kicker} title={page.title}>
        <p>{page.intro}</p>
      </PageHeader>
      <ol className="mt-16 space-y-6">
        {page.sections.map((section) => (
          <li key={section.id} className="dossier grid gap-4 p-5 sm:grid-cols-[7rem_1fr] sm:gap-6 sm:p-8">
            <p className="font-mono text-sm tracking-[0.18em] text-metal">{section.number}</p>
            <div className="min-w-0">
              <h2 className="font-serif text-[clamp(1.6rem,4vw,1.9rem)]">{section.title}</h2>
              <p className="mt-4 max-w-2xl text-paper/85">{section.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Container>
  );
}
