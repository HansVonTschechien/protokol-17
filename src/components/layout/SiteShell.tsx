import { AccessGate } from "@/components/layout/AccessGate";
import { Footer } from "@/components/layout/Footer";
import { GrainOverlay } from "@/components/layout/GrainOverlay";
import { Header } from "@/components/layout/Header";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#obsah"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-off-white focus:px-3 focus:py-2 focus:text-black"
      >
        Přeskočit k obsahu
      </a>
      <AccessGate />
      <GrainOverlay />
      <Header />
      <main id="obsah" className="page-enter flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
