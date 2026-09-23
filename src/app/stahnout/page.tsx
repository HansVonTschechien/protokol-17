import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { DownloadPanel } from "@/features/download/DownloadPanel";
import { getDownloads, getPageContent } from "@/lib/content/repository";

export const metadata: Metadata = {
  title: "Stažení",
  description:
    "Distribuční portál PROTOKOL 17. Odkaz ke stažení se zobrazí až u platformy, která je vydaná.",
};

export default async function DownloadPage() {
  const [page, downloads] = await Promise.all([
    getPageContent<{ kicker: string; title: string; body: string; note: string }>("download"),
    getDownloads(),
  ]);

  return (
    <Container className="page-section">
      <PageHeader kicker={page.kicker} title={downloads.title}>
        <p>{downloads.subtitle}</p>
      </PageHeader>
      <DownloadPanel downloads={downloads} />
      <p className="mt-8 max-w-xl text-sm text-metal-light">{page.note}</p>
    </Container>
  );
}
