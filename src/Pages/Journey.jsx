import React from 'react';
import { motion } from 'framer-motion';
import { journey } from '../Data/content';
import PageHero from '../Components/PageHero';

const Journey = () => {
  return (
    <div className="bg-[#F4F6F6]">
      <PageHero title="The Journey" subtitle="From vision to excellence — milestones that shaped a legacy." />

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-[#AAB7B8]/40" />

            <div className="space-y-8 sm:space-y-12">
              {journey.map((item, index) => (
                <div
                  key={`${item.year}-${item.title}`}
                  className={`relative flex items-start gap-6 sm:gap-10 ${
                    index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  <div className="hidden sm:block sm:w-1/2" />

                  <div className="relative z-10 w-full sm:w-1/2">
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      className="bg-white rounded-2xl shadow-xl shadow-[#1C2833]/5 border border-[#AAB7B8]/10 p-6 sm:p-7 hover:shadow-2xl hover:shadow-[#1C2833]/10 transition-shadow"
                    >
                      <span className="inline-flex items-center rounded-full border border-[#AAB7B8]/20 bg-[#F4F6F6] px-3 py-1 text-xs font-semibold text-[#2E4053]">
                        {item.year}
                      </span>
                      <h3 className="mt-4 text-lg sm:text-xl font-bold text-[#1C2833]">{item.title}</h3>
                      <p className="mt-2 text-sm sm:text-base text-[#2E4053]/70 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-8 w-2.5 h-2.5 rounded-full bg-[#2E4053] ring-4 ring-white shadow" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-gradient-to-br from-[#1C2833] to-[#2E4053]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: '2000', label: 'Year Founded' },
              { value: '20+', label: 'Years of Service' },
              { value: '5000+', label: 'Happy Families' },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8"
              >
                <div className="text-4xl font-bold text-white mb-2 tracking-tight">{s.value}</div>
                <p className="text-[#D5DBDB]/80">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journey;
