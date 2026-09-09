import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { getUpdates } from "@/lib/content/repository";

export const metadata: Metadata = {
  title: "Aktualizace",
  description: "Veřejné poznámky k verzím hry a obsahu PROTOKOL 17.",
};

export default async function UpdatesPage() {
  const updates = await getUpdates();

  return (
    <Container className="py-16 sm:py-24">
      <PageHeader kicker="Aktualizace" title="Změny v archivu">
        <p>Veřejný přehled verzí hry a obsahu. Bez herních spoilerů.</p>
      </PageHeader>
      <ol className="mt-14 space-y-6">
        {updates.map((item) => (
          <li key={item.id} className="dossier p-6 sm:p-8">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-metal">
              {item.version} · {item.datedLabel}
            </p>
            <h2 className="mt-3 font-serif text-2xl">{item.title}</h2>
            <p className="mt-4 max-w-2xl text-paper/85">{item.body}</p>
          </li>
        ))}
      </ol>
    </Container>
  );
}
