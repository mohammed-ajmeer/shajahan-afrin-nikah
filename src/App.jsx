import React, { useState, useEffect } from 'react';
import { translations } from './data/translations';
import Envelope from './components/Envelope';
import LanguageSwitch from './components/LanguageSwitch';
import MusicPlayer from './components/MusicPlayer';
import HeroSection from './components/HeroSection';
import AnnouncementCard from './components/AnnouncementCard';
import VerseSection from './components/VerseSection';
import CountdownSection from './components/CountdownSection';
import ScheduleSection from './components/ScheduleSection';
import VenueSection from './components/VenueSection';
import DressCodeSection from './components/DressCodeSection';
import GiftsSection from './components/GiftsSection';
import RSVPSection from './components/RSVPSection';
import GuestbookSection from './components/GuestbookSection';
import FooterSection from './components/FooterSection';

export default function App() {
  const [lang, setLang] = useState('en');
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [startMusic, setStartMusic] = useState(false);

  const t = translations[lang] || translations.en;

  // Set document title and lang/dir attributes
  useEffect(() => {
    document.documentElement.lang = t.lang;
    document.documentElement.dir = t.dir;
    document.title = lang === 'ar' ? 'ليلى وعمر — أوليف ويسبر' : 'Layla & Omar — Olive Whisper';
  }, [lang, t]);

  const handleOpenEnvelope = () => {
    setIsEnvelopeOpen(true);
    setStartMusic(true);
  };

  return (
    <div
      dir={t.dir}
      className={`min-h-screen w-full font-body ${lang === 'ar' ? 'font-arabic' : ''
        }`}
      style={{
        backgroundColor: '#e4d4bc',
        background: 'radial-gradient(ellipse 90% 70% at 50% 0%, #efe3cf 0%, #e4d4bc 55%, #d9c6ab 100%)'
      }}
    >
      {/* Background ambient pattern for desktop frame */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: 'url(/templates/olive-whisper/art/bg.webp)',
          backgroundRepeat: 'repeat',
          backgroundSize: '400px'
        }}
      />

      {/* Floating Language Switcher */}
      <LanguageSwitch currentLang={lang} setLang={setLang} />

      {/* Wax Seal Interactive Envelope Opener */}
      <Envelope
        t={t}
        isOpen={isEnvelopeOpen}
        onOpen={handleOpenEnvelope}
      />

      {/* Mobile-first Invitation Paper Card Viewport */}
      <div className="relative min-h-screen bg-[#fbf8f1] text-[#26231d] md:mx-auto md:w-[430px] md:max-w-[430px] md:shadow-[0_24px_70px_rgba(40,16,10,0.34)] overflow-x-hidden">
        {/* Subtle Paper Texture Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 md:inset-x-[calc(50%-215px)] -z-0 opacity-40"
          style={{
            backgroundImage: 'url(/templates/olive-whisper/art/bg.webp)',
            backgroundRepeat: 'repeat',
            backgroundSize: '360px'
          }}
        />

        <main className="relative z-10">
          <HeroSection t={t} />
          <AnnouncementCard t={t} />
          <VerseSection t={t} />
          <CountdownSection t={t} />
          <ScheduleSection t={t} />
          <VenueSection t={t} />
          <DressCodeSection t={t} />
          <GiftsSection t={t} />
          <RSVPSection t={t} />
          {/* <GuestbookSection t={t} /> */}
          <FooterSection t={t} />
        </main>

        {/* Ambient Background Music Player */}
        <MusicPlayer isAutoPlayRequested={startMusic} />
      </div>
    </div>
  );
}

