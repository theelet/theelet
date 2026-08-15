// Single source of truth for all copy, pricing, and image slots.
//
// Real hotel photography lives in `public/images/web/` as web-optimized WebP.
// To swap any photo, change that slot's `src` below — nothing else changes.

const IMG = "/images/web";

export type ImageSlot = {
  slot: string;
  alt: string;
  src: string | null;
};

export const announcement = {
  text: "karachi's first premium hotel apartments. 60% below traditional rates.",
  cta: "explore elet express",
  href: "#elet-express",
};

export type Property = {
  id: "signature" | "business" | "express";
  name: string;
  location: "Clifton" | "DHA" | "Shahrah-e-Faisal";
  tagline: string;
  cardCopy: string;
  extendedDescription: string;
  priceFrom: string;
  priceLabel: string;
  targetGuest: string;
  tier: "premium" | "mid-range" | "value";
  cardImage: ImageSlot;
  heroImage: ImageSlot;
};

export const properties: Property[] = [
  {
    id: "signature",
    name: "elet signature",
    location: "Clifton",
    tagline: "flagship. rooftop-led. built for slow evenings.",
    cardCopy:
      "a rooftop-led boutique stay in the heart of clifton, minutes from dolmen mall and the neighbourhood's best cafes. warm interiors, a signature bar, and an in-house dining room built for slow evenings.",
    extendedDescription:
      "our flagship property sits in clifton, built for guests who want to be close to everything the area does best. dolmen mall, the café strip, and the neighbourhood's evening energy, all a short walk out the door.\n\na red-brick entrance opens into a planted courtyard, setting the tone before you've even checked in. bedrooms are dressed in warm wood tones and tailored curtains, built for comfort over minimalism. by day, the rooftop terrace looks out over clifton's skyline; by night, the signature bar takes over. moody lighting, black iron shelving, and a hand-finished counter marked with the elet crest. in-house dining rounds things out, with exposed brick, tufted seating, and low warm lighting made for unhurried meals.\n\nthis is the elet for guests who want premium, residential-style comfort, not a corporate lobby.",
    priceFrom: "PKR 18,000",
    priceLabel: "from PKR 18,000 / night",
    targetGuest: "premium leisure, staycations, guests drawn to clifton's cafe and mall scene",
    tier: "premium",
    cardImage: {
      slot: "card-signature",
      alt: "elet signature clifton planted entrance walkway",
      src: `${IMG}/entrance.webp`,
    },
    heroImage: {
      slot: "hero-signature-clifton",
      alt: "elet signature rooftop terrace at dusk overlooking clifton",
      src: `${IMG}/rooftop-dusk.webp`,
    },
  },
  {
    id: "business",
    name: "elet business",
    location: "Shahrah-e-Faisal",
    tagline: "on the corridor. cafe and restaurant on-site.",
    cardCopy:
      "a mid-range stay right on main shahrah-e-faisal, built for guests who need to be close to the city's business corridor. an in-house cafe and restaurant mean you don't have to leave for either.",
    extendedDescription:
      "positioned directly on shahrah-e-faisal, this is the elet built for guests moving through karachi's business corridor. close to offices, meetings, and the main artery connecting clifton to dha.\n\ncomfort here is straightforward and dependable rather than showy. clean, well-appointed rooms at a mid-range rate, with an in-house cafe for early starts and a restaurant on-site for evenings you'd rather not plan around. everything you need for a working stay, without the premium markup.\n\nthis is the elet for guests who want a reliable, well-located base on the city's busiest stretch. not a destination stay, just a smart one.",
    priceFrom: "PKR 12,000",
    priceLabel: "from PKR 12,000 / night",
    targetGuest: "business and corporate travellers, practical mid-range stays",
    tier: "mid-range",
    cardImage: {
      slot: "card-business",
      alt: "elet business well-appointed room",
      src: `${IMG}/room-classic.webp`,
    },
    heroImage: {
      slot: "hero-business-shahrahefaisal",
      alt: "elet business room interior with morning light",
      src: `${IMG}/room-bright.webp`,
    },
  },
  {
    id: "express",
    name: "elet express",
    location: "DHA",
    tagline: "launching. premium hotel apartments. 60% price drop.",
    cardCopy:
      "karachi's first premium hotel apartments, launching in dha. private floors, real kitchens, and hotel-grade comfort at up to 60% below traditional rates.",
    extendedDescription:
      "elet express is our newest concept and karachi's first premium hotel apartments. designed for guests who want the space and privacy of an apartment with the service standards of a hotel, at up to 60% below what a traditional stay would cost.\n\nchoose a standard room, a deluxe, an executive, or take the whole private floor. every layout ships with a real kitchen, in-room comfort finishes, and none of the corporate lobby routine.\n\nthis is the elet for guests who want value without compromise. see the full launch breakdown below.",
    priceFrom: "PKR 10,000",
    priceLabel: "from PKR 10,000 / night",
    targetGuest: "value-driven travellers, long stays, families, small groups",
    tier: "value",
    cardImage: {
      slot: "card-express",
      alt: "elet express dha apartment living area",
      src: `${IMG}/living-area.webp`,
    },
    heroImage: {
      slot: "hero-express-dha",
      alt: "elet express dha apartment bedroom with warm interior",
      src: `${IMG}/room-warm.webp`,
    },
  },
];

