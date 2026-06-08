import { motion } from 'framer-motion';

const PageHero = ({ title, subtitle }) => {
  return (
    <section className="relative overflow-hidden bg-[#0C1722] pt-28 pb-14 sm:pt-32 sm:pb-16">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(199,154,67,0.2),transparent_36%),linear-gradient(180deg,rgba(12,23,34,0.98),rgba(28,40,51,0.94))]" />
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(90deg,#F3D58A_1px,transparent_1px),linear-gradient(0deg,#F3D58A_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C79A43]/70 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <p className="inline-flex items-center rounded-full border border-[#C79A43]/30 bg-[#C79A43]/12 px-4 py-1 text-[11px] tracking-[0.28em] uppercase text-[#F3D58A] shadow-sm shadow-black/10">
            Professional Portfolio
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-xl">
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

