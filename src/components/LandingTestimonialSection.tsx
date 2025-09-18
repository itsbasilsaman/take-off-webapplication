
"use client"

import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";


 
import { RxArrowTopRight } from "react-icons/rx";

export default function TestimonialsSection() {


   const handleWhatsAppClick = () => {
    const phone = '919207078555'; // WhatsApp number (without + and spaces)
    const message = encodeURIComponent('Hello, I am interested in your services.');
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank');
  };

  // Removed unused hover state

  // Animation controls and refs for testimonial card
  const testimonialRef = useRef(null);
  const testimonialInView = useInView(testimonialRef, { once: true, margin: "-100px" });
  const testimonialControls = useAnimation();

  // Animation controls and refs for CTA section
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });
  const ctaControls = useAnimation();

  useEffect(() => {
    if (testimonialInView) {
      testimonialControls.start("visible");
    }
  }, [testimonialInView, testimonialControls]);

  useEffect(() => {
    if (ctaInView) {
      ctaControls.start("visible");
    }
  }, [ctaInView, ctaControls]);


  // New testimonials data
  const testimonials = [
    {
      name: "Shafeeque Kunhahamed – Founder, Blue Bay Interior Decoration LLC",
      text: "TakeOff gave me valuable clients, fresh business ideas, and a supportive community that mixes learning, networking, and fun.",
      image: "/shafeer.jpg"
    },
    {
      name: "Zain Ahamed – CEO, Cedas Elevators",
      text: "TakeOff Business Network helped me build strong connections, gain practical insights, and find new opportunities to learn and grow.",
      image: "/business-professionals.png"
    },
    {
      name: "Abu Thahir – Managing Partner, Mirax Perfumes",
      text: "TakeOff expanded my network, connected me with inspiring leaders, and gave me valuable sessions that keep me motivated for growth.",
      image: "/middle-eastern.png"
    },
    {
      name: "Fenzab – Founder, Pythal",
      text: "TakeOff was a game-changer. I gained business knowledge, confidence, and a community that truly supports launching and growing ventures.",
      image: "/dubai-cityscape.jpg"
    },
    {
      name: "Jaseem Ali – MD, Zewer Jewellery",
      text: "Being part of TakeOff means more than networking—it’s about new opportunities, creative growth, and support from an inspiring community.",
      image: "/main-banner.jpg"
    },
  ];

  // Animation for cycling testimonials (one at a time, 2 seconds)
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-16 py-16 sm:py-16 lg:py-20 bg-white">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-12"
        ref={testimonialRef}
      >
        <p className="text-lg font-semibold md:text-xl text-gray-600 mb-2 tracking-wide     "  >Testimonials</p>
        <h2 className="text-[24px] md:text-5xl lg:text-6xl  font-medium text-[#008373] text-balance italic">
          What Our Community Says
        </h2>
      </motion.div>

      {/* Single Testimonial Card with animated text content */}
      <div className="flex flex-col lg:flex-row gap-8 mb-8">
        <div className="bg-[#215273] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl flex-1">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
            {/* Testimonial Content */}
            <div className="flex-1 relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14">
                <Image
                  src="/quotes.png"
                  alt="Quote icon"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
              <motion.blockquote
                key={testimonials[currentIndex].text}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-white max-w-5xl text-base sm:text-lg lg:text-2xl leading-relaxed mb-4 italic pt-8 pl-8"
                style={{ fontFamily: 'var(--font-dm-serif-display)' }}
              >
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </motion.blockquote>
              <motion.div
                key={testimonials[currentIndex].name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-slate-300 pl-8"
              >
                <p className="font-semibold text-sm sm:text-base">{testimonials[currentIndex].name}</p>
              </motion.div>
            </div>
            {/* Profile Image */}
            <div className="flex-shrink-0 hidden sm:block order-first lg:order-last">
               
            </div>
          </div>
        </div>
      </div>

      {/* ...existing code... */}

      {/* Call to Action Section */}
      <motion.div
        ref={ctaRef}
        className="bg-[#008373]  rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl"
        initial="hidden"
        animate={ctaControls}
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
        }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          {/* CTA Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 60 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="text-[24px] md:text-5xl lg:text-6xl  font-medium text-white mb-4 italic text-balance max-w-2xl">
              Don&lsquo;t Miss the Journey
              <br />
              That Could Change Your Business Future
            </h3>

            <p className="text-white   text-sm sm:text-base mb-6 italic">Early Bird Closing In (Until Sept 30)</p>

            {/* Action Buttons */}
            <div className="flex flex-row gap-2 lg:gap-4 justify-center lg:justify-start">
               <button
                  className="flex items-center bg-[#215273] hover:bg-[#215273] rounded-full px-3 py-2 pr-3 transition-all duration-200 shadow-lg hover:shadow-xl group"
                  style={{minWidth:'200px'}}
                  onClick={handleWhatsAppClick}
                >
                  <span className="text-white text-lg font-normal tracking-wide pl-2 pr-6">Register Now</span>
                  <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                    <RxArrowTopRight className="text-[22px] text-[#215273] group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </button>
            </div>
          </motion.div>

          {/* CTA Image */}
          <motion.div
            className="flex-shrink-0 order-first lg:order-last"
            initial={{ opacity: 0, y: 60 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          >
            <div className="w-full sm:w-80 lg:w-96 h-48 sm:h-56 lg:h-72 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/testimonial.png"
                alt="Business professionals in modern city setting"
                width={384}
                height={288}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
