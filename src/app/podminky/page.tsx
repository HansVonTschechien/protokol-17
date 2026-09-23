import type { Metadata } from "next";
import { ProsePage } from "@/components/ui/ProsePage";
import { getPublicPage } from "@/lib/content/repository";

export const metadata: Metadata = {
  title: "Podmínky",
  description: "Podmínky použití veřejného archivu PROTOKOL 17.",
};

export default async function TermsPage() {
  const page = await getPublicPage<{
    kicker: string;
    title: string;
    paragraphs: string[];
  }>("terms");

  return <ProsePage kicker={page.kicker} title={page.title} paragraphs={page.paragraphs} />;
}
