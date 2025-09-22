"use client"

// import { HiLocationMarker, HiCalendar  } from "react-icons/hi"
import { FaGlobe } from "react-icons/fa"
import { BsWhatsapp } from "react-icons/bs"
import Image from "next/image"
import { useState, useEffect } from "react"
import { RxArrowTopRight } from "react-icons/rx";


export default function HomeBanner() {
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  // Calculate initial countdown from now (Sept 20, 12:12PM) to Sept 30, 11:59PM
  function getInitialCountdown() {
    const now = new Date(2025, 8, 20, 12, 12, 0); // September is month 8 (0-indexed)
    const end = new Date(2025, 8, 30, 23, 59, 59);
    const diff = end.getTime() - now.getTime();
    let totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    totalSeconds -= days * 3600 * 24;
    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds -= hours * 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds - minutes * 60;
    return { days, hours, minutes, seconds };
  }

  const [timeLeft, setTimeLeft] = useState(getInitialCountdown());

   const handleWhatsAppClick = () => {
    const phone = '919207078555'; // WhatsApp number (without + and spaces)
    const message = encodeURIComponent('Hello, I am interested in your services.');
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank');
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // Custom sequence: 0-1-2-1-0-1-2-1-0...
  const slideSequence = [0, 1, 2, 1];
  const [sequenceIndex, setSequenceIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSequenceIndex((prev) => (prev + 1) % slideSequence.length);
      setActiveSlide(slideSequence[(sequenceIndex + 1) % slideSequence.length]);
    }, 2000);
    return () => clearInterval(interval);
  }, [sequenceIndex]);

  

  return (
    <div className="min-h-screen h-screen relative overflow-hidden flex items-center justify-start py-0">
      {/* Initial Loading Overlay Animation */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a2a38] bg-opacity-90 transition-opacity duration-700 animate-fade-in">
          <div className="flex flex-col items-center gap-4">
            <img src="/white-icon.png" alt="Takeoff Logo" className="w-20   mb-2 animate-fade-in-up" />
            <span className="text-[#C09755] text-lg md:text-2xl font-bold tracking-widest animate-fade-in-up">Takeoff Business Conclave</span>
            <span className="text-white text-2xl md:text-5xl font-serif italic font-semibold animate-fade-in-up" style={{fontFamily: 'var(--font-dm-serif-display), serif'}}>
              &amp;  
            </span>
             <span className="text-white text-2xl md:text-5xl font-serif italic font-semibold animate-fade-in-up" style={{fontFamily: 'var(--font-dm-serif-display), serif'}}>
              Expedition to Explore Dubai
            </span>
            <span className="mt-4 animate-fade-in-up">
              <span className="inline-block w-8 h-8 border-4 border-white border-t-[#C09755] rounded-full animate-spin"></span>
            </span>
          </div>
        </div>
      )}
      {/* Animated Sliding Banner Images */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full flex transition-transform duration-700"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          <div className="w-full h-full relative shrink-0">
            <Image
              src="/1.jpg"
              alt="Dubai cityscape"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="w-full h-full relative shrink-0">
            <Image
              src="/2.jpg"
              alt="Business professionals"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="w-full h-full relative shrink-0">
            <Image
              src="/3.jpg"
              alt="Event audience"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        {/* Black shade overlay */}
        <div className="absolute inset-0 bg-black/80 bg-opacity-60 pointer-events-none" />
      </div>

  {/* Main Content */}
  <div className={`relative z-10 w-full flex flex-col justify-center min-h-screen px-4 md:px-8 lg:px-24 pt-8 sm:pt-0 transition-opacity duration-700 ${isVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}>
  <div className="w-full max-w-[915px] flex flex-col items-start justify-center text-left" style={{   marginTop: '6vh' }}>
          <p className="text-[#C09755] text-lg font-semibold md:text-xl   mb-2 tracking-widest   animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Where Founders Grow Together
          </p>
          <h1 className="text-white text-[24px] md:text-5xl lg:text-6xl  font-medium  font-serif italicleading-snug mb-6 sm:mb-12 animate-fade-in-up" style={{fontFamily: 'var(--font-dm-serif-display), serif', lineHeight: 1.3, animationDelay: '0.4s'}}>
            Takeoff Business Conclave &<br />Expedition to Explore Dubai
          </h1>
          <div className="flex flex-col items-start gap-3 mb-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center gap-2 text-white/90">
              <Image src="/calander.png" alt="Calendar" width={50} height={50} className="h-8 w-8 object-contain mr-3" />
              <span className="font-semibold text-base">NOV 06–09, 2025</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Image src="/location.png" alt="Location" width={50} height={50} className="h-8 w-8 object-contain mr-3" />
              <span className="text-base">Dubai </span>
            </div>
          </div>
         <div className="flex items-center gap-2 justify-start animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <button
                  className="flex items-center bg-[#C09755] hover:bg-[#865f21] rounded-full px-3 py-2 pr-1 transition-all duration-200 shadow-lg hover:shadow-xl group"
                  style={{minWidth:'210px'}}
                  onClick={handleWhatsAppClick}
                >
                  <span className="text-white text-lg font-normal tracking-wide pl-2 pr-6">Register Now</span>
                  <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                    <RxArrowTopRight className="text-[22px] text-[#C09755] group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </button>
         </div>
        </div>

  {/* Bottom Row: Dots (left) and Countdown (right) for desktop, fixed countdown for mobile */}
        {/* Desktop View */}
  <div className="hidden md:flex w-full flex-row items-end justify-between absolute left-0 right-0 bottom-0 z-30 px-2 animate-fade-in-up" style={{animationDelay: '1s'}}>
          {/* Dots for slider (optional) */}
          <div className="flex gap-6 mb-8 md:mb-10 lg:mb-12 ml-24">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSlide === i ? 'bg-white/80 scale-110' : 'bg-white/40 scale-100'}`}
              />
            ))}
          </div>
          {/* Countdown Section */}
          <div className="bg-[#215273] rounded-t-2xl shadow-2xl px-8 py-6 md:py-12 flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-0 md:w-[700px] lg:w-[900px] mr-0 ml-auto">
            <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-white text-lg md:text-[24px] font-semibold mb-1 italic">Early Bird Closing In</h3>
              <p className="text-white/80 text-xs md:text-sm">(Until Sept 30)</p>
            </div>
            <div className="flex flex-row items-stretch w-full max-w-xl">
              <div className="flex-1 text-center flex flex-col justify-center">
                <div className="text-3xl md:text-4xl font-bold text-white">{timeLeft.days.toString().padStart(2, "0")}</div>
                <div className="text-xs md:text-sm text-white/80 mt-1">days</div>
              </div>
              <div className="hidden md:flex h-12 self-center mx-4 border-r border-white/40" />
              <div className="flex-1 text-center flex flex-col justify-center">
                <div className="text-3xl md:text-4xl font-bold text-white">{timeLeft.hours.toString().padStart(2, "0")}</div>
                <div className="text-xs md:text-sm text-white/80 mt-1">hours</div>
              </div>
              <div className="hidden md:flex h-12 self-center mx-4 border-r border-white/40" />
              <div className="flex-1 text-center flex flex-col justify-center">
                <div className="text-3xl md:text-4xl font-bold text-white">{timeLeft.minutes.toString().padStart(2, "0")}</div>
                <div className="text-xs md:text-sm text-white/80 mt-1">minutes</div>
              </div>
              <div className="hidden md:flex h-12 self-center mx-4 border-r border-white/40" />
              <div className="flex-1 text-center flex flex-col justify-center">
                <div className="text-3xl md:text-4xl font-bold text-white">{timeLeft.seconds.toString().padStart(2, "0")}</div>
                <div className="text-xs md:text-sm text-white/80 mt-1">seconds</div>
              </div>
            </div>
          </div>
        </div>

       
        {/* Mobile View: Countdown Section (bottom of main content, full width, animated text) */}
  <div className="md:hidden w-full px-0 flex justify-center animate-fade-in-up absolute left-0 right-0 bottom-0 z-20" style={{animationDelay: '1.2s'}}>
    <div className="bg-[#215273] rounded-t-md shadow-2xl px-0 py-3 flex flex-col items-center gap-1 w-full animate-fade-in" style={{boxShadow: '0 4px 24px 0 rgba(33,82,115,0.15)'}}>
            <div className="w-full flex flex-row items-center justify-between mb-1 px-4">
              <h3 className="text-white text-sm font-semibold italic animate-text-in">Early Bird Closing In</h3>
              <span className="text-white/80 text-xs animate-text-in" style={{animationDelay: '0.2s'}}> (Until Sept 30)</span>
            </div>
            <div className="flex flex-row justify-center items-center w-full gap-1 px-4">
              <div className="flex flex-col items-center flex-1 animate-text-in" style={{animationDelay: '0.3s'}}>
                <div className="text-xl font-bold text-white drop-shadow-sm">{timeLeft.days.toString().padStart(2, "0")}</div>
                <div className="text-[10px] text-white/80 mt-0.5">days</div>
              </div>
              <div className="w-px h-5 bg-white/30 mx-0.5" />
              <div className="flex flex-col items-center flex-1 animate-text-in" style={{animationDelay: '0.4s'}}>
                <div className="text-xl font-bold text-white drop-shadow-sm">{timeLeft.hours.toString().padStart(2, "0")}</div>
                <div className="text-[10px] text-white/80 mt-0.5">hours</div>
              </div>
              <div className="w-px h-5 bg-white/30 mx-0.5" />
              <div className="flex flex-col items-center flex-1 animate-text-in" style={{animationDelay: '0.5s'}}>
                <div className="text-xl font-bold text-white drop-shadow-sm">{timeLeft.minutes.toString().padStart(2, "0")}</div>
                <div className="text-[10px] text-white/80 mt-0.5">minutes</div>
              </div>
              <div className="w-px h-5 bg-white/30 mx-0.5" />
              <div className="flex flex-col items-center flex-1 animate-text-in" style={{animationDelay: '0.6s'}}>
                <div className="text-xl font-bold text-white drop-shadow-sm">{timeLeft.seconds.toString().padStart(2, "0")}</div>
                <div className="text-[10px] text-white/80 mt-0.5">seconds</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  </div>
  )
}
