import Link from "next/link";
import { CaseCard } from "@/features/cases/CaseCard";
import { Hero } from "@/features/home/Hero";
import { Container } from "@/components/ui/Container";
import { getPageContent, getPublicCases, getRelease } from "@/lib/content/repository";

export default async function HomePage() {
  const [cases, release, gameplay] = await Promise.all([
    getPublicCases(),
    getRelease(),
    getPageContent<{
      sections: { id: string; number: string; title: string; body: string }[];
    }>("gameplay"),
  ]);

  const featured = cases.filter(
    (item) => item.status === "tutorial" || item.status === "available",
  );

  return (
    <>
      <Hero />
      <Container className="space-y-24 py-20 sm:py-28">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="kicker">Premisa</p>
            <h2 className="display-title mt-4 max-w-xl text-4xl sm:text-5xl">
              17. září 2009. Případ byl uzavřen.
            </h2>
            <div className="mt-8 max-w-xl space-y-4 text-paper/90">
              <p>Roman Havel byl nalezen mrtvý. O sedmnáct let později zemřel bývalý kriminalista Tomáš Růžička.</p>
              <p>Na místě po sobě zanechal jedinou věc. PROTOKOL 17.</p>
            </div>
            <Link href="/pribeh" className="btn mt-8">
              Číst příběh
            </Link>
          </div>
          <aside className="dossier p-8">
            <p className="kicker">Platforma</p>
            <p className="mt-5 font-serif text-3xl">macOS</p>
            <p className="mt-4 text-sm text-paper/80">
              Navrženo pro MacBook, trackpad a klávesnici. Verze {release.version}.
            </p>
            <Link href="/stahnout" className="btn btn-primary mt-8">
              Stáhnout hru
            </Link>
          </aside>
        </section>

        <section>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="kicker">Jak se hraje</p>
              <h2 className="display-title mt-3 text-3xl sm:text-4xl">Vyšetřuj. Propojuj. Rozhoduj.</h2>
            </div>
            <Link href="/hra" className="hidden font-mono text-[0.68rem] uppercase tracking-[0.16em] text-metal sm:inline">
              Celý postup
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {gameplay.sections.map((section) => (
              <article key={section.id} className="dossier p-6">
                <p className="font-mono text-[0.68rem] tracking-[0.2em] text-metal">
                  {section.number}
                </p>
                <h3 className="mt-4 font-serif text-2xl">{section.title}</h3>
                <p className="mt-3 text-sm text-paper/80">{section.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <p className="kicker">Spisy</p>
          <h2 className="display-title mt-3 text-3xl sm:text-4xl">Odemčené případy</h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {featured.map((item) => (
              <CaseCard key={item.id} item={item} featured />
            ))}
          </div>
          <Link href="/pripady" className="btn mt-8">
            Všechny spisy
          </Link>
        </section>
      </Container>
    </>
  );
}
