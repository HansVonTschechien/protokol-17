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

export const SITE = {
  name: "PROTOKOL 17",
  tagline: "Detektivní logická hra pro macOS",
  title: "PROTOKOL 17 — Detektivní hra",
  description:
    "Vyšetřuj. Propojuj důkazy. Odhal pravdu. PROTOKOL 17 je detektivní logická hra pro macOS.",
  classification: "Digitální archiv · Veřejná část · Stupeň: omezený",
} as const;
