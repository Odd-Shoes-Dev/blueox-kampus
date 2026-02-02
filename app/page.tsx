import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import OfferingsGrid from '../components/OfferingsGrid';
import PartnersGrid from '../components/PartnersGrid';
import VisualGallery from '../components/VisualGallery';
import TechSpotlight from '../components/TechSpotlight';
import VRShowcase from '../components/VRShowcase';
import SkillsSection from '../components/SkillsSection';
import HouseCard from '../components/HouseCard';
import Marquee from '../components/Marquee';
import StartJourney from '../components/StartJourney';
import ApplyCTA from '../components/ApplyCTA';

export default function Page(){
  return (
    <main className="w-full bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
      <Header />
      <Hero />
      <OfferingsGrid />
      <PartnersGrid />
      <VisualGallery />
      <TechSpotlight />
      <VRShowcase />
      <SkillsSection />
      <HouseCard />
      <Marquee />
      <StartJourney />
      <ApplyCTA />
      <Footer />
    </main>
  );
}
