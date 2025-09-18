"use client"

import { useState } from "react"
import { FaFacebookF, FaYoutube, FaEnvelope, FaPhone } from "react-icons/fa"
import { BsWhatsapp } from "react-icons/bs"
import { RxArrowTopRight } from "react-icons/rx";
export default function Footer() {

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

 

  return (
    <footer className="bg-black text-white pt-8 pb-4 px-2 sm:px-8 overflow-x-hidden">
      {/* Top WhatsApp and Search Bar Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pb-4 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <span className="text-[#23b3a3] text-2xl font-semibold italic">Connect WhatsApp</span>
          <BsWhatsapp className="text-[#23b3a3] text-2xl" />
        
          </div>
        <div className="flex-1 flex items-center justify-center">
          <input
            type="text"
            placeholder="Discover Groundbreaking Insights, Connect With Industry Leaders, And Accelerate Your Business Growth At Takeoff 2025."
            className="w-full max-w-xl rounded-full px-6 py-2 bg-transparent border border-gray-600 text-gray-300 placeholder:text-gray-400 focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-2">
            <button
              className="group bg-[#359D9E] hover:bg-[#173c54] text-white px-6 py-2 rounded-full font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl flex items-center gap-2 md:gap-3 focus:outline-none focus:ring-2 focus:ring-[##359D9E] animate-pop"
              onClick={() => {
                const phone = '919207078555';
                const message = encodeURIComponent('Hello, I am interested in Takeoff 2025!');
                window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
              }}
            >
              Connect Now
            </button>
            <div className="text-white border border-white p-2 rounded-full transition-colors ml-2 group-hover:bg-[#19415c] group-hover:scale-110 group-hover:shadow-lg duration-300 ease-in-out">
              <RxArrowTopRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
            </div>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
        {/* Contact Info - Redesigned */}
        <div className="flex flex-col gap-6">
          {/* Call Us Row */}
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-transparent">
              <img src="/call-us.png" alt="Call Us" className="w-10 h-10 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-[#23b3a3] text-base font-medium">How can I assist you today?</span>
              <span className="text-gray-300 text-base">+91 92070 78555‬
</span>
            </div>
          </div>
          {/* Email Row */}
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-transparent">
              <img src="/email.png" alt="Email" className="w-10 h-10 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-[#23b3a3] text-base font-medium">Email</span>
              <span className="text-gray-300 text-base">info@takeoffbusinessnetwork.com</span>
            </div>
          </div>
          {/* Phone Row - icon on right */}
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-transparent">
              <img src="/sales.png" alt="Sales Team" className="w-10 h-10 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-[#23b3a3] text-base font-medium">Sales Team</span>
              <span className="text-gray-300 text-base">+971-525-554-623</span>
            </div>
            
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-gray-300">Home</span>
            <span className="text-gray-300">About Takeoff 2025</span>
            <span className="text-gray-300">Our Mission</span>
            <span className="text-gray-300">Speakers</span>
            <span className="text-gray-300">Why Attend</span>
            <span className="text-gray-300">Who Should Attend</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-gray-300">Agenda</span>
            <span className="text-gray-300">Highlights</span>
            <span className="text-gray-300">FAQs</span>
            <span className="text-gray-300">Terms and Conditions</span>
            <span className="text-gray-300">Privacy policy</span>
            <span className="text-gray-300">Contact Us</span>
          </div>
        </div>

        {/* Logo, Newsletter, Social */}
        <div className="flex flex-col items-center md:items-end gap-6">
          <img src="/white-icon.png" alt="Take-Off Business Network" className="w-44 mb-2" />
          <span className="text-gray-300 text-base mb-2">Stay updated with Takeoff news and events.</span>
          <form className="flex w-full max-w-xs gap-0 border-b border-gray-700 pb-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-l bg-black text-gray-200 placeholder:text-gray-400 border-none focus:outline-none"
            />
            <button type="submit" className="bg-[#29516a] text-white px-6 py-2 rounded-r font-semibold">SUBMIT</button>
          </form>
         <div className="flex gap-6 items-center">
            <span className="text-[#23b3a3] text-base font-semibold mt-2">FOLLOW US ON</span>
            <div className="flex gap-6 mt-2">
              <a href="#facebook" className="w-9 h-9 rounded-full border border-[#23b3a3] flex items-center justify-center text-[#23b3a3] hover:bg-[#23b3a3] hover:text-black transition-colors"><FaFacebookF /></a>
              <a href="#instagram" className="w-9 h-9 rounded-full border border-[#23b3a3] flex items-center justify-center text-[#23b3a3] hover:bg-[#23b3a3] hover:text-black transition-colors"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z"/></svg></a>
              <a href="#youtube" className="w-9 h-9 rounded-full border border-[#23b3a3] flex items-center justify-center text-[#23b3a3] hover:bg-[#23b3a3] hover:text-black transition-colors"><FaYoutube /></a>
            </div>
         </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 pt-4 mt-4 text-center text-gray-400 text-xs">
        © Copyright 2025 By Take OFF. All Rights Reserved.
      </div>
    </footer>
  )
}
