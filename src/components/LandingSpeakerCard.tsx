"use client"

import { useState } from "react"
import { IoChevronForward, IoChevronBack } from "react-icons/io5"
import { HiArrowRight } from "react-icons/hi2"

interface Speaker {
  id: number
  name: string
  title: string
  company: string
  image: string
}

const chiefGuests: Speaker[] = [
  {
    id: 1,
    name: "Dr. Maha Robinson",
    title: "CEO",
    company: "PlanetTech Global",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=400&facepad=2&q=80",
  },
  {
    id: 2,
    name: "Omar Al Mansouri",
    title: "Venture Capitalist",
    company: "UAE",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=400&h=400&facepad=2&q=80",
  },
  {
    id: 3,
    name: "Mr. Arjun Varma",
    title: "Founder",
    company: "Innoweb Kernel",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=400&h=400&facepad=2&q=80",
  },
  {
    id: 4,
    name: "Fatima Al Zahra",
    title: "Director",
    company: "Dubai Innovations",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&h=400&facepad=2&q=80",
  },
  {
    id: 5,
    name: "John Smith",
    title: "CTO",
    company: "TechBridge",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&w=400&h=400&facepad=2&q=80",
  },
]

const speakers: Speaker[] = [
  {
    id: 1,
    name: "Dr. Maha Robinson",
    title: "CEO",
    company: "PlanetTech Global",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=400&facepad=2&q=80",
  },
  {
    id: 2,
    name: "Omar Al Mansouri",
    title: "Venture Capitalist",
    company: "UAE",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=400&h=400&facepad=2&q=80",
  },
  {
    id: 3,
    name: "Mr. Arjun Varma",
    title: "Founder",
    company: "Innoweb Kernel",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=400&h=400&facepad=2&q=80",
  },
  {
    id: 4,
    name: "Fatima Al Zahra",
    title: "Director",
    company: "Dubai Innovations",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&h=400&facepad=2&q=80",
  },
  {
    id: 5,
    name: "John Smith",
    title: "CTO",
    company: "TechBridge",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&w=400&h=400&facepad=2&q=80",
  },
]

function SpeakerCard({ speaker, onClick }: { speaker: Speaker; onClick: () => void }) {
  return (
  <div className="relative group cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95" onClick={onClick}>
      <div className="relative overflow-hidden rounded-2xl bg-gray-100">
        <img
          src={speaker.image || "/placeholder.svg"}
          alt={speaker.name}
          className="w-full h-80 sm:h-72 md:h-80 lg:h-96 object-cover transition-transform duration-300 group-hover:scale-110 group-active:scale-100 group-hover:brightness-110 group-hover:shadow-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-lg sm:text-xl font-semibold mb-1">{speaker.name}</h3>
          <p className="text-sm sm:text-base opacity-90">
            {speaker.title}, {speaker.company}
          </p>
        </div>
      </div>
    </div>
  )
}

function NavigationArrow({ onClick, disabled }: { onClick: () => void; disabled?: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`p-3 rounded-full transition-all duration-200 ${
        disabled
          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
          : "bg-[#359D9E] text-white hover:bg-[#359D9E] hover:scale-110 active:scale-95"
      }`}
    >
      <IoChevronForward className="w-5 h-5" />
    </button>
  )
}

function ViewAllButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
  className="inline-flex items-center gap-2 px-6 py-3 bg-[#359D9E] text-white rounded-full font-medium transition-all duration-200 hover:bg-[#359D9E] hover:scale-105 active:scale-95"
    >
      <span>View all Speakers</span>
      <HiArrowRight className="w-4 h-4" />
    </button>
  )
}

