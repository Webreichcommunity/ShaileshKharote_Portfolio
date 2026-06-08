import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiAward } from 'react-icons/fi';

const itemsPerPage = {
  mobile: 1,
  tablet: 2,
  desktop: 3
};

const AwardsSlider = ({ awards = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [direction, setDirection] = useState(0);

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
    const visibleCount = Math.min(currentItemsPerPage, awards.length);
    for (let i = 0; i < visibleCount; i++) {
      const award = awards[currentIndex + i];
      if (award) visibleItems.push(award);
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
                  ? 'w-8 h-2.5 bg-[#C79A43]'
                  : 'w-2.5 h-2.5 bg-[#C79A43]/25 hover:bg-[#C79A43]/45'
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
               hover:shadow-xl border border-[#C79A43]/20 transition-all duration-300
               ${direction === 'left' ? 'left-0' : 'right-0'}`}
    aria-label={`${direction === 'left' ? 'Previous' : 'Next'} awards`}
  >
    {direction === 'left' ? (
      <FiChevronLeft className="w-5 h-5 text-[#1C2833]" />
    ) : (
      <FiChevronRight className="w-5 h-5 text-[#1C2833]" />
    )}
  </motion.button>
);

// Award Card Component
const AwardCard = ({ award, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="h-full"
  >
    <div className="h-full premium-panel rounded-2xl hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="p-7">
        <div className="w-14 h-14 rounded-2xl bg-[#C79A43]/12 border border-[#C79A43]/20 flex items-center justify-center mb-6">
          <FiAward className="w-7 h-7 text-[#B8872E]" />
        </div>

        <h3 className="text-lg font-semibold text-[#13202B] mb-2 leading-snug">
          {award}
        </h3>
        
        <p className="text-sm text-[#52606D] leading-relaxed">
          Recognizing outstanding contribution to business excellence and community leadership.
        </p>
      </div>
    </div>
  </motion.div>
);

export default AwardsSlider;
