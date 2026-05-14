import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Mr. Shailesh Kharote",
      subtitle: "Two Decades of Visionary Leadership & Trust in Fine Jewellery",
      description: "Founder & CEO, S S Kharote Suvarnakar PVT LTD",
      image: "https://res.cloudinary.com/dvfa1ub9w/image/upload/v1778677767/WhatsApp_Image_2026-05-12_at_4.48.03_PM_zkomrg.jpg",
      accent: "from-[#1C2833]/90 to-[#1C2833]/70"
    },
    {
      title: "Community Stewardship",
      subtitle: "President — Akola Sarafa Association (Two Terms, Elected Unopposed)",
      description: "Uniting and elevating the bullion and jewellery trade community with integrity.",
      image: "https://res.cloudinary.com/dvfa1ub9w/image/upload/v1778677767/WhatsApp_Image_2026-05-12_at_4.48.00_PM_t9otkn.jpg",
      accent: "from-[#2E4053]/90 to-[#2E4053]/70"
    },
    {
      title: "Award-Winning Excellence",
      subtitle: "Recipient of the Prestigious Maharashtra Icon Award",
      description: "Honored by Lokmat & Divya Marathi for outstanding business leadership and social impact.",
      image: "https://res.cloudinary.com/dvfa1ub9w/image/upload/v1778677767/WhatsApp_Image_2026-05-12_at_4.48.04_PM_alw55f.jpg",
      accent: "from-[#1C2833]/90 to-[#2E4053]/80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  const paginate = (newDirection) => {
    if (newDirection === 1) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden bg-[#1C2833]">
      {/* Slide Background Images */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <picture className="w-full h-full">
            {/* Mobile optimized */}
            <source
              media="(max-width: 640px)"
              srcSet={`${slides[currentSlide].image}?w=640&h=800&fit=crop&crop=center&auto=format&q=85`}
            />
            {/* Tablet optimized */}
            <source
              media="(max-width: 1024px)"
              srcSet={`${slides[currentSlide].image}?w=1024&h=768&fit=crop&crop=center&auto=format&q=90`}
            />
            {/* Desktop optimized */}
            <img
              src={`${slides[currentSlide].image}?w=1920&h=900&fit=crop&crop=center&auto=format&q=95`}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
              loading={currentSlide === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </picture>
          
          {/* Multi-layer gradient overlay for better text readability */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-[#1C2833]/95 via-[#1C2833]/40 to-[#1C2833]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C2833]/30 via-transparent to-[#1C2833]/30" /> */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#0F1A24] to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay - Positioned at Bottom Center */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pb-12 md:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="space-y-3 md:space-y-5"
            >
              {/* Subtle Label */}
              <motion.span 
                className="inline-block text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-[#D5DBDB] bg-[#1C2833]/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 shadow-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Legacy & Leadership
              </motion.span>
              
              {/* Main Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white drop-shadow-2xl">
                {slides[currentSlide].title}
              </h1>
              
              {/* Subtitle */}
              <p className="text-base sm:text-md md:text-xl lg:text-xl xl:text-xl font-light text-[#F4F6F6] opacity-95 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                {slides[currentSlide].subtitle}
              </p>
              
              {/* Description */}
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#D5DBDB] opacity-85 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
                {slides[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Professional Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 z-30 flex items-center pl-3 md:pl-6 lg:pl-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => paginate(-1)}
          className="group p-2.5 md:p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/25 transition-all duration-300 shadow-lg"
          aria-label="Previous slide"
        >
          <FiChevronLeft className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-300" />
        </motion.button>
      </div>
      <div className="absolute inset-y-0 right-0 z-30 flex items-center pr-3 md:pr-6 lg:pr-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => paginate(1)}
          className="group p-2.5 md:p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/25 transition-all duration-300 shadow-lg"
          aria-label="Next slide"
        >
          <FiChevronRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-300" />
        </motion.button>
      </div>

      {/* Navigation Dots - Premium Style */}
      <div className="absolute bottom-6 md:bottom-10 lg:bottom-12 left-1/2 transform -translate-x-1/2 z-30 flex items-center space-x-2.5 md:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-500 rounded-full ${
              currentSlide === index 
                ? 'w-8 md:w-10 h-2 md:h-2.5 bg-[#F4F6F6] shadow-lg' 
                : 'w-2 md:w-2.5 h-2 md:h-2.5 bg-white/40 hover:bg-white/70 backdrop-blur-sm'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Subtle top fade for header integration */}
      <div className="absolute top-0 left-0 right-0 h-20 md:h-24 bg-gradient-to-b from-[#1C2833]/70 to-transparent z-10 pointer-events-none" />
      
      {/* Optional: Slide counter */}
      <div className="absolute top-6 right-6 z-20 hidden md:block">
        <span className="text-white/60 text-sm font-light tracking-wider">
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
      </div>
    </section>
  );
};

export default Banner;
