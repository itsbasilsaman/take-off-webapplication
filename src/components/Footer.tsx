"use client"

import { useState } from "react"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaPhone, FaEnvelope, FaChevronUp } from "react-icons/fa"

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Show/hide scroll to top button based on scroll position
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setShowScrollTop(window.scrollY > 300)
    })
  }

  const navigationLinks = [
    { name: "Home", href: "#home", active: true },
    { name: "About Takeoff 2025", href: "#about" },
    { name: "Our Mission", href: "#mission" },
    { name: "Speakers", href: "#speakers" },
    { name: "Why Attend", href: "#why-attend" },
    { name: "Who Should Attend", href: "#who-attend" },
  ]

  const secondaryLinks = [
    { name: "Agenda", href: "#agenda" },
    { name: "Highlights", href: "#highlights" },
    { name: "FAQs", href: "#faqs" },
    { name: "Terms and Conditions", href: "#terms" },
    { name: "Privacy policy", href: "#privacy" },
    { name: "Contact Us", href: "#contact" },
  ]

  const socialLinks = [
    { icon: FaFacebookF, href: "#facebook", color: "hover:bg-blue-600" },
    { icon: FaInstagram, href: "#instagram", color: "hover:bg-pink-600" },
    { icon: FaLinkedinIn, href: "#linkedin", color: "hover:bg-blue-700" },
    { icon: FaTwitter, href: "#twitter", color: "hover:bg-blue-400" },
  ]

  return (
    <footer className="relative">
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed top-4 right-4 z-50 bg-[#359D9E] hover:bg-[#359D9E] text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <FaChevronUp className="w-4 h-4" />
        </button>
      )}

      <div className="flex flex-col lg:flex-row min-h-[400px]">
        {/* Left Section - #359D9E Background */}
        <div className="bg-[#359D9E] flex-1 px-6 py-12 lg:px-12 lg:py-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
              {/* First Column */}
              <div className="space-y-6">
                {navigationLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={`block text-white transition-all duration-300 hover:translate-x-2 ${
                      link.active
                        ? "text-lg font-medium border-l-2 border-white pl-4"
                        : "text-base hover:text-[#359D9E] italic"
                    }`}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                    style={{
                      transform: hoveredLink === link.name ? "translateX(8px)" : "translateX(0)",
                      opacity: hoveredLink && hoveredLink !== link.name ? 0.7 : 1,
                    }}
                  >
                    {link.active && "> "}
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Second Column */}
              <div className="space-y-6">
                {secondaryLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-white text-base hover:text-[#359D9E] italic transition-all duration-300 hover:translate-x-2"
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                    style={{
                      transform: hoveredLink === link.name ? "translateX(8px)" : "translateX(0)",
                      opacity: hoveredLink && hoveredLink !== link.name ? 0.7 : 1,
                    }}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-8 border-t border-[#359D9E]">
              <p className="text-white text-sm opacity-80">© Copyright 2025 by Take Off. All Rights Reserved</p>
            </div>
          </div>
        </div>

        {/* Right Section - Black Background */}
        <div className="bg-black flex-1 px-6 py-12 lg:px-12 lg:py-16 lg:max-w-md">
          <div className="space-y-8">
            {/* Logo and Tagline */}
            <div className="text-center lg:text-left">
              <h2 className="text-white text-2xl lg:text-3xl font-bold tracking-wider mb-2">TAKE-OFF</h2>
              <p className="text-gray-400 text-sm tracking-wide mb-1">BUSINESS NETWORK</p>
              <p className="text-white text-sm italic mt-4">Igniting Innovation. Shaping Tomorrow.</p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Email Section */}
              <div>
                <h3 className="text-white text-sm font-medium tracking-wider mb-3">DROP US A LINE</h3>
                <a
                  href="mailto:info@takeoffbusinessnetwork.com"
                  className="text-white hover:text-[#359D9E] transition-colors duration-300 flex items-center gap-2"
                >
                  <FaEnvelope className="w-4 h-4" />
                  info@takeoffbusinessnetwork.com
                </a>
              </div>

              {/* Phone Section */}
              <div>
                <h3 className="text-white text-sm font-medium tracking-wider mb-3">CALL US</h3>
                <div className="space-y-2">
                  <a
                    href="tel:+12133312345"
                    className="text-white hover:text-[#359D9E] transition-colors duration-300 flex items-center gap-2"
                  >
                    <FaPhone className="w-4 h-4 text-green-500" />
                    +1 (213) 333-12345
                  </a>
                  <a
                    href="tel:+12133312345"
                    className="text-white hover:text-[#359D9E] transition-colors duration-300 flex items-center gap-2"
                  >
                    <FaPhone className="w-4 h-4" />
                    +1 (213) 333-12345
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-3 justify-center lg:justify-start">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-[#359D9E] ${social.color} rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12`}
                    aria-label={`Social media link ${index + 1}`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
