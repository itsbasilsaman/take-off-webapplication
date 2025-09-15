"use client"

import { useState } from "react"
import { FiChevronRight, FiUsers, FiTrendingUp, FiBriefcase, FiDollarSign,    FiMapPin } from "react-icons/fi"
import { FaHandshake } from 'react-icons/fa';

export default function AudienceSection() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [openItem, setOpenItem] = useState<number | null>(null)

  const audienceItems = [
    {
      icon: <FiTrendingUp className="w-5 h-5" />,
      title: "Kerala Based Entrepreneurs aiming to expand into the GCC",
      description:
        "Showcase your ideas, gain visibility, and connect with investors and partners who can accelerate your journey.",
    },
    {
      icon: <FiUsers className="w-5 h-5" />,
      title: "Aspiring Founders seeking a safe, guided entry into the U.A.E market.",
      description: "",
    },
    {
      icon: <FiBriefcase className="w-5 h-5" />,
      title: "Business Professionals & SMEs wanting to scale their reach and partnerships.",
      description: "",
    },
    {
      icon: <FiDollarSign className="w-5 h-5" />,
      title: "Investors exploring profitable opportunities in Dubai.",
      description: "",
    },
    {
      icon: <FaHandshake className="w-5 h-5" />,
      title: "Entrepreneur Looking for investment & Partnership",
      description: "",
    },
    {
      icon: <FiMapPin className="w-5 h-5" />,
      title: "Professionals considering relocation or establishing a presence in the U.A.E.",
      description: "",
    },
  ]

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end mb-8 lg:mb-0">
          <div className="w-full h-56 sm:h-72 md:h-96 lg:w-80 lg:h-[480px] xl:w-96 xl:h-[540px] rounded-2xl overflow-hidden shadow-lg relative transition-all duration-500">
            <img
              src="/about-image.png"
              alt="Business conference with professionals in traditional attire"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-3/5 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-gray-600 tracking-wide uppercase">Who Should Attend</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                The Audience of <span className="text-[#359D9E] italic">Tomorrow</span>
              </h2>
            </div>

            {/* Audience List */}
            <div className="space-y-4 mt-8">
              {audienceItems.map((item, index) => (
                <div
                  key={index}
                  className={`group cursor-pointer transition-all duration-300 ${
                    hoveredItem === index ? "transform translate-x-2" : ""
                  }`}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex-shrink-0 mt-1">
                      <div
                        className={`p-2 rounded-full transition-colors duration-200 ${
                          hoveredItem === index ? "bg-[#359D9E] text-white" : "bg-[#d0f3f3] text-[#359D9E]"
                        }`}
                      >
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 select-none" onClick={() => setOpenItem(openItem === index ? null : index)}>
                        <FiChevronRight
                          className={`w-4 h-4 text-[#359D9E] transition-transform duration-200 ${
                            hoveredItem === index || openItem === index ? "transform translate-x-1 rotate-90" : ""
                          }`}
                        />
                        <h3 className={`text-base sm:text-lg font-semibold text-gray-900 leading-relaxed transition-colors duration-200 ${openItem === index ? 'text-[#359D9E]' : ''}`}
                        >
                          {item.title}
                        </h3>
                      </div>
                      <div
                        className={`overflow-hidden transition-all duration-500 ${openItem === index ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'} ml-6`}
                        style={{ pointerEvents: openItem === index ? 'auto' : 'none' }}
                      >
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.description || 'Showcase your ideas, gain visibility, and connect with investors and partners who can accelerate your journey.'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Special styling for the last item */}
                  {index === audienceItems.length - 1 && (
                    <div className="mt-2 ml-16">
                      <div className="h-px bg-gradient-to-r from-[#d0f3f3] to-transparent"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <button className="group inline-flex items-center space-x-2 bg-[#359D9E] hover:bg-[#277c7d] text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:transform hover:-translate-y-0.5">
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
