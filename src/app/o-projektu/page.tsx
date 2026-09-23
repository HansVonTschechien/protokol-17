import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { siteConfig } from "@/config/site";
import { getPublicPage } from "@/lib/content/repository";

export const metadata: Metadata = {
  title: "O projektu",
  description: siteConfig.seoLine,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
};

export default async function ProjectPage() {
  const page = await getPublicPage<{
    kicker: string;
    title: string;
    paragraphs: string[];
    authorBio: string;
    principles: string[];
  }>("project");

  return (
    <Container className="page-section">
      <PageHeader kicker={page.kicker} title={page.title} />
      <section className="dossier mt-14 p-6 sm:p-10 lg:p-14">
        <p className="kicker">{siteConfig.authorLabel}</p>
        <h2 className="display-title mt-4 text-[clamp(3rem,8vw,5.5rem)] text-off-white">
          {siteConfig.author}
        </h2>
        <p className="mt-4 font-serif text-lg italic text-paper/80 sm:text-xl">
          {siteConfig.authorRole}
        </p>
        <p className="mt-8 max-w-2xl text-lg text-paper/95">
          <span className="text-off-white">{siteConfig.title}</span>
          {` je autorský nezávislý projekt ${siteConfig.authorGenitive}.`}
        </p>
        <p className="mt-4 max-w-2xl text-paper/90">{page.authorBio}</p>
        <blockquote className="mt-10 max-w-xl border-l border-accent pl-5 font-serif text-[clamp(1.35rem,3vw,1.8rem)] leading-snug text-off-white">
          {page.principles.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </blockquote>
      </section>
      <div className="mt-14 max-w-2xl space-y-5 text-paper/90">
        {page.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Container>
  );
}
