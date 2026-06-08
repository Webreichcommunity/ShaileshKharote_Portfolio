import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Banner from '../Components/Banner';
import AwardsSlider from '../Components/AwardsSlider';
import { brandStory, personalInfo } from '../Data/content';
import { 
  FiArrowRight, 
  FiAward, 
  FiUsers, 
  FiStar,
  FiShield,
  FiTrendingUp,
  FiHeart,
  FiTarget,
  FiBriefcase,
  FiMapPin
} from 'react-icons/fi';

const Home = () => {
  // Animation variants for reuse
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const stats = [
    { 
      icon: FiStar, 
      value: "30+", 
      label: "Years of Trust",
      description: "Rooted in karagiri since 1993"
    },
    { 
      icon: FiUsers, 
      value: "2", 
      label: "Terms as President",
      description: "Elected unopposed by community"
    },
    { 
      icon: FiAward, 
      value: "2010", 
      label: "Showroom Milestone",
      description: "S S Kharote Suvarnakar showroom opened"
    }
  ];

  const coreValues = [
    {
      icon: FiShield,
      title: "Trust & Integrity",
      description: "Built on unwavering commitment to ethical practices and transparency in every transaction."
    },
    {
      icon: FiTrendingUp,
      title: "Excellence & Quality",
      description: "Handcrafted jewellery shaped by karagiri, workshop discipline, and pure gold quality."
    },
    {
      icon: FiHeart,
      title: "Community First",
      description: "Dedicated to uplifting the community through social initiatives and fair trade practices."
    },
    {
      icon: FiTarget,
      title: "Vision & Legacy",
      description: "Guided by the belief: Pardarshi Vyavhar Hach Amcha Manas."
    }
  ];

  return (
    <main className="section-surface">
      <Banner />

      {/* Stats Section */}
      <StatsSection stats={stats} staggerContainer={staggerContainer} fadeInUp={fadeInUp} />

      {/* About Section */}
      <AboutSection personalInfo={personalInfo} brandStory={brandStory} fadeInUp={fadeInUp} />

      {/* Values Section */}
      <ValuesSection values={coreValues} staggerContainer={staggerContainer} fadeInUp={fadeInUp} />

      {/* Awards Section */}
      <AwardsSection personalInfo={personalInfo} />

      {/* CTA Section */}
      <CTASection />
    </main>
  );
};

