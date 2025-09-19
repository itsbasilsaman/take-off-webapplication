"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
 
import { RxArrowTopRight } from "react-icons/rx";


export default function LandingAbout() {
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

  return (
    <div className="min-h-screen bg-white to-slate-900 relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 pb-20 lg:pb-40 animate-fadein">
    
      

     

      

      {/* Main Content */}
  <div className="relative z-10 px-2 sm:px-4 md:px-8 lg:px-16 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0 lg:gap-12 items-center">
            {/* Heading (always first on mobile) */}
            <div className="block lg:hidden w-full mb-4">
              <p className="text-[#215273] text-lg font-semibold md:text-xl mb-2  ">About Us - Takeoff 2025</p>
              <h2 className="text-[24px] md:text-5xl lg:text-6xl  font-medium  text-[#359D9E] mb-4 italic leading-tight">
                From Vision to Venture
              </h2>
            </div>
            {/* Image (second on mobile, first on desktop) */}
            <div className="relative w-full flex justify-center items-center mb-6 lg:mb-0">
              <div className="relative overflow-hidden rounded-2xl   w-full h-48 sm:h-56 md:h-72 lg:w-full lg:h-[800px] h-auto  "
                style={{ maxWidth: '100%', boxSizing: 'border-box' }}>
                <img
                  src="/about-image.png"
                  alt="Business conference with entrepreneurs in traditional Middle Eastern attire"
                  className="w-full h-full object-cover rounded-2xl"
                  style={{ maxWidth: '100%', height: '100%', objectFit: 'cover' }}
                />
                
              </div>
              {/* Decorative elements around image */}
              <div className="absolute -top-2 -right-2 w-10 h-10 sm:w-16 sm:h-16 bg-[#359D9E]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-2 -left-2 w-12 h-12 sm:w-20 sm:h-20 bg-blue-500/20 rounded-full blur-xl"></div>
            </div>
            {/* Left Content (desktop: heading, then content; mobile: only content) */}
            <motion.div
              className="space-y-4 md:space-y-6 mt-2 lg:mt-0 w-full"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <div className="hidden lg:block">
                <p className="text-[#215273] text-lg font-semibold md:text-xl mb-4  ">About Us - Takeoff 2025</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#359D9E] mb-2 italic leading-tight">
                  From Vision to Venture
                </h2>
                 <span className="uppercase text-[#215273] text-[22px] font-semibold">  The UAE is not just a destination</span> <br /> 
              </div>
              <div className="  text-black text-base md:text-lg leading-relaxed">
                 <div className="uppercase text-[#215273]  text-[18px] font-semibold lg:hidden mb-2">  The UAE is not just a destination</div>  
                <p>
                    it is the epicenter of the GCC’s economic transformation. And now, it’s your moment to step in. 
               
                  As a growth-focused entrepreneur from Kerala, you already have the vision and drive. What you need is the right platform — one that equips you with knowledge, networks, and clarity to make your business expansion in Dubai a reality.
                </p>
                <p className="mb-4">
                  That’s exactly what<span className="text-[#359D9E]    font-semibold"> Take-Off Expedition to Explore </span>is all about. Over four curated business journey designed for entrepreneurs who are serious about starting, scaling, or strengthening their business and networks in the UAE. 
                </p>
                
                <p>
                
                 <span className="text-[#359D9E]    font-semibold">Gain Knowledge </span>→ Practical insights into market entry strategies, free zone options, legal frameworks, banking, and corporate tax.
                  <br /><span className="text-[#359D9E]     font-semibold"> Build Networks</span> → Connect directly with partners, investors, government representatives, and leading industry experts.
                  <br /><span className="text-[#359D9E]    font-semibold"> Explore Opportunities</span> → Site visits, exclusive sessions, and one-on-one interactions to open doors to your Dubai business journey.
                  <br /> 
                </p>
                <p className="mt-4">
                  Every session, every meeting, and every experience is designed to cut through the noise. This is not just a conclave. It’s your gateway to knowledge, networks, and new beginnings in the UAE.
                  
                </p>
                
              </div>
              <div className="flex flex-row items-center justify-start gap-2 mt-4">
               <a
                  href="/Takeoff-4-Days-Program-summary.pdf"
                  download
                  className="flex items-center justify-between bg-[#215273] hover:bg-[#215273] rounded-full px-3 py-2 pr-3 transition-all duration-200 shadow-lg hover:shadow-xl group"
                  style={{minWidth:'190px'}}
               >
                  <span className="text-white text-lg font-normal tracking-wide pl-2 pr-3">Download Brochure</span>
                  <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                    <RxArrowTopRight className="text-[22px] text-[#215273] group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slanted Animated Ticker Bar */}
    <div className="absolute left-1/2 bottom-[-20px] sm:bottom-28 transform -translate-x-1/2 w-full pointer-events-none select-none z-20 animate-slidein">
  <div
    className="relative w-full h-14 md:h-20 overflow-hidden"
    style={{
      transform: 'skewY(-4deg)',
      background: '#2ca3a3',
      boxShadow: '0 2px 8px 0 rgba(44,163,163,0.08)',
    }}
  >
    <div className="absolute inset-0 flex items-center">
      <div
        className="whitespace-nowrap flex animate-ticker"
        style={{ animation: 'ticker-left-right 12s linear infinite' }}
      >
        <span
          className="text-white font-bold italic text-sm md:text-[24px] px-4"
          style={{ fontFamily: 'var(--font-dm-serif-display)' }}
        >
          EARLY BIRD REGISTRATION CLOSING SOON!
        </span>
        <span
          className="text-white font-bold italic text-sm md:text-[24px] px-4"
          style={{ fontFamily: 'var(--font-dm-serif-display)' }}
        >
          20+ GLOBAL SPEAKERS CONFIRMED
        </span>
        {/* Repeat for seamless loop */}
        <span
          className="text-white font-bold italic text-sm md:text-[24px] px-4"
          style={{ fontFamily: 'var(--font-dm-serif-display)' }}
        >
          EARLY BIRD REGISTRATION CLOSING SOON!
        </span>
        <span
          className="text-white font-bold italic text-sm md:text-[24px] px-4"
          style={{ fontFamily: 'var(--font-dm-serif-display)' }}
        >
          20+ GLOBAL SPEAKERS CONFIRMED
        </span>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
