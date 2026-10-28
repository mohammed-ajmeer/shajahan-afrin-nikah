import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function MusicPlayer({ isAutoPlayRequested }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isAutoPlayRequested && audioRef.current && !hasInteracted) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Autoplay policy prevented playback
        setIsPlaying(false);
      });
    }
  }, [isAutoPlayRequested, hasInteracted]);

  const togglePlay = () => {
    setHasInteracted(true);
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/templates/olive-whisper/music/olive-whisper-voices.mp3"
        loop
        preload="auto"
      />

      <button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? 'Mute background music' : 'Play background music'}
        className={`fixed bottom-5 right-5 z-[60] grid h-12 w-12 place-items-center rounded-full bg-[#7e8b5e] text-[#fbf8f1] shadow-[0_8px_24px_rgba(126,139,94,0.45)] transition-all duration-300 hover:scale-105 active:scale-95 ${
          isPlaying ? 'ring-4 ring-[#7e8b5e]/25' : ''
        }`}
      >
        {isPlaying ? (
          <div className="relative flex items-center justify-center">
            <Volume2 className="h-5 w-5 animate-pulse" />
            {/* Visualizer ripple ring */}
            <span className="absolute -inset-1 rounded-full border border-white/40 animate-ping opacity-60 pointer-events-none" />
          </div>
        ) : (
          <VolumeX className="h-5 w-5 opacity-90" />
        )}
      </button>
    </>
  );
}

