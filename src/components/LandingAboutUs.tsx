"use client"

import { useState, useEffect } from "react"
 
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
  <div className="min-h-screen bg-white to-slate-900 relative   px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:pb-40">
    
      

     

      

      {/* Main Content */}
      <div className="relative z-10 px-2 sm:px-4 md:px-8 lg:px-16 py-8 sm:py-12 md:py-16 lg:py-20  ">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8 mt-8 lg:mt-0 w-full">
              <div>
                <p className="text-[#215273] text-lg font-semibold md:text-xl mb-4 italic">About Us - Takeoff 2025</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#359D9E] mb-8 italic leading-tight">
                  From Vision to Venture
                </h2>
              </div>

              <div className="space-y-4 md:space-y-6 text-black text-base md:text-lg leading-relaxed">
                <p>
                  The UAE is the epicenter of the GCC&lsquo;s economic transformation — and now is your moment to claim your
                  place in it. As a growth-focused business owner from Kerala, you already have the vision and
                  determination. What you need now is the right launchpad.
                </p>

                <p>
                  <span className="text-black font-semibold">The TakeOff Business Expedition 2025</span> is not a tour —{" "}
                  <span className="text-black font-semibold">
                    it&lsquo;s a carefully curated journey designed for entrepreneurs
                  </span>{" "}
                  who are serious about starting or expanding their business in Dubai.
                </p>

                <p>
                  Over four days, you&lsquo;ll gain{" "}
                  <span className="text-black font-semibold">100% clarity on how to set up and scale in the UAE</span>:
                  from market entry strategies, free zone options, and legal requirements to building networks with
                  partners, investors, and industry leaders.
                </p>

                <p>
                  Every session, visit, and interaction is tailored to cut through the noise and give you{" "}
                  <span className="text-black font-semibold">
                    actionable knowledge, strategic connections, and a clear pathway to launch in Dubai
                  </span>
                  .
                </p>
              </div>

            <div className="flex flex-row items-center justify-start gap-2 mt-6">
              <button className="group bg-[#215273] hover:bg-[#173c54] text-white px-6 py-2 rounded-full font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2 md:gap-3">
                Learn more
              </button>
              <div className="text-[#215273] border border-[#215273] p-2 rounded-full group-hover:bg-[#19415c] transition-colors ml-2">
                <RxArrowTopRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            </div>

            {/* Right Image */}
            <div className="relative w-full flex justify-center items-center mb-8 lg:mb-0">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl w-full h-56 sm:h-64 md:h-80 lg:w-full lg:h-auto">
                <img
                  src="/about-image.png"
                  alt="Business conference with entrepreneurs in traditional Middle Eastern attire"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>
              {/* Decorative elements around image */}
              <div className="absolute -top-4 -right-4 w-12 h-12 sm:w-20 sm:h-20 bg-[#359D9E]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 sm:w-24 sm:h-24 bg-blue-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

       {/* Slanted Animated Ticker Bar */}
      <div className="absolute left-0 right-0 bottom-28 w-full pointer-events-none select-none z-20  ">
        <div
          className="relative w-full h-10 md:h-20 "
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
              <span className="text-white font-semibold italic text-sm md:text-[20px] px-4">
                EARLY BIRD REGISTRATION CLOSING SOON!
              </span>
              <span className="text-white font-semibold italic text-sm md:text-[20px]  px-4">
                20+ GLOBAL SPEAKERS CONFIRMED
              </span>
              {/* Repeat for seamless loop */}
              <span className="text-white font-semibold italic text-sm md:text-[20px]  px-4">
                EARLY BIRD REGISTRATION CLOSING SOON!
              </span>
              <span className="text-white font-semibold italic text-sm md:text-[20px]  px-4">
                20+ GLOBAL SPEAKERS CONFIRMED
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
