import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { getPageContent } from "@/lib/content/repository";

export const metadata: Metadata = {
  title: "Příběh",
  description: "Základní premisa hry PROTOKOL 17. Bez řešení a bez spoilerů.",
};

export default async function StoryPage() {
  const story = await getPageContent<{
    kicker: string;
    title: string;
    lead: string[];
    turn: string[];
    close: string[];
  }>("story");

  return (
    <Container className="page-section">
      <PageHeader kicker={story.kicker} title={story.title} />
      <div className="mt-16 grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="max-w-xl space-y-12">
          <StoryBlock lines={story.lead} />
          <StoryBlock lines={story.turn} emphasis />
          <StoryBlock lines={story.close} />
        </article>
        <aside className="dossier h-fit p-5 sm:p-8">
          <p className="kicker">Poznámka archivu</p>
          <p className="mt-5 text-sm text-paper/85">
            Veřejná část neobsahuje, kdo lhal, jaké důkazy byly zfalšovány, ani jak
            případ dopadl. To zůstává ve hře.
          </p>
        </aside>
      </div>
    </Container>
  );
}

function StoryBlock({
  lines,
  emphasis = false,
}: {
  lines: string[];
  emphasis?: boolean;
}) {
  return (
    <div className={emphasis ? "border-l border-accent pl-6" : ""}>
      {lines.map((line) => (
        <p
          key={line}
          className={`text-lg leading-relaxed sm:text-xl ${emphasis ? "font-serif text-off-white" : "text-paper/90"}`}
        >
          {line}
        </p>
      ))}
    </div>
  );
}
