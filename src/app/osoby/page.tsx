import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { CharacterGrid } from "@/features/characters/CharacterGrid";
import { getPublicCharacters } from "@/lib/content/repository";

export const metadata: Metadata = {
  title: "Osoby",
  description: "Veřejný seznam osob evidovaných v archivu PROTOKOL 17.",
};

export default async function CharactersPage() {
  const people = await getPublicCharacters();

  return (
    <Container className="page-section">
      <PageHeader kicker="Osoby v případu" title="Jména ve spisu">
        <p>
          Karty obsahují pouze základní údaje. Archiv neprozrazuje, kdo lže, kdo
          je skutečně kdo, ani jaký osud postavy ve hře čeká.
        </p>
      </PageHeader>
      <div className="mt-14">
        <CharacterGrid people={people} />
      </div>
    </Container>
  );
}
