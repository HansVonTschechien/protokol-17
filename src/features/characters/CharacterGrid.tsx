import { CharacterCard } from "@/features/characters/CharacterCard";
import type { PublicCharacter } from "@/types";

export function CharacterGrid({ people }: { people: PublicCharacter[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 min-[520px]:grid-cols-2 lg:grid-cols-3">
      {people.map((person) => (
        <CharacterCard key={person.id} person={person} />
      ))}
    </div>
  );
}
