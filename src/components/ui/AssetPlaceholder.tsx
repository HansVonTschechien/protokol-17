export function AssetPlaceholder({
  label = "EVIDENCE IMAGE",
  caption = "ASSET NOT LOADED",
  className = "",
}: {
  label?: string;
  caption?: string;
  className?: string;
}) {
  return (
    <div className={`asset-placeholder ${className}`.trim()}>
      <div className="px-6">
        <p className="font-mono text-[0.68rem] tracking-[0.22em]">{label}</p>
        <p className="mt-3 font-mono text-[0.62rem] tracking-[0.18em] text-metal">
          {caption}
        </p>
      </div>
    </div>
  );
}
