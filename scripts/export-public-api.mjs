import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.join(process.cwd(), "src/content/public");
const OUT = path.join(process.cwd(), "public/api");

async function readJson(relativePath) {
  const raw = await readFile(path.join(ROOT, relativePath), "utf8");
  return JSON.parse(raw);
}

async function writeJson(relativePath, data) {
  const filePath = path.join(OUT, relativePath);
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

function publicCase(record) {
  if (record.visibility !== "public") return null;
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

function publicEvidence(record) {
  if (record.visibility !== "public") return null;
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

const release = await readJson("release.json");
const caseRecords = await readJson("cases/index.json");
const cases = caseRecords.map(publicCase).filter(Boolean);

await writeJson("version.json", {
  gameVersion: release.gameVersion,
  contentVersion: release.contentVersion,
  latest: true,
});

await writeJson("manifest.json", {
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
});

await writeJson("cases.json", { cases });

for (const item of cases) {
  await writeJson(`cases/${item.id}.json`, { case: item });
  await writeJson(`cases/${item.id}/version.json`, {
    id: item.id,
    version: item.version,
    available: item.available,
    downloadSize: item.downloadSize,
  });

  let evidence = [];
  try {
    const records = await readJson(`evidence/${item.id.replaceAll("_", "-")}.json`);
    evidence = records.map(publicEvidence).filter(Boolean);
  } catch {
    evidence = [];
  }

  await writeJson(`content/${item.id}.json`, {
    case: item,
    evidence,
  });
}

console.log(`Exported public API files to ${OUT}`);
