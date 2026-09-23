import type { Metadata } from "next";
import { ProsePage } from "@/components/ui/ProsePage";
import { getPublicPage } from "@/lib/content/repository";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakt na veřejný archiv hry PROTOKOL 17.",
};

export default async function ContactPage() {
  const page = await getPublicPage<{
    kicker: string;
    title: string;
    paragraphs: string[];
  }>("contact");

  return <ProsePage kicker={page.kicker} title={page.title} paragraphs={page.paragraphs} />;
}
