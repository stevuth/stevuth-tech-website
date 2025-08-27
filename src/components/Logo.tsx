import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ isDark = false, className }: { isDark?: boolean; className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Image
        src="https://i.postimg.cc/0jTGc7nS/Whats-App-Image-2025-08-21-at-13-03.png"
        alt="Right Focus Intl Logo"
        width={32}
        height={32}
        className="rounded-full"
      />
      <span className={cn(
        "font-headline font-bold text-xl tracking-tight",
        isDark ? "text-white" : "text-primary"
      )}>
        Right Focus Intl
      </span>
    </div>
  );
}
