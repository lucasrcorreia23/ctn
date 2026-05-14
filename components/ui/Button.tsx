import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md";

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-medium transition-colors disabled:opacity-60 disabled:pointer-events-none";

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-zinc-900 text-white border border-zinc-900 hover:bg-zinc-800",
  outline:
    "bg-white text-zinc-900 border border-zinc-300 hover:bg-zinc-50",
  ghost:
    "bg-transparent text-zinc-900 border border-transparent hover:bg-zinc-100",
};

interface SharedProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

type LinkButtonProps = SharedProps & ComponentProps<typeof Link>;

export function LinkButton({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: LinkButtonProps) {
  return (
    <Link
      {...rest}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

type ButtonProps = SharedProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      {...rest}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
