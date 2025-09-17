"use client"

import { MdChevronRight } from "react-icons/md"

const leaders = [
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
]

export default function LandingChiefGusts() {
  return (
    <main className="   bg-white">
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-[1390px] mx-auto">
        <div className="mb-12">
          <p className="text-sm text-black mb-4 font-medium">Our Chief Guests</p>
          <h2 className="text-4xl md:text-[52px]   font-serif italic text-[#C09755] leading-tight text-balance">
            Honoring the leaders who inspire change and growth.
          </h2>
        </div>

        <div className="relative">
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-4 gap-6 lg:gap-6">
            {leaders.map((leader) => (
              <div key={leader.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[3/4] mb-4" style={{clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)'}}>
                  <img
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0  p-6">
                    <div className="absolute inset-0 "></div>
                    <div className="relative z-10">
                      <h3 className="text-white font-semibold text-lg mb-1 drop-shadow-lg">{leader.name}</h3>
                      <p className="text-white text-sm drop-shadow-lg">{leader.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {leaders.map((leader) => (
                <div key={leader.id} className="flex-none w-64 snap-start">
                  <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[3/4] mb-4" style={{clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)'}}>
                    <img
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-transparent   p-4">
                      <div className="absolute inset-0  "></div>
                      <div className="relative z-10">
                        <h3 className="text-white font-semibold text-base mb-1 drop-shadow-lg">{leader.name}</h3>
                        <p className="text-white text-sm drop-shadow-lg">{leader.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 text-amber-600 hover:text-amber-700 items-center justify-center">
            <MdChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>
    </main>
  )
}
