"use client"

import { useState, useEffect } from "react"
import { FiChevronRight } from "react-icons/fi"
import { motion } from "framer-motion"
import { RxArrowTopRight } from "react-icons/rx";

export default function AudienceSection() {
  // Remove hoveredItem, only use openItem for toggling
  const [openItem, setOpenItem] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)


  const handleWhatsAppClick = () => {
    const phone = '919207078555'; // WhatsApp number (without + and spaces)
    const message = encodeURIComponent('Hello, I am interested in your services.');
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank');
  };
  // Mobile fade-in effect when entering page or scrolling 10%
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const audienceItems = [
    {
      title: "Kerala Based Entrepreneurs aiming to expand into the GCC",
      description:
        "Showcase your ideas, gain visibility, and connect with investors and partners who can accelerate your journey.",
    },
    {
      title: "Aspiring Founders seeking a safe, guided entry into the U.A.E market.",
    description:
        "Showcase your ideas, gain visibility, and connect with investors and partners who can accelerate your journey.",
    },
    {
      title: "Business Professionals & SMEs wanting to scale their reach and partnerships.",
       description:
        "Showcase your ideas, gain visibility, and connect with investors and partners who can accelerate your journey.",
    },
    {
      title: "Investors exploring profitable opportunities in Dubai.",
       description:
        "Showcase your ideas, gain visibility, and connect with investors and partners who can accelerate your journey.",
    },
    {
      title: "Entrepreneur Looking for investment & Partnership",
       description:
        "Showcase your ideas, gain visibility, and connect with investors and partners who can accelerate your journey.",
    },
    {
      title: "Professionals considering relocation or establishing a presence in the U.A.E.",
       description:
        "Showcase your ideas, gain visibility, and connect with investors and partners who can accelerate your journey.",
    },
  ]

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      className="bg-white overflow-hidden px-4 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.2 }}
    >
      {/* Mobile Layout */}
      {isMobile ? (
  <motion.div className="flex flex-col gap-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          {/* Header First */}
          <motion.div className="space-y-3 mb-4" variants={fadeUp}>
            <p className="text-lg font-semibold md:text-xl text-gray-600 tracking-wide  ">Who Should Attend</p>
            <h2 className="text-[24px] md:text-5xl lg:text-6xl  font-medium  text-[#29516a] leading-tight italic" style={{fontFamily: 'var(--font-dm-serif-display), serif', lineHeight: 1.3, animationDelay: '0.4s'}}  >
              The Audience of Tomorrow
            </h2>
          </motion.div>
          {/* Image Second */}
          <motion.div className="w-full flex items-center justify-center mb-4" variants={fadeUp}>
            <div className="w-full h-56 rounded-2xl overflow-hidden relative transition-all duration-500">
              <motion.img
                src="/image-three.png"
                alt="Business conference with professionals in traditional attire"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 rounded-2xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.7 }}
              />
            </div>
          </motion.div>
          {/* Audience List Third */}
          <div className="space-y-2 mt-2">
            {audienceItems.map((item, index) => (
              <motion.div key={index} className="flex flex-col" variants={fadeUp}>
                <button
                  className={`flex items-center gap-2 py-2 focus:outline-none transition-colors duration-200 cursor-pointer`}
                  onClick={() => setOpenItem(openItem === index ? null : index)}
                  aria-expanded={openItem === index}
                  type="button"
                >
                  <FiChevronRight
                    className={`mt-1 text-[#29516a] flex-shrink-0 w-5 h-5 transform transition-transform duration-300 ${openItem === index ? 'rotate-90' : ''}`}
                  />
                  <span className="italic text-base text-[#222] font-semibold leading-snug text-left">
                    {item.title}
                  </span>
                </button>
                {item.description && (
                  <div
                    className={`not-italic text-sm text-gray-600 overflow-hidden transition-all duration-700 ease-in-out mt-1 pl-7 ${openItem === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                    style={{ transitionProperty: 'max-height, opacity' }}
                  >
                    {item.description}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          {/* Call to Action */}
          <motion.div className="mt-8 pt-6 border-t border-gray-100" variants={fadeUp}>
           <button
                  className="flex items-center bg-[#359D9E] hover:bg-[#235c5d] rounded-full px-3 py-2 pr-3 transition-all duration-200 shadow-lg hover:shadow-xl group"
                  style={{minWidth:'210px'}}
                  onClick={handleWhatsAppClick}
                >
                  <span className="text-white text-lg font-normal tracking-wide pl-2 pr-5">Join the Event</span>
                  <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                    <RxArrowTopRight className="text-[22px] text-[#359D9E] group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </button>
          </motion.div>
  </motion.div>
      ) : (
        /* Desktop Layout (unchanged) */
        <motion.div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-0" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          {/* Image Section */}
          <motion.div className="w-full md:w-1/2 flex items-center justify-center md:justify-end mb-6 md:mb-0" variants={fadeUp}>
            <div className="w-full px-8 h-56 sm:h-72 md:h-full md:min-h-[340px] md:max-h-[520px] rounded-2xl overflow-hidden   relative transition-all duration-500">
              <motion.img
                src="/image-three.png"
                alt="Business conference with professionals in traditional attire"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 rounded-2xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.7 }}
              />
            </div>
          </motion.div>
          {/* Content Section */}
          <motion.div className="w-full md:w-1/2 flex flex-col justify-center" variants={fadeUp}>
            <div className="space-y-6">
              {/* Header */}
              <motion.div className="space-y-3" variants={fadeUp}>
               <p className="text-lg font-semibold md:text-xl text-gray-600 tracking-wide  ">Who Should Attend</p>
            <h2 className="text-[24px] md:text-5xl lg:text-6xl  font-medium  text-[#29516a] leading-tight italic" style={{fontFamily: 'var(--font-dm-serif-display), serif', lineHeight: 1.3, animationDelay: '0.4s'}}  >
              The Audience of Tomorrow
            </h2>
              </motion.div>
              {/* Audience List */}
              <div className="space-y-2 mt-8">
                {audienceItems.map((item, index) => (
                  <motion.div key={index} className="flex flex-col" variants={fadeUp}>
                    <button
                      className={`flex items-center gap-2 sm:gap-3 md:gap-4 py-2 focus:outline-none transition-colors duration-200 ${openItem === index ? 'bg-gray-100' : ''} cursor-pointer`}
                      onClick={() => setOpenItem(openItem === index ? null : index)}
                      aria-expanded={openItem === index}
                      type="button"
                    >
                      <FiChevronRight
                        className={`mt-1 text-[#29516a] flex-shrink-0 w-5 h-5 transform transition-transform duration-300 ${openItem === index ? 'rotate-90' : ''}`}
                      />
                      <span className="italic text-base sm:text-lg md:text-lg lg:text-xl text-[#222] font-semibold leading-snug text-left">
                        {item.title}
                      </span>
                    </button>
                    {item.description && (
                      <div
                        className={`not-italic text-sm sm:text-base text-gray-600 overflow-hidden transition-all duration-700 ease-in-out mt-1 pl-7 ${openItem === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                        style={{ transitionProperty: 'max-height, opacity' }}
                      >
                        {item.description}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
              {/* Call to Action */}
              <motion.div className="mt-8 pt-6 border-t border-gray-100" variants={fadeUp}>
                <button
                  className="flex items-center bg-[#359D9E] hover:bg-[#235c5d] rounded-full px-3 py-2 pr-3 transition-all duration-200 shadow-lg hover:shadow-xl group"
                  style={{minWidth:'210px'}}
                  onClick={handleWhatsAppClick}
                >
                  <span className="text-white text-lg font-normal tracking-wide pl-2 pr-5">Join the Event</span>
                  <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                    <RxArrowTopRight className="text-[22px] text-[#359D9E] group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
  </motion.div>
  )
}
