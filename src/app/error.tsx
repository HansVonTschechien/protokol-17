"use client";

export default function ErrorState({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col justify-center px-5 text-center">
      <p className="kicker">Chyba archivu</p>
      <h1 className="display-title mt-4 text-4xl">Přístup se nezdařil</h1>
      <p className="mt-4 text-paper/80">
        Záznam se nepodařilo načíst. Můžete to zkusit znovu.
      </p>
      <button type="button" className="btn mx-auto mt-8" onClick={reset}>
        Zkusit znovu
      </button>
    </div>
  );
}
