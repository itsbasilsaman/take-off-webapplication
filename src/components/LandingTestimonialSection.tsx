"use client"

import { useState } from "react"
import { FaQuoteLeft, FaArrowRight, FaDownload } from "react-icons/fa"

export default function TestimonialsSection() {
  const [isRegisterHovered, setIsRegisterHovered] = useState(false)
  const [isDownloadHovered, setIsDownloadHovered] = useState(false)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-sm font-medium text-gray-600 mb-2 tracking-wide uppercase">Testimonials</p>
  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#359D9E] text-balance">
          What Our Community Says
        </h2>
      </div>

      {/* Testimonial Card */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
            {/* Quote Icon */}
            <div className="flex-shrink-0">
              <div className="flex space-x-2">
                <FaQuoteLeft className="text-slate-400 text-2xl sm:text-3xl" />
                <FaQuoteLeft className="text-slate-400 text-2xl sm:text-3xl opacity-60" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="flex-1">
              <blockquote className="text-white text-base sm:text-lg lg:text-xl leading-relaxed mb-4 italic">
                &ldquo;Takeoff gave me the platform to present my startup idea to global investors. The connections I built
                here opened doors I never thought possible.&#34;
              </blockquote>
              <div className="text-slate-300">
                <p className="font-semibold text-sm sm:text-base">Mrs. Anjali Menon</p>
                <p className="text-xs sm:text-sm opacity-80">Business matchmaking sessions</p>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex-shrink-0 order-first lg:order-last">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-2xl overflow-hidden shadow-lg">
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
  <div className="bg-gradient-to-r from-[#359D9E] to-emerald-600 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          {/* CTA Content */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 text-balance">
              Don&lsquo;t Miss the Journey
              <br />
              That Could Change Your Business Future
            </h3>

            <p className="text-[#359D9E] text-sm sm:text-base mb-6 italic">Early Bird Closing In (Until Sept 30)</p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                className={`inline-flex items-center gap-2 px-6 py-3 bg-white text-[#359D9E] font-semibold rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 ${
                  isRegisterHovered ? "scale-105" : ""
                }`}
                onMouseEnter={() => setIsRegisterHovered(true)}
                onMouseLeave={() => setIsRegisterHovered(false)}
                onClick={() => console.log("Register Now clicked")}
              >
                Register Now
                <FaArrowRight
                  className={`transition-transform duration-300 ${isRegisterHovered ? "translate-x-1" : ""}`}
                />
              </button>

              <button
                className={`inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-[#359D9E] transform hover:-translate-y-0.5 ${
                  isDownloadHovered ? "scale-105" : ""
                }`}
                onMouseEnter={() => setIsDownloadHovered(true)}
                onMouseLeave={() => setIsDownloadHovered(false)}
                onClick={() => console.log("Download Brochure clicked")}
              >
                Download Brochure
                <FaDownload
                  className={`transition-transform duration-300 ${isDownloadHovered ? "translate-y-0.5" : ""}`}
                />
              </button>
            </div>
          </div>

          {/* CTA Image */}
          <div className="flex-shrink-0 order-first lg:order-last">
            <div className="w-full sm:w-80 lg:w-96 h-48 sm:h-56 lg:h-64 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
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
