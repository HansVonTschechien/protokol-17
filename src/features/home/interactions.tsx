"use client";

import { useState } from "react";
import { ArchiveStill } from "@/components/ui/ArchiveStill";
import { Modal } from "@/components/ui/Modal";
import type { HomeContent } from "@/types/home";

export function WhatIf({ content }: { content: HomeContent["whatIf"] }) {
  const [step, setStep] = useState(0);
  const done = step >= content.questions.length;
  const current = content.questions[Math.min(step, content.questions.length - 1)];

  return (
    <div className="dossier p-5 sm:p-10">
      <p className="font-mono text-[0.68rem] tracking-[0.16em] text-metal">
        {String(Math.min(step + 1, content.questions.length)).padStart(2, "0")} /{" "}
        {String(content.questions.length).padStart(2, "0")}
      </p>
      <p className="mt-6 font-serif text-[clamp(1.4rem,3vw,2rem)] text-off-white">
        {done ? content.closing : current}
      </p>
      {done ? null : (
        <button type="button" className="btn mt-8 w-full sm:w-auto" onClick={() => setStep((value) => value + 1)}>
          Další otázka
        </button>
      )}
    </div>
  );
}

export function EvidenceDesk({ content }: { content: HomeContent["evidence"] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = content.items.find((item) => item.id === activeId) ?? null;

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {content.items.map((item) => (
          <button
            key={item.id}
            type="button"
            className="dossier group overflow-hidden text-left"
            onClick={() => setActiveId(item.id)}
          >
            <div className="relative bg-charcoal-2">
              <ArchiveStill kind={item.kind} />
              <span className="pointer-events-none absolute inset-x-3 bottom-3 border border-line bg-black/80 px-3 py-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-paper opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                Zvětšit důkaz
              </span>
            </div>
            <div className="p-4">
              <p className="font-mono text-[0.66rem] tracking-[0.16em] text-metal">Důkaz {item.code}</p>
              <h3 className="mt-2 font-serif text-2xl">{item.label}</h3>
              <p className="mt-2 font-mono text-[0.66rem] text-paper-dim">{item.stamp}</p>
            </div>
          </button>
        ))}
      </div>
      <Modal open={Boolean(active)} title={active?.label ?? "Důkaz"} onClose={() => setActiveId(null)}>
        {active ? (
          <div>
            <div className="flex flex-col gap-4 border-b border-line px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <div className="min-w-0">
                <p className="font-mono text-[0.66rem] tracking-[0.16em] text-metal">Důkaz {active.code}</p>
                <h2 className="mt-1 font-serif text-2xl">{active.label}</h2>
              </div>
              <button type="button" className="btn !min-h-11 w-full sm:w-auto" onClick={() => setActiveId(null)}>
                Zavřít
              </button>
            </div>
            <ArchiveStill kind={active.kind} />
            <div className="space-y-3 px-4 py-5 text-sm text-paper/90 sm:px-5">
              <p className="font-mono text-[0.68rem] text-metal">{active.stamp}</p>
              <p>{active.caption}</p>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-metal">
                Cvičný materiál · bez vyhodnocení
              </p>
            </div>
          </div>
        ) : null}
      </Modal>
    </>
  );
}

export function DemoPuzzle({ content }: { content: HomeContent["puzzle"] }) {
  const [picked, setPicked] = useState<string | null>(null);
  const [result, setResult] = useState<"idle" | "found" | "miss">("idle");
  const choice = content.items.find((item) => item.id === picked);

  function check() {
    if (!choice) return;
    setResult(choice.contradicts ? "found" : "miss");
  }

  return (
    <div>
      <p className="text-paper/85">{content.prompt}</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {content.items.map((item) => {
          const selected = picked === item.id;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={selected}
              onClick={() => {
                setPicked(item.id);
                setResult("idle");
              }}
              className={`dossier p-5 text-left ${selected ? "border-paper" : ""}`}
            >
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-metal">{item.label}</p>
              <p className="mt-4 font-serif text-2xl text-off-white">{item.body}</p>
            </button>
          );
        })}
      </div>
      <button type="button" className="btn btn-primary mt-6 w-full sm:w-auto" disabled={!picked} onClick={check}>
        Ověřit rozpor
      </button>
      {result === "found" ? (
        <div className="dossier mt-6 p-5 sm:p-6">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-accent">{content.successTitle}</p>
          <p className="mt-3 text-paper/90">{content.successBody}</p>
        </div>
      ) : null}
      {result === "miss" ? <p className="mt-6 text-sm text-paper/80">{content.wrong}</p> : null}
    </div>
  );
}

