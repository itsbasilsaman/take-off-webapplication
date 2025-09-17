"use client"

import { useState } from "react"
 
import { RxArrowTopRight } from "react-icons/rx";

export default function TestimonialsSection() {
  const [isRegisterHovered, setIsRegisterHovered] = useState(false)
  const [isDownloadHovered, setIsDownloadHovered] = useState(false)

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-16 py-16 sm:py-16 lg:py-20 bg-white">
      {/* Section Header */}
      <div className="  mb-12">
        <p className="text-sm font-medium text-gray-600 mb-2 tracking-wide uppercase italic " style={{ fontFamily: 'var(--font-dm-serif-display)' }}>Testimonials</p>
  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#359D9E] text-balance italic">
          What Our Community Says
        </h2>
      </div>

      {/* Testimonial Card */}
      <div className="mb-8">
        <div className="bg-[#215273] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl lg:max-w-[75%] lg:ml-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
            {/* Testimonial Content with Quote Image on Top Left */}
            <div className="flex-1 relative">
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
            </div>

            {/* Profile Image */}
            <div className="flex-shrink-0 hidden sm:block order-first lg:order-last">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-52 lg:h-full rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://freedesignfile.com/upload/2017/06/Working-women-Stock-Photo-01.jpg"
                  alt="Mrs. Anjali Menon"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
       
      </div>

      {/* Call to Action Section */}
  <div className="bg-gradient-to-r from-[#359D9E] to-[#04695d] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          {/* CTA Content */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 italic text-balance max-w-2xl">
              Don&lsquo;t Miss the Journey
              <br />
              That Could Change Your Business Future
            </h3>

            <p className="text-white lg:text-[#359D9E] text-sm sm:text-base mb-6 italic">Early Bird Closing In (Until Sept 30)</p>

            {/* Action Buttons */}
            <div className="flex flex-row gap-2 lg:gap-4 justify-center lg:justify-start">
                <button className="group bg-[#215273] hover:bg-[#173c54] text-white px-6 py-2 rounded-full font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl flex items-center gap-2 md:gap-3 focus:outline-none focus:ring-2 focus:ring-[#359D9E] animate-pop">
                                Register Now
                              </button>
                              <div className="text-white border border-white p-2 rounded-full transition-colors ml-2 group-hover:bg-[#19415c] group-hover:scale-110 group-hover:shadow-lg duration-300 ease-in-out">
                                <RxArrowTopRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
                              </div>

             
            </div>
          </div>

          {/* CTA Image */}
          <div className="flex-shrink-0 order-first lg:order-last">
            <div className="w-full sm:w-80 lg:w-96 h-48 sm:h-56 lg:h-72 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/testimonial.png"
                alt="Business professionals in modern city setting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
