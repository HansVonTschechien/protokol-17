export function PageHeader({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="max-w-3xl">
      <p className="kicker">{kicker}</p>
      <h1 className="display-title mt-4 text-[clamp(2rem,7vw,3.75rem)] text-off-white">
        {title}
      </h1>
      {children ? (
        <div className="mt-6 max-w-2xl text-paper/90">{children}</div>
      ) : null}
    </div>
  );
}
