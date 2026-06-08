import { motion } from 'framer-motion';
import { brandStory, journey } from '../Data/content';
import PageHero from '../Components/PageHero';

const Journey = () => {
  return (
    <div className="section-surface">
      <PageHero title="The Journey" subtitle="From vision to excellence — milestones that shaped a legacy." />

      <section className="pt-14 sm:pt-16 lg:pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="premium-panel rounded-2xl p-6 sm:p-8"
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="inline-flex items-center rounded-full border border-[#C79A43]/25 bg-[#C79A43]/10 px-3 py-1 text-xs font-semibold text-[#8A641F]">
                  Since {brandStory.startYear}
                </span>
                <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#1C2833]">
                  From Jaju Market Karagiri to a Trusted Showroom
                </h2>
                <p className="mt-3 text-[#2E4053]/75 leading-relaxed font-light">
                  {brandStory.summary}
                </p>
              </div>

              <div className="rounded-2xl bg-[#0C1722] p-6 text-white border border-[#C79A43]/20 lg:w-72">
                <p className="text-xs uppercase tracking-[0.2em] text-[#F3D58A] mb-3">Slogan</p>
                <p className="text-2xl font-bold leading-snug">{brandStory.sloganMr}</p>
                <p className="mt-3 text-sm text-[#D9E5E4]/75">{brandStory.slogan}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-[#C79A43]/35" />

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
                      className="premium-panel rounded-2xl p-6 sm:p-7 hover:shadow-2xl hover:shadow-[#1C2833]/10 transition-all hover:-translate-y-1"
                    >
                      <span className="inline-flex items-center rounded-full border border-[#C79A43]/25 bg-[#C79A43]/10 px-3 py-1 text-xs font-semibold text-[#8A641F]">
                        {item.year}
                      </span>
                      <h3 className="mt-4 text-lg sm:text-xl font-bold text-[#1C2833]">{item.title}</h3>
                      <p className="mt-2 text-sm sm:text-base text-[#2E4053]/70 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-8 w-3 h-3 rounded-full bg-[#C79A43] ring-4 ring-white shadow" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-[#0C1722]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: brandStory.startYear, label: 'Journey Started' },
              { value: '30+', label: 'Years of Trust' },
              { value: '2010', label: 'Showroom Opened' },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white/[0.07] backdrop-blur-sm border border-[#C79A43]/18 p-8 shadow-xl shadow-black/10"
              >
                <div className="text-4xl font-bold text-white mb-2 tracking-tight">{s.value}</div>
                <p className="text-[#D9E5E4]/80">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journey;
