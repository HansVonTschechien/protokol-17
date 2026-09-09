import { CharacterCard } from "@/features/characters/CharacterCard";
import type { PublicCharacter } from "@/types";

export function CharacterGrid({ people }: { people: PublicCharacter[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person) => (
        <CharacterCard key={person.id} person={person} />
      ))}
    </div>
  );
}
