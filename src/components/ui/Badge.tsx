import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "brand" | "accent" | "success" | "warning";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default:
    "bg-neutral-100 text-muted ring-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:ring-neutral-700",
  brand:
    "bg-brand-50 text-brand-700 ring-brand-200 dark:bg-brand-950 dark:text-white dark:ring-white/30",
  accent:
    "bg-accent-50 text-accent-700 ring-accent-200 dark:bg-accent-950 dark:text-accent-300 dark:ring-accent-800",
  success:
    "bg-brand-50 text-brand-700 ring-brand-200 dark:bg-brand-950 dark:text-white dark:ring-white/30",
  warning:
    "bg-political-yellow text-on-yellow ring-political-yellow",
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5",
        "text-xs font-medium ring-1 ring-inset",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
