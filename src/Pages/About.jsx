import { brandStory, personalInfo } from '../Data/content';
import { FiAward, FiBriefcase, FiCalendar, FiMapPin, FiPhone, FiUser } from 'react-icons/fi';
import PageHero from '../Components/PageHero';

const About = () => {
  const details = [
    { icon: FiUser, label: 'Full Name', value: personalInfo.name },
    { icon: FiMapPin, label: 'Address', value: personalInfo.address },
    { icon: FiPhone, label: 'Mobile', value: personalInfo.mobile },
    { icon: FiCalendar, label: 'Birth Date', value: personalInfo.birthDate },
    { icon: FiUser, label: 'Caste', value: personalInfo.caste },
    { icon: FiBriefcase, label: 'Category', value: personalInfo.category },
    { icon: FiBriefcase, label: 'Profession', value: personalInfo.profession },
  ];

  return (
    <div className="section-surface">
      <PageHero
        title="About Mr. Shailesh Kharote"
        subtitle="A trusted business leader and community steward from Akola, Maharashtra."
      />

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <aside className="lg:col-span-1">
              <div className="premium-panel rounded-2xl p-8 sticky top-24">
                <div className="text-center">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 bg-gradient-to-br from-[#0C1722] via-[#1C2833] to-[#C79A43] rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg shadow-[#1C2833]/20">
                    <img
                      src="/logo.png"
                      alt="Logo"
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover bg-white"
                    />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1C2833] mb-2">
                    {personalInfo.name}
                  </h2>
                  <p className="text-[#2E4053] font-medium mb-6">Founder & Business Leader</p>
                </div>

                <div className="space-y-3">
                  {details.map((detail) => (
                    <div
                      key={detail.label}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#FFF7E2] transition-colors"
                    >
                      <detail.icon className="text-[#B8872E] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-[11px] text-[#2E4053]/60 uppercase tracking-wider">
                          {detail.label}
                        </p>
                        <p className="text-[#1C2833] font-medium leading-relaxed">{detail.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            <div className="lg:col-span-2 space-y-8">
              <div className="premium-panel rounded-2xl p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2833] mb-6">
                  Business Leadership
                </h2>
                <div className="space-y-4 text-[#2E4053]/70 leading-relaxed font-light">
                  <p>
                    Mr. Shailesh Sudhakarrao Kharote is a distinguished businessman and community leader
                    from Akola, Maharashtra. As the Founder of S S Kharote Suvarnakar PVT LTD, he has
                    established a trusted name in the jewellery industry, known for uncompromising
                    quality and ethical business practices.
                  </p>
                  <p>
                    With over two decades of experience, Mr. Kharote has built his business on the
                    fundamental principles of purity, trust, and long-term customer relationships. His
                    vision extends beyond commerce to community service and industry leadership.
                  </p>
                  <p>
                    Under his leadership, S S Kharote Suvarnakar has become synonymous with quality
                    jewellery and transparent dealings in the Akola region and beyond.
                  </p>
                </div>
              </div>

              <div className="premium-panel rounded-2xl p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-6">
                  <div>
                    <span className="inline-flex items-center rounded-full border border-[#C79A43]/25 bg-[#C79A43]/10 px-3 py-1 text-xs font-semibold text-[#8A641F]">
                      Since {brandStory.startYear}
                    </span>
                    <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#1C2833]">
                      S S Kharote Suvarnakar Growth Story
                    </h2>
                  </div>
                  <div className="rounded-xl bg-[#0C1722] px-5 py-4 text-white sm:max-w-xs">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#F3D58A]">Slogan</p>
                    <p className="mt-2 font-bold">{brandStory.sloganMr}</p>
                  </div>
                </div>

                <div className="space-y-4 text-[#2E4053]/70 leading-relaxed font-light">
                  <p>{brandStory.summary}</p>
                  <p>
                    The business is built on {brandStory.principles.join(', ')}, with jewellery made
                    through personal craftsmanship and transparent dealings.
                  </p>
                </div>
              </div>

              <div className="premium-panel rounded-2xl p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2833] mb-6">
                  Current Positions
                </h2>
                <div className="space-y-4">
                  {personalInfo.positions.map((position) => (
                    <div
                      key={position}
                      className="flex items-start gap-4 p-4 border-l-4 border-[#C79A43] bg-[#FFF7E2] rounded-r-xl"
                    >
                      <FiAward className="text-[#B8872E] text-2xl flex-shrink-0" />
                      <p className="text-[#1C2833] font-semibold leading-relaxed">{position}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="premium-panel rounded-2xl p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2833] mb-6">
                  Awards & Recognition
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {personalInfo.awards.map((award) => (
                    <div
                      key={award}
                      className="p-5 rounded-xl border border-[#C79A43]/20 bg-gradient-to-br from-white to-[#FFF7E2]"
                    >
                      <div className="text-[#B8872E] text-2xl mb-3">
                        <FiAward />
                      </div>
                      <p className="text-[#1C2833] font-semibold">{award}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
