import { cn } from "@/lib/utils";

export function Logo({ isDark = false, className }: { isDark?: boolean; className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-accent"
      >
        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="3" />
        <circle cx="16" cy="16" r="6" fill="currentColor" />
      </svg>
      <span className={cn(
        "font-headline font-bold text-xl tracking-tight",
        isDark ? "text-white" : "text-primary"
      )}>
        Right Focus
      </span>
    </div>
  );
}
