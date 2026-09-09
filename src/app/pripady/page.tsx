import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { CaseList } from "@/features/cases/CaseList";
import { getPublicCases } from "@/lib/content/repository";

export const metadata: Metadata = {
  title: "Případy",
  description: "Seznam spisů hry PROTOKOL 17. Veřejný archiv bez řešení.",
};

export default async function CasesPage() {
  const cases = await getPublicCases();

  return (
    <Container className="py-16 sm:py-24">
      <PageHeader kicker="Případy" title="Sedmnáct spisů">
        <p>
          Veřejně jsou dostupné pouze odemčené informace. Budoucí případy zůstanou
          zapečetěné, dokud nebudou uvolněny.
        </p>
      </PageHeader>
      <div className="mt-14">
        <CaseList cases={cases} />
      </div>
    </Container>
  );
}
