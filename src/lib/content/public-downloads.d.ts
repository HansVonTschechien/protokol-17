import type {
  DownloadSummaryCopy,
  GameRelease,
  PlatformStatus,
  PublicPlatformDownload,
} from "@/types";

export function isReleaseUrl(value: unknown): value is string;

export function toPublicDownloads(catalog: unknown): {
  title: string;
  subtitle: string;
  summary: DownloadSummaryCopy;
  statusLabels: Record<PlatformStatus, string>;
  releases: GameRelease[];
  platforms: PublicPlatformDownload[];
};
