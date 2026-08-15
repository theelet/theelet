import { Check, X } from "lucide-react";
import { comparisonRows } from "@/data/content";

function Cell({ on, tone }: { on: boolean; tone: "traditional" | "elet" }) {
  const onBg = tone === "elet" ? "bg-gold text-ink" : "bg-teal-deep text-cream";
  return (
    <div className="flex items-center justify-center gap-2">
      <span
        className={`grid h-8 w-8 place-items-center rounded-full ${on ? onBg : "bg-ink/10 text-ink/50"}`}
        aria-hidden
      >
        {on ? <Check className="h-4 w-4" strokeWidth={2.5} /> : <X className="h-4 w-4" strokeWidth={2.5} />}
      </span>
      <span className="text-xs uppercase tracking-[0.18em] text-ink-soft">{on ? "yes" : "no"}</span>
    </div>
  );
}

export function ComparisonTable() {
  return (
    <div className="overflow-hidden bg-cream">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="bg-teal-deep text-cream">
            <th className="px-6 py-4 font-normal elet-eyebrow">what you get</th>
            <th className="px-6 py-4 text-center font-normal elet-eyebrow">traditional hotel</th>
            <th className="px-6 py-4 text-center font-normal elet-eyebrow">the elet express</th>
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((r, i) => (
            <tr key={r.feature} className={i % 2 === 0 ? "bg-cream" : "bg-cream-warm/50"}>
              <td className="px-6 py-4 text-ink">{r.feature}</td>
              <td className="px-6 py-4">
                <Cell on={r.traditional} tone="traditional" />
              </td>
              <td className="px-6 py-4">
                <Cell on={r.elet} tone="elet" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
