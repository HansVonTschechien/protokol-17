import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

export function ProsePage({
  kicker,
  title,
  paragraphs,
}: {
  kicker: string;
  title: string;
  paragraphs: string[];
}) {
  return (
    <Container className="page-section">
      <PageHeader kicker={kicker} title={title} />
      <div className="mt-10 max-w-2xl space-y-4 text-paper/90">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Container>
  );
}
