import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { PageShell, PageHeader, WhatsappButton } from "@/components/elet/PageShell";

export const metadata: Metadata = {
  title: "faqs — the elet karachi",
  description:
    "answers on booking, check in, cancellations, and what's included at elet signature, elet business, and elet express in karachi.",
  openGraph: {
    title: "faqs — the elet karachi",
    description:
      "booking, check in, cancellations, and what's included at all three elet properties.",
    type: "website",
  },
};

type FaqGroup = { category: string; items: { q: string; a: string }[] };

const groups: FaqGroup[] = [
  {
    category: "booking",
    items: [
      {
        q: "how do i book a room?",
        a: "the fastest way is the booking bar on our homepage. pick your property, dates, and guests, leave your name and number, and we confirm on whatsapp. you can also message us directly at +92 337 1129644.",
      },
      {
        q: "do you have a best rate guarantee?",
        a: "yes. booking direct with us is always our lowest rate. if you find a lower published rate for the same room and dates elsewhere, tell us and we'll match it.",
      },
      {
        q: "do i need to pay a deposit?",
        a: "for most stays we hold your room without a card. for long stays, whole-floor bookings, and peak dates we may ask for a partial advance. we'll always tell you before confirming.",
      },
    ],
  },
  {
    category: "check in and check out",
    items: [
      {
        q: "what are your check in and check out times?",
        a: "check in from 2pm, check out by 12pm. if your flight lands early or leaves late, ask us. we accommodate where we can, at no charge when the room allows it.",
      },
      {
        q: "what do i need at check in?",
        a: "a valid cnic or passport for each adult guest. that's it.",
      },
    ],
  },
  {
    category: "changes and cancellations",
    items: [
      {
        q: "can i change my dates?",
        a: "yes. message us on whatsapp at least 24 hours before arrival and we'll move your stay to any available date, subject to the rate for the new dates.",
      },
      {
        q: "what is your cancellation policy?",
        a: "cancel up to 24 hours before check in at no cost. inside 24 hours we may charge the first night. whole-floor and long-stay bookings have their own terms, which we confirm in writing when you book.",
      },
    ],
  },
  {
    category: "the properties",
    items: [
      {
        q: "what's the difference between signature, business, and express?",
        a: "signature in clifton is our flagship: rooftop bar, dining room, and our most considered rooms. business on shahrah-e-faisal sits in the city's business corridor with an in-house cafe and restaurant. express in dha is karachi's first premium hotel apartments, with a full kitchen and real privacy at a lower rate.",
      },
      {
        q: "do the express apartments have a kitchen?",
        a: "yes. every express layout ships with a real kitchen, from the standard room up to the private whole floor.",
      },
      {
        q: "is parking available?",
        a: "yes, on site at all three properties, at no extra cost.",
      },
    ],
  },
  {
    category: "during your stay",
    items: [
      {
        q: "is wifi included?",
        a: "high speed wifi is included at every property, in rooms and in all public spaces.",
      },
      {
        q: "is breakfast included?",
        a: "breakfast is included at signature and business. at express you have a full kitchen, and breakfast can be added on request.",
      },
      {
        q: "can you arrange airport pickup?",
        a: "yes. tell us your flight number on whatsapp and we'll arrange a car to meet you.",
      },
      {
        q: "do you host events or long stays?",
        a: "we do both. rooftop dinners and small gatherings at signature, and monthly rates at express. message us and we'll put together something specific.",
      },
    ],
  },
];

export default function FaqsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="help"
        title="faqs"
        subtitle="the questions we get most. if yours isn't here, message us and a real person will answer."
      />
      <div className="mx-auto max-w-[820px] px-4 pb-20 sm:px-8 sm:pb-28">
        <div className="flex flex-col gap-12">
          {groups.map((group) => (
            <section key={group.category}>
              <h2 className="elet-eyebrow text-teal">{group.category}</h2>
              <div className="mt-4">
                {group.items.map((item) => (
                  <details
                    key={item.q}
                    className="group border-b border-ink/10 [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-lg">
                      {item.q}
                      <ChevronDown className="h-4 w-4 shrink-0 text-ink-soft transition-transform duration-300 group-open:rotate-180" />
                    </summary>
                    <div className="pb-5 text-base leading-relaxed text-ink-soft">{item.a}</div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 border border-ink/10 bg-cream-warm p-8 sm:p-12">
          <h2 className="font-display text-2xl sm:text-3xl">still have a question?</h2>
          <p className="mt-3 max-w-lg text-ink-soft">
            message us on whatsapp. we reply quickly, and it&apos;s always someone from the team.
          </p>
          <div className="mt-6">
            <WhatsappButton>whatsapp us</WhatsappButton>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
