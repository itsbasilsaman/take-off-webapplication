 

import { FiArrowRight } from "react-icons/fi"
import { RxArrowTopRight } from "react-icons/rx";


const speakers = [
  {
    id: 1,
    name: "Dr. Aisha Rahman",
    title: "CEO, FutureTech Global",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=500&facepad=2",
  },
  {
    id: 2,
    name: "Dr. Aisha Rahman",
    title: "CEO, FutureTech Global",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=400&h=500&facepad=2",
  },
  {
    id: 3,
    name: "Dr. Aisha Rahman",
    title: "CEO, FutureTech Global",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=400&h=500&facepad=2",
  },
  {
    id: 4,
    name: "Dr. Aisha Rahman",
    title: "CEO, FutureTech Global",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&h=500&facepad=2",
  },
  {
    id: 5,
    name: "Dr. Aisha Rahman",
    title: "CEO, FutureTech Global",
    image: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=facearea&w=400&h=500&facepad=2",
  },
  {
    id: 6,
    name: "Dr. Aisha Rahman",
    title: "CEO, FutureTech Global",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=500&facepad=2",
  },
  {
    id: 7,
    name: "Dr. Aisha Rahman",
    title: "CEO, FutureTech Global",
    image: "https://images.unsplash.com/photo-1519340333755-c2f6c58f5c4b?auto=format&fit=facearea&w=400&h=500&facepad=2",
  },
  {
    id: 8,
    name: "Dr. Aisha Rahman",
    title: "CEO, FutureTech Global",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&h=500&facepad=2",
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
          <p className=" text-semibold text-sm md:text-base mb-3   tracking-wide italic text-black">Our Speakers</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-8 italic leading-tight">
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

        {/* Mobile Carousel */}
        <div className="md:hidden mb-8 max-w-7xl mx-auto">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {speakers.map((speaker) => (
              <div key={speaker.id} className="flex-none w-64 snap-start">
                <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[3/4] mb-4">
                  <img
                    src={speaker.image || "/placeholder.svg"}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
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
            className="group bg-[#215273] hover:bg-[#1b2e3a] active:scale-95 text-white px-6 md:px-8 py-3 md:py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 flex items-center gap-2 md:gap-3 shadow-lg hover:shadow-xl focus:outline-none cursor-pointer"
            style={{ height: '48px' }}
          >
            View all Speakers
          </button>

          <div
            className="flex items-center justify-center border-[#215273] border p-3 rounded-full bg-white transition-all duration-300 text-[#215273] hover:bg-[#215273] hover:text-white active:scale-95 cursor-pointer"
            style={{ height: '48px', width: '48px' }}
          >
            <RxArrowTopRight className="transition-transform duration-300 w-full h-full   group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </div>
      </div>
    </div>
  )
}
