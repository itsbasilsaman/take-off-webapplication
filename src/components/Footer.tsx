"use client"

import { useState } from "react"
import { FaFacebookF, FaYoutube, FaEnvelope, FaPhone } from "react-icons/fa"
import { BsWhatsapp } from "react-icons/bs"
import { RxArrowTopRight } from "react-icons/rx";
export default function Footer() {

  

   const handleWhatsAppClick = () => {
    const phone = '919207078555'; // WhatsApp number (without + and spaces)
    const message = encodeURIComponent('Hello, I am interested in your services.');
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank');
  };

 

  return (
    <footer className="bg-black text-white pt-8 pb-4 px-2 sm:px-8 overflow-x-hidden">
      {/* Top WhatsApp and Search Bar Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pb-4 border-b border-gray-700">
        <button
          type="button"
          className="flex items-center gap-2 focus:outline-none"
          onClick={() => {
            const phone = '919207078555';
            const message = encodeURIComponent('Hello, I am interested in your services.');
            const url = `https://wa.me/${phone}?text=${message}`;
            window.open(url, '_blank');
          }}
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
        >
          <span className="text-[#23b3a3] text-2xl font-semibold">Connect WhatsApp</span>
          <BsWhatsapp className="text-[#23b3a3] text-2xl" />
        </button>
  <div className="hidden sm:flex flex-1 items-center justify-center">
          <div className="relative w-full max-w-xl h-12 overflow-hidden rounded-full border border-gray-600 bg-transparent">
            <div className="absolute inset-0 flex items-center">
              <div
                className="whitespace-nowrap flex animate-ticker"
                style={{ animation: 'ticker-left-right 14s linear infinite' }}
              >
                <span
                  className="text-gray-300 text-lg px-6 font-semibold"
                  style={{ letterSpacing: '0.06em' }}
                >
                  Takeoff Business Conclave & Expedition to Explore Dubai
                </span>
                {/* Repeat for seamless loop */}
                <span
                  className="text-gray-300 text-lg px-6 font-semibold"
                  style={{ letterSpacing: '0.06em' }}
                >
                  Takeoff Business Conclave & Expedition to Explore Dubai
                </span>
              </div>
            </div>
          </div>
        </div>
  <div className="hidden sm:flex items-center gap-2">
            <button
                  className="flex items-center bg-[#359D9E] hover:bg-[#235c5d] rounded-full px-3 py-2 pr-3 transition-all duration-200 shadow-lg hover:shadow-xl group"
                  style={{minWidth:'200px'}}
                  onClick={handleWhatsAppClick}
                >
                  <span className="text-white text-lg font-normal tracking-wide pl-2 pr-5">Connect Now</span>
                  <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                    <RxArrowTopRight className="text-[22px] text-[#359D9E] group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </button>
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
              <span className="text-gray-300 text-base"> +91 92070 78555</span>
            </div>
            
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <a href="#home" className="text-gray-300 cursor-pointer hover:text-[#23b3a3] transition-colors duration-200" style={{ scrollBehavior: 'smooth' }}>Home</a>
            <a href="#about" className="text-gray-300 cursor-pointer hover:text-[#23b3a3] transition-colors duration-200" style={{ scrollBehavior: 'smooth' }}>About Us</a>
            <a href="#speakers" className="text-gray-300 cursor-pointer hover:text-[#23b3a3] transition-colors duration-200" style={{ scrollBehavior: 'smooth' }}>Speakers</a>
          </div>
          <div className="flex flex-col gap-2">
            <a href="#why-attend" className="text-gray-300 cursor-pointer hover:text-[#23b3a3] transition-colors duration-200" style={{ scrollBehavior: 'smooth' }}>Why Attend</a>
            <a href="#who-attend" className="text-gray-300 cursor-pointer hover:text-[#23b3a3] transition-colors duration-200" style={{ scrollBehavior: 'smooth' }}>Who Should Attend</a>
            <a href="#contact" className="text-gray-300 cursor-pointer hover:text-[#23b3a3] transition-colors duration-200" style={{ scrollBehavior: 'smooth' }}>Contact Us</a>
          </div>
        </div>

        {/* Logo, Newsletter, Social */}
        <div className="flex flex-col items-center md:items-end gap-6">
          <img src="/white-icon.png" alt="Take-Off Business Network" className="w-44 mb-2" />
          <span className="text-gray-300 text-base mb-2">Stay updated with Takeoff news and events.</span>
          <form className="flex   gap-0 border-b border-gray-700 pb-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-l bg-black text-gray-200 placeholder:text-gray-400 border-none focus:outline-none"
            />
            <button type="submit" className="bg-[#29516a] text-white px-6 py-2 rounded-lg font-semibold">SUBMIT</button>
          </form>
         <div className="flex gap-6 items-center">
            <span className="text-[#23b3a3] text-base font-semibold mt-2">FOLLOW US ON</span>
            <div className="flex gap-6 mt-2">
              <a href="#facebook" className="w-9 h-9 rounded-full border border-[#23b3a3] flex items-center justify-center text-[#23b3a3] hover:bg-[#23b3a3] hover:text-black transition-colors"><FaFacebookF /></a>
              <a href="https://www.instagram.com/takeoff_network?igsh=MWNicmR2a3B5bTAwNQ==" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-[#23b3a3] flex items-center justify-center text-[#23b3a3] hover:bg-[#23b3a3] hover:text-black transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z"/></svg>
              </a>
              <a href="https://www.linkedin.com/posts/takeoffbusinessnetwork_your-biggest-asset-isnt-capital-its-connections-activity-7374366922093768704-DPfO?utm_source=share&utm_medium=member_ios&rcm=ACoAABW52yEBqcIJ4sgM75u1jJlOHhKe_TP_4lw" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-[#23b3a3] flex items-center justify-center text-[#23b3a3] hover:bg-[#23b3a3] hover:text-black transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.604c0-1.099-.021-2.513-1.532-2.513-1.532 0-1.768 1.197-1.768 2.435v4.682h-3v-9h2.881v1.233h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.599 2.001 3.599 4.601v4.729z"/></svg>
              </a>
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
