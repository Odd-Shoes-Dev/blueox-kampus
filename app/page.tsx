import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import OfferingsGrid from '../components/OfferingsGrid';
import AcceleratorPreview from '../components/AcceleratorPreview';
import PartnersGrid from '../components/PartnersGrid';
import VisualGallery from '../components/VisualGallery';
import TechSpotlight from '../components/TechSpotlight';
import VRShowcase from '../components/VRShowcase';
import SkillsSection from '../components/SkillsSection';
import WhyBlueOX from '../components/WhyBlueOX';
import HouseCard from '../components/HouseCard';
import Marquee from '../components/Marquee';
import StartJourney from '../components/StartJourney';
import ApplyCTA from '../components/ApplyCTA';

export default function Page(){
  return (
    <>
      <Header />
      <Hero />
      <OfferingsGrid />
      <VRShowcase />
      <SkillsSection />
      <WhyBlueOX />
      <HouseCard />
      <VisualGallery />
      <TechSpotlight />
      <Marquee />
      <PartnersGrid />
      <ApplyCTA />
      <Footer />
    </>
  );
}
