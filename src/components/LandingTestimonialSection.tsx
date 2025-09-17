
"use client"

import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";


 
import { RxArrowTopRight } from "react-icons/rx";

export default function TestimonialsSection() {
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
        <p className="text-sm font-medium text-gray-600 mb-2 tracking-wide uppercase italic " style={{ fontFamily: 'var(--font-dm-serif-display)' }}>Testimonials</p>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#359D9E] text-balance italic">
          What Our Community Says
        </h2>
      </motion.div>

      {/* Testimonial Card */}
      <motion.div
        className="mb-8"
        initial="hidden"
        animate={testimonialControls}
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
        }}
      >
        <div className="bg-[#215273] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl lg:max-w-[75%] lg:ml-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
            {/* Testimonial Content with Quote Image on Top Left */}
            <motion.div
              className="flex-1 relative"
              initial={{ opacity: 0, y: 60 }}
              animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14">
                <img
                  src="/quotes.png"
                  alt="Quote icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <blockquote className="text-white max-w-2xl text-base sm:text-lg lg:text-2xl leading-relaxed mb-4 italic pt-8 pl-8" style={{ fontFamily: 'var(--font-dm-serif-display)' }}>
                &ldquo;Takeoff gave me the platform to present my startup idea to global investors. The connections I built
                here opened doors I never thought possible.&#34;
              </blockquote>
              <div className="text-slate-300 pl-8">
                <p className="font-semibold text-sm sm:text-base">Mrs. Anjali Menon</p>
                <p className="text-xs sm:text-sm opacity-80">Business matchmaking sessions</p>
              </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              className="flex-shrink-0 hidden sm:block order-first lg:order-last"
              initial={{ opacity: 0, y: 60 }}
              animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-52 lg:h-full rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://freedesignfile.com/upload/2017/06/Working-women-Stock-Photo-01.jpg"
                  alt="Mrs. Anjali Menon"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        ref={ctaRef}
        className="bg-gradient-to-r from-[#359D9E] to-[#04695d] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl"
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
            <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 italic text-balance max-w-2xl">
              Don&lsquo;t Miss the Journey
              <br />
              That Could Change Your Business Future
            </h3>

            <p className="text-white   text-sm sm:text-base mb-6 italic">Early Bird Closing In (Until Sept 30)</p>

            {/* Action Buttons */}
            <div className="flex flex-row gap-2 lg:gap-4 justify-center lg:justify-start">
                <button
                  className="group bg-[#215273] hover:bg-[#173c54] text-white px-6 py-2 rounded-full font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl flex items-center gap-2 md:gap-3 focus:outline-none focus:ring-2 focus:ring-[#359D9E] animate-pop cursor-pointer"
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    const phone = '919207078555';
                    const message = encodeURIComponent('Hello! I am interested in registering for the Takeoff Business Conclave & Expedition to Explore Dubai.');
                    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
                  }}
                >
                  Register Now
                </button>
                <div className="text-white border border-white p-2 rounded-full transition-colors ml-2 group-hover:bg-[#19415c] group-hover:scale-110 group-hover:shadow-lg duration-300 ease-in-out">
                  <RxArrowTopRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
                </div>
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
              <img
                src="/testimonial.png"
                alt="Business professionals in modern city setting"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
