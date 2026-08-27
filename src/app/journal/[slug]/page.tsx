import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell, Prose } from "@/components/elet/PageShell";
import {
  journalEntries,
  getEntry,
  otherEntries,
  formatJournalDate,
} from "@/data/journal";

// Pre-render every journal slug at build time.
export function generateStaticParams() {
  return journalEntries.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) {
    return { title: "not found — the elet journal", robots: { index: false } };
  }
  return {
    title: `${entry.title} — the elet journal`,
    description: entry.excerpt,
    openGraph: {
      title: `${entry.title} — the elet journal`,
      description: entry.excerpt,
      type: "article",
    },
  };
}

export default async function JournalPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) notFound();

  const more = otherEntries(entry.slug);

  return (
    <PageShell>
      <article>
        <div className="relative h-[42vh] min-h-[260px] w-full overflow-hidden sm:h-[56vh]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={entry.image.src} alt={entry.image.alt} className="h-full w-full object-cover" />
        </div>
        <div className="mx-auto max-w-[700px] px-4 py-14 sm:px-8 sm:py-20">
          <div className="elet-eyebrow text-teal">{formatJournalDate(entry.date)}</div>
          <h1 className="mt-3 font-display text-4xl leading-[1.05] sm:text-5xl">{entry.title}</h1>
          <div className="mt-8">
            <Prose text={entry.body} />
          </div>
          <Link
            href="/journal"
            className="mt-12 inline-flex w-fit border-b border-ink pb-1 text-xs font-medium uppercase tracking-[0.22em] hover:border-gold hover:text-teal"
          >
            back to journal
          </Link>
        </div>
      </article>

      {more.length > 0 && (
        <section className="border-t border-ink/10 bg-cream-warm py-16 sm:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
            <h2 className="font-display text-3xl sm:text-4xl">more from the journal</h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {more.map((e) => (
                <article key={e.slug}>
                  <Link href={`/journal/${e.slug}`} className="block">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={e.image.src}
                      alt={e.image.alt}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </Link>
                  <div className="elet-eyebrow mt-4 text-teal">{formatJournalDate(e.date)}</div>
                  <h3 className="mt-2 font-display text-xl">
                    <Link href={`/journal/${e.slug}`} className="hover:text-teal">
                      {e.title}
                    </Link>
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageShell>
  );
}