// Stats Section Component
const StatsSection = ({ stats, staggerContainer, fadeInUp }) => (
  <section className="relative bg-[#0C1722] py-16">
    <div className="absolute inset-0 opacity-10 bg-dot-pattern" />
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C79A43]/70 to-transparent" />
    <div className="container mx-auto px-6 lg:px-8 relative z-10">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {stats.map((stat, index) => (
          <motion.div 
            key={index} 
            variants={fadeInUp}
            className="text-center p-8 rounded-2xl bg-white/[0.07] backdrop-blur-sm border border-[#C79A43]/18 
                       hover:bg-white/[0.11] transition-all duration-500 hover:-translate-y-1 shadow-xl shadow-black/10"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#C79A43]/25 to-[#F3D58A]/5 
                          flex items-center justify-center">
              <stat.icon className="text-[#F3D58A] w-8 h-8" />
            </div>
            <div className="text-5xl font-bold text-white mb-3">{stat.value}</div>
            <div className="text-lg text-[#FFF7E2] font-medium mb-2">{stat.label}</div>
            <div className="text-sm text-[#D9E5E4]/70 font-light">{stat.description}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

// About Section Component
const AboutSection = ({ personalInfo, brandStory, fadeInUp }) => (
  <section className="py-20 section-surface">
    <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center px-4 py-2 gold-chip rounded-full mb-6">
            <FiBriefcase className="text-[#8A641F] w-4 h-4 mr-2" />
            <span className="text-xs font-medium uppercase tracking-wider">About The Leader</span>
          </span>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-[#13202B] leading-tight mb-6">
            Building <span className="text-[#B8872E]">Trust</span> Through Generations
          </h2>
          
          <div className="space-y-4 text-[#52606D] leading-relaxed">
            <p className="text-lg font-light">
              Since {brandStory.startYear}, the journey has grown from karagiri, a small Jaju Market shop,
              and a hands-on jewellery workshop into the trusted name of S S Kharote Suvarnakar.
            </p>
            <p className="text-lg font-light">
              The foundation remains shuddhata, pardarshakta, handmade quality, and the promise
              "{brandStory.sloganMr}".
            </p>
            <p className="text-lg font-light">
              With over two decades of distinguished presence in the jewellery industry, 
              Mr. Shailesh Kharote has established S S Kharote Suvarnakar PVT LTD as a 
              beacon of purity, craftsmanship, and unwavering trust.
            </p>
            <p className="text-lg font-light">
              His visionary leadership extends far beyond commerce — as a two-term President 
              of the Akola Sarafa Association, elected unopposed, he has championed ethical 
              practices and community welfare across the industry.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <Link 
              to="/about" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#0C1722] to-[#1C2833] text-white 
                       rounded-xl font-medium hover:shadow-xl hover:shadow-[#1C2833]/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Discover More</span>
              <FiArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 border-2 border-[#C79A43]/30 text-[#1C2833] 
                       rounded-xl font-medium hover:border-[#C79A43] hover:bg-[#C79A43]/10 transition-all duration-300"
            >
              <span>Get In Touch</span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative premium-panel rounded-3xl overflow-hidden">
            <div className="bg-gradient-to-br from-[#0C1722] via-[#1C2833] to-[#2E4053] p-8 pb-16">
              <div className="flex justify-center">
                <div className="w-32 h-32 rounded-3xl bg-white/10 backdrop-blur-sm border border-[#C79A43]/30 
                              flex items-center justify-center">
                 <img src="/logo.png" alt="" className='rounded-3xl p-2'/>
                </div>
              </div>
            </div>
            
            <div className="px-8 pb-8 -mt-10">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#C79A43]/10">
                <h3 className="text-2xl font-bold text-[#13202B] text-center mb-1">
                  {personalInfo.name}
                </h3>
                <p className="text-[#52606D] text-center text-sm mb-6">Founder & Business Leader</p>
                
                <div className="space-y-3">
                  {personalInfo.positions.map((position, index) => (
                    <div 
                      key={index}
                      className="flex items-start p-3 rounded-xl hover:bg-[#FFF7E2] transition-colors duration-300"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#C79A43]/10 flex items-center justify-center flex-shrink-0">
                        <FiAward className="text-[#B8872E] w-4 h-4" />
                      </div>
                      <span className="ml-3 text-sm text-[#52606D]">{position}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-[#C79A43]/15">
                  <div className="flex items-center justify-center text-[#52606D]">
                    <FiMapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">Akola, Maharashtra</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// Values Section Component
const ValuesSection = ({ values, staggerContainer, fadeInUp }) => (
  <section className="py-20 bg-[#FFF7E2]/55">
    <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
      <motion.div 
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <span className="inline-flex items-center px-4 py-2 gold-chip rounded-full mb-6">
          <FiTarget className="text-[#8A641F] w-4 h-4 mr-2" />
          <span className="text-xs font-medium uppercase tracking-wider">Our Foundation</span>
        </span>
        <h2 className="text-4xl font-bold text-[#13202B] mb-4">Core Values That Define Us</h2>
        <p className="text-[#52606D] max-w-2xl mx-auto text-lg font-light">
          Principles that have guided two decades of excellence and community leadership
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {values.map((value, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="premium-panel rounded-2xl p-8 
                     hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#C79A43]/12 flex items-center justify-center mb-6">
              <value.icon className="text-[#B8872E] w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-[#13202B] mb-3">{value.title}</h3>
            <p className="text-sm text-[#52606D] leading-relaxed font-light">{value.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

// Awards Section Component
const AwardsSection = ({ personalInfo }) => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="inline-flex items-center px-4 py-2 gold-chip rounded-full mb-6">
          <FiAward className="text-[#8A641F] w-4 h-4 mr-2" />
          <span className="text-xs font-medium uppercase tracking-wider">Recognition</span>
        </span>
        <h2 className="text-4xl font-bold text-[#13202B] mb-4">Awards & Recognition</h2>
        <p className="text-[#52606D] max-w-2xl mx-auto text-lg font-light">
          Honoring outstanding contributions to business excellence and community development
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <AwardsSlider awards={personalInfo.awards} />
      </motion.div>
    </div>
  </section>
);

// CTA Section Component
const CTASection = () => (
  <section className="relative py-20 bg-[#0C1722] overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(199,154,67,0.2),transparent_35%),linear-gradient(180deg,#0C1722,#1C2833)]" />
    <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(90deg,#F3D58A_1px,transparent_1px),linear-gradient(0deg,#F3D58A_1px,transparent_1px)] bg-[size:44px_44px]" />
    
    <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Let's Build Something Meaningful Together
        </h2>
        <p className="text-xl text-[#D9E5E4]/85 mb-10 max-w-2xl mx-auto font-light">
          Whether you're seeking business collaboration, community partnership, 
          or simply wish to connect — I look forward to hearing from you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-gray-900 
                     rounded-xl font-semibold hover:bg-[#FFF7E2] transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>Schedule a Meeting</span>
            <FiArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link 
            to="/about" 
            className="inline-flex items-center justify-center px-10 py-5 bg-white/10 backdrop-blur-sm 
                     border-2 border-[#C79A43]/35 text-white rounded-xl font-semibold 
                     hover:bg-[#C79A43]/15 transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>Learn More</span>
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Home;