export const trendingAreas: { name: string; blurb: string; image: ImageSlot }[] = [
  {
    name: "clifton",
    blurb: "cafes, dolmen mall, sea view. karachi's evening address.",
    image: { slot: "area-clifton", alt: "clifton rooftop skyline view", src: `${IMG}/rooftop-day.webp` },
  },
  {
    name: "dha",
    blurb: "quiet streets, boutique retail, private neighbourhoods.",
    image: { slot: "area-dha", alt: "leafy dha residential walkway", src: `${IMG}/entrance.webp` },
  },
  {
    name: "shahrah-e-faisal",
    blurb: "the city's business corridor. offices, hotels, hospitals.",
    image: { slot: "area-shahrahefaisal", alt: "shahrah-e-faisal skyline at dusk", src: `${IMG}/rooftop-dusk.webp` },
  },
  {
    name: "zamzama",
    blurb: "boulevard dining and small-label boutiques.",
    image: { slot: "area-zamzama", alt: "zamzama boulevard dining room", src: `${IMG}/dining.webp` },
  },
];

export const perks = [
  {
    title: "best rate, book direct",
    blurb: "our lowest rates are always here. no third party markups.",
    cta: "book direct",
    image: { slot: "perk-book-direct", alt: "elet reception desk detail", src: `${IMG}/reception.webp` },
  },
  {
    title: "referral scheme",
    blurb: "give a friend 15% off. take 15% off your next stay.",
    cta: "refer a friend",
    image: { slot: "perk-referral", alt: "guests lounge at the elet", src: `${IMG}/lounge.webp` },
  },
  {
    title: "loyalty perks",
    blurb: "recurring guests unlock room upgrades, late checkouts, and house pours.",
    cta: "join the list",
    image: { slot: "perk-loyalty", alt: "warm-lit bedside detail", src: `${IMG}/bedside.webp` },
  },
  {
    title: "corporate and long stay rates",
    blurb: "flexible rates for teams, projects, and stays over seven nights.",
    cta: "talk to us",
    image: { slot: "perk-corporate", alt: "elet business meeting nook", src: `${IMG}/nook.webp` },
  },
];

export const rateBars = [
  { label: "standard room", traditional: 18000, elet: 8500 },
  { label: "deluxe room", traditional: 22500, elet: 10500 },
  { label: "executive room", traditional: 27000, elet: 12000 },
  { label: "whole private floor", traditional: 75000, elet: 40000 },
];

export const rateSummary = {
  traditionalAvg: "PKR 24,833",
  eletAvg: "PKR 10,333",
  savings: "58% avg savings",
};

export const comparisonRows = [
  { feature: "decent room", traditional: true, elet: true },
  { feature: "executive room", traditional: true, elet: true },
  { feature: "whole private floor", traditional: false, elet: true },
  { feature: "in-room kitchen", traditional: false, elet: true },
  { feature: "room service", traditional: true, elet: true },
  { feature: "true privacy", traditional: false, elet: true },
  { feature: "residential interiors", traditional: false, elet: true },
];

export const aboutStory = {
  quote:
    "we started the elet because karachi deserved somewhere that felt like the city itself. warm, considered, unhurried. not a corporate lobby, not a beige business hotel. a place with a point of view.",
  attribution: "the elet, karachi",
  image: { slot: "about-story", alt: "elet interior detail, brass and warm wood", src: `${IMG}/about.webp` } as ImageSlot,
};

export const whatsapp = {
  number: "+92 337 1129644",
  href: "https://wa.me/923371129644",
};

// Per-location WhatsApp booking numbers. When a guest picks a location in the
// booking bar, the "find a room" redirect uses that branch's line; "all
// locations" / anything else falls back to the main number.
export const bookingWhatsapp = {
  default: "923371129644",
  clifton: "923352548913",
  "shahrah-e-faisal": "923172939452",
  dha: "923371129644",
} as const;

export const footerLinks = {
  links: [
    { label: "manage booking", href: "#", comingSoon: true },
    { label: "faqs", href: "#", comingSoon: true },
    { label: "contact", href: whatsapp.href },
    { label: "careers", href: "#", comingSoon: true },
    { label: "terms", href: "#", comingSoon: true },
  ] as { label: string; href: string; comingSoon?: boolean }[],
  social: [
    { label: "instagram", href: "https://www.instagram.com/eletofficial/" },
    { label: "facebook", href: "https://www.facebook.com/eletofficial/" },
    { label: "linkedin", href: "https://www.linkedin.com/company/eletofficial/posts/?feedView=all" },
  ] as { label: string; href: string; comingSoon?: boolean }[],
  languages: [
    { label: "english", active: true },
    { label: "اردو", active: false },
  ],
};
