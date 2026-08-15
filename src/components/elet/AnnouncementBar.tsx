"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { announcement } from "@/data/content";

export function AnnouncementBar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Hide as soon as the user scrolls down; show again at the very top.
    const onScroll = () => setHidden(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full bg-ink text-cream transition-transform duration-300 ease-out",
        hidden ? "-translate-y-full" : "translate-y-0",
      )}
    >
      <div className="mx-auto flex h-9 max-w-[1400px] items-center justify-center gap-3 px-4 text-center text-[11px] tracking-[0.14em] sm:text-xs">
        <span className="elet-editorial opacity-85">{announcement.text}</span>
        <a
          href={announcement.href}
          className="group inline-flex items-center gap-1.5 whitespace-nowrap font-medium uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-soft"
        >
          {announcement.cta}
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}
