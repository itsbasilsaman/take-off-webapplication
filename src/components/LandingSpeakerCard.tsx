/* eslint-disable @typescript-eslint/no-explicit-any */
 "use client"


import { FiArrowRight } from "react-icons/fi"
import { RxArrowTopRight } from "react-icons/rx";
import { motion } from "framer-motion";


const speakers = [
  {
    id: 1,
    name: "Dr. Rashid Gazzali",
    title: "International Trainer, Corporate Consultant",
    image: "/gazzali.jpg",
  },
  {
    id: 2,
    name: "Ms. Sahla Parveen",
    title: "Entrepreneur, Author, Educationalist",
    image: "/sahla.jpg",
  },
  {
    id: 3,
    name: "Mr. PV Muinuddeen",
    title: "MD, Tahfeel Group",
    image: "/muinudheen.jpg",
  },
  {
    id: 4,
    name: "Mr. Manshad Bin Mohammed",
    title: "Traveller, Story Teller",
    image: "/manshad.jpg",
  },
  {
    id: 5,
    name: "Dr. Najeeb Ahammad",
    title: "Functional Medicine Expert, Corporate Wellness Trainer",
    image: "/najeeb.jpg",
  },
  {
    id: 6,
    name: "Dr. Anvar Ameen Chelat",
    title: "The Managing Director Of Regency Group",
    image: "/anwar-ameen.jpg",
  },
  {
    id: 7,
    name: "Mr. Muhammed Shafeer",
    title: "Co-founder, Takeoff",
    image: "/shafeer.jpg",
  },
  {
    id: 8,
   name: "Joe Jacod",
    title: "Founder of ABC Group",
    image: "/speaker-1.jpg",
  },
]


export default function Home() {
  return (
    <div className="  bg-gradient-to-br from-[#13bba7] via-[#70cac0] to-[#b1f7ee] relative overflow-hidden">
      {/* Speaker background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/speaker-bg.png"
          alt="Speakers background"
          className="w-full h-full object-cover object-center opacity-30"
          style={{ pointerEvents: 'none', userSelect: 'none' }}
        />
      </div>
      <div className="absolute inset-0 z-10">
        {/* Geometric mesh pattern */}
        <div className="absolute bottom-0 right-0 w-full h-full opacity-20">
          <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
            <defs>
              <pattern id="mesh" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0M-10 10L10 -10M30 50L50 30" stroke="white" strokeWidth="0.5" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mesh)" />
          </svg>
        </div>
        {/* Subtle gradient overlays */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-gradient-to-bl from-white/8 to-transparent rounded-full blur-2xl"></div>
      </div>

  <div className="relative z-20 container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="text-center mb-12 md:mb-16">
          <p className=" text-lg font-semibold md:text-xl mb-3   tracking-wide   text-black">Our Speakers</p>
          <h1 className="text-[24px] md:text-5xl lg:text-6xl  font-medium    text-white mb-8 italic leading-tight">
            Meet the Visionaries
          </h1>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12 max-w-7xl mx-auto">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="group relative rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl aspect-[3/4]"
            >
              <div className="w-full h-full relative overflow-hidden">
                <img
                  src={speaker.image || "/placeholder.svg"}
                  alt={speaker.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <h3 className="text-white font-semibold text-base md:text-lg mb-1 leading-tight italic">{speaker.name}</h3>
                  <p className="text-white/90 text-xs md:text-sm font-normal">{speaker.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Mobile Carousel with Framer Motion animation */}
        <div className="md:hidden mb-8 max-w-7xl mx-auto">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {speakers.map((speaker) => (
              <div
                key={speaker.id}
                className="flex-none w-56 snap-start"
              >
                <div
                  className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[3/4] mb-4"
                >
                  <img
                    src={speaker.image || "/placeholder.svg"}
                    alt={speaker.name}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div
                    className="absolute bottom-0 left-0 right-0 p-4 opacity-0 animate-fadein"
                    style={{ animationFillMode: 'forwards', animationDuration: '0.6s' }}
                  >
                    <h3 className="text-white font-semibold text-base mb-1 leading-tight italic">{speaker.name}</h3>
                    <p className="text-white/90 text-xs font-normal">{speaker.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 lg:justify-end max-w-7xl mx-auto">
         <button
                  className="flex items-center bg-[#215273] hover:bg-[#235c5d] rounded-full px-3 py-2 pr-3 transition-all duration-200 shadow-lg hover:shadow-xl group"
                  style={{minWidth:'190px'}}
               
                >
                  <span className="text-white text-lg font-normal tracking-wide pl-2 pr-5">Learn More</span>
                  <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                    <RxArrowTopRight className="text-[22px] text-[#215273] group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </button>
        </div>
      </div>
    </div>
  )
}
