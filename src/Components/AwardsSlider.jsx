import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiAward, FiCalendar } from 'react-icons/fi';

const AwardsSlider = ({ awards = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [direction, setDirection] = useState(0);
  
  const itemsPerPage = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  };

  const getItemsPerPage = useCallback(() => {
    if (windowWidth < 640) return itemsPerPage.mobile;
    if (windowWidth < 1024) return itemsPerPage.tablet;
    return itemsPerPage.desktop;
  }, [windowWidth]);

  const currentItemsPerPage = getItemsPerPage();
  const totalSlides = Math.ceil(awards.length / currentItemsPerPage);
  const currentSlideNumber = Math.floor(currentIndex / currentItemsPerPage) + 1;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navigate = (direction) => {
    setDirection(direction);
    
    setCurrentIndex((prev) => {
      if (direction === 1) {
        return prev + currentItemsPerPage >= awards.length ? 0 : prev + 1;
      }
      return prev === 0 ? awards.length - currentItemsPerPage : prev - 1;
    });
  };

  const goToSlide = (slideIndex) => {
    setDirection(slideIndex > currentSlideNumber - 1 ? 1 : -1);
    setCurrentIndex(slideIndex * currentItemsPerPage);
  };

  const getVisibleAwards = () => {
    const visibleItems = [];
    for (let i = 0; i < currentItemsPerPage; i++) {
      visibleItems.push(awards[(currentIndex + i) % awards.length]);
    }
    return visibleItems;
  };

  if (awards.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No awards to display
      </div>
    );
  }

  const visibleAwards = getVisibleAwards();

  const slideVariants = {
    enter: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
    }),
    center: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      }
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -100 : 100,
      transition: {
        duration: 0.3,
      }
    }),
  };

  // Sample images array - replace with your actual images
  const awardImages = [
    'https://res.cloudinary.com/dvfa1ub9w/image/upload/v1778677767/WhatsApp_Image_2026-05-12_at_4.48.03_PM_zkomrg.jpg',
    'https://res.cloudinary.com/dvfa1ub9w/image/upload/v1778677767/WhatsApp_Image_2026-05-12_at_4.48.00_PM_t9otkn.jpg',
    'https://res.cloudinary.com/dvfa1ub9w/image/upload/v1778677767/WhatsApp_Image_2026-05-12_at_4.48.04_PM_alw55f.jpg',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1608501078713-8e445a709b39?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=400&h=300&fit=crop',
  ];

  return (
    <div className="relative py-8">
      {/* Navigation Buttons */}
      {awards.length > currentItemsPerPage && (
        <>
          <NavButton 
            direction="left" 
            onClick={() => navigate(-1)} 
          />
          <NavButton 
            direction="right" 
            onClick={() => navigate(1)} 
          />
        </>
      )}

      {/* Awards Grid */}
      <div className="flex justify-center px-14">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className={`grid gap-6 w-full ${
              currentItemsPerPage === 1 ? 'grid-cols-1' :
              currentItemsPerPage === 2 ? 'grid-cols-1 md:grid-cols-2' :
              'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {visibleAwards.map((award, index) => (
              <AwardCard 
                key={`${currentIndex}-${index}`} 
                award={award}
                image={awardImages[(currentIndex + index) % awardImages.length]}
                index={index} 
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Dots */}
      {totalSlides > 1 && (
        <div className="flex justify-center items-center space-x-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                Math.floor(currentIndex / currentItemsPerPage) === index
                  ? 'w-8 h-2.5 bg-gray-800'
                  : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Navigation Button Component
const NavButton = ({ direction, onClick }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className={`absolute top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-xl p-3 
               hover:shadow-xl border border-gray-200 transition-all duration-300
               ${direction === 'left' ? 'left-0' : 'right-0'}`}
    aria-label={`${direction === 'left' ? 'Previous' : 'Next'} awards`}
  >
    {direction === 'left' ? (
      <FiChevronLeft className="w-5 h-5 text-gray-700" />
    ) : (
      <FiChevronRight className="w-5 h-5 text-gray-700" />
    )}
  </motion.button>
);

// Award Card Component
const AwardCard = ({ award, image, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="h-full"
  >
    <div className="h-full bg-white rounded-2xl border border-gray-200 shadow-lg 
                   hover:shadow-xl transition-all duration-300 overflow-hidden">
      
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={award}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/400x300?text=Award';
          }}
        />
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center px-2.5 py-1 bg-white/90 backdrop-blur-sm 
                         rounded-lg text-xs font-medium text-gray-700">
            <FiAward className="w-3.5 h-3.5 mr-1" />
            Award
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <FiCalendar className="w-4 h-4 mr-1.5" />
          <span>2024</span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
          {award}
        </h3>
        
        <p className="text-sm text-gray-600 leading-relaxed">
          Recognizing outstanding contribution to business excellence and community leadership.
        </p>
      </div>
    </div>
  </motion.div>
);

export default AwardsSlider;