export default function SpeakerSection(){

  const [currentChiefIndex, setCurrentChiefIndex] = useState(0)
  const [currentSpeakerIndex, setCurrentSpeakerIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null)

  const handleChiefNext = () => {
    setCurrentChiefIndex((prev) => (prev + 1) % chiefGuests.length)
  }

  const handleSpeakerNext = () => {
    setSlideDirection('right')
    setTimeout(() => {
      setCurrentSpeakerIndex((prev) => {
        // If at the end, loop to start
        if (prev + 3 >= speakers.length) return 0
        return prev + 3
      })
      setSlideDirection(null)
    }, 300)
  }

  const handleSpeakerClick = (speaker: Speaker) => {
    console.log("Speaker clicked:", speaker.name)
    // Add your speaker click logic here
  }

  const handleViewAllClick = () => {
    console.log("View all speakers clicked")
    // Add your view all logic here
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Chief Guests Section */}
        <section className="mb-16 lg:mb-24">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-sm sm:text-base text-gray-600 mb-2 font-medium">Our Chief Guests</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#C09755] leading-tight">
              Honoring the leaders who inspire
              <br />
              change and growth.
            </h1>
          </div>

          <div className="relative">
            {/* Desktop carousel for chiefGuests */}
            <div className="hidden lg:grid grid-cols-3 gap-6 lg:gap-8 transition-transform duration-300">
              {chiefGuests.slice(currentChiefIndex, currentChiefIndex + 3).map((guest) => (
                <SpeakerCard key={guest.id} speaker={guest} onClick={() => handleSpeakerClick(guest)} />
              ))}
            </div>
            {/* Back and Next Arrows for desktop */}
            <div className="hidden lg:flex absolute w-full top-1/2 -translate-y-1/2 justify-between px-2">
              <button
                onClick={() => setCurrentChiefIndex((prev) => (prev - 3 + chiefGuests.length) % chiefGuests.length)}
                className="p-3 rounded-full bg-[#359D9E] text-white shadow-lg hover:bg-[#277c7d] hover:scale-110 active:scale-95 transition-all duration-200 animate-bounce"
                aria-label="Previous chief guests"
              >
                <IoChevronBack className="w-6 h-6" />
              </button>
              <button
                onClick={() => setCurrentChiefIndex((prev) => (prev + 3) % chiefGuests.length)}
                className="p-3 rounded-full bg-[#359D9E] text-white shadow-lg hover:bg-[#277c7d] hover:scale-110 active:scale-95 transition-all duration-200 animate-bounce"
                aria-label="Next chief guests"
              >
                <IoChevronForward className="w-6 h-6" />
              </button>
            </div>
            {/* Mobile horizontal scroll for chiefGuests */}
            <div className="flex gap-4 overflow-x-auto pb-2 lg:hidden snap-x snap-mandatory">
              {chiefGuests.map((guest) => (
                <div key={guest.id} className="min-w-[250px] snap-center">
                  <SpeakerCard speaker={guest} onClick={() => handleSpeakerClick(guest)} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Speakers Section */}
        <section className="mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-sm sm:text-base text-gray-600 mb-2 font-medium">Our Speakers</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#359D9E] italic">Meet the Visionaries</h2>
          </div>

          <div className="relative">
            {/* Desktop carousel for speakers */}
            <div className="hidden lg:grid grid-cols-3 gap-6 lg:gap-8 transition-transform duration-300">
              {speakers.slice(currentSpeakerIndex, currentSpeakerIndex + 3).map((speaker) => (
                <SpeakerCard key={speaker.id} speaker={speaker} onClick={() => handleSpeakerClick(speaker)} />
              ))}
            </div>
            {/* Back and Next Arrows for desktop */}
            <div className="hidden lg:flex absolute w-full top-1/2 -translate-y-1/2 justify-between px-2">
              <button
                onClick={() => setCurrentSpeakerIndex((prev) => (prev - 3 + speakers.length) % speakers.length)}
                className="p-3 rounded-full bg-[#359D9E] text-white shadow-lg hover:bg-[#277c7d] hover:scale-110 active:scale-95 transition-all duration-200 animate-bounce"
                aria-label="Previous speakers"
              >
                <IoChevronBack className="w-6 h-6" />
              </button>
              <button
                onClick={() => setCurrentSpeakerIndex((prev) => (prev + 3) % speakers.length)}
                className="p-3 rounded-full bg-[#359D9E] text-white shadow-lg hover:bg-[#277c7d] hover:scale-110 active:scale-95 transition-all duration-200 animate-bounce"
                aria-label="Next speakers"
              >
                <IoChevronForward className="w-6 h-6" />
              </button>
            </div>
            {/* Mobile horizontal scroll for speakers */}
            <div className="flex gap-4 overflow-x-auto pb-2 lg:hidden snap-x snap-mandatory">
              {speakers.map((speaker) => (
                <div key={speaker.id} className="min-w-[250px] snap-center">
                  <SpeakerCard speaker={speaker} onClick={() => handleSpeakerClick(speaker)} />
                </div>
              ))}
            </div>

            {/* Slider Button for Speakers (Desktop) */}
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8">
              <button
                onClick={handleSpeakerNext}
                className="p-3 rounded-full bg-[#359D9E] text-white shadow-lg hover:bg-[#277c7d] hover:scale-110 active:scale-95 transition-all duration-200 animate-bounce"
                aria-label="Next speakers"
              >
                <IoChevronForward className="w-6 h-6" />
              </button>
            </div>

            {/* Slider Button for Speakers (Mobile) */}
            <div className="flex justify-center mt-6 lg:hidden">
              <button
                onClick={handleSpeakerNext}
                className="px-6 py-2 rounded-full bg-[#359D9E] text-white shadow-md hover:bg-[#277c7d] hover:scale-105 active:scale-95 transition-all duration-200 animate-bounce"
                aria-label="Next speakers"
              >
                View More
              </button>
            </div>

          </div>

          {/* View All Speakers Button */}
          <div className="flex justify-end mt-8">
            <ViewAllButton onClick={handleViewAllClick} />
          </div>
        </section>

        {/* Bottom Banner */}
  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#359D9E] to-[#359D9E] text-white py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between px-6 sm:px-8">
            <div className="flex items-center gap-4 mb-4 sm:mb-0">
              <div className="bg-white/20 px-4 py-2 rounded-full">
                <span className="text-sm sm:text-base font-bold">EARLY BIRD REGISTRATION CLOSING SOON!</span>
              </div>
            </div>
            <div className="text-center sm:text-right">
              <span className="text-lg sm:text-xl font-bold">20+ GLOBAL SPEAKERS CONFIRMED</span>
            </div>
          </div>

          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
