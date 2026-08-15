import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ImageSlot as ImageSlotData } from "@/data/content";

type Props = {
  slot: ImageSlotData;
  className?: string;
  ratio?: string; // e.g. "aspect-[4/5]", "aspect-video", "aspect-square"
  rounded?: string;
  overlayTint?: boolean;
  // Above-the-fold images (hero) should load eagerly for LCP; everything else
  // lazy-loads so it isn't fetched until scrolled near — this keeps a single
  // page view from requesting all ~16 images at once.
  eager?: boolean;
};

export function ImageSlot({
  slot,
  className,
  ratio = "aspect-[4/5]",
  rounded = "rounded-none",
  overlayTint = false,
  eager = false,
}: Props) {
  if (slot.src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={slot.src}
        alt={slot.alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={eager ? "high" : "auto"}
        className={cn("h-full w-full object-cover", ratio, rounded, className)}
      />
    );
  }

  return (
    <div
      className={cn(
        "relative flex w-full items-end overflow-hidden bg-cream-warm",
        ratio,
        rounded,
        className,
      )}
      role="img"
      aria-label={slot.alt}
    >
      <div className="absolute inset-0 opacity-70">
        <div className="absolute inset-0 bg-gradient-to-br from-teal/10 via-transparent to-gold/10" />
        <svg className="absolute inset-0 h-full w-full text-teal/20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`grid-${slot.slot}`} width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${slot.slot})`} />
        </svg>
      </div>
      <div className="relative z-10 flex w-full items-start justify-between gap-3 p-4 text-ink-soft">
        <div className="flex items-start gap-2">
          <ImageIcon className="mt-0.5 h-4 w-4 text-teal" />
          <div className="text-left">
            <div className="text-[10px] uppercase tracking-[0.24em] text-teal">image slot</div>
            <div className="mt-1 font-mono text-xs text-ink">{slot.slot}</div>
            <div className="mt-1 max-w-[26ch] text-[11px] leading-snug text-ink-soft">{slot.alt}</div>
          </div>
        </div>
      </div>
      {overlayTint && <div className="absolute inset-0 bg-ink/30" />}
    </div>
  );
}
