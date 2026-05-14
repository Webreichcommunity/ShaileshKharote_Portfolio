import React from 'react';
import { personalInfo } from '../Data/content';
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
    <div className="bg-[#F4F6F6]">
      <PageHero
        title="About Mr. Shailesh Kharote"
        subtitle="A trusted business leader and community steward from Akola, Maharashtra."
      />

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl shadow-[#1C2833]/5 border border-[#AAB7B8]/10 p-8 sticky top-24">
                <div className="text-center">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 bg-gradient-to-br from-[#1C2833] to-[#2E4053] rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg shadow-[#1C2833]/20">
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
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#F4F6F6] transition-colors"
                    >
                      <detail.icon className="text-[#2E4053] mt-1 flex-shrink-0" />
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
              <div className="bg-white rounded-2xl shadow-xl shadow-[#1C2833]/5 border border-[#AAB7B8]/10 p-8">
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

              <div className="bg-white rounded-2xl shadow-xl shadow-[#1C2833]/5 border border-[#AAB7B8]/10 p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2833] mb-6">
                  Current Positions
                </h2>
                <div className="space-y-4">
                  {personalInfo.positions.map((position) => (
                    <div
                      key={position}
                      className="flex items-start gap-4 p-4 border-l-4 border-[#2E4053] bg-[#F4F6F6] rounded-r-xl"
                    >
                      <FiAward className="text-[#2E4053] text-2xl flex-shrink-0" />
                      <p className="text-[#1C2833] font-semibold leading-relaxed">{position}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl shadow-[#1C2833]/5 border border-[#AAB7B8]/10 p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2833] mb-6">
                  Awards & Recognition
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {personalInfo.awards.map((award) => (
                    <div
                      key={award}
                      className="p-5 rounded-xl border border-[#AAB7B8]/20 bg-gradient-to-br from-white to-[#F4F6F6]"
                    >
                      <div className="text-[#2E4053] text-2xl mb-3">
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
