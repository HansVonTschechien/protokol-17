import { platformListSentence } from "@/config/platforms.mjs";
import { siteConfig } from "@/config/site";

export type FaqItem = {
  id?: string;
  question: string;
  answer: string;
};

export function resolveFaqItem(item: FaqItem): FaqItem {
  if (item.id === "platforms") {
    return {
      ...item,
      answer: `${siteConfig.title} je připravován pro ${platformListSentence()}. Dostupnost jednotlivých verzí se může lišit podle fáze vývoje.`,
    };
  }
  return item;
}
