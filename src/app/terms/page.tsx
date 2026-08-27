import type { Metadata } from "next";
import { PageShell, PageHeader, Prose, WhatsappButton } from "@/components/elet/PageShell";

export const metadata: Metadata = {
  title: "terms and conditions — the elet karachi",
  description:
    "booking, payment, cancellation, and stay terms for elet signature, elet business, and elet express in karachi.",
  openGraph: {
    title: "terms and conditions — the elet karachi",
    description: "booking, payment, cancellation, and stay terms for the elet karachi.",
    type: "website",
  },
};

const body = `these terms cover bookings made with the elet karachi across elet signature in clifton, elet business on shahrah-e-faisal, and elet express in dha.

bookings. a reservation is confirmed once we confirm it to you in writing, by whatsapp or email. rates are quoted per room per night and include applicable taxes unless stated otherwise. our direct rate is always our lowest rate.

payment. most stays are settled at the property on arrival or departure. for long stays, whole-floor bookings, and peak dates we may ask for a partial advance, and we will always tell you before confirming.

changes and cancellations. you may change or cancel at no cost up to 24 hours before check in. within 24 hours of check in we may charge the first night. whole-floor and monthly bookings carry their own terms, confirmed in writing at the time of booking.

check in and check out. check in is from 2pm and check out is by 12pm. early arrival and late departure are offered where the room allows. a valid cnic or passport is required for each adult guest.

guests and conduct. rooms may only be occupied by the number of guests confirmed on the booking. we ask guests to respect other guests, our team, and the property. we reserve the right to end a stay where conduct puts others at risk, or where damage is caused to the property.

damage and lost property. guests are responsible for damage to the room or its contents beyond ordinary use. items left behind are held for 30 days, and we will do our best to return them to you.

liability. we take reasonable care of guests and belongings but cannot accept liability for loss or damage outside our control. valuables should be kept in the room safe where provided.

changes to these terms. we may update these terms from time to time. the version published here at the time of your booking applies to that stay.

questions about any of the above are welcome. message us and a real person will answer.`;

export default function TermsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="legal"
        title="terms and conditions"
        subtitle="plain language, no small print games."
      />
      <div className="mx-auto max-w-[760px] px-4 pb-20 sm:px-8 sm:pb-28">
        <Prose text={body} />
        <div className="mt-12">
          <WhatsappButton>ask us a question</WhatsappButton>
        </div>
      </div>
    </PageShell>
  );
}
