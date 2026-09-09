"use client";

import { useState } from "react";
import { AssetPlaceholder } from "@/components/ui/AssetPlaceholder";
import { withBasePath } from "@/lib/paths";

export function EvidenceAsset({
  src,
  alt,
  className = "",
}: {
  src: string | null;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!src) {
    return <AssetPlaceholder className={className} />;
  }

  return (
    <div className={`relative h-full w-full ${className}`.trim()}>
      {failed ? <AssetPlaceholder className="absolute inset-0" /> : null}
      {/* Designed per-case assets; next/image is unnecessary for SVG files. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={withBasePath(src)}
        alt={failed ? "" : alt}
        className={`h-full w-full object-cover ${failed ? "invisible" : ""}`.trim()}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
