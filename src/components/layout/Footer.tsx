import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { NAV_ITEMS, SITE } from "@/config/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="font-mono text-[0.78rem] tracking-[0.28em]">{SITE.name}</p>
            <p className="mt-4 max-w-md text-sm text-metal-light">
              Veřejný digitální archiv. Řešení případů, kompletní časová osa a herní
              dokumenty do tohoto systému nepatří.
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-x-4 gap-y-3 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-metal sm:tracking-[0.16em]">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-off-white">
                {item.label}
              </Link>
            ))}
            <Link href="/osoby" className="hover:text-off-white">
              Osoby
            </Link>
            <Link href="/stahnout" className="hover:text-off-white">
              Stáhnout
            </Link>
          </nav>
        </div>
        <hr className="rule mt-10" />
        <p className="mt-6 max-w-full font-mono text-[0.62rem] uppercase leading-relaxed tracking-[0.1em] text-metal sm:tracking-[0.16em]">
          {SITE.classification}
        </p>
      </Container>
    </footer>
  );
}
