"use client"

import { HiLocationMarker, HiCalendar, HiChevronDown } from "react-icons/hi"
import { FaUsers, FaArrowRight, FaGlobe } from "react-icons/fa"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function HomeBanner() {
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center min-h-screen bg-white/60 backdrop-blur-xl transition-opacity duration-500">
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-16 h-16 mb-4">
            <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#359D9E] to-[#C09755] opacity-30 blur-2xl animate-pulse" />
            <span className="absolute inset-0 rounded-full border-4 border-[#359D9E] border-t-transparent animate-spin-fast" />
            <span className="absolute inset-2 rounded-full bg-white/80" />
            <FaGlobe className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#359D9E] text-2xl animate-pulse" />
          </div>
          <p className="text-[#215273] text-lg font-semibold animate-fade-in">Loading Dubai Experience...</p>
        </div>
        {/* Add to your global CSS:
        @keyframes spin-fast { to { transform: rotate(360deg); } }
        .animate-spin-fast { animation: spin-fast 0.5s linear infinite; }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.5s ease; }
        */}
      </div>
    )
  }

  return (
  <div className="min-h-screen relative overflow-hidden flex items-center justify-center py-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/dubai-cityscape.png"
          alt="Dubai cityscape with fireworks"
          fill
          className="object-cover"
          priority
        />
        
      </div>

     

      {/* Main Content */}
  <main className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen px-4 md:px-8 lg:px-16 lg:pt-20">
        {/* Left Content */}
        <div className={`w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>
          {/* Tagline */}
          <p className="text-white/90 text-lg md:text-xl italic mb-4 font-light font-sans">Where founders grow together</p>
          {/* Main Headline */}
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 main-heading" style={{fontFamily: 'var(--font-dm-serif-display), serif'}}>
            Takeoff Business Conclave &<br className="hidden md:block" />
            <span className="block">Expedition to Explore Dubai</span>
          </h1>
          {/* Register Button */}
          <div className="mb-10">
            <button className="bg-gradient-to-r from-[#C09755] to-yellow-500 hover:from-yellow-500 hover:to-amber-500 text-white rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group inline-flex items-center">
              Register Now
              <FaArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Event Info Box (bottom left) */}
        <div className="hidden lg:block absolute left-8 bottom-8 z-20">
          <div className="bg-black/70 rounded-2xl px-6 py-5 shadow-xl border border-white/10 max-w-xs w-full text-left">
            <div className="flex items-center gap-3 mb-2">
              <HiCalendar className="h-5 w-5 text-amber-400" />
              <span className="text-lg font-bold text-white main-heading" style={{fontFamily: 'var(--font-dm-serif-display), serif'}}>November 06–09, 2025</span>
            </div>
            <div className="flex items-start gap-3">
              <HiLocationMarker className="h-5 w-5 text-amber-400 mt-1" />
              <div className="text-white text-base font-serif leading-tight">
                Dubai World Trade Centre<br />
                <span className="text-white/80 text-sm">Sheikh Zayed Rd, Dubai, UAE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Speaker Spotlight Card (bottom right) */}
        <div className="hidden lg:block absolute right-8 bottom-8 z-20">
          <div className="bg-[#359D9E]/95 rounded-2xl px-6 py-5 shadow-xl border border-white/10 max-w-xs w-full">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2 main-heading" style={{fontFamily: 'var(--font-dm-serif-display), serif'}}>
              Speaker Spotlight
            </h3>
            <div className="flex items-start gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/20">
                <Image
                  src="https://img.freepik.com/premium-photo/man-image_1148666-2836.jpg"
                  alt="Speaker"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-white/90 text-xs mb-2 leading-relaxed">
                  Featuring visionary leaders and world-class speakers shaping the future of global trade.
                </p>
                <a href="#speakers" className="text-amber-200 hover:text-white text-xs font-semibold inline-flex items-center transition-colors duration-200">
                  View Speakers
                  <FaArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots (optional, hidden for now) */}
      </main>

      {/* Scroll Indicator */}
      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        <HiChevronDown className="h-8 w-8 text-white/80 animate-bounce hover:text-white transition-colors duration-300 cursor-pointer" />
      </div>
    </div>
  )
}
