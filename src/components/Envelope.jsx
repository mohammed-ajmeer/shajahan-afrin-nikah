import React, { useState, useRef } from 'react';

export default function Envelope({ t, isOpen, onOpen }) {
  const [isBreaking, setIsBreaking] = useState(false);
  const [flash, setFlash] = useState(false);
  const videoRef = useRef(null);

  const handleBreakSeal = () => {
    if (isBreaking || isOpen) return;
    setIsBreaking(true);
    setFlash(true);

    if (videoRef.current) {
      try {
        videoRef.current.play();
      } catch (e) {
        // Fallback if video autoplay blocked
      }
    }

    // Trigger flash animation and open
    setTimeout(() => {
      onOpen();
    }, 700);
  };

  if (isOpen) return null;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={t.sealAria}
      onClick={handleBreakSeal}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleBreakSeal();
        }
      }}
      className={`fixed inset-0 z-[70] cursor-pointer overflow-hidden bg-[#0b0906] transition-all duration-1000 md:inset-x-[calc(50%-215px)] md:shadow-[0_24px_70px_rgba(40,16,10,0.34)] ${
        isBreaking ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Wax seal background video / poster */}
      <video
        ref={videoRef}
        src="/templates/olive-whisper/art/envelope-film-noor.mp4"
        poster="/templates/olive-whisper/art/envelope-still-noor.webp"
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <img
        src="/templates/olive-whisper/art/envelope-still-noor.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-[1] h-full w-full object-cover transition-opacity duration-300"
      />

      {/* Top greeting text */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[24%] z-20 text-center px-4"
        style={{ transform: 'translateZ(0)' }}
      >
        <p
          className="font-body text-xl md:text-2xl italic tracking-wide"
          style={{
            color: '#413528',
            textShadow: '0 1px 3px rgba(255,252,244,0.95)'
          }}
        >
          {t.envelopePrompt}
        </p>
      </div>

      {/* Elegant sheen overlay */}
      <div
        aria-hidden="true"
        className="nw-sheen pointer-events-none absolute inset-0 z-[25]"
        style={{ transform: 'translateZ(0)' }}
      />

      {/* Wax Seal Call-to-action text */}
      <div className="absolute inset-x-0 bottom-[28%] z-30 flex flex-col items-center justify-center gap-2">
        <p
          aria-hidden="true"
          className="nw-beckon font-tenor text-[0.72rem] md:text-xs uppercase tracking-[0.42em] font-semibold"
          style={{
            color: '#392d20',
            textShadow: '0 1px 3px rgba(255,252,244,0.95)',
            transform: 'translateZ(0)'
          }}
        >
          {t.touchSeal}
        </p>
        <span className="w-1.5 h-1.5 rounded-full bg-[#c49a5a]/70 animate-ping" />
      </div>

      {/* Golden flash animation when broken */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-40 transition-opacity duration-700 ${
          flash ? 'opacity-90' : 'opacity-0'
        }`}
        style={{
          transform: 'translateZ(0)',
          background: 'radial-gradient(ellipse at center, rgba(255,252,244,1) 0%, rgba(255,246,222,0.95) 45%, rgba(253,236,196,0.8) 100%)'
        }}
      />
    </div>
  );
}

