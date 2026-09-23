import type { SpoilerLevel } from "./spoiler";
import type { ContentVisibility } from "./visibility";

export type CharacterRecord = {
  id: string;
  name: string;
  ageLabel: string;
  occupation: string;
  statusLabel: string;
  visibility: ContentVisibility;
  spoilerLevel?: SpoilerLevel;
  portraitAsset: string | null;
  publicNote: string | null;
};

/** Public DTO — does not reveal who lies, who died in-game, or hidden identities. */
export type PublicCharacter = {
  id: string;
  name: string;
  ageLabel: string;
  occupation: string;
  statusLabel: string;
  portraitAsset: string | null;
  publicNote: string | null;
};
