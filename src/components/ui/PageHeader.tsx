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
      <h1 className="display-title mt-4 text-4xl text-off-white sm:text-5xl md:text-6xl">
        {title}
      </h1>
      {children ? (
        <div className="mt-6 max-w-2xl text-paper/90">{children}</div>
      ) : null}
    </div>
  );
}
