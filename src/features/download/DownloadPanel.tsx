import { Badge } from "@/components/ui/Badge";
import type { GameRelease, PlatformStatus, PublicDownloads, PublicPlatformDownload } from "@/types";

const CLOSED_LABEL: Record<Exclude<PlatformStatus, "available" | "unavailable">, string> = {
  coming_soon: "Brzy k dispozici",
  development: "Připravujeme",
};

function formatArchiveDate(iso: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!match) return iso;
  return `${Number(match[3])}. ${Number(match[2])}. ${match[1]}`;
}

function latestPublished(releases: GameRelease[]) {
  return releases
    .filter((item) => item.status === "available" && item.version)
    .sort((a, b) => b.releaseDate.localeCompare(a.releaseDate))[0];
}

function specRows(platform: PublicPlatformDownload) {
  const rows = platform.specs.map((spec) => ({ ...spec }));
  const extras: [string, string | undefined][] = [
    ["Verze", platform.version],
    ["Vydání", platform.releaseDate ? formatArchiveDate(platform.releaseDate) : undefined],
    ["Velikost", platform.fileSize],
    ["SHA-256", platform.checksum],
    ["Podpis", platform.assurance],
    ["Aktualizace", platform.updates],
  ];

  for (const [label, value] of extras) {
    if (value && !rows.some((row) => row.label === label)) {
      rows.push({ label, value });
    }
  }

  for (const label of ["Verze", "Vydání", "Velikost"]) {
    if (!rows.some((row) => row.label === label)) {
      rows.push({ label, value: "—" });
    }
  }

  return rows;
}

function liveLinks(platform: PublicPlatformDownload) {
  const files = platform.artifacts.filter(
    (artifact): artifact is typeof artifact & { downloadUrl: string } =>
      Boolean(artifact.downloadUrl),
  );

  if (files.length > 1) {
    return files.map((artifact) => ({
      href: artifact.downloadUrl,
      label: artifact.label,
    }));
  }

  if (files.length === 1) {
    return [{ href: files[0].downloadUrl, label: platform.actionLabel }];
  }

  const href = platform.storeUrl ?? platform.downloadUrl;
  return href ? [{ href, label: platform.actionLabel }] : [];
}

function requirementLine(platform: PublicPlatformDownload) {
  return [platform.minimumVersion, platform.architecture]
    .filter((value): value is string => Boolean(value) && value !== "—")
    .join(" · ");
}

function PlatformCard({
  platform,
  statusLabels,
}: {
  platform: PublicPlatformDownload;
  statusLabels: PublicDownloads["statusLabels"];
}) {
  const links = liveLinks(platform);
  const open = links.length > 0;
  const pending =
    platform.pendingLabel ??
    (platform.status === "coming_soon" ? CLOSED_LABEL.coming_soon : CLOSED_LABEL.development);
  const requirement = requirementLine(platform);

  return (
    <article className="dossier flex h-full min-w-0 flex-col p-5 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <h2 className="font-serif text-[clamp(1.6rem,3vw,2rem)] text-off-white">{platform.name}</h2>
        <Badge tone={open ? "accent" : "default"}>{statusLabels[platform.status]}</Badge>
      </div>
      <dl className="mt-6 divide-y divide-line border-y border-line">
        {specRows(platform).map((row) => (
          <div key={row.label} className="flex items-baseline justify-between gap-4 py-2.5">
            <dt className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-metal">
              {row.label}
            </dt>
            <dd
              className={`min-w-0 text-right text-sm text-paper ${
                row.label === "SHA-256" ? "max-w-[16rem] break-all font-mono text-xs" : ""
              }`}
            >
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
      {platform.notes ? <p className="mt-4 text-sm text-paper/80">{platform.notes}</p> : null}
      {platform.changelog.length > 0 ? (
        <div className="mt-4">
          <p className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-metal">
            Poznámky k verzi
          </p>
          <ul className="mt-2 space-y-1 text-sm text-paper/85">
            {platform.changelog.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="mt-auto flex flex-col gap-3 pt-6">
        {open ? (
          links.map((link) => (
            <a key={link.href} className="btn btn-primary w-full" href={link.href}>
              {link.label}
            </a>
          ))
        ) : (
          <button type="button" className="btn w-full" disabled aria-disabled="true">
            {pending}
          </button>
        )}
        {requirement ? (
          <p className="text-center font-mono text-[0.68rem] uppercase tracking-[0.14em] text-metal">
            {requirement}
          </p>
        ) : null}
      </div>
    </article>
  );
}

export function DownloadPanel({ downloads }: { downloads: PublicDownloads }) {
  const current = latestPublished(downloads.releases);
  const { summary } = downloads;

  return (
    <div className="mt-12">
      <section className="dossier">
        <div className="grid sm:grid-cols-2">
          <div className="border-b border-line px-5 py-6 sm:border-r sm:px-6">
            <p className="kicker">{summary.versionLabel}</p>
            <p className="mt-3 font-mono text-lg text-off-white">
              {current?.version || summary.emptyVersion}
            </p>
          </div>
          <div className="border-b border-line px-5 py-6 sm:px-6">
            <p className="kicker">{summary.updatedLabel}</p>
            <p className="mt-3 font-mono text-lg text-off-white">
              {current?.releaseDate ? formatArchiveDate(current.releaseDate) : summary.emptyUpdated}
            </p>
          </div>
        </div>
        <div className="px-5 py-6 sm:px-6">
          <p className="kicker">{summary.changelogLabel}</p>
          {current && (current.changelog?.length ?? 0) > 0 ? (
            <ul className="mt-4 space-y-2 text-paper/90">
              {current.changelog?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-paper/80">{summary.emptyChangelog}</p>
          )}
        </div>
      </section>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {downloads.platforms.map((platform) => (
          <PlatformCard
            key={platform.id}
            platform={platform}
            statusLabels={downloads.statusLabels}
          />
        ))}
      </div>
    </div>
  );
}
