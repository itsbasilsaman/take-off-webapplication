import HomeBanner from "@/components/HomeBanner";
import LandingAbout from "@/components/LandingAboutUs";
import AudienceSection from "@/components/LandingAudienceSection";
import LandingChiefGusts from "@/components/LandingChiefGusts";
import LandingFeatureCards from "@/components/LandingFeatureCard";
import WhatIsIncluded from "@/components/LandingIncluded";
 
import SpeakersSection from "@/components/LandingSpeakerCard";
import TestimonialsSection from "@/components/LandingTestimonialSection";
 

 

export default function Home() {
  return (
    <>
     <HomeBanner/>
     <LandingAbout/>
     <LandingFeatureCards/>
     <LandingChiefGusts/>
   
     <SpeakersSection/>
     <AudienceSection/>
     <WhatIsIncluded/>
     <TestimonialsSection/>
    </>
  );
}
