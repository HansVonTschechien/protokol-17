import type { CaseRecord, PublicCase } from "@/types";

export function toPublicCase(record: CaseRecord): PublicCase | null {
  if (record.visibility !== "public") {
    return null;
  }

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
    publicSummary: record.publicSummary,
    publicSetting: record.publicSetting ?? null,
    publicDateLabel: record.publicDateLabel ?? null,
    coverAsset: record.coverAsset,
  };
}
