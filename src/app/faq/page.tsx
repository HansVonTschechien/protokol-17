import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { resolveFaqItem, type FaqItem } from "@/lib/content/faq";
import { getPublicPage } from "@/lib/content/repository";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Časté otázky o hře PROTOKOL 17. Bez řešení případů.",
};

export default async function FaqPage() {
  const page = await getPublicPage<{
    kicker: string;
    title: string;
    intro: string;
    items: FaqItem[];
  }>("faq");
  const items = page.items.map(resolveFaqItem);

  return (
    <Container className="page-section">
      <PageHeader kicker={page.kicker} title={page.title}>
        <p>{page.intro}</p>
      </PageHeader>
      <div className="mt-12 divide-y divide-line border-y border-line">
        {items.map((item) => (
          <details key={item.question} className="py-5">
            <summary className="cursor-pointer font-serif text-[clamp(1.25rem,3vw,1.7rem)] text-off-white">
              {item.question}
            </summary>
            <p className="mt-3 max-w-2xl text-paper/85">{item.answer}</p>
          </details>
        ))}
      </div>
    </Container>
  );
}
