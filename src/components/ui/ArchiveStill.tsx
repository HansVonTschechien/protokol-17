import type { StillKind } from "@/types/home";

export function ArchiveStill({ kind }: { kind: StillKind }) {
  return (
    <svg viewBox="0 0 320 200" className="h-auto w-full" aria-hidden="true">
      <rect width="320" height="200" fill="#141210" />
      <rect x="16" y="16" width="288" height="168" fill="none" stroke="#9a9790" strokeOpacity="0.35" />
      {kind === "room" ? <Room /> : null}
      {kind === "desk" ? <Desk /> : null}
      {kind === "recorder" ? <Recorder /> : null}
      {kind === "photo" ? <Photo /> : null}
      {kind === "phone" ? <Phone /> : null}
      {kind === "map" ? <MapStill /> : null}
      {kind === "file" ? <FileStill /> : null}
      {kind === "envelope" ? <Envelope /> : null}
      {kind === "key" ? <Key /> : null}
      {kind === "vhs" ? <Vhs /> : null}
      {kind === "door" ? <Door /> : null}
      {kind === "corridor" ? <Corridor /> : null}
      {kind === "cellar" ? <Cellar /> : null}
      {kind === "yard" ? <Yard /> : null}
      {kind === "statement" ? <Statement /> : null}
      {kind === "ledger" ? <Ledger /> : null}
    </svg>
  );
}

function Room() {
  return (
    <g fill="none" stroke="#cfc4ae" strokeOpacity="0.8">
      <path d="M40 150 H280 L250 70 H70 Z" />
      <rect x="126" y="92" width="68" height="58" />
      <path d="M150 150 V118 H170 V150" />
      <rect x="188" y="108" width="28" height="18" />
    </g>
  );
}

function Desk() {
  return (
    <g fill="#cfc4ae">
      <rect x="48" y="118" width="224" height="10" />
      <rect x="70" y="58" width="78" height="58" transform="rotate(-8 109 87)" />
      <rect x="150" y="64" width="70" height="52" transform="rotate(6 185 90)" fill="#a8987d" />
      <rect x="214" y="96" width="46" height="22" fill="#1f1c18" stroke="#9a9790" />
    </g>
  );
}

function Recorder() {
  return (
    <g fill="none" stroke="#cfc4ae">
      <rect x="78" y="78" width="164" height="52" rx="6" />
      <circle cx="118" cy="104" r="14" />
      <circle cx="168" cy="104" r="14" />
      <path d="M210 96 H228 V112 H210 Z" />
    </g>
  );
}

function Photo() {
  return (
    <g>
      <rect x="96" y="36" width="128" height="132" fill="#e7e1d4" transform="rotate(-4 160 102)" />
      <rect x="108" y="48" width="104" height="86" fill="#1b1a17" transform="rotate(-4 160 102)" />
      <rect x="124" y="86" width="72" height="28" fill="#2a261f" transform="rotate(-4 160 102)" />
    </g>
  );
}

function Phone() {
  return (
    <g fill="none" stroke="#cfc4ae">
      <rect x="128" y="40" width="64" height="120" rx="8" />
      <path d="M144 78 H176 M144 96 H168 M144 114 H172" />
    </g>
  );
}

function MapStill() {
  return (
    <g fill="none" stroke="#cfc4ae" strokeOpacity="0.85">
      <path d="M60 150 C100 40 140 160 180 70 C210 20 250 130 280 60" />
      <path d="M70 70 H250 M90 120 H240" strokeOpacity="0.35" />
      <circle cx="176" cy="92" r="4" fill="#8f2a28" stroke="none" />
    </g>
  );
}

function FileStill() {
  return (
    <g>
      <rect x="96" y="36" width="128" height="136" fill="#1f1c18" stroke="#8f2a28" />
      <rect x="112" y="56" width="72" height="6" fill="#cfc4ae" />
      <rect x="112" y="74" width="96" height="3" fill="#7c7a74" />
      <rect x="112" y="86" width="80" height="3" fill="#7c7a74" />
      <rect x="112" y="98" width="88" height="3" fill="#7c7a74" />
    </g>
  );
}

function Envelope() {
  return (
    <g fill="none" stroke="#cfc4ae">
      <rect x="64" y="62" width="192" height="88" />
      <path d="M64 62 L160 118 L256 62" />
    </g>
  );
}

function Key() {
  return (
    <g fill="none" stroke="#cfc4ae" strokeWidth="3">
      <circle cx="118" cy="100" r="22" />
      <path d="M140 100 H214 M196 100 V116 M214 100 V112" />
    </g>
  );
}

function Vhs() {
  return (
    <g fill="none" stroke="#cfc4ae">
      <rect x="70" y="58" width="180" height="96" />
      <circle cx="124" cy="106" r="16" />
      <circle cx="196" cy="106" r="16" />
      <path d="M140 106 H180" />
    </g>
  );
}

function Door() {
  return (
    <g fill="none" stroke="#cfc4ae">
      <rect x="112" y="36" width="96" height="132" />
      <circle cx="188" cy="108" r="3" fill="#8f2a28" stroke="none" />
      <path d="M128 150 H192" strokeOpacity="0.4" />
    </g>
  );
}

function Corridor() {
  return (
    <g fill="none" stroke="#cfc4ae" strokeOpacity="0.8">
      <path d="M40 160 L120 48 H200 L280 160" />
      <path d="M120 48 V160 M200 48 V160" strokeOpacity="0.35" />
    </g>
  );
}

function Cellar() {
  return (
    <g fill="none" stroke="#cfc4ae">
      <path d="M50 56 H270 V150 H50 Z" />
      <path d="M50 86 H270 M50 116 H270 M110 56 V150 M210 56 V150" strokeOpacity="0.35" />
    </g>
  );
}

function Yard() {
  return (
    <g fill="none" stroke="#cfc4ae">
      <path d="M40 150 H280" />
      <rect x="70" y="78" width="54" height="72" />
      <rect x="140" y="58" width="70" height="92" />
      <rect x="224" y="96" width="40" height="54" />
    </g>
  );
}

function Statement() {
  return (
    <g>
      <rect x="78" y="40" width="164" height="124" fill="#e7e1d4" />
      <rect x="96" y="62" width="90" height="5" fill="#2a261f" opacity="0.45" />
      <rect x="96" y="78" width="128" height="4" fill="#2a261f" opacity="0.3" />
      <rect x="96" y="92" width="110" height="4" fill="#2a261f" opacity="0.3" />
      <rect x="96" y="106" width="120" height="4" fill="#2a261f" opacity="0.3" />
    </g>
  );
}

function Ledger() {
  return (
    <g fill="none" stroke="#cfc4ae">
      <rect x="70" y="40" width="180" height="124" />
      <path d="M70 72 H250 M70 100 H250 M70 128 H250" strokeOpacity="0.4" />
      <rect x="96" y="112" width="70" height="8" fill="#1b1a17" stroke="none" />
    </g>
  );
}
