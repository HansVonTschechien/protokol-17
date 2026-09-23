import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { DownloadPanel } from "@/features/download/DownloadPanel";
import { getPageContent, getRelease } from "@/lib/content/repository";

export const metadata: Metadata = {
  title: "Stáhnout",
  description: "Stáhnout PROTOKOL 17 pro macOS.",
};

export default async function DownloadPage() {
  const [page, release] = await Promise.all([
    getPageContent<{ kicker: string; title: string; body: string; note: string }>("download"),
    getRelease(),
  ]);

  return (
    <Container className="page-section">
      <PageHeader kicker={page.kicker} title={page.title}>
        <p>{page.body}</p>
      </PageHeader>
      <div className="mt-12">
        <DownloadPanel release={release} />
      </div>
      <p className="mt-6 max-w-xl text-sm text-metal-light">{page.note}</p>
    </Container>
  );
}
