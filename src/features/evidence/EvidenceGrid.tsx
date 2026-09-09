"use client";

import { useState } from "react";
import { EvidenceAsset } from "@/components/ui/EvidenceAsset";
import { Modal } from "@/components/ui/Modal";
import type { PublicEvidence } from "@/types";

export function EvidenceGrid({ items }: { items: PublicEvidence[] }) {
  const [active, setActive] = useState<PublicEvidence | null>(null);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(item)}
            className="dossier overflow-hidden text-left"
          >
            <div className="aspect-[4/3] bg-charcoal-2">
              <EvidenceAsset src={item.assetPath} alt={item.title} />
            </div>
            <div className="p-4">
              <p className="font-mono text-[0.66rem] tracking-[0.18em] text-metal">
                Důkaz #{item.code}
              </p>
              <h3 className="mt-2 font-serif text-xl text-off-white">{item.title}</h3>
              {item.datedLabel ? (
                <p className="mt-2 font-mono text-[0.66rem] text-paper-dim">
                  {item.datedLabel}
                </p>
              ) : null}
            </div>
          </button>
        ))}
      </div>

      <Modal
        open={Boolean(active)}
        title={active?.title ?? "Důkaz"}
        onClose={() => setActive(null)}
      >
        {active ? (
          <div>
            <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-4">
              <div>
                <p className="font-mono text-[0.66rem] tracking-[0.18em] text-metal">
                  Důkaz #{active.code}
                </p>
                <h2 className="mt-1 font-serif text-2xl">{active.title}</h2>
              </div>
              <button type="button" className="btn !min-h-10" onClick={() => setActive(null)}>
                Zavřít
              </button>
            </div>
            <div className="bg-black">
              <div className="mx-auto max-h-[58vh] overflow-hidden">
                <EvidenceAsset
                  src={active.assetPath}
                  alt={active.title}
                  className="max-h-[58vh] object-contain"
                />
              </div>
            </div>
            <div className="space-y-3 px-5 py-5 text-sm text-paper/90">
              {active.datedLabel ? (
                <p className="font-mono text-[0.68rem] text-metal">{active.datedLabel}</p>
              ) : null}
              {active.publicCaption ? <p>{active.publicCaption}</p> : null}
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-metal">
                Veřejný archiv · bez vyhodnocení
              </p>
            </div>
          </div>
        ) : null}
      </Modal>
    </>
  );
}
