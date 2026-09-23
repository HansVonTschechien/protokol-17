export type PlatformStatus =
  | "available"
  | "coming_soon"
  | "development"
  | "unavailable";

export type GamePlatform =
  | "macos"
  | "windows"
  | "ios"
  | "ipados"
  | "iphone"
  | "ipad"
  | "android"
  | "linux"
  | "steam"
  | "epic";

export type DownloadFormat = "dmg" | "zip" | "exe" | "msi" | "portable" | "apk";

export type PlatformSpec = {
  label: string;
  value: string;
};

export type DownloadArtifact = {
  id: string;
  label: string;
  format: DownloadFormat;
  architecture?: string;
  status: PlatformStatus;
  /** Hidden builds stay in the data until a release turns this on. */
  visible?: boolean;
  downloadUrl?: string;
  fileSize?: string;
  checksum?: string;
};

export type PlatformDownload = {
  id: string;
  name: string;
  platform: GamePlatform;
  status: PlatformStatus;
  version?: string;
  releaseDate?: string;
  downloadUrl?: string;
  storeUrl?: string;
  minimumVersion?: string;
  architecture?: string;
  fileSize?: string;
  checksum?: string;
  notes?: string;
  actionLabel: string;
  pendingLabel?: string;
  specs?: PlatformSpec[];
  artifacts?: DownloadArtifact[];
  assurance?: string;
  updates?: string;
  changelog?: string[];
};

export type GameRelease = {
  version: string;
  platform: string;
  releaseDate: string;
  status: PlatformStatus;
  downloadUrl?: string;
  storeUrl?: string;
  fileSize?: string;
  checksum?: string;
  changelog?: string[];
};

export type DownloadSummaryCopy = {
  versionLabel: string;
  updatedLabel: string;
  changelogLabel: string;
  emptyVersion: string;
  emptyUpdated: string;
  emptyChangelog: string;
};

export type DownloadsCatalog = {
  spoilerLevel?: number;
  title: string;
  subtitle: string;
  summary: DownloadSummaryCopy;
  statusLabels: Record<PlatformStatus, string>;
  releases: GameRelease[];
  platforms: PlatformDownload[];
};

export type PublicDownloadArtifact = Omit<DownloadArtifact, "visible">;

export type PublicPlatformDownload = Omit<
  PlatformDownload,
  "artifacts" | "specs" | "changelog"
> & {
  artifacts: PublicDownloadArtifact[];
  specs: PlatformSpec[];
  changelog: string[];
};

export type PublicDownloads = {
  title: string;
  subtitle: string;
  summary: DownloadSummaryCopy;
  statusLabels: Record<PlatformStatus, string>;
  releases: GameRelease[];
  platforms: PublicPlatformDownload[];
};
