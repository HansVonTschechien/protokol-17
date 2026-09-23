export type StillKind =
  | "room"
  | "desk"
  | "recorder"
  | "photo"
  | "phone"
  | "map"
  | "file"
  | "envelope"
  | "key"
  | "vhs"
  | "door"
  | "corridor"
  | "cellar"
  | "yard"
  | "statement"
  | "ledger";

export type HomeContent = {
  spoilerLevel: 0 | 1;
  hero: {
    titleLines: string[];
    subtitle: string;
    primaryCta: string;
    primaryHref: string;
    secondaryCta: string;
    secondaryHref: string;
    facts: string[];
  };
  film: { date: string; lines: string[] };
  whatIf: { kicker: string; title: string; questions: string[]; closing: string };
  evidence: {
    kicker: string;
    title: string;
    subtitle: string;
    notice: string;
    items: {
      id: string;
      code: string;
      kind: StillKind;
      label: string;
      stamp: string;
      caption: string;
    }[];
  };
  puzzle: {
    kicker: string;
    title: string;
    prompt: string;
    notice: string;
    successTitle: string;
    successBody: string;
    wrong: string;
    items: { id: string; label: string; body: string; contradicts: boolean }[];
  };
  archive: { kicker: string; title: string };
  people: { kicker: string; title: string; href: string };
  protocol: { kicker: string; title: string; lines: string[]; closing: string };
  gallery: {
    kicker: string;
    title: string;
    items: { id: string; kind: StillKind; stamp: string; caption: string }[];
  };
  recordings: {
    kicker: string;
    title: string;
    notice: string;
    items: { id: string; code: string; stamp: string; status: string; line: string }[];
  };
  drift: { title: string; items: string[] };
  why: { kicker: string; title: string; questions: string[] };
  audience: {
    kicker: string;
    title: string;
    yesTitle: string;
    noTitle: string;
    yes: string[];
    no: string[];
  };
  pace: { title: string; lines: string[] };
  newsletter: {
    title: string;
    placeholder: string;
    action: string;
    note: string;
    pending: string;
  };
  finale: {
    title: string;
    lines: string[];
    primary: string;
    primaryHref: string;
    secondary: string;
    secondaryHref: string;
  };
};
