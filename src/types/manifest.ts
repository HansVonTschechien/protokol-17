export type CaseManifestEntry = {
  id: string;
  title: string;
  version: number;
  requiredCase: string | null;
  available: boolean;
  downloadSize: number | null;
};

export type ContentManifest = {
  gameVersion: string;
  contentVersion: string;
  latest: boolean;
  releasedAt: string;
  minimumMacOS: string;
  cases: CaseManifestEntry[];
};

export type VersionPayload = {
  gameVersion: string;
  contentVersion: string;
  latest: boolean;
};

export type ReleaseConfig = {
  version: string;
  gameVersion: string;
  contentVersion: string;
  downloadUrl: string;
  minimumMacOS: string;
  minimumMacOSLabel: string;
  available: boolean;
  releasedAt: string;
};
