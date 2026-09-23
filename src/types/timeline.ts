import type { SpoilerLevel } from "./spoiler";
import type { ContentVisibility } from "./visibility";

export type TimelineEventRecord = {
  id: string;
  caseId: string | null;
  visibility: ContentVisibility;
  spoilerLevel?: SpoilerLevel;
  datedAt: string;
  datedLabel: string;
  title: string;
  summary: string;
};

export type PublicTimelineEvent = {
  id: string;
  caseId: string | null;
  datedAt: string;
  datedLabel: string;
  title: string;
  summary: string;
};
