import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-xl flex-col justify-center px-5 text-center">
      <p className="kicker">Chyba 404</p>
      <h1 className="display-title mt-4 text-4xl">Spis nenalezen</h1>
      <p className="mt-4 text-paper/80">
        Záznam v tomto archivu neexistuje, nebo není součástí veřejné části.
      </p>
      <Link href="/" className="btn mx-auto mt-8">
        Zpět na úvod
      </Link>
    </div>
  );
}
