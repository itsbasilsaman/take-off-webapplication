"use client"

import type React from "react"

import { useState } from "react"
import { FiTarget, FiZap, FiUsers, FiAward, FiMapPin, FiGlobe } from "react-icons/fi"

interface FeatureCard {
  icon: React.ReactNode
  title: string
  description: string
  id: string
}

const features: FeatureCard[] = [
  {
    id: "immersive-days",
    icon: <FiTarget className="w-8 h-8" />,
    title: "4 immersive days in Dubai",
    description: "Experience in-depth sessions, site visits, and hands-on learning in the heart of innovation.",
  },
  {
    id: "entrepreneurs",
    icon: <FiZap className="w-8 h-8" />,
    title: "500+ entrepreneurs and industry leaders",
    description: "Connect with a thriving community of forward-thinkers driving global business.",
  },
  {
    id: "keynote-sessions",
    icon: <FiUsers className="w-8 h-8" />,
    title: "20+ keynote sessions & workshops",
    description: "Learn from world-class speakers about cutting-edge strategies and market insights.",
  },
  {
    id: "award-night",
    icon: <FiAward className="w-8 h-8" />,
    title: "Business Excellence Award Night",
    description: "Celebrate innovation and leadership in a gala recognizing outstanding achievers.",
  },
  {
    id: "guided-visits",
    icon: <FiMapPin className="w-8 h-8" />,
    title: "Guided Industrial & Shopping Visits",
    description: "Gain real-world insights through exclusive guided tours of industrial hubs and trade centers.",
  },
  {
    id: "networking",
    icon: <FiGlobe className="w-8 h-8" />,
    title: "Exclusive Networking Sessions",
    description: "Forge strategic partnerships in curated sessions designed to maximize impact.",
  },
]

export default function LandingFeatureCards() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [clickedCard, setClickedCard] = useState<string | null>(null)

  const handleCardClick = (id: string) => {
    setClickedCard(clickedCard === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-lg sm:text-xl text-gray-600 mb-4 font-medium italic">Why takeoff 2025</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-balance">
            <span className="text-[#359D9E] italic">Where founders</span>{" "}
            <span className="text-[#359D9E] italic">Grow Together</span>
          </h1>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`
                relative bg-[#359D9E] rounded-2xl p-8 text-white cursor-pointer
                transition-all duration-300 ease-in-out transform
                ${hoveredCard === feature.id ? "scale-105 shadow-2xl" : "shadow-lg"}
                ${clickedCard === feature.id ? "ring-4 ring-[#359D9E] ring-opacity-50" : ""}
                hover:shadow-2xl active:scale-95
              `}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(feature.id)}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#359D9E] to-[#359D9E] rounded-2xl opacity-90" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon Container */}
                <div
                  className={`
                  w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6
                  transition-transform duration-300
                  ${hoveredCard === feature.id ? "rotate-12 scale-110" : ""}
                `}
                >
                  <div className="text-[#359D9E]">{feature.icon}</div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl italic font-bold mb-4 leading-tight">{feature.title}</h3>

                {/* Description */}
                <p
                  className={`
                   text-white leading-relaxed text-sm sm:text-base
                  transition-all duration-300
                  ${clickedCard === feature.id ? "text-white font-medium" : ""}
                `}
                >
                  {feature.description}
                </p>

                {/* Interactive Indicator */}
                {clickedCard === feature.id && (
                  <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full animate-pulse" />
                )}
              </div>

              {/* Hover Effect Overlay */}
              <div
                className={`
                absolute inset-0 bg-white rounded-2xl transition-opacity duration-300
                ${hoveredCard === feature.id ? "opacity-5" : "opacity-0"}
              `}
              />
            </div>
          ))}
        </div>

        
      </div>
    </div>
  )
}
