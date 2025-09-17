"use client"

// import { HiLocationMarker, HiCalendar  } from "react-icons/hi"
import {     FaGlobe } from "react-icons/fa"
import Image from "next/image"
import { useState, useEffect } from "react"
import { RxArrowTopRight } from "react-icons/rx";


export default function HomeBanner() {
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const [timeLeft, setTimeLeft] = useState({
    days: 45,
    hours: 8,
    minutes: 14,
    seconds: 2,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

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
      <div className="fixed inset-0 z-50 flex items-center justify-center min-h-screen bg-white/40 backdrop-blur-md transition-opacity duration-500">
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-16 h-16 mb-4">
            <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#359D9E] to-[#C09755] opacity-40 blur-lg animate-pulse" />
            <span className="absolute inset-0 rounded-full border-4 border-[#359D9E] border-t-transparent animate-spin-fast" />
            <span className="absolute inset-2 rounded-full bg-white/70 blur-sm" />
            <Image src="/logo.png" alt="Logo" fill className="absolute top-1/2 left-1/2 w-10 h-10 object-contain animate-spin-slow" style={{transform: 'translate(-50%, -50%)'}} />
          </div>
          <p className="text-[#215273] text-base font-semibold animate-fade-in">Loading Dubai Experience...</p>
        </div>
        {/* Add to your global CSS:
        @keyframes spin-fast { to { transform: rotate(360deg); } }
        .animate-spin-fast { animation: spin-fast 0.5s linear infinite; }
        @keyframes spin-slow { to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 1.2s linear infinite; }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.5s ease; }
        @keyframes text-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-text-in { animation: text-in 0.7s cubic-bezier(.4,0,.2,1) forwards; }
        */}
      </div>
    )
  }

  return (
  <div className="min-h-screen h-screen relative overflow-hidden flex items-center justify-start py-0">
      {/* Background Image with Overlay and Blended Business People */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/dubai-cityscape.png"
          alt="Dubai cityscape"
          fill
          className="object-cover"
          priority
        />
        {/* Blended business people overlay */}
        <Image
          src="/about-image.png"
          alt="Business people"
          fill
          className="object-contain opacity-30 mix-blend-soft-light"
          priority
        />
        <div  />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full flex flex-col justify-center min-h-screen px-4 md:px-8 lg:px-24 pt-16 sm:pt-0">
  <div className="w-full max-w-[915px] flex flex-col items-start justify-center text-left" style={{   marginTop: '6vh' }}>
          <p className="text-[#C09755] text-[14px] md:text-lg font-medium mb-2 tracking-widest uppercase">WHERE FOUNDERS GROW TOGETHER</p>
          <h1 className="text-white text-[28px] md:text-5xl lg:text-6xl font-serif italic font-semibold leading-snug mb-6 sm:mb-12" style={{fontFamily: 'var(--font-dm-serif-display), serif', lineHeight: 1.3}}>
            Takeoff Business Conclave &<br />Expedition to Explore Dubai
          </h1>
          <div className="flex flex-col items-start gap-3 mb-8">
            <div className="flex items-center gap-2 text-white/90">
              <Image src="/calander.png" alt="Calendar" width={50} height={50} className="h-8 w-8 object-contain mr-3" />
              <span className="font-semibold text-base">NOV 06–09, 2025</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Image src="/location.png" alt="Location" width={50} height={50} className="h-8 w-8 object-contain mr-3" />
              <span className="text-base">Dubai World Trade Centre, <br /> <span className="text-white/70 text-sm">Sheikh Zayed Rd, Dubai, UAE</span></span>
            </div>
          </div>
         <div className="flex items-center gap-2 justify-start">
            <button
              className="bg-[#C09755] text-white rounded-full px-8 py-3 text-base font-semibold shadow-lg transition-all duration-300 group inline-flex items-center
                hover:bg-[#785419] hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#C09755]"
              style={{
                boxShadow: '0 4px 24px 0 rgba(192,151,85,0.15)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseDown={e => e.currentTarget.classList.add('scale-95')}
              onMouseUp={e => e.currentTarget.classList.remove('scale-95')}
            >
              Register Now
            </button>
            <span
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white transition-colors duration-200 cursor-pointer
                hover:bg-[#FFC107] active:scale-90"
              style={{ transition: 'background 0.2s, transform 0.2s' }}
              tabIndex={0}
              onMouseDown={e => e.currentTarget.classList.add('scale-90')}
              onMouseUp={e => e.currentTarget.classList.remove('scale-90')}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.currentTarget.classList.add('scale-90');
                }
              }}
              onKeyUp={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.currentTarget.classList.remove('scale-90');
                }
              }}
            >
              <RxArrowTopRight className="h-6 w-6 text-white group-hover:text-[#222] transition-colors duration-200" />
            </span>
         </div>
        </div>

        {/* Bottom Row: Dots (left) and Countdown (right) for desktop, fixed countdown for mobile */}
        {/* Desktop View */}
        <div className="hidden md:flex w-full flex-row items-end justify-between absolute left-0 right-0 bottom-0 z-30 px-2">
          {/* Dots for slider (optional) */}
          <div className="flex gap-6 mb-8 md:mb-10 lg:mb-12 ml-24">
            <span className="w-3 h-3 rounded-full bg-white/80" />
            <span className="w-3 h-3 rounded-full bg-white/40" />
            <span className="w-3 h-3 rounded-full bg-white/40" />
          </div>
          {/* Countdown Section */}
          <div className="bg-[#215273] rounded-t-2xl shadow-2xl px-8 py-6 md:py-12 flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-0 md:w-[700px] lg:w-[900px] mr-0 ml-auto">
            <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-white text-lg md:text-[24px] font-semibold mb-1 italic">Early Bird Closing In</h3>
              <p className="text-white/80 text-xs md:text-sm">(Until Sept 30)</p>
            </div>
            <div className="flex flex-row items-stretch w-full max-w-xl">
              <div className="flex-1 text-center flex flex-col justify-center">
                <div className="text-3xl md:text-4xl font-bold text-white">{timeLeft.days.toString().padStart(2, "0")}</div>
                <div className="text-xs md:text-sm text-white/80 mt-1">days</div>
              </div>
              <div className="hidden md:flex h-12 self-center mx-4 border-r border-white/40" />
              <div className="flex-1 text-center flex flex-col justify-center">
                <div className="text-3xl md:text-4xl font-bold text-white">{timeLeft.hours.toString().padStart(2, "0")}</div>
                <div className="text-xs md:text-sm text-white/80 mt-1">hours</div>
              </div>
              <div className="hidden md:flex h-12 self-center mx-4 border-r border-white/40" />
              <div className="flex-1 text-center flex flex-col justify-center">
                <div className="text-3xl md:text-4xl font-bold text-white">{timeLeft.minutes.toString().padStart(2, "0")}</div>
                <div className="text-xs md:text-sm text-white/80 mt-1">minutes</div>
              </div>
              <div className="hidden md:flex h-12 self-center mx-4 border-r border-white/40" />
              <div className="flex-1 text-center flex flex-col justify-center">
                <div className="text-3xl md:text-4xl font-bold text-white">{timeLeft.seconds.toString().padStart(2, "0")}</div>
                <div className="text-xs md:text-sm text-white/80 mt-1">seconds</div>
              </div>
            </div>
          </div>
        </div>

       
        {/* Mobile View: Countdown Section (bottom of main content, full width, animated text) */}
        <div className="md:hidden w-full px-0 mt-8 mb-0 flex justify-center">
          <div className="bg-[#215273] rounded-t-md shadow-2xl px-0 py-3 flex flex-col items-center gap-1 w-full animate-fade-in" style={{boxShadow: '0 4px 24px 0 rgba(33,82,115,0.15)'}}>
            <div className="w-full flex flex-row items-center justify-between mb-1 px-4">
              <h3 className="text-white text-sm font-semibold italic animate-text-in">Early Bird Closing In</h3>
              <span className="text-white/80 text-xs animate-text-in" style={{animationDelay: '0.2s'}}> (Until Sept 30)</span>
            </div>
            <div className="flex flex-row justify-center items-center w-full gap-1 px-4">
              <div className="flex flex-col items-center flex-1 animate-text-in" style={{animationDelay: '0.3s'}}>
                <div className="text-xl font-bold text-white drop-shadow-sm">{timeLeft.days.toString().padStart(2, "0")}</div>
                <div className="text-[10px] text-white/80 mt-0.5">days</div>
              </div>
              <div className="w-px h-5 bg-white/30 mx-0.5" />
              <div className="flex flex-col items-center flex-1 animate-text-in" style={{animationDelay: '0.4s'}}>
                <div className="text-xl font-bold text-white drop-shadow-sm">{timeLeft.hours.toString().padStart(2, "0")}</div>
                <div className="text-[10px] text-white/80 mt-0.5">hours</div>
              </div>
              <div className="w-px h-5 bg-white/30 mx-0.5" />
              <div className="flex flex-col items-center flex-1 animate-text-in" style={{animationDelay: '0.5s'}}>
                <div className="text-xl font-bold text-white drop-shadow-sm">{timeLeft.minutes.toString().padStart(2, "0")}</div>
                <div className="text-[10px] text-white/80 mt-0.5">minutes</div>
              </div>
              <div className="w-px h-5 bg-white/30 mx-0.5" />
              <div className="flex flex-col items-center flex-1 animate-text-in" style={{animationDelay: '0.6s'}}>
                <div className="text-xl font-bold text-white drop-shadow-sm">{timeLeft.seconds.toString().padStart(2, "0")}</div>
                <div className="text-[10px] text-white/80 mt-0.5">seconds</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
