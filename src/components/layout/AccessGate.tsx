"use client";

import { useEffect, useState } from "react";

const STEPS = ["Přístup k archivu…", "Ověřování…", "Přístup povolen"];

export function AccessGate() {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = sessionStorage.getItem("p17-archive-access") === "1";
    if (reduced || seen) return;

    const start = window.setTimeout(() => setVisible(true), 0);
    const timers = [
      window.setTimeout(() => setStep(1), 700),
      window.setTimeout(() => setStep(2), 1500),
      window.setTimeout(() => {
        sessionStorage.setItem("p17-archive-access", "1");
        setVisible(false);
      }, 2300),
    ];

    return () => {
      window.clearTimeout(start);
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="access-gate" role="status" aria-live="polite">
      <div className="px-6 text-center">
        <p className="font-mono text-[0.7rem] tracking-[0.32em] uppercase text-metal">
          Protokol 17
        </p>
        <p className="mt-8 font-mono text-sm tracking-[0.22em] uppercase text-off-white">
          {STEPS[step]}
          <span className="ml-1 inline-block w-2 animate-[pulse-cursor_1s_step-end_infinite] bg-off-white">
            &nbsp;
          </span>
        </p>
      </div>
    </div>
  );
}
