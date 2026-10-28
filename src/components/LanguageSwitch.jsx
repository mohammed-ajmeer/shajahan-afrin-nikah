import React from 'react';

export default function LanguageSwitch({ currentLang, setLang }) {
  return (
    <div
      className="fixed top-4 right-4 z-[80] flex items-center gap-1 rounded-full p-1 backdrop-blur-md transition-all duration-500"
      style={{
        background: 'rgba(251, 248, 241, 0.75)',
        border: '1px solid rgba(126, 139, 94, 0.35)',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
      }}
      role="group"
      aria-label="Language switcher"
    >
      <button
        type="button"
        aria-pressed={currentLang === 'en'}
        onClick={() => setLang('en')}
        className={`rounded-full px-2.5 py-1 font-tenor uppercase transition-all duration-300 text-[10px] tracking-[0.22em] ${
          currentLang === 'en'
            ? 'bg-[#7e8b5e] text-[#fbf8f1] shadow-sm font-medium'
            : 'text-[#26231d]/70 hover:text-[#26231d]'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        aria-pressed={currentLang === 'ar'}
        onClick={() => setLang('ar')}
        className={`rounded-full px-2.5 py-1 font-tenor uppercase transition-all duration-300 text-[10px] tracking-[0.22em] ${
          currentLang === 'ar'
            ? 'bg-[#7e8b5e] text-[#fbf8f1] shadow-sm font-medium'
            : 'text-[#26231d]/70 hover:text-[#26231d]'
        }`}
      >
        AR
      </button>
    </div>
  );
}

