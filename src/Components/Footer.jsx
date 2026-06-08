import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiLinkedin,
    FiTwitter,
    FiFacebook,
    FiExternalLink,
} from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerSections = {
        about: {
            title: "Shailesh Kharote",
            subtitle: "Visionary Leader & Entrepreneur",
            description: "Rooted in karagiri since 1993, building enduring trust through handcrafted jewellery, shuddhata, pardarshakta, and community leadership.",
            social: [
                { icon: FiLinkedin, href: "#", label: "LinkedIn" },
                { icon: FiTwitter, href: "#", label: "Twitter" },
                { icon: FiFacebook, href: "#", label: "Facebook" },
            ]
        },
        quickLinks: [
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Journey", path: "/journey" },
            { name: "Media", path: "/media" },
            { name: "Events", path: "/events" },
            { name: "Contact", path: "/contact" },
        ],
        positions: [
            "President - Akola Sarafa Association",
            "President - Ahir Suvarnakar Samaj",
            "Member - Maharashtra Vigilance Committee",
        ],
        contact: [
            { icon: FiMapPin, text: "\"Raj Rajeshwar Krupa\", Shastri Nagar, Akola", href: null },
            { icon: FiPhone, text: "+91 7242423726", href: "tel:+917242423726" },
            { icon: FiMail, text: "sskharotepvtltd@gmail.com", href: "mailto:sskharotepvtltd@gmail.com" },
        ]
    };

    return (
        <footer className="relative bg-[#0C1722]">
            {/* Top Gradient Border */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#C79A43]/55 to-transparent"></div>

            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(90deg,#F3D58A_1px,transparent_1px),linear-gradient(0deg,#F3D58A_1px,transparent_1px)] bg-[size:34px_34px]"></div>

            {/* Main Footer Content */}
            <div className="relative container mx-auto px-6 lg:px-10 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* About Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center border border-[#C79A43]/35 bg-white/5 overflow-hidden">
                                    <img src="/logo.png" alt="Logo" className="w-full h-full object-cover rounded-full" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFF7E2] via-[#F3D58A] to-[#D9E5E4]">
                                        {footerSections.about.title}
                                    </h3>
                                    <p className="text-xs text-[#D9E5E4]/70 font-medium tracking-wider uppercase">
                                        {footerSections.about.subtitle}
                                    </p>
                                </div>
                            </div>

                            <p className="text-[#D9E5E4]/70 leading-relaxed text-sm">
                                {footerSections.about.description}
                            </p>

                            {/* Social Links */}
                            <div className="flex items-center space-x-1 pt-2">
                                {footerSections.about.social.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        aria-label={social.label}
                                        whileHover={{ scale: 1.15 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-10 h-10 bg-white/5 border border-[#C79A43]/20 rounded-xl flex items-center justify-center hover:bg-[#C79A43]/10 hover:border-[#C79A43]/45 transition-all duration-300 group"
                                    >
                                        <social.icon className="text-[#F3D58A] group-hover:text-[#FFF7E2] transition-colors duration-300 text-lg" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-[#F4F6F6] font-semibold mb-6 flex items-center space-x-2">
                            <span className="w-8 h-px bg-gradient-to-r from-[#C79A43]/70 to-transparent"></span>
                            <span className="text-sm tracking-wider uppercase">Navigation</span>
                        </h4>
                        <ul className="space-y-3">
                            {footerSections.quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="group flex items-center text-[#D9E5E4]/60 hover:text-[#F3D58A] transition-all duration-300 text-sm"
                                    >
                                        <span className="w-0 group-hover:w-2 h-px bg-[#C79A43] transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                                            {link.name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Positions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-[#F4F6F6] font-semibold mb-6 flex items-center space-x-2">
                            <span className="w-8 h-px bg-gradient-to-r from-[#C79A43]/70 to-transparent"></span>
                            <span className="text-sm tracking-wider uppercase">Leadership Roles</span>
                        </h4>
                        <ul className="space-y-3">
                            {footerSections.positions.map((position, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start space-x-3 group"
                                >
                                    <div className="w-1.5 h-1.5 bg-[#C79A43]/50 rounded-full mt-2 flex-shrink-0 group-hover:bg-[#F3D58A] transition-colors duration-300"></div>
                                    <span className="text-[#D9E5E4]/60 text-sm leading-relaxed group-hover:text-[#D9E5E4]/85 transition-colors duration-300">
                                        {position}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-[#F4F6F6] font-semibold mb-6 flex items-center space-x-2">
                            <span className="w-8 h-px bg-gradient-to-r from-[#C79A43]/70 to-transparent"></span>
                            <span className="text-sm tracking-wider uppercase">Get in Touch</span>
                        </h4>
                        <ul className="space-y-5">
                            {footerSections.contact.map((item, index) => (
                                <li key={index}>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            className="group flex items-start space-x-3 text-[#D9E5E4]/60 hover:text-[#F3D58A] transition-all duration-300 text-sm"
                                        >
                                            <div className="w-8 h-8 bg-white/5 border border-[#C79A43]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#C79A43]/10 group-hover:border-[#C79A43]/40 transition-all duration-300">
                                                <item.icon className="text-[#F3D58A] group-hover:text-[#FFF7E2] transition-colors duration-300 text-sm" />
                                            </div>
                                            <span className="pt-1 leading-relaxed">{item.text}</span>
                                        </a>
                                    ) : (
                                        <div className="flex items-start space-x-3 text-[#D9E5E4]/60 text-sm group">
                                            <div className="w-8 h-8 bg-white/5 border border-[#C79A43]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <item.icon className="text-[#F3D58A] text-sm" />
                                            </div>
                                            <span className="pt-1 leading-relaxed">{item.text}</span>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative">
                <div className="h-px bg-gradient-to-r from-transparent via-[#C79A43]/30 to-transparent"></div>

                <div className="container mx-auto px-6 lg:px-10 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-[#D9E5E4]/40 text-xs tracking-wider"
                        >
                            © {currentYear} Shailesh Kharote. All rights reserved.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-2 text-[#D9E5E4]/40 text-xs tracking-wider"
                        >
                            <span>Designed & Developed by</span>
                            <a
                                href="https://webreich.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center space-x-1.5 text-[#F3D58A]/70 hover:text-[#F3D58A] transition-all duration-300 font-medium"
                            >
                                <span className="text-[#F3D58A] italic">WebReich</span>
                                <FiExternalLink className="text-[10px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
