import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-white p-6",
        "border-neutral-200 shadow-card",
        "dark:bg-neutral-800 dark:border-neutral-700",
        hover &&
          "transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn("mb-4", className)}>
      {children}
    </div>
  );
}

export function CardBody({ children, className }: CardBodyProps) {
  return (
    <div className={cn("text-neutral-600 dark:text-neutral-400", className)}>
      {children}
    </div>
  );
}
