"use client"

import { useState } from "react"
import { FiChevronRight } from "react-icons/fi"

export default function AudienceSection() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [openItem, setOpenItem] = useState<number | null>(null)

  const audienceItems = [
    {
      title: "Kerala Based Entrepreneurs aiming to expand into the GCC",
      description:
        "Showcase your ideas, gain visibility, and connect with investors and partners who can accelerate your journey.",
    },
    {
      title: "Aspiring Founders seeking a safe, guided entry into the U.A.E market.",
    description:
        "Showcase your ideas, gain visibility, and connect with investors and partners who can accelerate your journey.",
    },
    {
      title: "Business Professionals & SMEs wanting to scale their reach and partnerships.",
       description:
        "Showcase your ideas, gain visibility, and connect with investors and partners who can accelerate your journey.",
    },
    {
      title: "Investors exploring profitable opportunities in Dubai.",
       description:
        "Showcase your ideas, gain visibility, and connect with investors and partners who can accelerate your journey.",
    },
    {
      title: "Entrepreneur Looking for investment & Partnership",
       description:
        "Showcase your ideas, gain visibility, and connect with investors and partners who can accelerate your journey.",
    },
    {
      title: "Professionals considering relocation or establishing a presence in the U.A.E.",
       description:
        "Showcase your ideas, gain visibility, and connect with investors and partners who can accelerate your journey.",
    },
  ]

  return (
    <div className="bg-white  overflow-hidden px-2 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-0">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end mb-6 md:mb-0">
          <div className="w-full px-8 h-56 sm:h-72 md:h-full md:min-h-[340px] md:max-h-[520px] rounded-2xl overflow-hidden   relative transition-all duration-500">
            <img
              src="/image-three.png"
              alt="Business conference with professionals in traditional attire"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 rounded-2xl"
              
            />
         
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-gray-600 tracking-wide uppercase">Who Should Attend</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#29516a] leading-tight italic" style={{fontFamily: 'serif'}}>
                The Audience of Tomorrow
              </h2>
            </div>

            {/* Audience List */}
            <div className="space-y-2 mt-8">
              {audienceItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 sm:gap-3 md:gap-4 py-2"
                >
                  <FiChevronRight className="mt-1 text-[#29516a] flex-shrink-0 w-5 h-5" />
                  <div>
                    <div className="italic text-base sm:text-lg md:text-lg lg:text-xl text-[#222] font-semibold leading-snug">
                      {item.title}
                    </div>
                    {item.description && (
                      <div className="not-italic text-sm sm:text-base text-gray-600 mt-1">
                        {item.description}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <button className="group inline-flex items-center space-x-2 bg-[#29516a] hover:bg-[#1d384a] text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:transform hover:-translate-y-0.5 italic">
                <span>Join the Event</span>
                <FiChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}
