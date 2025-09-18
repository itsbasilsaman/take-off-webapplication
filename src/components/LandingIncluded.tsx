"use client"

 
import Image from "next/image"
import { useEffect, useState } from "react"

export default function WhatIsIncluded() {
  const [showSecondImage, setShowSecondImage] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowSecondImage(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
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
    <div
      className="min-h-screen bg-slate-900 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/includes-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-16 py-16 lg:py-24 animate-fadein">
        <h2 className="text-[24px] md:text-5xl lg:text-6xl  font-medium text-[#359D9E] italic font-serif text-center mb-10 sm:mb-16">What is included?</h2>
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Images: stacked for mobile/tablet, original overlap for desktop */}
          <div className="w-full mb-8 lg:mb-0 order-1 lg:order-2">
            {/* Mobile & Tablet: show one image, animate second in after 1.5s */}
            <div className="w-full lg:hidden flex justify-center items-center">
              <div className="relative w-full max-w-md h-48 sm:h-56 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/middle-eastern.png"
                  alt="Business professionals in conference room"
                  width={400}
                  height={240}
                  className={`w-full h-full object-cover transition-all duration-700 ${showSecondImage ? 'opacity-0' : 'opacity-100'} absolute top-0 left-0`}
                  style={{ transition: 'opacity 2s' }}
                />
                <Image
                  src="/business-professionals.png"
                  alt="Business executives in meeting"
                  width={400}
                  height={240}
                  className={`w-full h-full object-cover transition-all duration-700 ${showSecondImage ? 'opacity-100' : 'opacity-0'} absolute top-0 left-0`}
                  style={{ transition: 'opacity 2s' }}
                />
              </div>
            </div>
 
 
            {/* Desktop: original overlapping images */}
            <div className="relative w-full h-[400px] lg:h-[500px] hidden lg:block">
              {/* Top Image - positioned more to the right */}
              <div className="absolute top-0 right-0 z-10 rounded-2xl overflow-hidden shadow-2xl w-[280px] lg:w-[320px]">
                <Image
                  src="/middle-eastern.png"
                  alt="Business professionals in conference room"
                  width={520}
                  height={640}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Bottom Overlapping Image - positioned to overlap from bottom-left and appear on top */}
              <div className="absolute bottom-0 left-0 z-20 rounded-2xl overflow-hidden shadow-2xl w-[280px] lg:w-[345px]">
                <Image
                  src="/business-professionals.png"
                  alt="Business executives in meeting"
                  width={620}
                  height={640}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Left Content (below images on mobile, left on desktop) */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1 w-full">
            <div className="space-y-4 sm:space-y-6 text-gray-300">
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                At Takeoff 2025, we provide a comprehensive, all-in-one experience designed to empower entrepreneurs and business leaders.
              </p>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                From hassle-free travel and accommodation to immersive workshops and exclusive networking opportunities — everything is carefully crafted to give you clarity, actionable insights, and strategic connections.
              </p>
            </div>
            {/* Included Items List */}
            <div className="space-y-3 sm:space-y-4">
              {includedItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7   rounded-full flex items-center justify-center">
                    <Image
                      src="/vector.png"
                      alt="Included item check"
                      width={20}
                      height={20}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <span className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
