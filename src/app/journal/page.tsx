import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, PageHeader } from "@/components/elet/PageShell";
import { journalEntries, formatJournalDate } from "@/data/journal";

export const metadata: Metadata = {
  title: "journal — the elet karachi",
  description:
    "notes on karachi, hospitality, and the small things we care about, written by the team at the elet.",
  openGraph: {
    title: "journal — the elet karachi",
    description: "notes on karachi, hospitality, and the small things we care about.",
    type: "website",
  },
};

export default function JournalIndex() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="the elet"
        title="journal"
        subtitle="notes on karachi, hospitality, and the small things we care about."
      />
      <div className="mx-auto max-w-[1400px] px-4 pb-20 sm:px-8 sm:pb-28">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {journalEntries.map((entry) => (
            <article key={entry.slug} className="flex flex-col">
              <Link href={`/journal/${entry.slug}`} className="group block overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={entry.image.src}
                  alt={entry.image.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </Link>
              <div className="elet-eyebrow mt-5 text-teal">{formatJournalDate(entry.date)}</div>
              <h2 className="mt-2 font-display text-2xl leading-tight">
                <Link href={`/journal/${entry.slug}`} className="hover:text-teal">
                  {entry.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{entry.excerpt}</p>
              <Link
                href={`/journal/${entry.slug}`}
                className="mt-4 inline-flex w-fit border-b border-ink pb-1 text-xs font-medium uppercase tracking-[0.22em] hover:border-gold hover:text-teal"
              >
                read
              </Link>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
