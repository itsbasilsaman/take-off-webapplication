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
      <section id="home">
        <HomeBanner/>
      </section>
      <section id="about">
        <LandingAbout/>
      </section>
      <section id="feature-cards">
        <LandingFeatureCards/>
      </section>
      <section id="chief-guests">
        <LandingChiefGusts/>
      </section>
      <section id="speakers">
        <SpeakersSection/>
      </section>
      <section id="audience">
        <AudienceSection/>
      </section>
      <section id="included">
        <WhatIsIncluded/>
      </section>
      <section id="testimonials">
        <TestimonialsSection/>
      </section>
    </>
  );
}
