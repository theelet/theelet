import type { Metadata } from "next";
import { PageShell, PageHeader, WhatsappButton } from "@/components/elet/PageShell";

export const metadata: Metadata = {
  title: "careers — the elet karachi",
  description:
    "join the elet in karachi. open roles across elet signature in clifton, elet business on shahrah-e-faisal, and elet express in dha.",
  openGraph: {
    title: "careers — the elet karachi",
    description: "open roles across our three karachi properties, and how to apply.",
    type: "website",
  },
};

type Opening = { title: string; property: string; type: string; summary: string };

const openings: Opening[] = [
  {
    title: "front desk host",
    property: "elet signature, clifton",
    type: "full time",
    summary:
      "the first face a guest sees. you'll run check ins, remember returning guests, and make the lobby feel like someone was expecting them.",
  },
  {
    title: "rooftop bar and floor lead",
    property: "elet signature, clifton",
    type: "full time",
    summary:
      "run service on the rooftop across long karachi evenings, keep the pace unhurried, and lead a small floor team.",
  },
  {
    title: "housekeeping supervisor",
    property: "elet express, dha",
    type: "full time",
    summary:
      "hold the standard across our hotel apartments. you'll build the checklist, train the team, and own the detail guests notice.",
  },
];

const email = "careers@theelet.com";

export default function CareersPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="join us"
        title="careers"
        subtitle="we hire for warmth first. everything else can be taught."
      />
      <div className="mx-auto max-w-[900px] px-4 pb-20 sm:px-8 sm:pb-28">
        <p className="max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
          the elet is a small group with three karachi properties and a simple standard: a guest is
          never a transaction. if you like hosting people properly, unhurried and without a script,
          we&apos;d like to meet you.
        </p>

        <h2 className="mt-14 font-display text-3xl sm:text-4xl">open roles</h2>

        {openings.length === 0 ? (
          <div className="mt-6 border border-ink/10 bg-cream-warm p-8">
            <p className="text-ink-soft">
              nothing open right now. send us your cv anyway — we keep every application and reach
              out first when a role opens.
            </p>
          </div>
        ) : (
          <div className="mt-6 flex flex-col">
            {openings.map((role) => (
              <article
                key={role.title}
                className="flex flex-col gap-3 border-t border-ink/10 py-8 sm:flex-row sm:items-start sm:justify-between sm:gap-10"
              >
                <div className="max-w-xl">
                  <h3 className="font-display text-2xl">{role.title}</h3>
                  <div className="elet-eyebrow mt-2 text-teal">
                    {role.property} · {role.type}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{role.summary}</p>
                </div>
                <a
                  href={`mailto:${email}?subject=${encodeURIComponent(`application: ${role.title}`)}`}
                  className="inline-flex h-fit w-fit shrink-0 bg-gold px-5 py-3 text-xs font-medium uppercase tracking-[0.22em] text-ink transition-colors hover:bg-gold-soft"
                >
                  apply
                </a>
              </article>
            ))}
          </div>
        )}

        <div className="mt-16 border border-ink/10 bg-cream-warm p-8 sm:p-12">
          <h2 className="font-display text-2xl sm:text-3xl">don&apos;t see your role?</h2>
          <p className="mt-3 max-w-lg text-ink-soft">
            write to us at{" "}
            <a href={`mailto:${email}`} className="border-b border-ink hover:text-teal">
              {email}
            </a>{" "}
            with a short note about what you&apos;d want to do here, or message us on whatsapp.
          </p>
          <div className="mt-6">
            <WhatsappButton>whatsapp us</WhatsappButton>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
