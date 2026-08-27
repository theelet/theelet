export type JournalEntry = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  image: { src: string; alt: string };
  body: string;
};

export function formatJournalDate(iso: string) {
  const d = new Date(iso);
  return d
    .toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
    .toLowerCase();
}

export const journalEntries: JournalEntry[] = [
  {
    slug: "before-hotels",
    title: "before hotels",
    excerpt:
      "karachi has always known how to host people. long before there was a hospitality industry, there was a hospitality instinct.",
    date: "2026-08-12",
    image: {
      src: "/images/web/entrance.webp",
      alt: "red-brick entrance and planted courtyard at elet signature in clifton",
    },
    body: `karachi has always known how to host people. long before there was a hospitality industry, there was a hospitality instinct.

start with the tea shops. in 1936, a man who had left yazd, in iran, opened a small cafe on a busy karachi street corner. he called it khairabad. he built it exactly where a stranger would find it easily — near a bus stop, on a corner, no appointment needed. by 1947, when the country he now called home was one week old, khairabad was already eleven years into the job of feeding people who walked in off the street.

that was the whole idea behind the irani cafe. no one was too important or too ordinary for a seat. a student, a clerk, a poet — they all sat at the same marble tables and paid the same bill. the rule was never written down anywhere, but everyone who used these cafes knew it: you could sit as long as you wanted. a cup of doodh patti and a bun bought you an afternoon, not just a drink.

by the 1970s, karachi had more than a hundred of these cafes. today there are fewer than ten. the city got more expensive. the owners grew old. people started meeting in malls instead of on corners. but the idea those cafes were built on didn't disappear, it just moved indoors, into homes.

a few streets over, in parsi colony, there's a hundred-year-old house with a small window cut into its ground floor. for fifty years, a family has sold homemade cakes and savouries through that window. no signage, no social media. people simply know it's there, the way you know where your own kitchen is. that's hospitality that never had to announce itself, because it never needed to be found — it just needed to be trusted.

this is what karachi was doing before hotels existed here in any modern sense. hosting wasn't a service industry. it was a house rule. a door that stayed open. a chair that was always free for whoever walked in next.

we didn't invent any of this. the elet is our attempt to hold on to it — to build rooms and rooftops and reception desks around an idea the city already understood generations before we opened our first door. a guest is not a transaction. a guest is someone the city has always known how to take care of.

before there were hotels, there was hospitality. we're just continuing it.

— the elet, karachi`,
  },
];

export function getEntry(slug: string) {
  return journalEntries.find((e) => e.slug === slug);
}

export function otherEntries(slug: string, limit = 3) {
  return journalEntries.filter((e) => e.slug !== slug).slice(0, limit);
}
