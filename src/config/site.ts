import { platformListSentence } from "./platforms.mjs";

export type NavItem = {
  href: string;
  label: string;
};

export const NAV_ITEMS: NavItem[] = [
  { href: "/pribeh", label: "Příběh" },
  { href: "/hra", label: "Hra" },
  { href: "/pripady", label: "Případy" },
  { href: "/archiv", label: "Archiv" },
  { href: "/aktualizace", label: "Aktualizace" },
  { href: "/o-hre", label: "O hře" },
];

export const FOOTER_LINKS: NavItem[] = [
  { href: "/hra", label: "Hra" },
  { href: "/pripady", label: "Případy" },
  { href: "/archiv", label: "Archiv" },
  { href: "/stahnout", label: "Stažení" },
  { href: "/o-projektu", label: "O projektu" },
  { href: "/kontakt", label: "Kontakt" },
];

export const LEGAL_LINKS: NavItem[] = [
  { href: "/ochrana-soukromi", label: "Ochrana soukromí" },
  { href: "/podminky", label: "Podmínky" },
  { href: "/kontakt", label: "Kontakt" },
];

const title = "PROTOKOL 17";
const author = "Jan Honc";
const authorGenitive = "Jana Honce";

export const siteConfig = {
  title,
  author,
  authorGenitive,
  authorRole: "Autor · Scenárista · Developer",
  authorLabel: "Autor",
  roleLabel: "Role",
  copyright: `© 2026 ${author}`,
  rights: `© 2026 ${author}. Všechna práva vyhrazena.`,
  footerTagline: `Detektivní hra od ${authorGenitive}.`,
  seoLine: `Vyšetřuj. Propojuj důkazy. Odhal pravdu. ${title} je detektivní logická hra pro ${platformListSentence()}.`,
} as const;

export const SITE = {
  ...siteConfig,
  name: siteConfig.title,
  tagline: "Detektivní hra pro počítače i mobilní zařízení.",
  title: `${siteConfig.title} — Detektivní hra`,
  description: siteConfig.seoLine,
  classification: "Digitální archiv · Veřejná část · Stupeň: omezený",
} as const;
