import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FOOTER_LINKS, LEGAL_LINKS, siteConfig, SITE } from "@/config/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="font-mono text-[0.78rem] tracking-[0.28em]">{siteConfig.title}</p>
            <p className="mt-4 max-w-md font-serif text-lg italic text-paper/85">
              {siteConfig.footerTagline}
            </p>
            <p className="mt-6 text-sm text-paper/90">
              <span className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-metal">
                {siteConfig.authorLabel}:
              </span>{" "}
              {siteConfig.author}
            </p>
            <p className="mt-2 text-sm text-paper/90">
              <span className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-metal">
                {siteConfig.roleLabel}:
              </span>{" "}
              {siteConfig.authorRole}
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-x-4 gap-y-3 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-metal sm:tracking-[0.16em]">
            {FOOTER_LINKS.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-off-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <hr className="rule mt-10" />
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <p className="font-mono text-[0.68rem] tracking-[0.04em] text-metal">
            {siteConfig.rights}
          </p>
          <nav className="flex flex-col gap-3 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-metal sm:flex-row sm:gap-5">
            {LEGAL_LINKS.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-off-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-6 max-w-full font-mono text-[0.62rem] uppercase leading-relaxed tracking-[0.1em] text-metal sm:tracking-[0.16em]">
          {SITE.classification}
        </p>
      </Container>
    </footer>
  );
}
