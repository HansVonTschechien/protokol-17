import type { RevealState, SpoilerLevel } from "./spoiler";
import type { ContentVisibility } from "./visibility";

export type CaseStatus =
  | "tutorial"
  | "available"
  | "coming_soon"
  | "locked";

export type CaseRecord = {
  id: string;
  number: number;
  title: string;
  status: CaseStatus;
  visibility: ContentVisibility;
  available: boolean;
  version: number;
  requiredCase: string | null;
  downloadSize: number | null;
  releaseDate: string | null;
  publicSummary: string;
  publicSetting?: string | null;
  publicDateLabel?: string | null;
  coverAsset: string | null;
  spoilerLevel?: SpoilerLevel;
  /** Controls how much of the public summary the website may print. */
  publicReveal?: RevealState;
};

/** Public DTO — no solutions, no hidden identities, no full timeline. */
export type PublicCase = {
  id: string;
  number: number;
  title: string;
  status: CaseStatus;
  available: boolean;
  version: number;
  requiredCase: string | null;
  downloadSize: number | null;
  releaseDate: string | null;
  publicSummary: string;
  publicSetting: string | null;
  publicDateLabel: string | null;
  coverAsset: string | null;
  spoilerLevel: 0 | 1;
  publicReveal: RevealState;
};
