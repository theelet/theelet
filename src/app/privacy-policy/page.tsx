import type { Metadata } from "next";
import { PageShell, PageHeader, Prose, WhatsappButton } from "@/components/elet/PageShell";

export const metadata: Metadata = {
  title: "privacy policy — the elet karachi",
  description:
    "what the elet karachi collects when you book or subscribe, how we use it, and how to ask us to change or delete it.",
  openGraph: {
    title: "privacy policy — the elet karachi",
    description: "what we collect, why, and how to ask us to change or delete it.",
    type: "website",
  },
};

const body = `this policy explains what we collect when you book with the elet karachi or sign up for our updates, and what we do with it.

what we collect. when you make a booking enquiry we collect your name, email address, whatsapp number, the property and dates you asked about, and the number of guests. if you tick the updates box we also record that consent.

why we collect it. we use your details to confirm and manage your stay, to reply to you on whatsapp, and to reach you if something about your booking changes. if you opted in, we use your email and number to send occasional news about the properties and offers.

what we don't do. we do not sell your data. we do not share it with advertisers. we do not send marketing to guests who did not opt in.

storage and security. your details are stored in our secure booking database with access restricted to the elet team. we keep booking records for as long as needed to run the business and meet our record-keeping obligations.

your choices. you can ask us to stop sending updates at any time, and every marketing email includes an unsubscribe link. you can also ask us to see, correct, or delete the personal data we hold about you. message us and we will action it.

cookies. our site uses only what it needs to function. we do not run advertising trackers.

changes. if this policy changes, the updated version will be published on this page.

to make any request about your data, or to ask a question about this policy, contact us on whatsapp and a member of the team will handle it.`;

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="legal"
        title="privacy policy"
        subtitle="what we collect, why we collect it, and how to ask us to stop."
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
