import { motion } from 'framer-motion';
import { events } from '../Data/content';
import { FiImage } from 'react-icons/fi';
import PageHero from '../Components/PageHero';

const Events = () => {
  return (
    <div className="section-surface">
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
                className="premium-panel rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[#1C2833]/10 transition-all hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  {event.image ? (
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-48 w-full object-cover image-lift"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-[#FFF7E2] to-[#D9E5E4] flex items-center justify-center">
                      <FiImage className="text-[#2E4053]/50" size={44} />
                    </div>
                  )}
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
