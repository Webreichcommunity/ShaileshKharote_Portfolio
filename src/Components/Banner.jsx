import { motion } from 'framer-motion';

const Banner = () => {
  const hero = {
    title: 'Mr. Shailesh Kharote',
    subtitle: 'Entrepreneur, Community Leader & Trusted Name in Fine Jewellery',
    description:
      'From karagiri in 1993 to S S Kharote Suvarnakar, a journey built on shuddhata, pardarshakta, and transparent dealings.',
    image:
      'https://res.cloudinary.com/dvfa1ub9w/image/upload/v1780907282/WhatsApp_Image_2026-05-12_at_4.48.01_PM_sfdaqr_e6kmfm.jpg',
  };

  return (
    <section className="relative w-full min-h-[720px] overflow-hidden bg-[#0C1722] pt-28 sm:pt-32 lg:pt-36 pb-20">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(199,154,67,0.22),transparent_34%),linear-gradient(180deg,#0C1722_0%,#152536_58%,#0C1722_100%)]" />
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(90deg,#F3D58A_1px,transparent_1px),linear-gradient(0deg,#F3D58A_1px,transparent_1px)] bg-[size:46px_46px]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0C1722] to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-24 md:h-28 bg-gradient-to-b from-[#0C1722]/80 to-transparent z-10 pointer-events-none" />

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          <div className="relative mx-auto w-full max-w-[390px] sm:max-w-[430px] lg:max-w-[470px]">
            <div className="absolute -inset-5 rounded-[2.2rem] bg-gradient-to-br from-[#C79A43]/35 via-white/[0.04] to-[#D9E5E4]/12 blur-sm" />
            <div className="absolute -inset-3 rounded-[2rem] border border-[#C79A43]/25 bg-white/[0.05] shadow-2xl shadow-black/35" />
            <div className="absolute -right-5 top-10 hidden h-28 w-28 rounded-2xl border border-[#C79A43]/25 bg-[#C79A43]/10 lg:block" />
            <div className="absolute -left-5 bottom-14 hidden h-20 w-20 rounded-2xl border border-white/10 bg-white/[0.06] lg:block" />

            <motion.div
              initial={{ opacity: 0, x: -28, scale: 0.96, rotate: -1.5 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-[1.75rem] border border-[#C79A43]/45 bg-gradient-to-br from-[#FFF7E2] to-white p-3 shadow-2xl shadow-black/40"
            >
              <div className="relative overflow-hidden rounded-[1.2rem] bg-[#0C1722] aspect-[4/5]">
                <picture className="block h-full w-full">
                  <source
                    media="(max-width: 640px)"
                    srcSet={`${hero.image}?w=560&h=700&fit=crop&crop=faces&auto=format&q=92`}
                  />
                  <img
                    src={`${hero.image}?w=720&h=900&fit=crop&crop=faces&auto=format&q=96`}
                    alt={hero.title}
                    className="h-full w-full object-cover object-center image-lift"
                    loading="eager"
                    decoding="async"
                  />
                </picture>
                <div className="" />
               
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 34, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.12 }}
            className="relative text-white text-center lg:text-left"
          >
            <div className="absolute -left-8 top-3 hidden h-32 w-px bg-gradient-to-b from-transparent via-[#C79A43]/70 to-transparent lg:block" />
            <span className="inline-flex text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#F3D58A] bg-white/[0.06] backdrop-blur-md px-4 py-2 rounded-full border border-[#C79A43]/30 shadow-lg">
              Legacy & Leadership
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.96] tracking-tight text-white drop-shadow-2xl">
              {hero.title}
            </h1>

            <p className="mt-5 text-base sm:text-lg md:text-xl lg:text-2xl font-light text-[#FFF7E2] opacity-95 max-w-2xl mx-auto lg:mx-0 leading-relaxed drop-shadow-lg">
              {hero.subtitle}
            </p>

            <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#D9E5E4]/90 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              {hero.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm text-[#D9E5E4]/80">
              <span className="rounded-full border border-[#C79A43]/25 bg-[#C79A43]/10 px-4 py-2">
                Karagiri Since 1993
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2">
                Shuddhata
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2">
                Pardarshakta
              </span>
            </div>

            <div className="mt-9 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0">
              {[
                ['1993', 'Journey'],
                ['2010', 'Showroom'],
                ['30+', 'Trust'],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 backdrop-blur-sm"
                >
                  <p className="text-2xl font-bold text-white">{value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-[#D9E5E4]/65">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
