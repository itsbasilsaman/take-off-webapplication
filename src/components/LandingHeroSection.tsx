"use client"

import type React from "react"

import { useState, useEffect } from "react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <section
      className="relative   overflow-hidden flex items-center justify-center px-2 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24"
      style={{
        backgroundImage: 'linear-gradient(rgba(20,30,40,0.7),rgba(20,30,40,0.7)), url(/hero-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Background Circuit Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Circuit board pattern */}
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10 10h80v80h-80z" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" fill="none" />
              <circle cx="10" cy="10" r="2" fill="rgba(255,255,255,0.2)" />
              <circle cx="90" cy="10" r="2" fill="rgba(255,255,255,0.2)" />
              <circle cx="10" cy="90" r="2" fill="rgba(255,255,255,0.2)" />
              <circle cx="90" cy="90" r="2" fill="rgba(255,255,255,0.2)" />
              <path d="M10 50h80M50 10v80" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />

          {/* Additional circuit lines */}
          <g stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none">
            <path d="M0 200 Q300 150 600 200 T1200 200" />
            <path d="M0 400 Q400 350 800 400 T1200 400" />
            <path d="M0 600 Q200 550 400 600 T800 600 T1200 600" />
            <path d="M200 0 Q250 200 300 400 T400 800" />
            <path d="M600 0 Q650 300 700 600 T800 800" />
            <path d="M1000 0 Q1050 250 1100 500 T1200 800" />
          </g>

          {/* Circuit nodes */}
          <g fill="rgba(255,255,255,0.3)">
            <circle cx="300" cy="200" r="3" />
            <circle cx="600" cy="200" r="3" />
            <circle cx="900" cy="200" r="3" />
            <circle cx="400" cy="400" r="3" />
            <circle cx="800" cy="400" r="3" />
            <circle cx="200" cy="600" r="3" />
            <circle cx="600" cy="600" r="3" />
            <circle cx="1000" cy="600" r="3" />
          </g>
        </svg>
      </div>

      {/* Interactive glow effect */}
      <div
        className="absolute pointer-events-none opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`,
          width: "100%",
          height: "100%",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl w-full mx-auto text-center flex flex-col items-center">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-white font-serif italic leading-tight text-balance">
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl drop-shadow-lg">
              Built on the vision of uniting ideas and opportunities, <span className="text-[#359D9E] font-bold not-italic">Takeoff 2025</span> is where innovation meets collaboration.
            </span>
            <span className="block text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-4 font-medium">
              We exist to connect Kerala and UAE business leaders, empowering them to shape the future of global entrepreneurship.
            </span>
          </h1>
        </div>

        {/* Interactive CTA Button */}
        <div
          className={`mt-8 sm:mt-12 transition-all duration-1000 delay-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button className="group relative px-7 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-[#359D9E] to-blue-600 hover:from-blue-600 hover:to-[#359D9E] text-white font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#359D9E]/40">
            <span className="relative z-10 text-lg sm:text-xl tracking-wide">Register now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#359D9E] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* Floating elements for interactivity */}
        <div className="absolute top-1/4 left-4 sm:left-8 lg:left-16 animate-pulse">
          <div className="w-2 h-2 bg-blue-400 rounded-full opacity-60" />
        </div>
        <div className="absolute top-1/3 right-4 sm:right-8 lg:right-16 animate-pulse delay-1000">
          <div className="w-3 h-3 bg-purple-400 rounded-full opacity-60" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-pulse delay-2000">
          <div className="w-2 h-2 bg-green-400 rounded-full opacity-60" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 animate-pulse delay-3000">
          <div className="w-2 h-2 bg-yellow-400 rounded-full opacity-60" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
