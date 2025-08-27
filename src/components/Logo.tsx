import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ isDark = false, className }: { isDark?: boolean; className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Image
        src="/logo.png"
        alt="Right Focus Crew Intl Logo"
        width={32}
        height={32}
        className="rounded-full"
      />
      <span className={cn(
        "font-headline font-bold text-xl tracking-tight",
        isDark ? "text-white" : "text-primary"
      )}>
        Right Focus Crew Intl
      </span>
    </div>
  );
}
