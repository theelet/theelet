import { perks } from "@/data/content";
import { PerkCard } from "./PerkCard";
import { ScrollFadeIn } from "./ScrollFadeIn";

export function PerksGrid() {
  return (
    <section id="perks" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <ScrollFadeIn>
          <div className="max-w-2xl">
            <div className="elet-eyebrow text-teal">why book with us</div>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-6xl">
              small things, done properly.
            </h2>
            <p className="mt-4 text-ink-soft">
              the perks of booking direct with the elet. no third-party markups, no upsell theatre.
            </p>
          </div>
        </ScrollFadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {perks.map((p, i) => (
            <ScrollFadeIn key={p.title} delay={i * 80}>
              <PerkCard perk={p} />
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
