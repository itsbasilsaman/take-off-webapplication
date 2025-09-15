"use client"

import { useState, useEffect } from "react"
import { FiCalendar, FiArrowRight } from "react-icons/fi"

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
  <div className="min-h-screen bg-gradient-to-br from-[#215273] via-[#356789] to-slate-900 relative overflow-hidden px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#037469] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      {/* City skyline silhouette */}
      <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent opacity-30">
        <svg viewBox="0 0 1200 120" className="w-full h-full">
          <path
            d="M0,120 L0,80 L50,80 L50,40 L100,40 L100,60 L150,60 L150,20 L200,20 L200,70 L250,70 L250,30 L300,30 L300,90 L350,90 L350,50 L400,50 L400,80 L450,80 L450,35 L500,35 L500,75 L550,75 L550,45 L600,45 L600,85 L650,85 L650,25 L700,25 L700,65 L750,65 L750,40 L800,40 L800,80 L850,80 L850,30 L900,30 L900,70 L950,70 L950,50 L1000,50 L1000,90 L1050,90 L1050,35 L1100,35 L1100,75 L1150,75 L1150,55 L1200,55 L1200,120 Z"
            fill="currentColor"
            className="text-slate-600"
          />
        </svg>
      </div>

      {/* Early Bird Header */}
      <div className="sticky top-0 z-30">
        <div className="bg-gradient-to-r from-[#359D9E] to-[#359D9E] rounded-b-3xl px-2 sm:px-4 md:mx-8 lg:mx-16 shadow-2xl">
          <div className="px-2 sm:px-4 md:px-12 py-6 md:py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 italic">
                  Early Bird Closing In
                </h1>
                <p className="text-lg md:text-xl text-white/90 italic">(Until Sept 30)</p>
              </div>

              <div className="flex items-center gap-4 md:gap-6">
                <div className="bg-white/20 p-3 rounded-full">
                  <FiCalendar className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>

                <div className="flex gap-2 md:gap-4">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                      {timeLeft.days.toString().padStart(2, "0")}
                    </div>
                    <div className="text-sm md:text-base text-white/80">days</div>
                  </div>
                  <div className="text-white text-2xl md:text-3xl font-bold self-center">:</div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                      {timeLeft.hours.toString().padStart(2, "0")}
                    </div>
                    <div className="text-sm md:text-base text-white/80">hours</div>
                  </div>
                  <div className="text-white text-2xl md:text-3xl font-bold self-center">:</div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                      {timeLeft.minutes.toString().padStart(2, "0")}
                    </div>
                    <div className="text-sm md:text-base text-white/80">minutes</div>
                  </div>
                  <div className="text-white text-2xl md:text-3xl font-bold self-center">:</div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                      {timeLeft.seconds.toString().padStart(2, "0")}
                    </div>
                    <div className="text-sm md:text-base text-white/80">seconds</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-2 sm:px-4 md:px-8 lg:px-16 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8 mt-8 lg:mt-0">
              <div>
                <p className="text-[#359D9E] text-lg md:text-xl mb-4 italic">About Us - Takeoff 2025</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#359D9E] mb-8 italic leading-tight">
                  From Vision to Venture
                </h2>
              </div>

              <div className="space-y-4 md:space-y-6 text-white/90 text-base md:text-lg leading-relaxed">
                <p>
                  The UAE is the epicenter of the GCC&lsquo;s economic transformation — and now is your moment to claim your
                  place in it. As a growth-focused business owner from Kerala, you already have the vision and
                  determination. What you need now is the right launchpad.
                </p>

                <p>
                  <span className="text-white font-semibold">The TakeOff Business Expedition 2025</span> is not a tour —{" "}
                  <span className="text-white font-semibold">
                    it&lsquo;s a carefully curated journey designed for entrepreneurs
                  </span>{" "}
                  who are serious about starting or expanding their business in Dubai.
                </p>

                <p>
                  Over four days, you&lsquo;ll gain{" "}
                  <span className="text-white font-semibold">100% clarity on how to set up and scale in the UAE</span>:
                  from market entry strategies, free zone options, and legal requirements to building networks with
                  partners, investors, and industry leaders.
                </p>

                <p>
                  Every session, visit, and interaction is tailored to cut through the noise and give you{" "}
                  <span className="text-[#359D9E] font-semibold">
                    actionable knowledge, strategic connections, and a clear pathway to launch in Dubai
                  </span>
                  .
                </p>
              </div>

              <button className="group bg-[#359D9E] hover:bg-[#359D9E] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-3">
                Learn more
                <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors">
                  <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>

            {/* Right Image */}
            <div className="relative w-full flex justify-center items-center">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl w-full h-48 sm:h-56 md:h-64 lg:w-full lg:h-auto">
                  <img
                    src="/about-image.png"
                    alt="Business conference with entrepreneurs in traditional Middle Eastern attire"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                </div>

              {/* Decorative elements around image */}
              <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-[#359D9E]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 sm:w-32 sm:h-32 bg-blue-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
