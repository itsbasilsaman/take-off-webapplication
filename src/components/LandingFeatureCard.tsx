"use client"

import type React from "react"

import { useState } from "react"
// Removed framer-motion for simple CSS animation
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
  return (
    <section className="w-full bg-[#28587B] py-16 px-4 sm:px-6 lg:px-0">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-14">
          <p className="text-lg font-semibold md:text-xl text-[#C09755] mb-2  ">Why takeoff 2025</p>
          <h2 className="text-[24px] md:text-5xl lg:text-6xl  font-medium  italic text-white mb-2">
            Where founders <span className="block sm:inline">Grow Together</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={
                `feature-card relative bg-white rounded-2xl p-7 sm:p-8 flex flex-col items-center text-center shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-100`
              }
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full mb-5 bg-[#28587B]">
                <span className="text-white">{feature.icon}</span>
              </div>
              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold italic mb-2 leading-snug text-[#28587B]">{feature.title}</h3>
              {/* Divider */}
              <div className="w-16 h-px bg-gray-300 mx-auto mb-3" />
              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
