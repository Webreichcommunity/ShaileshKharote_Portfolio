import { createContext, useState, useContext, useEffect, useMemo } from 'react';

const LanguageContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // en | mr | hi | ta

  const supportedLanguages = useMemo(
    () => [
      { code: 'en', label: 'English' },
      { code: 'mr', label: 'मराठी' },
      { code: 'hi', label: 'हिंदी' },
      { code: 'ta', label: 'தமிழ்' },
    ],
    [],
  );

  const ensureTranslateLoaded = () => {
    if (typeof window === 'undefined') return;
    if (window.google?.translate?.TranslateElement) return;
    if (document.getElementById('google-translate-script')) return;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: supportedLanguages.map((l) => l.code).join(','),
          autoDisplay: false,
        },
        'google_translate_element',
      );
    };

    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
  };

  const setGoogTransCookie = (lang) => {
    const value = `/en/${lang}`;
    const cookie = `googtrans=${value};path=/`;
    document.cookie = cookie;
    // Some browsers require an explicit domain cookie for subdomains.
    if (window.location.hostname) {
      document.cookie = `${cookie};domain=${window.location.hostname}`;
    }
  };

  const applyLanguageToWidget = (lang) => {
    const combo = document.querySelector('.goog-te-combo');
    if (!combo) return false;
    combo.value = lang;
    combo.dispatchEvent(new Event('change'));
    return true;
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('preferredLanguage');
    const initialLang = supportedLanguages.some((l) => l.code === savedLang) ? savedLang : 'en';
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLanguage(initialLang);

    // Load Google Translate early so switching feels instant.
    ensureTranslateLoaded();

    // Apply saved language once the widget is ready.
    if (initialLang !== 'en') {
      setGoogTransCookie(initialLang);
      const tryApply = () => applyLanguageToWidget(initialLang);
      if (!tryApply()) {
        const interval = window.setInterval(() => {
          if (tryApply()) window.clearInterval(interval);
        }, 250);
        window.setTimeout(() => window.clearInterval(interval), 8000);
      }
    } else {
      setGoogTransCookie('en');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeLanguage = (lang) => {
    const nextLang = supportedLanguages.some((l) => l.code === lang) ? lang : 'en';
    setLanguage(nextLang);
    localStorage.setItem('preferredLanguage', nextLang);

    ensureTranslateLoaded();
    setGoogTransCookie(nextLang);

    // If the widget isn't mounted yet, cookie will still take effect once it loads.
    applyLanguageToWidget(nextLang);
  };

  const t = (key) => {
    // Translation is handled by the browser (Google Translate widget), not local dictionaries.
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t, supportedLanguages }}>
      {children}
    </LanguageContext.Provider>
  );
};
