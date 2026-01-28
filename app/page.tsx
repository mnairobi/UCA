import Agenda from "@/components/agenda/Agenda";
import Faq from "@/components/faq/Faq";
import HeroSection from "@/components/herosection/Hero";
import AspirantsSection from "@/components/ourleaders/Aspirants";
import VisionSection from "@/components/visionmission/vision";

export default function Home() {
  return (
   <main>
      <HeroSection />
      <VisionSection />
      <Agenda />
      <AspirantsSection />
      <Faq />
   </main>
  );
}
