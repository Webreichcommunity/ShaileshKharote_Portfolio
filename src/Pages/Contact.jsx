import { motion } from 'framer-motion';
import { personalInfo } from '../Data/content';
import { FiClock, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import PageHero from '../Components/PageHero';

const Contact = () => {
  const contactPhone = personalInfo.mobile.replace(/\D/g, '');
  const contactPhoneHref = `tel:+${contactPhone}`;

  const contactInfo = [
    { icon: FiPhone, label: 'Phone', value: personalInfo.mobile, href: contactPhoneHref },
    { icon: FiMail, label: 'Email', value: 'sskharotepvtltd@gmail.com', href: 'mailto:sskharotepvtltd@gmail.com' },
    { icon: FiMapPin, label: 'Address', value: personalInfo.address },
    { icon: FiClock, label: 'Business Hours', value: 'Mon–Sat: 10:00 AM – 8:00 PM' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const inquiryMessage = [
      'New inquiry from website:',
      `Name: ${formData.get('name')}`,
      `Email: ${formData.get('email')}`,
      `Subject: ${formData.get('subject')}`,
      `Message: ${formData.get('message')}`,
    ].join('\n');

    window.open(`https://wa.me/${contactPhone}?text=${encodeURIComponent(inquiryMessage)}`, '_blank', 'noopener,noreferrer');
    e.currentTarget.reset();
  };

  return (
    <div className="section-surface">
      <PageHero title="Contact" subtitle="Connect for business, collaboration, or community initiatives." />

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2833] mb-6">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={`${info.label}-${index}`}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: Math.min(index * 0.05, 0.2) }}
                    className="flex items-start gap-4 p-5 premium-panel rounded-2xl"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#C79A43]/10 border border-[#C79A43]/20 flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-[#B8872E]" size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] text-[#2E4053]/60 uppercase tracking-wider">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-[#1C2833] font-semibold hover:text-[#2E4053] transition-colors break-words"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-[#1C2833] font-semibold break-words">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="premium-panel rounded-2xl p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2833] mb-2">Send a Message</h2>
              <p className="text-sm text-[#2E4053]/70 mb-8 font-light">
                Share a brief note and we’ll get back to you as soon as possible.
              </p>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm text-[#2E4053]/80 font-medium mb-2">Full Name</label>
                  <input
                    name="name"
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-[#C79A43]/25 bg-white focus:outline-none focus:ring-2 focus:ring-[#C79A43]/25 focus:border-[#C79A43] transition"
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#2E4053]/80 font-medium mb-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-[#C79A43]/25 bg-white focus:outline-none focus:ring-2 focus:ring-[#C79A43]/25 focus:border-[#C79A43] transition"
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#2E4053]/80 font-medium mb-2">Subject</label>
                  <input
                    name="subject"
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-[#C79A43]/25 bg-white focus:outline-none focus:ring-2 focus:ring-[#C79A43]/25 focus:border-[#C79A43] transition"
                    placeholder="Enter subject"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#2E4053]/80 font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl border border-[#C79A43]/25 bg-white focus:outline-none focus:ring-2 focus:ring-[#C79A43]/25 focus:border-[#C79A43] transition"
                    placeholder="Enter your message"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#0C1722] to-[#1C2833] text-white font-semibold px-6 py-3.5 hover:shadow-xl hover:shadow-[#1C2833]/20 transition-all"
                >
                  <FiSend className="mr-2" size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#0C1722]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl font-bold text-white mb-2">Visit Us in Akola</p>
          <p className="text-[#D5DBDB]/80">Shastri Nagar, Akola, Maharashtra</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
