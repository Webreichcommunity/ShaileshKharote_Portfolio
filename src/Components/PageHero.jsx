import React from 'react';
import { motion } from 'framer-motion';

const PageHero = ({ title, subtitle }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1C2833] to-[#2E4053] pt-28 pb-14 sm:pt-32 sm:pb-16">
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#AAB7B8_1px,transparent_1px)] bg-[size:22px_22px]" />
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#AAB7B8]/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#AAB7B8]/15 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-[0.25em] uppercase text-[#D5DBDB]">
            Timeless Professional
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-4 text-base sm:text-lg text-[#D5DBDB]/90 font-light leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;