export function Recordings({ content }: { content: HomeContent["recordings"] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  function play(id: string) {
    setActiveId(id);
    const audio = new AudioContext();
    const duration = 1.8;
    const buffer = audio.createBuffer(1, Math.floor(audio.sampleRate * duration), audio.sampleRate);
    const data = buffer.getChannelData(0);
    for (let index = 0; index < data.length; index += 1) {
      const envelope = Math.sin((index / data.length) * Math.PI);
      data[index] = (Math.random() * 2 - 1) * 0.05 * envelope;
    }
    const source = audio.createBufferSource();
    source.buffer = buffer;
    const filter = audio.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 880;
    source.connect(filter);
    filter.connect(audio.destination);
    source.onended = () => {
      void audio.close();
    };
    source.start();
  }

  return (
    <div className="grid gap-4">
      {content.items.map((item) => (
        <button
          key={item.id}
          type="button"
          className="dossier flex flex-col gap-3 p-5 text-left sm:flex-row sm:items-end sm:justify-between"
          onClick={() => play(item.id)}
        >
          <div className="min-w-0">
            <p className="font-mono text-[0.66rem] tracking-[0.16em] text-metal">
              {item.code} · {item.stamp} · {item.status}
            </p>
            <p className="mt-3 font-serif text-xl text-off-white">
              {activeId === item.id ? item.line : "Přehrát záznam"}
            </p>
          </div>
          <span className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-paper-dim">
            {activeId === item.id ? "Páska" : "Play"}
          </span>
        </button>
      ))}
    </div>
  );
}

export function ArchiveGallery({ content }: { content: HomeContent["gallery"] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [pulsed, setPulsed] = useState<string | null>(null);
  const active = content.items.find((item) => item.id === activeId) ?? null;

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {content.items.map((item) => (
          <button
            key={item.id}
            type="button"
            className="dossier group overflow-hidden text-left"
            onClick={() => {
              setPulsed(item.id);
              setActiveId(item.id);
            }}
          >
            <div className="relative">
              <ArchiveStill kind={item.kind} />
              <span className="pointer-events-none absolute inset-x-3 bottom-3 bg-black/75 px-3 py-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-paper opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100">
                Zvětšit důkaz
              </span>
            </div>
            <p className={`px-4 py-3 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-metal ${pulsed === item.id ? "text-paper" : ""}`}>
              {item.stamp}
            </p>
          </button>
        ))}
      </div>
      <Modal open={Boolean(active)} title={active?.stamp ?? "Archiv"} onClose={() => setActiveId(null)}>
        {active ? (
          <div>
            <div className="flex flex-col gap-4 border-b border-line px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <p className="font-mono text-[0.66rem] tracking-[0.14em] text-metal">{active.stamp}</p>
              <button type="button" className="btn !min-h-11 w-full sm:w-auto" onClick={() => setActiveId(null)}>
                Zavřít
              </button>
            </div>
            <ArchiveStill kind={active.kind} />
            <p className="px-4 py-5 text-sm text-paper/90 sm:px-5">{active.caption}</p>
          </div>
        ) : null}
      </Modal>
    </>
  );
}

export function SeventeenMark() {
  function disturb() {
    const flash = document.createElement("div");
    flash.className = "archive-flash";
    document.body.appendChild(flash);
    window.setTimeout(() => flash.remove(), 420);

    const audio = new AudioContext();
    const oscillator = audio.createOscillator();
    const gain = audio.createGain();
    oscillator.type = "square";
    oscillator.frequency.value = 174;
    gain.gain.setValueAtTime(0.03, audio.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + 0.18);
    oscillator.connect(gain);
    gain.connect(audio.destination);
    oscillator.onended = () => {
      void audio.close();
    };
    oscillator.start();
    oscillator.stop(audio.currentTime + 0.2);
  }

  return (
    <button type="button" className="text-off-white underline decoration-line underline-offset-4" onClick={disturb}>
      17
    </button>
  );
}

export function NewsletterForm({ content }: { content: HomeContent["newsletter"] }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <form
      className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
      onSubmit={(event) => {
        event.preventDefault();
        if (!email.trim()) return;
        setSent(true);
        setEmail("");
      }}
    >
      <label className="sr-only" htmlFor="archive-mail">
        {content.placeholder}
      </label>
      <input
        id="archive-mail"
        type="email"
        required
        value={email}
        placeholder={content.placeholder}
        onChange={(event) => setEmail(event.target.value)}
        className="min-h-12 w-full border border-line bg-black px-4 text-paper outline-none placeholder:text-metal sm:max-w-sm"
      />
      <button type="submit" className="btn btn-primary w-full sm:w-auto">
        {content.action}
      </button>
      {sent ? <p className="text-sm text-paper/80 sm:basis-full">{content.pending}</p> : null}
    </form>
  );
}
