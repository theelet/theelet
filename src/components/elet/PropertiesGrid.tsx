"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { properties, type Property } from "@/data/content";
import { ScrollFadeIn } from "./ScrollFadeIn";
import { PropertyCard } from "./PropertyCard";
import { PropertyDetailModal } from "./PropertyDetailModal";

const filters = ["all", "Clifton", "DHA", "Shahrah-e-Faisal"] as const;
type Filter = (typeof filters)[number];

export function PropertiesGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Property | null>(null);
  const [open, setOpen] = useState(false);

  const shown = filter === "all" ? properties : properties.filter((p) => p.location === filter);

  const handleView = (p: Property) => {
    if (p.id === "express") {
      document.getElementById("elet-express")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    setSelected(p);
    setOpen(true);
  };

  return (
    <section className="bg-cream-warm py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <ScrollFadeIn>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <div className="elet-eyebrow text-teal">our hotels</div>
              <h2 className="mt-3 font-display text-4xl leading-tight sm:text-6xl">our hotel locations</h2>
              <p className="mt-4 text-ink-soft">three properties across karachi. one point of view.</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "border px-4 py-2 text-xs uppercase tracking-[0.2em] transition-colors",
                    filter === f
                      ? "border-ink bg-ink text-cream"
                      : "border-ink/20 text-ink hover:border-ink",
                  )}
                >
                  {f === "all" ? "all" : f.toLowerCase()}
                </button>
              ))}
            </div>
          </div>
        </ScrollFadeIn>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <ScrollFadeIn key={p.id} delay={i * 80}>
              <PropertyCard property={p} onView={handleView} />
            </ScrollFadeIn>
          ))}
        </div>
      </div>
      <PropertyDetailModal property={selected} open={open} onOpenChange={setOpen} />
    </section>
  );
}
