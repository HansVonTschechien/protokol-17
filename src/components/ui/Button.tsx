import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "ghost" | "primary";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  href?: string;
  children: ReactNode;
};

const variantClass: Record<Variant, string> = {
  ghost: "btn",
  primary: "btn btn-primary",
};

export function Button({
  variant = "ghost",
  className = "",
  href,
  children,
  ...props
}: Props) {
  const classes = `${variantClass[variant]} ${className}`.trim();

  if (href) {
    if (href.startsWith("http")) {
      return (
        <a className={classes} href={href}>
          {children}
        </a>
      );
    }

    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
