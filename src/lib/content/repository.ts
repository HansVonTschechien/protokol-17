import "server-only";

import { readFile } from "node:fs/promises";
import path from "node:path";
import { toPublicCase } from "@/lib/content/mappers";
import { isPubliclyVisible, isWithinPublicSpoilerCeiling } from "@/lib/content/spoiler";
import type {
  CaseRecord,
  CharacterRecord,
  ContentManifest,
  EvidenceRecord,
  PublicCase,
  PublicCharacter,
  PublicEvidence,
  PublicTimelineEvent,
  DownloadsCatalog,
  PublicDownloads,
  ReleaseConfig,
  TimelineEventRecord,
  UpdateEntry,
} from "@/types";
import { toPublicDownloads } from "./public-downloads.mjs";

/** Only the public tree is readable here. `src/content/private` and `src/content/game` stay out of the site. */
const PUBLIC_ROOT = path.join(process.cwd(), "src/content/public");

async function readJson<T>(relativePath: string): Promise<T> {
  const filePath = path.join(PUBLIC_ROOT, relativePath);
  const raw = await readFile(filePath, "utf8");
  return JSON.parse(raw) as T;
}

function toPublicEvidence(record: EvidenceRecord): PublicEvidence | null {
  if (!isPubliclyVisible(record)) return null;
  return {
    id: record.id,
    caseId: record.caseId,
    code: record.code,
    title: record.title,
    type: record.type,
    datedAt: record.datedAt,
    datedLabel: record.datedLabel,
    assetPath: record.assetPath,
    publicCaption: record.publicCaption,
  };
}

function toPublicCharacter(record: CharacterRecord): PublicCharacter | null {
  if (!isPubliclyVisible(record)) return null;
  return {
    id: record.id,
    name: record.name,
    ageLabel: record.ageLabel,
    occupation: record.occupation,
    statusLabel: record.statusLabel,
    portraitAsset: record.portraitAsset,
    publicNote: record.publicNote,
  };
}

function toPublicTimeline(
  record: TimelineEventRecord,
): PublicTimelineEvent | null {
  if (!isPubliclyVisible(record)) return null;
  return {
    id: record.id,
    caseId: record.caseId,
    datedAt: record.datedAt,
    datedLabel: record.datedLabel,
    title: record.title,
    summary: record.summary,
  };
}

export async function getRelease(): Promise<ReleaseConfig> {
  return readJson<ReleaseConfig>("release.json");
}

export async function getDownloads(): Promise<PublicDownloads> {
  const catalog = await readJson<DownloadsCatalog>("downloads.json");
  if (!isWithinPublicSpoilerCeiling(catalog.spoilerLevel)) {
    throw new Error("Downloads catalog is above the spoiler ceiling.");
  }
  return toPublicDownloads(catalog) as PublicDownloads;
}

export async function getPublicCases(): Promise<PublicCase[]> {
  const records = await readJson<CaseRecord[]>("cases/index.json");
  return records
    .map(toPublicCase)
    .filter((item): item is PublicCase => item !== null);
}

export async function getPublicCase(id: string): Promise<PublicCase | null> {
  const normalized = id.replaceAll("-", "_");
  const cases = await getPublicCases();
  return cases.find((item) => item.id === normalized || item.id === id) ?? null;
}

export async function getPublicEvidence(caseId: string): Promise<PublicEvidence[]> {
  if (caseId.includes("..") || caseId.includes("/") || caseId.includes("\\")) {
    return [];
  }

  try {
    const records = await readJson<EvidenceRecord[]>(
      `evidence/${caseId.replaceAll("_", "-")}.json`,
    );
    return records
      .map(toPublicEvidence)
      .filter((item): item is PublicEvidence => item !== null);
  } catch {
    return [];
  }
}

export async function getPublicCharacters(): Promise<PublicCharacter[]> {
  const records = await readJson<CharacterRecord[]>("characters.json");
  return records
    .map(toPublicCharacter)
    .filter((item): item is PublicCharacter => item !== null);
}

export async function getPublicTimeline(): Promise<PublicTimelineEvent[]> {
  const records = await readJson<TimelineEventRecord[]>("timeline.json");
  return records
    .map(toPublicTimeline)
    .filter((item): item is PublicTimelineEvent => item !== null);
}

export async function getUpdates(): Promise<UpdateEntry[]> {
  return readJson<UpdateEntry[]>("updates.json");
}

export async function getPageContent<T>(name: string): Promise<T> {
  return readJson<T>(`pages/${name}.json`);
}

export async function getPublicPage<T>(name: string): Promise<T> {
  const page = await getPageContent<T & { spoilerLevel?: number }>(name);
  if (!isWithinPublicSpoilerCeiling(page.spoilerLevel)) {
    throw new Error(`Public page "${name}" is above the spoiler ceiling.`);
  }
  return page;
}

export async function getManifest(): Promise<ContentManifest> {
  const [release, cases] = await Promise.all([getRelease(), getPublicCases()]);

  return {
    gameVersion: release.gameVersion,
    contentVersion: release.contentVersion,
    latest: true,
    releasedAt: release.releasedAt,
    minimumMacOS: release.minimumMacOS,
    cases: cases.map((item) => ({
      id: item.id,
      title: item.title,
      version: item.version,
      requiredCase: item.requiredCase,
      available: item.available,
      downloadSize: item.downloadSize,
    })),
  };
}

export async function getPublicContentPack(id: string) {
  const caseRecord = await getPublicCase(id);
  if (!caseRecord) return null;

  const evidence = await getPublicEvidence(id);
  return {
    case: caseRecord,
    evidence,
  };
}
