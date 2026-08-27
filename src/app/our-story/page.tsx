import type { Metadata } from "next";
import { PageShell, Prose } from "@/components/elet/PageShell";
import { ImageSlot } from "@/components/elet/ImageSlot";
import { properties } from "@/data/content";

export const metadata: Metadata = {
  title: "our story — the elet karachi",
  description:
    "why we built the elet: three karachi properties, warm interiors, and hospitality that doesn't feel like a transaction.",
  openGraph: {
    title: "our story — the elet karachi",
    description:
      "the thinking behind elet signature, elet business, and elet express in karachi.",
    type: "article",
  },
};

const storyBody = `we started the elet because karachi deserved somewhere that felt like the city itself. warm, considered, unhurried. not a corporate lobby, not a beige business hotel. a place with a point of view.

karachi has never been short of grand hotels. what it was missing was something smaller — rooms that felt considered rather than generic, staff who treated a stay like hosting rather than processing, and spaces built around how people in this city actually like to spend an evening: slowly, on a rooftop, with good tea and better company.

that's where elet signature started, in clifton, minutes from the sea and the neighbourhood's best cafes. a rooftop bar, a dining room built for long evenings, and rooms designed the way we'd want a guest room in our own home to feel.

elet business, on shahrah-e-faisal, came next — for guests who need to be close to the city's business corridor without sacrificing the warmth of the brand. an in-house cafe and restaurant mean you never have to leave the building for either.

and now, elet express in dha: karachi's first premium hotel apartments, built for guests who want real privacy, a full kitchen, and hotel-grade comfort, at a fraction of what a traditional stay would cost.

three properties, three different kinds of stay, one idea holding them together: hospitality shouldn't feel like a transaction. it should feel like somewhere that was expecting you.

we book direct, because we'd rather our guests get our lowest rate than pay a markup to a third party. we remember returning guests, because loyalty deserves more than a discount code. and we're still building — elet express is just the beginning of where we're taking this.

karachi is an unhurried city if you let it be. we built the elet so there'd finally be somewhere to prove it.

— the elet, karachi`;

export default function OurStoryPage() {
  return (
    <PageShell>
      <div className="relative h-[46vh] min-h-[280px] w-full overflow-hidden sm:h-[60vh]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/web/rooftop-day.webp"
          alt="the elet signature rooftop terrace in clifton looking over karachi at golden hour"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mx-auto max-w-[700px] px-4 py-14 sm:px-8 sm:py-20">
        <div className="elet-eyebrow text-teal">the elet</div>
        <h1 className="mt-3 font-display text-4xl leading-[1.05] sm:text-6xl">our story</h1>
        <div className="mt-8">
          <Prose text={storyBody} />
        </div>
      </div>

      <section className="border-t border-ink/10 bg-cream-warm py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <h2 className="font-display text-3xl sm:text-4xl">three properties</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((p) => (
              <article key={p.id} className="flex flex-col">
                <div className="relative overflow-hidden">
                  <ImageSlot slot={p.cardImage} ratio="aspect-[4/3]" />
                </div>
                <h3 className="mt-5 font-display text-2xl">{p.name}</h3>
                <p className="mt-2 text-sm text-ink-soft">{p.tagline}</p>
                <a
                  href={p.id === "express" ? "/#elet-express" : `/#property-${p.id}`}
                  className="mt-4 inline-flex w-fit border-b border-ink pb-1 text-xs font-medium uppercase tracking-[0.22em] text-ink hover:border-gold hover:text-teal"
                >
                  view hotel
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
