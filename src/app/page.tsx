import HomeBanner from "@/components/HomeBanner";
import LandingAbout from "@/components/LandingAboutUs";
import AudienceSection from "@/components/LandingAudienceSection";
import LandingFeatureCards from "@/components/LandingFeatureCard";
import HeroSection from "@/components/LandingHeroSection";
import SpeakersSection from "@/components/LandingSpeakerCard";
import TestimonialsSection from "@/components/LandingTestimonialSection";

 

export default function Home() {
  return (
    <>
     <HomeBanner/>
     <LandingAbout/>
     <LandingFeatureCards/>
     <HeroSection/>
     <SpeakersSection/>
     {/* <AudienceSection/> */}
     {/* <TestimonialsSection/> */}
    </>
  );
}
