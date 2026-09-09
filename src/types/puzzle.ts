import type { ContentVisibility } from "./visibility";

/**
 * Puzzle model shared with the macOS game.
 * Solutions must remain visibility: "game" and must never enter public APIs.
 */
export type PuzzleRecord = {
  id: string;
  caseId: string;
  visibility: ContentVisibility;
  title: string;
  kind: "contradiction" | "connection" | "timeline" | "deduction" | "other";
};

export type DeductionRecord = {
  id: string;
  caseId: string;
  visibility: ContentVisibility;
  evidenceIds: string[];
};
