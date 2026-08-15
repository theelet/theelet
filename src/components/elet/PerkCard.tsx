import { ArrowRight } from "lucide-react";
import type { ImageSlot as ImageSlotData } from "@/data/content";
import { ImageSlot } from "./ImageSlot";

export type Perk = {
  title: string;
  blurb: string;
  cta: string;
  image: ImageSlotData;
};

export function PerkCard({ perk }: { perk: Perk }) {
  return (
    <article className="group grid grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-stretch overflow-hidden bg-cream-warm">
      <div className="flex flex-col justify-between gap-6 p-6 sm:p-8">
        <h3 className="font-display text-2xl leading-tight sm:text-3xl">{perk.title}</h3>
        <div className="space-y-4">
          <p className="text-sm leading-relaxed text-ink/85">{perk.blurb}</p>
          <a
            href="#booking"
            className="inline-flex items-center gap-1.5 border-b border-ink pb-1 text-xs font-medium uppercase tracking-[0.22em] text-ink transition-colors hover:border-gold hover:text-teal"
          >
            {perk.cta}
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
      <ImageSlot slot={perk.image} ratio="aspect-auto" className="h-full min-h-[240px]" />
    </article>
  );
}
