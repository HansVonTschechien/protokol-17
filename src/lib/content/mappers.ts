import { isPubliclyVisible, type RevealState } from "@/lib/content/spoiler";
import type { CaseRecord, PublicCase } from "@/types";

function revealFor(record: CaseRecord): RevealState {
  if (record.publicReveal) return record.publicReveal;
  return record.available ? "full" : "sealed";
}

export function toPublicCase(record: CaseRecord): PublicCase | null {
  if (!isPubliclyVisible(record)) {
    return null;
  }

  const spoilerLevel = record.spoilerLevel === 1 ? 1 : 0;
  const publicReveal = revealFor(record);

  return {
    id: record.id,
    number: record.number,
    title: record.title,
    status: record.status,
    available: record.available,
    version: record.version,
    requiredCase: record.requiredCase,
    downloadSize: record.downloadSize,
    releaseDate: record.releaseDate,
    publicSummary: publicReveal === "sealed" ? "" : record.publicSummary,
    publicSetting: record.publicSetting ?? null,
    publicDateLabel: record.publicDateLabel ?? null,
    coverAsset: record.coverAsset,
    spoilerLevel,
    publicReveal,
  };
}
