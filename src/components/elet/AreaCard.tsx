import { ArrowRight } from "lucide-react";
import type { ImageSlot as ImageSlotData } from "@/data/content";
import { ImageSlot } from "./ImageSlot";

export type Area = { name: string; blurb: string; image: ImageSlotData };

export function AreaCard({ area }: { area: Area }) {
  return (
    <a href="#" className="group block">
      <ImageSlot slot={area.image} ratio="aspect-[4/5]" />
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <div className="font-display text-2xl">{area.name}</div>
          <div className="mt-1 text-sm text-ink-soft">{area.blurb}</div>
        </div>
        <ArrowRight className="mt-2 h-5 w-5 shrink-0 text-teal transition-transform group-hover:translate-x-1" />
      </div>
    </a>
  );
}
