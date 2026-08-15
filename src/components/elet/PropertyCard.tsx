import { ArrowUpRight, MapPin } from "lucide-react";
import type { Property } from "@/data/content";
import { ImageSlot } from "./ImageSlot";

export function PropertyCard({
  property,
  onView,
}: {
  property: Property;
  onView: (p: Property) => void;
}) {
  const p = property;
  return (
    <article id={`property-${p.id}`} className="group flex flex-col">
      <div className="relative overflow-hidden">
        <ImageSlot slot={p.cardImage} ratio="aspect-[4/5]" />
        {p.id === "express" && (
          <div className="absolute left-4 top-4 bg-gold px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-ink">
            launching
          </div>
        )}
      </div>
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex items-center gap-2 text-xs elet-eyebrow text-teal">
          <MapPin className="h-3 w-3" />
          {p.location.toLowerCase()}
        </div>
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-3xl leading-tight">{p.name}</h3>
          <div className="whitespace-nowrap text-sm text-ink-soft">
            {p.priceFrom}
            <span className="text-xs"> /night</span>
          </div>
        </div>
        <p className="text-[15px] leading-relaxed text-ink/85">{p.cardCopy}</p>
        <button
          onClick={() => onView(p)}
          className="mt-2 inline-flex w-fit items-center gap-1.5 border-b border-ink pb-1 text-xs font-medium uppercase tracking-[0.22em] text-ink transition-colors hover:border-gold hover:text-teal"
        >
          {p.id === "express" ? "see launch" : "view hotel"}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </article>
  );
}
