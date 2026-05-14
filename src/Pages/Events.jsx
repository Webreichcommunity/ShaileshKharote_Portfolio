import React from 'react';
import { motion } from 'framer-motion';
import { events } from '../Data/content';
import { FiCalendar, FiImage } from 'react-icons/fi';
import PageHero from '../Components/PageHero';

const Events = () => {
  return (
    <div className="bg-[#F4F6F6]">
      <PageHero
        title="Events & Awards"
        subtitle="Key moments of achievement, recognition, and community engagement."
      />

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, idx) => (
              <motion.article
                key={event.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: Math.min(idx * 0.06, 0.24) }}
                className="bg-white rounded-2xl shadow-xl shadow-[#1C2833]/5 border border-[#AAB7B8]/10 overflow-hidden hover:shadow-2xl hover:shadow-[#1C2833]/10 transition-shadow"
              >
                <div className="relative overflow-hidden">
                  {event.image ? (
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-48 w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
                      <FiImage className="text-[#2E4053]/50" size={44} />
                    </div>
                  )}

                  <div className="absolute top-4 right-4 bg-[#1C2833]/90 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 backdrop-blur-sm border border-white/10">
                    <FiCalendar /> {event.date}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1C2833] mb-2">{event.title}</h3>
                  <p className="text-sm text-[#2E4053]/70 leading-relaxed font-light">{event.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
