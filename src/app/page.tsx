import { AnnouncementBar } from "@/components/elet/AnnouncementBar";
import { Nav } from "@/components/elet/Nav";
import { Hero } from "@/components/elet/Hero";
import { BookingBar } from "@/components/elet/BookingBar";
import { TrendingAreas } from "@/components/elet/TrendingAreas";
import { PropertiesGrid } from "@/components/elet/PropertiesGrid";
import { LaunchCampaign } from "@/components/elet/LaunchCampaign";
import { PerksGrid } from "@/components/elet/PerksGrid";
import { AboutStory } from "@/components/elet/AboutStory";
import { Newsletter } from "@/components/elet/Newsletter";
import { Footer } from "@/components/elet/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <AnnouncementBar />
      <Nav />
      <main>
        <Hero />
        <BookingBar />
        <TrendingAreas />
        <PropertiesGrid />
        <LaunchCampaign />
        <PerksGrid />
        <AboutStory />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
