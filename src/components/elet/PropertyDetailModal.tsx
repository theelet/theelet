import { MapPin } from "lucide-react";
import type { Property } from "@/data/content";
import { whatsapp } from "@/data/content";
import { ImageSlot } from "./ImageSlot";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function PropertyDetailModal({
  property,
  open,
  onOpenChange,
}: {
  property: Property | null;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  if (!property) return null;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl gap-0 overflow-hidden p-0">
        <div className="grid gap-0 md:grid-cols-2">
          <ImageSlot slot={property.heroImage} ratio="aspect-[4/5] md:aspect-auto md:h-full" />
          <div className="flex flex-col gap-4 p-8">
            <div className="flex items-center gap-2 text-xs elet-eyebrow text-teal">
              <MapPin className="h-3 w-3" />
              {property.location.toLowerCase()}
            </div>
            <DialogTitle className="font-display text-4xl leading-tight">{property.name}</DialogTitle>
            <div className="text-sm text-ink-soft">{property.priceLabel}</div>
            <div className="space-y-3 text-[15px] leading-relaxed text-ink/90">
              {property.extendedDescription.split("\n\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-2 border-t border-border pt-4">
              <div className="elet-eyebrow text-ink-soft">who it&apos;s for</div>
              <p className="mt-2 text-sm text-ink">{property.targetGuest}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="#booking"
                onClick={() => onOpenChange(false)}
                className="inline-flex items-center gap-2 bg-gold px-6 py-3 text-xs font-medium uppercase tracking-[0.22em] text-ink hover:bg-gold-soft"
              >
                book this hotel
              </a>
              <a
                href={whatsapp.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-ink/20 px-6 py-3 text-xs font-medium uppercase tracking-[0.22em] text-ink hover:bg-ink hover:text-cream"
              >
                whatsapp us
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
