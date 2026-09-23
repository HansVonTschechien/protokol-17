import type { PlatformStatus } from "@/types";

export const platforms: readonly {
  id: "macos" | "windows" | "iphone" | "ipad" | "android";
  name: string;
  status: PlatformStatus;
}[];

export function platformListSentence(): string;
export function platformDots(): string;
