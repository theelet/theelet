import { MapPin } from "lucide-react";
import { whatsapp } from "@/data/content";
import { StatBar } from "./StatBar";
import { ComparisonTable } from "./ComparisonTable";
import { ScrollFadeIn } from "./ScrollFadeIn";

function EletMark() {
  return (
    <div className="grid h-14 w-14 place-items-center border border-gold text-gold">
      <span className="font-display text-3xl leading-none">e</span>
    </div>
  );
}

function QRPlaceholder() {
  // Static, generative-looking QR-ish grid so the CTA card feels complete
  // without pulling a real QR library.
  const cells = Array.from({ length: 25 * 25 }, (_, i) => {
    const x = i % 25;
    const y = Math.floor(i / 25);
    const finder = (x < 7 && y < 7) || (x > 17 && y < 7) || (x < 7 && y > 17);
    const seed = (x * 928371 + y * 1237) % 100;
    return finder || seed > 55;
  });
  return (
    <div
      className="grid aspect-square w-32 gap-0 bg-cream p-2"
      style={{ gridTemplateColumns: "repeat(25, minmax(0,1fr))" }}
    >
      {cells.map((on, i) => (
        <div key={i} className={on ? "bg-ink" : "bg-cream"} />
      ))}
    </div>
  );
}

export function LaunchCampaign() {
  return (
    <section id="elet-express" className="relative bg-teal-deep py-24 text-cream sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-8">
        <ScrollFadeIn>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <div>
              <div className="elet-eyebrow text-gold">we&apos;re launching</div>
              <h2 className="mt-4 font-display text-5xl leading-[1.02] sm:text-7xl">
                the elet express in dha.
                <br />
                <span className="font-semibold italic">karachi&apos;s first</span> premium hotel apartments,
                at a <span className="font-semibold italic">60% price drop</span>.
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-cream/85">
              we&apos;re opening karachi&apos;s first premium hotel apartments in dha. private floors, real kitchens, and hotel-grade service, all at up to 60% below what a traditional stay would cost. zero compromises on comfort.
            </p>
          </div>
        </ScrollFadeIn>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <ScrollFadeIn className="text-ink">
            <StatBar />
          </ScrollFadeIn>
          <ScrollFadeIn delay={120} className="text-ink">
            <ComparisonTable />
          </ScrollFadeIn>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <ScrollFadeIn>
            <div className="flex h-full flex-col justify-between gap-8 border border-cream/15 p-8 sm:p-10">
              <div>
                <div className="elet-eyebrow text-gold">location</div>
                <h3 className="mt-3 font-display text-3xl sm:text-4xl">
                  at the center of karachi&apos;s business hubs
                </h3>
                <p className="mt-4 max-w-md text-cream/80">
                  minutes from shahrah-e-faisal and clifton, tucked into dha&apos;s quieter grid. all for under pkr 10,000 a night.
                </p>
              </div>
              <div className="relative mt-6 h-48 overflow-hidden border border-cream/15 bg-cream/[0.03]">
                <svg viewBox="0 0 400 200" className="h-full w-full">
                  <defs>
                    <pattern id="mapgrid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M20 0 L0 0 0 20" fill="none" stroke="rgba(245,240,225,0.12)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="400" height="200" fill="url(#mapgrid)" />
                  <path d="M 0 130 Q 120 110 220 140 T 400 120" fill="none" stroke="rgba(245,240,225,0.35)" strokeWidth="1.5" />
                  <path d="M 60 0 L 100 200" fill="none" stroke="rgba(245,240,225,0.25)" strokeWidth="1" />
                  <path d="M 280 0 L 250 200" fill="none" stroke="rgba(245,240,225,0.25)" strokeWidth="1" />
                  <text x="30" y="30" fill="rgba(245,240,225,0.6)" fontSize="9" fontFamily="DM Sans">clifton</text>
                  <text x="330" y="30" fill="rgba(245,240,225,0.6)" fontSize="9" fontFamily="DM Sans">shahrah-e-faisal</text>
                  <text x="180" y="185" fill="rgba(245,240,225,0.6)" fontSize="9" fontFamily="DM Sans">dha phase 6</text>
                  <circle cx="200" cy="100" r="18" fill="rgba(200,158,90,0.25)" />
                  <circle cx="200" cy="100" r="8" fill="oklch(0.74 0.12 78)" />
                  <circle cx="200" cy="100" r="3" fill="#111" />
                </svg>
                <div className="absolute bottom-3 right-3 bg-cream/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-cream/70 backdrop-blur">
                  elet express · dha
                </div>
              </div>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={100}>
            <div className="flex h-full flex-col justify-between gap-6 bg-cream p-8 text-ink sm:p-10">
              <div>
                <EletMark />
                <h3 className="mt-6 font-display text-3xl leading-tight sm:text-4xl">
                  experience the elet express difference
                </h3>
                <p className="mt-3 text-ink-soft">
                  book direct in under a minute. our team responds on whatsapp within the hour.
                </p>
              </div>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div className="flex flex-col gap-3">
                  <a
                    href={whatsapp.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-teal-deep px-6 py-4 text-xs font-medium uppercase tracking-[0.22em] text-cream hover:bg-teal"
                  >
                    whatsapp {whatsapp.number}
                  </a>
                  <a
                    href="#booking"
                    className="text-xs uppercase tracking-[0.22em] text-ink underline underline-offset-4 hover:text-teal"
                  >
                    or check dates online
                  </a>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <QRPlaceholder />
                  <div className="text-[10px] uppercase tracking-[0.2em] text-ink-soft">scan to book</div>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>

        <div className="mt-16 flex items-center gap-2 text-xs text-cream/70">
          <MapPin className="h-3.5 w-3.5 text-gold" />
          <span className="elet-editorial">the elet express, dha phase 6, karachi</span>
        </div>
      </div>
    </section>
  );
}
