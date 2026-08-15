import { rateBars, rateSummary } from "@/data/content";

const max = Math.max(...rateBars.map((r) => r.traditional));

function fmt(n: number) {
  return `PKR ${n.toLocaleString()}`;
}

export function StatBar() {
  return (
    <div className="bg-cream p-6 sm:p-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="elet-eyebrow text-teal">rate comparison</div>
          <h3 className="mt-2 font-display text-3xl">traditional hotel vs the elet</h3>
        </div>
        <div className="flex items-center gap-6 text-xs">
          <span className="flex items-center gap-2 text-ink-soft">
            <span className="h-3 w-3 bg-ink/25" /> traditional
          </span>
          <span className="flex items-center gap-2 text-ink-soft">
            <span className="h-3 w-3 bg-gold" /> the elet
          </span>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        {rateBars.map((row) => (
          <div key={row.label}>
            <div className="flex items-baseline justify-between text-sm">
              <span className="text-ink">{row.label}</span>
              <span className="text-xs text-ink-soft">
                {fmt(row.traditional)} → <span className="text-ink">{fmt(row.elet)}</span>
              </span>
            </div>
            <div className="mt-2 space-y-1.5">
              <div className="h-2.5 w-full bg-warm-muted/60">
                <div className="h-full bg-ink/25" style={{ width: `${(row.traditional / max) * 100}%` }} />
              </div>
              <div className="h-2.5 w-full bg-warm-muted/60">
                <div className="h-full bg-gold" style={{ width: `${(row.elet / max) * 100}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-4 border-t border-border pt-8 sm:grid-cols-3">
        <div>
          <div className="elet-eyebrow text-ink-soft">avg traditional rate</div>
          <div className="mt-2 font-display text-3xl text-ink">{rateSummary.traditionalAvg}</div>
        </div>
        <div>
          <div className="elet-eyebrow text-ink-soft">avg elet rate</div>
          <div className="mt-2 font-display text-3xl text-teal">{rateSummary.eletAvg}</div>
        </div>
        <div>
          <div className="elet-eyebrow text-ink-soft">you save</div>
          <div className="mt-2 font-display text-3xl text-gold">{rateSummary.savings}</div>
        </div>
      </div>
    </div>
  );
}
