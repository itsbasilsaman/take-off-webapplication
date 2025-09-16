import { FaCheck } from "react-icons/fa"
import Image from "next/image"

export default function WhatIsIncluded() {
  const includedItems = [
    "Takeoff Business Network Membership",
    "Return Flight Ticket (Kerala ⇄ Dubai)",
    "UAE Visit Visa",
    "4-Star Accommodation (Double Occupancy)",
    "Airport Pickup & Drop",
    "Complete Food & Transportation",
    "All Sessions & Workshops Access",
    "Business Mastery Workshops",
    "Exclusive Benefits Valid for One Year",
  ]

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-cyan-400/30 rotate-45"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-cyan-400/20 rotate-12"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 border border-cyan-400/25 rotate-45"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 border border-cyan-400/30 rotate-12"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 border border-cyan-400/20 rotate-45"></div>

        {/* Additional geometric elements */}
        <div className="absolute top-10 right-1/3 w-16 h-16 bg-cyan-400/5 rotate-45"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-cyan-400/5 rotate-12"></div>
        <div className="absolute top-1/3 right-40 w-36 h-36 border border-cyan-400/15 rotate-45"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-cyan-400 italic font-serif">What is included?</h2>

            <div className="space-y-6 text-gray-300">
              <p className="text-base lg:text-lg leading-relaxed">
                At Takeoff 2025, we provide a comprehensive, all-in-one experience designed to empower entrepreneurs and
                business leaders.
              </p>

              <p className="text-base lg:text-lg leading-relaxed">
                From hassle-free travel and accommodation to immersive workshops and exclusive networking opportunities
                — everything is carefully crafted to give you clarity, actionable insights, and strategic connections.
              </p>
            </div>

            {/* Included Items List */}
            <div className="space-y-4">
              {includedItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-cyan-400 rounded-full flex items-center justify-center mt-0.5">
                    <FaCheck className="w-3 h-3 text-slate-900" />
                  </div>
                  <span className="text-gray-300 text-base lg:text-lg leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Images */}
          <div className="relative">
            <div className="relative w-full h-[400px] lg:h-[500px]">
              {/* Top Image - positioned more to the right */}
              <div className="absolute top-0 right-0 z-10 rounded-2xl overflow-hidden shadow-2xl w-[280px] lg:w-[320px]">
                <Image
                  src="/business-professionals-in-modern-office-conference.jpg"
                  alt="Business professionals in conference room"
                  width={320}
                  height={240}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Bottom Overlapping Image - positioned to overlap from bottom-left and appear on top */}
              <div className="absolute bottom-0 left-0 z-20 rounded-2xl overflow-hidden shadow-2xl w-[280px] lg:w-[320px]">
                <Image
                  src="/middle-eastern-business-executives-in-modern-offic.jpg"
                  alt="Business executives in meeting"
                  width={320}
                  height={240}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
