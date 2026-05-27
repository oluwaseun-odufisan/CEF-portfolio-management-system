import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "dark" | "quiet" | "danger";
type ButtonSize = "sm" | "md" | "lg";

type SharedProps = {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type LinkButtonProps = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const variants: Record<ButtonVariant, string> = {
  primary: "border-cef-navy bg-cef-navy text-cef-surface hover:bg-cef-navy2",
  secondary:
    "border-cef-line bg-cef-surface text-cef-navy hover:border-cef-gold hover:bg-cef-white hover:text-cef-gold2",
  dark: "border-cef-gold bg-cef-gold text-cef-navy hover:bg-[#AE873C]",
  quiet: "border-transparent bg-transparent text-cef-navy hover:bg-cef-surfaceAlt",
  danger: "border-cef-red bg-cef-red text-white hover:bg-cef-red2"
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-10 px-3 text-sm",
  md: "min-h-11 px-4 text-[15px]",
  lg: "min-h-12 px-5 text-base"
};

export function Button(props: ButtonProps) {
  const {
    children,
    className,
    icon,
    size = "md",
    variant = "primary",
    ...rest
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-control border font-semibold transition-colors",
    "disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    sizes[size],
    className
  );

  if ("href" in props && props.href) {
    const linkProps = { ...rest } as Omit<LinkButtonProps, keyof SharedProps | "href"> & {
      href?: string;
    };
    delete linkProps.href;

    return (
      <Link className={classes} href={props.href} {...linkProps}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as NativeButtonProps)}>
      {icon}
      {children}
    </button>
  );
}
