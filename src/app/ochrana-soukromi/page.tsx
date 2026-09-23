import type { Metadata } from "next";
import { ProsePage } from "@/components/ui/ProsePage";
import { getPublicPage } from "@/lib/content/repository";

export const metadata: Metadata = {
  title: "Ochrana soukromí",
  description: "Jak veřejný archiv PROTOKOL 17 zachází s údaji.",
};

export default async function PrivacyPage() {
  const page = await getPublicPage<{
    kicker: string;
    title: string;
    paragraphs: string[];
  }>("privacy");

  return <ProsePage kicker={page.kicker} title={page.title} paragraphs={page.paragraphs} />;
}
