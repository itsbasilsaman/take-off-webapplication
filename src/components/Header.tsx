  // Smooth scroll handler
 
"use client"

import { useState } from "react"
import Image from "next/image"
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi"
import { RxArrowTopRight } from "react-icons/rx";
import Link from "next/link";

export default function Header() {
  // WhatsApp integration handler
  const handleWhatsAppClick = () => {
    const phone = '919207078555'; // WhatsApp number (without + and spaces)
    const message = encodeURIComponent('Hello, I am interested in your services.');
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank');
  };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

   const handleSmoothScroll = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className=" ">
    

      {/* Floating Header */}
  <header className="fixed top-4 left-4 right-4 z-50 md:top-6 md:left-6 md:right-6 lg:top-6 lg:left-20 lg:right-20">
        <div className="bg-white  backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 px-4 py-3 md:px-6 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex-1 flex items-center justify-start min-w-0">
              <Link href="/" >
                <Image
                  src="/logo.png"
                  alt="Take-Off Business Network Logo"
                  height={48}
                  width={120}
                  className="h-10 w-auto md:h-10 object-contain lg:object-cover"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation (centered) */}
            <div className="flex-1 flex items-center justify-center min-w-0">
              <nav className="hidden lg:flex items-center space-x-8 whitespace-nowrap">
                <a
                  href="#home"
                  onClick={e => { e.preventDefault(); handleSmoothScroll('home'); }}
                  className="text-black hover:text-gray-900 font-medium transition-colors duration-200 relative group"
                >
                  HOME
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-200 group-hover:w-full"></span>
                </a>
                <a
                  href="#about"
                  onClick={e => { e.preventDefault(); handleSmoothScroll('about'); }}
                  className="text-black hover:text-gray-900 font-medium transition-colors duration-200 relative group"
                >
                  ABOUT US
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-200 group-hover:w-full"></span>
                </a>
                <a
                  href="#speakers"
                  onClick={e => { e.preventDefault(); handleSmoothScroll('chief-guests'); }}
                  className="text-black hover:text-gray-900 font-medium transition-colors duration-200 relative group uppercase"
                >
                  Speakers
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-200 group-hover:w-full"></span>
                </a>
                <a
                  href="#why-attend"
                  onClick={e => { e.preventDefault(); handleSmoothScroll('about'); }}
                  className="text-black hover:text-gray-900 font-medium transition-colors duration-200 relative group uppercase"
                >
                  Why Attend
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-200 group-hover:w-full"></span>
                </a>
                <a
                  href="#audience"
                  onClick={e => { e.preventDefault(); handleSmoothScroll('audience'); }}
                  className="text-black hover:text-gray-900 font-medium transition-colors duration-200 relative group pr-4 uppercase"
                >
                  Who Should Attend
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-200 group-hover:w-full"></span>
                </a>
              </nav>
            </div>

            {/* Contact Button (desktop only) */}
            <div className="flex-1 flex items-center justify-end min-w-0">
              <div className="hidden lg:flex items-center">
                <button
                  className="flex items-center bg-[#359D9E] hover:bg-[#235c5d] rounded-full px-3 py-2 pr-3 transition-all duration-200 shadow-lg hover:shadow-xl group"
                  style={{minWidth:'210px'}}
                  onClick={handleWhatsAppClick}
                >
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
                  className="text-black hover:text-gray-900 font-medium py-2 px-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
                  onClick={e => { e.preventDefault(); handleSmoothScroll('home'); }}
                >
                  HOME
                </a>
                <a
                  href="#about"
                  className="text-black hover:text-gray-900 font-medium py-2 px-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
                  onClick={e => { e.preventDefault(); handleSmoothScroll('about'); }}
                >
                  ABOUT US
                </a>
                <a
                  href="#speakers"
                  className="text-black hover:text-gray-900 font-medium py-2 px-2 rounded-lg hover:bg-gray-50 transition-all duration-200 uppercase"
                  onClick={e => { e.preventDefault(); handleSmoothScroll('chief-guests'); }}
                >
                  Speakers
                </a>
                <a
                  href="#why-attend"
                  className="text-black hover:text-gray-900 font-medium py-2 px-2 rounded-lg hover:bg-gray-50 transition-all duration-200 uppercase"
                  onClick={e => { e.preventDefault(); handleSmoothScroll('about'); }}
                >
                  Why Attend
                </a>
                <a
                  href="#audience"
                  className="text-black hover:text-gray-900 font-medium py-2 px-2 rounded-lg hover:bg-gray-50 transition-all duration-200 uppercase"
                  onClick={e => { e.preventDefault(); handleSmoothScroll('audience'); }}
                >
                  Who Should Attend
                </a>
                <div className="flex justify-center items-center">
                  <button
                    className="flex items-center bg-[#359D9E] hover:bg-[#235c5d] rounded-full px-3 py-1 pr-1 transition-all duration-200 shadow-lg hover:shadow-xl group"
                    style={{minWidth:'205px'}}
                    onClick={handleWhatsAppClick}
                  >
                    <span className="text-white text-lg font-normal tracking-wide pl-2 pr-5">CONTACT US</span>
                    <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                      <RxArrowTopRight className="text-[22px] text-[#359D9E] group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

     
    </div>
  )
}
