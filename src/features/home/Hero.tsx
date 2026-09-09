import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/config/site";

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden lamp-wash">
      <div className="scan-line hidden md:block" />
      <HeroScene />
      <Container className="relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-28 sm:pb-20">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-metal">
          {SITE.classification}
        </p>
        <h1 className="mt-8 font-mono text-sm tracking-[0.42em] text-paper sm:text-base">
          PROTOKOL 17
        </h1>
        <p className="display-title mt-6 max-w-3xl text-4xl text-off-white sm:text-6xl md:text-7xl">
          Některé případy
          <br />
          nikdy nebyly uzavřeny.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button href="/archiv" variant="primary">
            Vstoupit do archivu
          </Button>
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-metal-light">
            Detektivní logická hra pro macOS
          </p>
        </div>
      </Container>
    </section>
  );
}

function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute right-[-8%] top-[12%] hidden w-[min(54vw,640px)] lg:block">
        <DeskStill />
      </div>
      <div className="absolute right-4 top-28 w-40 opacity-60 sm:w-52 lg:hidden">
        <svg viewBox="0 0 132 84" className="h-auto w-full">
          <rect width="132" height="84" rx="4" fill="#1f1c18" stroke="#9a9790" strokeWidth="1" />
          <text x="16" y="38" fill="#cfc4ae" fontFamily="ui-monospace, monospace" fontSize="22">
            314
          </text>
          <text x="16" y="62" fill="#7c7a74" fontFamily="ui-monospace, monospace" fontSize="9">
            HOTEL AURORA
          </text>
        </svg>
      </div>
      <div className="absolute bottom-[22%] left-[8%] hidden opacity-70 md:block">
        <Polaroid />
      </div>
    </div>
  );
}

function DeskStill() {
  return (
    <svg viewBox="0 0 640 520" className="h-auto w-full opacity-90">
      <rect x="40" y="210" width="560" height="18" fill="#1a1814" />
      <rect x="28" y="228" width="584" height="220" fill="#141210" />
      <rect x="28" y="228" width="584" height="12" fill="#2a261f" />
      <g transform="translate(80 70) rotate(-8)">
        <rect width="210" height="270" fill="#d8ccb6" />
        <rect x="16" y="22" width="90" height="10" fill="#8f2a28" />
        <rect x="16" y="48" width="178" height="6" fill="#2a261f" opacity=".55" />
        <rect x="16" y="64" width="150" height="6" fill="#2a261f" opacity=".4" />
        <rect x="16" y="96" width="178" height="4" fill="#2a261f" opacity=".28" />
        <rect x="16" y="110" width="164" height="4" fill="#2a261f" opacity=".28" />
        <rect x="16" y="124" width="170" height="4" fill="#2a261f" opacity=".28" />
        <rect x="16" y="138" width="120" height="4" fill="#2a261f" opacity=".22" />
        <rect x="70" y="188" width="86" height="28" fill="none" stroke="#8f2a28" strokeWidth="2" />
      </g>
      <g transform="translate(250 96) rotate(6)">
        <rect width="188" height="248" fill="#cfc4ae" />
        <rect x="14" y="18" width="72" height="86" fill="#2a261f" />
        <rect x="14" y="118" width="160" height="5" fill="#2a261f" opacity=".45" />
        <rect x="14" y="134" width="140" height="5" fill="#2a261f" opacity=".3" />
        <rect x="14" y="150" width="154" height="5" fill="#2a261f" opacity=".3" />
        <rect x="14" y="166" width="110" height="5" fill="#2a261f" opacity=".22" />
      </g>
      <g transform="translate(430 164) rotate(-3)">
        <rect width="132" height="84" rx="4" fill="#1f1c18" stroke="#9a9790" strokeWidth="1" />
        <text x="16" y="38" fill="#cfc4ae" fontFamily="ui-monospace, monospace" fontSize="22">
          314
        </text>
        <text x="16" y="62" fill="#7c7a74" fontFamily="ui-monospace, monospace" fontSize="9">
          HOTEL AURORA
        </text>
      </g>
      <g transform="translate(470 268)">
        <rect width="92" height="38" rx="8" fill="#1a1814" />
        <rect x="10" y="12" width="48" height="14" rx="3" fill="#2a261f" />
        <circle cx="74" cy="19" r="8" fill="#3a342c" />
      </g>
    </svg>
  );
}

function Polaroid() {
  return (
    <svg viewBox="0 0 180 210" className="h-44 w-auto rotate-[-8deg] opacity-80">
      <rect width="180" height="210" fill="#e7e1d4" />
      <rect x="12" y="12" width="156" height="150" fill="#161410" />
      <rect x="28" y="78" width="124" height="56" fill="#2a261f" />
      <rect x="48" y="48" width="84" height="40" fill="#1f1c18" />
      <rect x="12" y="176" width="70" height="6" fill="#7c7a74" />
    </svg>
  );
}
