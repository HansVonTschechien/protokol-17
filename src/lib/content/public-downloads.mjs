import { platforms as platformRoster } from "../../config/platforms.mjs";

const STATUSES = new Set(["available", "coming_soon", "development", "unavailable"]);

export function isReleaseUrl(value) {
  if (typeof value !== "string" || value.trim() === "") return false;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

function cleanText(value) {
  return typeof value === "string" && value.trim() !== "" ? value.trim() : undefined;
}

function cleanArtifact(artifact) {
  if (!artifact || artifact.visible === false) return null;
  if (!STATUSES.has(artifact.status) || artifact.status === "unavailable") return null;
  const downloadUrl =
    artifact.status === "available" && isReleaseUrl(artifact.downloadUrl)
      ? artifact.downloadUrl
      : undefined;
  if (!downloadUrl) return null;

  return {
    id: artifact.id,
    label: artifact.label,
    format: artifact.format,
    architecture: cleanText(artifact.architecture),
    status: artifact.status,
    downloadUrl,
    fileSize: downloadUrl ? cleanText(artifact.fileSize) : undefined,
    checksum: downloadUrl ? cleanText(artifact.checksum) : undefined,
  };
}

function hasLiveLink(item) {
  if (isReleaseUrl(item.downloadUrl) || isReleaseUrl(item.storeUrl)) return true;
  return (item.artifacts ?? []).some(
    (artifact) =>
      artifact &&
      artifact.visible !== false &&
      artifact.status === "available" &&
      isReleaseUrl(artifact.downloadUrl),
  );
}

function publishedStatus(item) {
  if (!STATUSES.has(item.status) || item.status === "unavailable") return null;
  if (item.status === "available" && !hasLiveLink(item)) return "development";
  return item.status;
}

function alignPlatformRoster(catalog) {
  const byId = new Map((catalog.platforms ?? []).map((item) => [item?.id, item]));
  const known = new Set(platformRoster.map((item) => item.id));
  const primary = platformRoster.map((entry) => {
    const detail = byId.get(entry.id) ?? {
      actionLabel: entry.name,
      pendingLabel: "Připravujeme",
      specs: [],
      artifacts: [],
    };
    return {
      ...detail,
      id: entry.id,
      name: entry.name,
      platform: entry.id,
      status: entry.status,
    };
  });
  const extras = (catalog.platforms ?? []).filter((item) => item && !known.has(item.id));
  return { ...catalog, platforms: [...primary, ...extras] };
}

export function toPublicDownloads(catalog) {
  const aligned = alignPlatformRoster(catalog);
  const platforms = (aligned.platforms ?? [])
    .map((item) => {
      if (!item) return null;
      const status = publishedStatus(item);
      if (!status) return null;
      const released = status === "available";
      const downloadUrl = released && isReleaseUrl(item.downloadUrl) ? item.downloadUrl : undefined;
      const storeUrl = released && isReleaseUrl(item.storeUrl) ? item.storeUrl : undefined;

      return {
        id: item.id,
        name: item.name,
        platform: item.platform,
        status,
        version: released ? cleanText(item.version) : undefined,
        releaseDate: released ? cleanText(item.releaseDate) : undefined,
        downloadUrl,
        storeUrl,
        minimumVersion: cleanText(item.minimumVersion),
        architecture: cleanText(item.architecture),
        fileSize: released ? cleanText(item.fileSize) : undefined,
        checksum: released ? cleanText(item.checksum) : undefined,
        notes: cleanText(item.notes),
        actionLabel: cleanText(item.actionLabel) ?? item.name,
        pendingLabel: cleanText(item.pendingLabel),
        specs: Array.isArray(item.specs)
          ? item.specs.filter((spec) => cleanText(spec?.label) && cleanText(spec?.value))
          : [],
        artifacts: (item.artifacts ?? []).map(cleanArtifact).filter(Boolean),
        assurance: released ? cleanText(item.assurance) : undefined,
        updates: released ? cleanText(item.updates) : undefined,
        changelog: released && Array.isArray(item.changelog) ? item.changelog.filter(cleanText) : [],
      };
    })
    .filter(Boolean);

  const releases = (aligned.releases ?? [])
    .map((item) => {
      if (!item) return null;
      const status = publishedStatus(item);
      if (!status) return null;
      const released = status === "available";
      return {
        version: cleanText(item.version) ?? "",
        platform: item.platform,
        releaseDate: released ? cleanText(item.releaseDate) ?? "" : "",
        status,
        downloadUrl: released && isReleaseUrl(item.downloadUrl) ? item.downloadUrl : undefined,
        storeUrl: released && isReleaseUrl(item.storeUrl) ? item.storeUrl : undefined,
        fileSize: released ? cleanText(item.fileSize) : undefined,
        checksum: released ? cleanText(item.checksum) : undefined,
        changelog: released && Array.isArray(item.changelog) ? item.changelog.filter(cleanText) : [],
      };
    })
    .filter(Boolean);

  return {
    title: aligned.title,
    subtitle: aligned.subtitle,
    summary: aligned.summary,
    statusLabels: aligned.statusLabels,
    releases,
    platforms,
  };
}
