import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "muted" | "dark";
  as?: "section" | "div" | "article";
}

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function Section({
  children,
  className,
  id,
  background = "default",
  as: Component = "section",
}: SectionProps) {
  const bgStyles = {
    default: "bg-[var(--background)]",
    muted: "bg-[var(--surface-muted)]",
    dark: "bg-neutral-900 dark:bg-neutral-950",
  };

  return (
    <Component
      id={id}
      className={cn("py-16 sm:py-20 lg:py-24", bgStyles[background], className)}
    >
      {children}
    </Component>
  );
}

export function SectionHeader({
  badge,
  title,
  description,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 lg:mb-16",
        centered && "text-center",
        className
      )}
    >
      {badge && (
        <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700 ring-1 ring-inset ring-brand-700/10 dark:bg-brand-950 dark:text-brand-300 dark:ring-brand-400/20 mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 mx-auto max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
