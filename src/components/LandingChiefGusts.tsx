"use client"

import { useEffect, useRef, useState } from "react"
import { MdChevronRight } from "react-icons/md"
import { motion } from "framer-motion"

const leaders = [
  {
    id: 1,
    name: "Dr. Abdussamad Samadani  ",
    title: "Member of Indian Parliament",
    image: "https://scontent.fcok3-2.fna.fbcdn.net/v/t39.30808-6/435724766_957968162366463_6637910842092321999_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=uPXz8OiFEqwQ7kNvwE4kNnE&_nc_oc=AdkVDuPCebmY4sRRceJ6xigPhvly8Icx-pAwf1JrIkja0aZpKJE--CnD12h8dB5s8Y5b78KOgmZBcaTWjZj2sSBZ&_nc_zt=23&_nc_ht=scontent.fcok3-2.fna&_nc_gid=vL40hYv17wu3nnFIvhzdNA&oh=00_AfZXBXJZGkwB5RcYkDf0DkOlZdmZbrMITrTQn84ugCD7cg&oe=68D2ECD7",
  },
  {
    id: 2,
    name: "Mr. PC Musthafa",
    title: "CEO, ID Foods LTD",
    image: "https://blackhattalent.com/wp-content/uploads/2023/07/1560066687545.jpeg",
  },
  {
    id: 3,
    name: "Dr. Anvar Ameen Chelat",
    title: "Managing Director, Regency Group",
    image: "/anwar-ameen.jpg",
  },
  {
    id: 4,
    name: "Faisal AK",
    title: "Executive Director – Malabar Gold",
    image: "https://scontent.fcok3-1.fna.fbcdn.net/v/t39.30808-6/480204633_28481457068169732_7079540419111445299_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3dVpbkgpAYYQ7kNvwG_SjR7&_nc_oc=AdnIem-666tVA_ZftxefwN5Z-zbWr5BZTNly_NmQr7w3vm84rGXl3kPmTb8GGWgoOFbyMXfFEvqhdWHwzjowPpik&_nc_zt=23&_nc_ht=scontent.fcok3-1.fna&_nc_gid=hAkB3LLToQ9dbnjZLSEr_Q&oh=00_AfYXJaMW2QtM8_TM85du8cMXSOthreFGA7u_Bu9bENdV8g&oe=68D2DFDC",
  },
];



export default function LandingChiefGusts() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-white">
      <section
        ref={sectionRef}
        className={`py-16 px-4 md:px-8 lg:px-16 max-w-[1390px] mx-auto transition-all duration-700 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
        `}
      >
        <div className="mb-12">
          <p className="text-lg font-semibold md:text-xl text-black mb-4  ">Our Chief Guests</p>
          <h2 className="text-[24px] md:text-5xl lg:text-6xl  font-medium  text-[#C09755] leading-tight text-balance">
            Honoring the leaders who inspire change and growth.
          </h2>
        </div>

        <div className="relative">
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-4 gap-6 lg:gap-6">
            {leaders.map((leader) => (
              <motion.div
                key={leader.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[3/4] mb-4" style={{clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)'}}>
                  <motion.img
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0  p-6">
                    <div className="absolute inset-0 "></div>
                    <div className="relative z-10">
                      <h3 className="text-white font-semibold text-lg mb-1 drop-shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:brightness-125 group-hover:drop-shadow-2xl">{leader.name}</h3>
                      <p className="text-white text-sm drop-shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:brightness-125 group-hover:drop-shadow-2xl">{leader.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {leaders.map((leader) => (
                <motion.div
                  key={leader.id}
                  className="flex-none w-56 snap-start"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[3/4] mb-4" style={{clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)'}}>
                    <motion.img
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-transparent   p-4">
                      <div className="absolute inset-0    bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                      <motion.div
                        className="relative z-10"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.7 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                      >
                        <h3 className="text-white font-semibold text-base mb-1 drop-shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:brightness-125 group-hover:drop-shadow-2xl">{leader.name}</h3>
                        <p className="text-white text-sm drop-shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:brightness-125 group-hover:drop-shadow-2xl">{leader.title}</p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
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
