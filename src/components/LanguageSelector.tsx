"use client";

import { Language } from '@/src/traductions';
import { useLanguage } from '@/src/traductions/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="flex items-center gap-1 bg-white rounded-full p-1 border border-[#22AF52]">
      <button
        onClick={() => handleLanguageChange('es')}
        className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-200 ${
          language === 'es'
            ? 'bg-[#22AF52] text-white'
            : 'text-[#22AF52] hover:bg-[#22AF52]/10'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-200 ${
          language === 'en'
            ? 'bg-[#22AF52] text-white'
            : 'text-[#22AF52] hover:bg-[#22AF52]/10'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSelector;