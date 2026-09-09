import { Button } from "@/components/ui/Button";
import type { ReleaseConfig } from "@/types";

export function DownloadPanel({ release }: { release: ReleaseConfig }) {
  const ready = release.available && Boolean(release.downloadUrl);

  return (
    <div className="dossier p-8 sm:p-10">
      <p className="kicker">macOS</p>
      <h2 className="display-title mt-4 text-3xl sm:text-4xl">Stáhnout pro macOS</h2>
      <p className="mt-4 max-w-xl text-paper/85">
        Vyžaduje {release.minimumMacOSLabel}. Aktuální verze {release.version}.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        {ready ? (
          <Button href={release.downloadUrl} variant="primary">
            Stáhnout pro macOS
          </Button>
        ) : (
          <Button variant="primary" disabled aria-disabled="true">
            Stáhnout pro macOS
          </Button>
        )}
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-metal">
          {ready ? `Verze ${release.version}` : "Distribuce se připravuje"}
        </p>
      </div>
    </div>
  );
}
