import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ isDark = false, className }: { isDark?: boolean; className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Image
        src={`/logo.png?t=${new Date().getTime()}`}
        alt="Stevuth Tech Logo"
        width={32}
        height={32}
        className="rounded-full"
      />
      <span className={cn(
        "font-headline font-bold text-xl tracking-tight",
        isDark ? "text-white" : "text-primary"
      )}>
        Stevuth Tech
      </span>
    </div>
  );
}
