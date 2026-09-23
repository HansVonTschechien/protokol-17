import Link from "next/link";
import { CaseCard } from "@/features/cases/CaseCard";
import { CharacterCard } from "@/features/characters/CharacterCard";
import { Hero } from "@/features/home/Hero";
import {
  ArchiveGallery,
  DemoPuzzle,
  EvidenceDesk,
  NewsletterForm,
  Recordings,
  SeventeenMark,
  WhatIf,
} from "@/features/home/interactions";
import { Container } from "@/components/ui/Container";
import {
  getPageContent,
  getPublicCases,
  getPublicCharacters,
  getPublicPage,
} from "@/lib/content/repository";
import { resolveFaqItem, type FaqItem } from "@/lib/content/faq";
import type { HomeContent } from "@/types/home";

export default async function HomePage() {
  const [home, cases, people, gameplay, faq] = await Promise.all([
    getPublicPage<HomeContent>("home"),
    getPublicCases(),
    getPublicCharacters(),
    getPageContent<{
      sections: { id: string; number: string; title: string; body: string }[];
    }>("gameplay"),
    getPublicPage<{ items: FaqItem[] }>("faq"),
  ]);

  return (
    <>
      <Hero content={home.hero} />
      <Container className="page-section space-y-20 sm:space-y-28">
        <section id="uvod" className="scroll-mt-24">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-metal">{home.film.date}</p>
          <div className="mt-8 max-w-3xl space-y-3">
            {home.film.lines.map((line) => (
              <p key={line} className="font-serif text-[clamp(1.8rem,5vw,3.4rem)] leading-tight text-off-white">
                {line}
              </p>
            ))}
          </div>
        </section>

        <section>
          <p className="kicker">{home.whatIf.kicker}</p>
          <h2 className="display-title mt-4 max-w-3xl text-[clamp(1.8rem,5vw,3rem)]">{home.whatIf.title}</h2>
          <div className="mt-8">
            <WhatIf content={home.whatIf} />
          </div>
        </section>

        <section>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="kicker">Jak se hraje</p>
              <h2 className="display-title mt-3 text-[clamp(1.7rem,4vw,2.6rem)]">Pět kroků vyšetřování</h2>
            </div>
            <Link href="/hra" className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-metal">
              Celý postup
            </Link>
          </div>
          <ol className="mt-10 grid gap-4 md:grid-cols-2">
            {gameplay.sections.map((section) => (
              <li key={section.id} className="dossier p-5 sm:p-6">
                <p className="font-mono text-[0.68rem] tracking-[0.2em] text-metal">{section.number}</p>
                <h3 className="mt-4 font-serif text-2xl">{section.title}</h3>
                <p className="mt-3 text-sm text-paper/80">{section.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <p className="kicker">{home.evidence.kicker}</p>
          <h2 className="display-title mt-3 text-[clamp(1.8rem,5vw,3.2rem)]">
            {home.evidence.title}
            <span className="mt-2 block">{home.evidence.subtitle}</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm text-metal-light">{home.evidence.notice}</p>
          <div className="mt-8">
            <EvidenceDesk content={home.evidence} />
          </div>
        </section>

        <section>
          <p className="kicker">{home.puzzle.kicker}</p>
          <h2 className="display-title mt-3 text-[clamp(1.8rem,5vw,3rem)]">{home.puzzle.title}</h2>
          <p className="mt-4 text-sm text-metal-light">{home.puzzle.notice}</p>
          <div className="mt-8">
            <DemoPuzzle content={home.puzzle} />
          </div>
        </section>

        <section>
          <p className="kicker">{home.archive.kicker}</p>
          <h2 className="display-title mt-3 text-[clamp(1.8rem,5vw,3rem)]">{home.archive.title}</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {cases.map((item) => (
              <CaseCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section>
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="kicker">{home.people.kicker}</p>
              <h2 className="display-title mt-3 text-[clamp(1.8rem,5vw,3rem)]">{home.people.title}</h2>
            </div>
            <Link href={home.people.href} className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-metal">
              Všichni
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {people.slice(0, 3).map((person) => (
              <CharacterCard key={person.id} person={person} />
            ))}
          </div>
        </section>

        <section className="max-w-3xl">
          <p className="kicker">{home.protocol.kicker}</p>
          <h2 className="display-title mt-3 text-[clamp(1.8rem,5vw,3rem)]">{home.protocol.title}</h2>
          <div className="mt-8 space-y-3 text-lg text-paper/90">
            {home.protocol.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <p className="mt-8 font-serif text-2xl text-off-white">{home.protocol.closing}</p>
        </section>

        <section>
          <p className="kicker">{home.gallery.kicker}</p>
          <h2 className="display-title mt-3 text-[clamp(1.8rem,5vw,3rem)]">{home.gallery.title}</h2>
          <div className="mt-8">
            <ArchiveGallery content={home.gallery} />
          </div>
        </section>

        <section>
          <p className="kicker">{home.recordings.kicker}</p>
          <h2 className="display-title mt-3 text-[clamp(1.8rem,5vw,3rem)]">{home.recordings.title}</h2>
          <p className="mt-4 text-sm text-metal-light">{home.recordings.notice}</p>
          <div className="mt-8">
            <Recordings content={home.recordings} />
          </div>
        </section>

        <section className="overflow-hidden border-y border-line py-10">
          <h2 className="display-title text-[clamp(1.7rem,4vw,2.8rem)]">{home.drift.title}</h2>
          <div className="drift-mask mt-8">
            <div className="drift-track font-mono text-[0.72rem] uppercase tracking-[0.18em] text-metal">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex gap-8 pr-8">
                  {home.drift.items.map((item) => (
                    <span key={`${copy}-${item}`} className="shrink-0">
                      {item}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <p className="kicker">{home.why.kicker}</p>
          <h2 className="display-title mt-3 text-[clamp(1.8rem,5vw,3rem)]">{home.why.title}</h2>
          <ul className="mt-8 max-w-xl space-y-4 font-serif text-2xl text-off-white">
            {home.why.questions.map((question) => (
              <li key={question}>
                {question === "Proč 17?" ? (
                  <>
                    Proč <SeventeenMark />?
                  </>
                ) : (
                  question
                )}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <p className="kicker">{home.audience.kicker}</p>
          <h2 className="display-title mt-3 text-[clamp(1.8rem,5vw,3rem)]">{home.audience.title}</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <article className="dossier p-5 sm:p-8">
              <h3 className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-metal">{home.audience.yesTitle}</h3>
              <ul className="mt-5 space-y-3 text-paper/90">
                {home.audience.yes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="dossier p-5 sm:p-8">
              <h3 className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-metal">{home.audience.noTitle}</h3>
              <ul className="mt-5 space-y-3 text-paper/90">
                {home.audience.no.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="max-w-3xl">
          <h2 className="display-title text-[clamp(1.8rem,5vw,3rem)]">{home.pace.title}</h2>
          <div className="mt-8 space-y-3 text-lg text-paper/90">
            {home.pace.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </section>

        <section>
          <p className="kicker">FAQ</p>
          <h2 className="display-title mt-3 text-[clamp(1.8rem,5vw,3rem)]">Než otevřete spis</h2>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {faq.items.slice(0, 4).map(resolveFaqItem).map((item) => (
              <details key={item.question} className="group py-4">
                <summary className="cursor-pointer font-serif text-xl text-off-white">{item.question}</summary>
                <p className="mt-3 max-w-2xl text-paper/85">{item.answer}</p>
              </details>
            ))}
          </div>
          <Link href="/faq" className="btn mt-8 w-full sm:w-auto">
            Všechny otázky
          </Link>
        </section>

        <section className="dossier p-5 sm:p-10">
          <h2 className="display-title text-[clamp(1.7rem,4vw,2.6rem)]">{home.newsletter.title}</h2>
          <p className="mt-4 max-w-xl text-sm text-metal-light">{home.newsletter.note}</p>
          <NewsletterForm content={home.newsletter} />
        </section>

        <section className="border-t border-line pt-16">
          <h2 className="display-title text-[clamp(2rem,6vw,3.6rem)]">{home.finale.title}</h2>
          <div className="mt-6 max-w-xl space-y-2 text-lg text-paper/90">
            {home.finale.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={home.finale.primaryHref} className="btn btn-primary w-full sm:w-auto">
              {home.finale.primary}
            </Link>
            <Link href={home.finale.secondaryHref} className="btn w-full sm:w-auto">
              {home.finale.secondary}
            </Link>
          </div>
        </section>
      </Container>
    </>
  );
}
