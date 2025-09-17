"use client"

import { useState } from "react"
import Image from "next/image"
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi"
import { RxArrowTopRight } from "react-icons/rx";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className=" ">
    

      {/* Floating Header */}
  <header className="fixed top-4 left-4 right-4 z-50 md:top-6 md:left-6 md:right-6 lg:top-6 lg:left-20 lg:right-20">
        <div className="bg-white/55 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 px-4 py-3 md:px-6 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex-1 flex items-center justify-start min-w-0">
              <Image
                src="/logo.png"
                alt="Take-Off Business Network Logo"
                height={48}
                width={120}
                className="h-10 w-auto md:h-10 object-contain lg:object-cover"
                priority
              />
            </div>

            {/* Desktop Navigation (centered) */}
            <div className="flex-1 flex items-center justify-center min-w-0">
              <nav className="hidden lg:flex items-center space-x-8 whitespace-nowrap">
                <a
                  href="#home"
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 relative group"
                >
                  HOME
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-200 group-hover:w-full"></span>
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 relative group"
                >
                  ABOUT US
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-200 group-hover:w-full"></span>
                </a>
                <a
                  href="#highlights"
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 relative group"
                >
                  HIGHLIGHTS
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-200 group-hover:w-full"></span>
                </a>
                <a
                  href="#speakers"
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 relative group"
                >
                  SPEAKERS
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-200 group-hover:w-full"></span>
                </a>
                <a
                  href="#pricing"
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 relative group pr-4"
                >
                  PRICING
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-200 group-hover:w-full"></span>
                </a>
              </nav>
            </div>

            {/* Contact Button (desktop only) */}
            <div className="flex-1 flex items-center justify-end min-w-0">
              <div className="hidden lg:flex items-center">
                <button className="flex items-center bg-[#359D9E] hover:bg-[#235c5d] rounded-full px-3 py-2 pr-3 transition-all duration-200 shadow-lg hover:shadow-xl group" style={{minWidth:'210px'}}>
                  <span className="text-white text-lg font-normal tracking-wide pl-2 pr-5">CONTACT US</span>
                  <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                    <RxArrowTopRight className="text-[22px] text-[#359D9E] group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile Menu Button (right) */}
            <div className="flex items-center lg:hidden flex-shrink-0">
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                aria-label="Open menu"
              >
                {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-gray-200 animate-in slide-in-from-top-2 duration-200">
              <nav className="flex flex-col space-y-3">
                <a
                  href="#home"
                  className="text-gray-700 hover:text-gray-900 font-medium py-2 px-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  HOME
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-gray-900 font-medium py-2 px-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ABOUT US
                </a>
                <a
                  href="#highlights"
                  className="text-gray-700 hover:text-gray-900 font-medium py-2 px-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  HIGHLIGHTS
                </a>
                <a
                  href="#speakers"
                  className="text-gray-700 hover:text-gray-900 font-medium py-2 px-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  SPEAKERS
                </a>
                <a
                  href="#pricing"
                  className="text-gray-700 hover:text-gray-900 font-medium py-2 px-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  PRICING
                </a>
                <button className="mt-4 bg-[#359D9E] hover:bg-[#1e5253] text-white px-4 py-2 rounded-full font-medium transition-all duration-200 flex items-center justify-center space-x-2 group shadow-lg hover:shadow-xl transform hover:scale-105">
                  <span className="text-sm">CONTACT US</span>
                  <RxArrowTopRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

     
    </div>
  )
}
