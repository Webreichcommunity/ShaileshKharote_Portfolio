import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiPhone, FiGlobe, FiChevronDown } from 'react-icons/fi';
import { useLanguage } from '../Context/LanguageContext';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [translateBarHeight, setTranslateBarHeight] = useState(0);
    const location = useLocation();
    const { language, changeLanguage, supportedLanguages } = useLanguage();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Journey', path: '/journey' },
        { name: 'Media', path: '/media' },
        { name: 'Events', path: '/events' },
        { name: 'Contact', path: '/contact' },
    ];

    const activeLanguageLabel =
        supportedLanguages.find((l) => l.code === language)?.label ?? 'English';

    useEffect(() => {
        // Fade in animation on load
        setTimeout(() => setIsVisible(true), 100);

        // Scroll handler for background effect
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Check for Google Translate bar
    useEffect(() => {
        const checkTranslateBar = () => {
            // Check for Google Translate iframe
            const translateFrame = document.querySelector('iframe.goog-te-banner-frame');
            // Check for Google Translate bar
            const translateBar = document.querySelector('.goog-te-banner-frame');
            
            if (translateBar || translateFrame) {
                const height = translateBar ? translateBar.offsetHeight : 40;
                setTranslateBarHeight(height);
            } else {
                setTranslateBarHeight(0);
            }
        };

        // Initial check
        checkTranslateBar();

        // Set up observer for DOM changes
        const observer = new MutationObserver(() => {
            checkTranslateBar();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });

        // Check periodically for the first few seconds
        const interval = setInterval(checkTranslateBar, 500);
        const timeout = setTimeout(() => clearInterval(interval), 5000);

        return () => {
            observer.disconnect();
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [language]);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
        setIsLangOpen(false);
    }, [location]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
                    isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                }`}
                style={{ 
                    marginTop: `${translateBarHeight}px`,
                    transition: 'margin-top 0.3s ease-in-out, transform 0.5s ease-out, opacity 0.5s ease-out'
                }}
            >
                {/* Main navigation */}
                <nav
                    className={`transition-all duration-500 ${
                        isScrolled
                            ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl shadow-black/20'
                            : 'bg-gray-900'
                    } border-b border-gray-700`}
                >
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="flex justify-between items-center h-16 sm:h-20">
                            {/* Logo - Always visible on all screens */}
                            <Link
                                to="/"
                                className="group flex items-center space-x-2 sm:space-x-3"
                            >
                                <div className="relative">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transform group-hover:scale-105 transition-all duration-300 shadow-lg">
                                        <img 
                                            src="/logo.png" 
                                            alt="Mr. Shailesh Kharote" 
                                            className='rounded-full w-full h-full object-cover' 
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F4F6F6] to-[#AAB7B8]">
                                        Mr. Shailesh Kharote
                                    </h1>
                                    <p className="text-[10px] sm:text-xs text-gray-400 tracking-wider uppercase hidden sm:block">
                                        Visionary Leader & Entrepreneur
                                    </p>
                                </div>
                            </Link>

                            {/* Desktop Navigation */}
                            <div className="hidden lg:flex items-center space-x-1">
                                {navItems.map((item) => {
                                    const isActive = location.pathname === item.path;
                                    return (
                                        <Link
                                            key={item.name}
                                            to={item.path}
                                            className={`relative px-5 py-2 text-sm font-medium tracking-wide transition-all duration-300 group ${
                                                isActive
                                                    ? 'text-gray-300'
                                                    : 'text-white/70 hover:text-white'
                                            }`}
                                        >
                                            {item.name}
                                            <span
                                                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] transition-all duration-300 ${
                                                    isActive
                                                        ? 'w-full bg-gray-300'
                                                        : 'w-0 bg-gray-500 group-hover:w-full'
                                                }`}
                                            />
                                        </Link>
                                    );
                                })}

                                {/* Language Switcher */}
                                <div className="relative ml-6 pl-6 border-l border-white/10">
                                    <button
                                        onClick={() => setIsLangOpen(!isLangOpen)}
                                        className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white/70 hover:text-gray-300 transition-all duration-300 rounded-lg hover:bg-white/5"
                                    >
                                        <FiGlobe size={16} />
                                        <span className="tracking-wide">{activeLanguageLabel}</span>
                                        <FiChevronDown
                                            size={14}
                                            className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`}
                                        />
                                    </button>

                                    {/* Language Dropdown */}
                                    {isLangOpen && (
                                        <>
                                            <div
                                                className="fixed inset-0 z-10"
                                                onClick={() => setIsLangOpen(false)}
                                            />
                                            <div className="absolute right-0 mt-2 w-40 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl shadow-black/50 backdrop-blur-xl overflow-hidden z-20 transform origin-top-right transition-all duration-200">
                                                {supportedLanguages.map((option) => (
                                                    <button
                                                        key={option.code}
                                                        onClick={() => {
                                                            changeLanguage(option.code);
                                                            setIsLangOpen(false);
                                                        }}
                                                        className={`w-full text-left px-4 py-3 text-sm transition-all duration-200 hover:bg-white/5 ${
                                                            language === option.code
                                                                ? 'text-gray-300 bg-white/5'
                                                                : 'text-white/70 hover:text-white'
                                                        }`}
                                                    >
                                                        {option.label}
                                                    </button>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="lg:hidden relative w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors duration-300"
                                aria-label="Toggle menu"
                            >
                                <div className="relative w-6 h-6">
                                    <span
                                        className={`absolute block h-[2px] bg-current transform transition-all duration-300 ${
                                            isOpen ? 'rotate-45 translate-y-0 w-6' : '-translate-y-2 w-6'
                                        }`}
                                    />
                                    <span
                                        className={`absolute block h-[2px] bg-current transform transition-all duration-300 ${
                                            isOpen ? 'opacity-0' : 'opacity-100 w-6'
                                        }`}
                                    />
                                    <span
                                        className={`absolute block h-[2px] bg-current transform transition-all duration-300 ${
                                            isOpen ? '-rotate-45 translate-y-0 w-6' : 'translate-y-2 w-4 ml-auto'
                                        }`}
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                >
                    {/* Background Overlay */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                    {/* Slide-in Menu */}
                    <div
                        className="absolute right-0 top-0 h-full w-80 bg-gray-900 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                        style={{ 
                            marginTop: `${translateBarHeight}px`,
                            height: `calc(100% - ${translateBarHeight}px)`
                        }}
                    >
                        <div className="flex flex-col h-full">
                            {/* Mobile Menu Header */}
                            <div className="flex justify-between items-center p-6 border-b border-gray-700">
                                <Link to="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
                                    <div className="w-10 h-10 rounded-full overflow-hidden">
                                        <img src="/logo.png" alt="Mr. Shailesh Kharote" className='w-full h-full object-cover rounded-full' />
                                    </div>
                                    <div>
                                        <h2 className="text-sm font-medium text-white">Mr. Shailesh Kharote</h2>
                                    </div>
                                </Link>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                                >
                                    <FiX size={24} />
                                </button>
                            </div>

                            {/* Mobile Navigation Links */}
                            <div className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
                                {navItems.map((item) => {
                                    const isActive = location.pathname === item.path;
                                    return (
                                        <Link
                                            key={item.name}
                                            to={item.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`block px-4 py-4 rounded-lg transition-all duration-300 text-sm font-medium tracking-wide ${
                                                isActive
                                                    ? 'bg-white/10 text-gray-300'
                                                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                                            }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span>{item.name}</span>
                                                {isActive && (
                                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                                                )}
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>

                            {/* Mobile Language Switcher */}
                            <div className="p-6 border-t border-gray-700">
                                <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Language</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {supportedLanguages.map((option) => (
                                        <button
                                            key={option.code}
                                            onClick={() => {
                                                changeLanguage(option.code);
                                                setIsOpen(false);
                                            }}
                                            className={`px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                                                language === option.code
                                                    ? 'bg-gray-700 text-gray-300 border border-gray-600'
                                                    : 'text-white/60 hover:text-white border border-transparent hover:bg-white/5'
                                            }`}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>

                                {/* Contact Info */}
                                <div className="mt-6 pt-6 border-t border-gray-800">
                                    <div className="flex items-center text-gray-500 text-sm">
                                        <FiPhone className="mr-2 text-gray-400" size={14} />
                                        <span>+91 9422162990</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;