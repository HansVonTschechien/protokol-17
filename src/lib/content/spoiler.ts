import type { ContentVisibility, RevealState, SpoilerLevel } from "@/types";

/** Public site and public API may expose only these levels. */
export const PUBLIC_SPOILER_CEILING = 1;

export type { RevealState, SpoilerLevel };

export function isWithinPublicSpoilerCeiling(level: number | undefined): boolean {
  return (level ?? 0) <= PUBLIC_SPOILER_CEILING;
}

export function isPubliclyVisible(record: {
  visibility: ContentVisibility;
  spoilerLevel?: number;
}): boolean {
  return record.visibility === "public" && isWithinPublicSpoilerCeiling(record.spoilerLevel);
}
