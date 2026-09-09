"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { NAV_ITEMS, SITE } from "@/config/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openForPath, setOpenForPath] = useState(pathname);

  if (openForPath !== pathname) {
    setOpenForPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-black/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="shrink-0 font-mono text-[0.78rem] tracking-[0.28em]">
          {SITE.name}
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Hlavní navigace">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-mono text-[0.68rem] tracking-[0.18em] uppercase transition-colors ${
                  active ? "text-off-white" : "text-metal hover:text-off-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/stahnout" className="btn btn-primary hidden !min-h-10 !px-4 sm:inline-flex">
            Stáhnout hru
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Zavřít menu" : "Otevřít menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span className="block h-px w-4 bg-off-white" />
              <span className="block h-px w-4 bg-off-white" />
              <span className="block h-px w-4 bg-off-white" />
            </span>
          </button>
        </div>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-black lg:hidden">
          <Container as="nav" className="flex flex-col gap-1 py-6" aria-label="Mobilní navigace">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-line py-3 font-mono text-[0.78rem] tracking-[0.18em] uppercase"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/stahnout" className="btn btn-primary mt-5 w-full" onClick={() => setOpen(false)}>
              Stáhnout hru
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
