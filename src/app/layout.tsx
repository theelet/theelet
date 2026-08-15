import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "the elet — boutique hotels in karachi",
  description:
    "the elet is a karachi hotel group with three properties: elet signature in clifton, elet business on shahrah-e-faisal, and elet express in dha. warm, understated stays at every rate.",
  authors: [{ name: "The Elet" }],
  icons: {
    icon: "/elet-logo.svg",
  },
  openGraph: {
    title: "the elet — boutique hotels in karachi",
    description:
      "three karachi properties. warm interiors, editorial hospitality, and premium hotel apartments up to 60% below traditional rates.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-cream text-ink">
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
