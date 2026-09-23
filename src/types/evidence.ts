import type { SpoilerLevel } from "./spoiler";
import type { ContentVisibility } from "./visibility";

export type EvidenceType =
  | "sms"
  | "photo"
  | "receipt"
  | "statement"
  | "phone_log"
  | "document"
  | "audio"
  | "video"
  | "other";

export type EvidenceRecord = {
  id: string;
  caseId: string;
  code: string;
  title: string;
  type: EvidenceType;
  visibility: ContentVisibility;
  spoilerLevel?: SpoilerLevel;
  datedAt: string | null;
  datedLabel: string | null;
  assetPath: string;
  publicCaption: string | null;
};

export type PublicEvidence = {
  id: string;
  caseId: string;
  code: string;
  title: string;
  type: EvidenceType;
  datedAt: string | null;
  datedLabel: string | null;
  assetPath: string;
  publicCaption: string | null;
};
