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
    <>
    <header className="sticky top-0 z-50 border-b border-line bg-black/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-3">
        <Link
          href="/"
          className="min-w-0 shrink font-mono text-[0.72rem] tracking-[0.14em] sm:text-[0.78rem] sm:tracking-[0.22em]"
        >
          {SITE.name}
        </Link>

        <nav className="hidden min-w-0 items-center gap-3 lg:flex xl:gap-6" aria-label="Hlavní navigace">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap font-mono text-[0.62rem] tracking-[0.12em] uppercase transition-colors xl:text-[0.68rem] xl:tracking-[0.16em] ${
                  active ? "text-off-white" : "text-metal hover:text-off-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link href="/stahnout" className="btn btn-primary hidden !min-h-10 !px-3 md:inline-flex xl:!px-4">
            Stáhnout hru
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-line lg:hidden"
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
    </header>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto border-t border-line bg-black lg:hidden"
        >
          <Container as="nav" className="flex flex-col gap-1 py-6 pb-10" aria-label="Mobilní navigace">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`border-b border-line py-4 font-mono text-[0.78rem] tracking-[0.16em] uppercase ${
                    active ? "text-off-white" : "text-metal"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/stahnout" className="btn btn-primary mt-6 w-full">
              Stáhnout hru
            </Link>
          </Container>
        </div>
      ) : null}
    </>
  );
}
