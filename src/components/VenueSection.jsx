import React from 'react';
import { MapPin, ExternalLink, Car, Train, Hotel } from 'lucide-react';

export default function VenueSection({ t }) {
  const mapUrl = 'https://maps.app.goo.gl/YwFKLwAAazWJzASn6';

  const icons = [Car, Train, Hotel];

  return (
    <section className="relative px-6 py-12 text-center">
      {/* Icon Header */}
      <img
        src="/templates/olive-whisper/art/spine/icon-venue.webp"
        alt=""
        aria-hidden="true"
        className="mx-auto mb-3 block h-14 w-auto object-contain opacity-90 select-none"
      />

      {/* Title */}
      <div className="mb-1.5 flex items-center justify-center gap-2.5 text-[#c49a5a]">
        <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M12 2 L18 8 L12 14 L6 8 Z" />
          <path d="M12 5.5 L15 8 L12 10.5 L9 8 Z" fill="currentColor" opacity="0.85" />
          <path d="M12 14 L12 22" />
        </svg>
        <h2 className="font-tenor text-[0.82rem] uppercase tracking-[0.34em] text-[#7e8b5e] font-semibold nw-letterpress">
          {t.venueTitle}
        </h2>
        <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M12 2 L18 8 L12 14 L6 8 Z" />
          <path d="M12 5.5 L15 8 L12 10.5 L9 8 Z" fill="currentColor" opacity="0.85" />
          <path d="M12 14 L12 22" />
        </svg>
      </div>

      <div className="mx-auto max-w-sm mt-4">
        {/* Venue Wash Artwork */}
        <div className="relative overflow-hidden rounded-xl my-4">
          <img
            src="/templates/olive-whisper/art/spine/wash-venue.webp"
            alt="The Orangery"
            className="w-full h-auto object-cover rounded-xl border border-[#7e8b5e]/20 shadow-sm select-none"
          />
        </div>

        {/* Venue Information */}
        <h3 className="font-serif text-2xl md:text-3xl font-medium text-[#26231d]">
          {t.venueName}
        </h3>
        <p className="font-body text-sm md:text-base text-[#7e8b5e] mt-1 font-medium">
          {t.venueAddress}
        </p>

        {/* Map & Directions Button */}
        <div className="mt-5">
          <a
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#7e8b5e] px-6 py-2.5 font-tenor text-xs uppercase tracking-[0.2em] text-[#fbf8f1] shadow-md transition-all hover:bg-[#647048] hover:shadow-lg active:scale-95"
          >
            <MapPin className="h-3.5 w-3.5" />
            <span>{t.mapButton}</span>
            <ExternalLink className="h-3 w-3 opacity-75" />
          </a>
        </div>

        {/* Practical Venue Details */}
        <div className="mt-8 flex flex-col gap-2.5 text-left">
          {t.venueDetails.map((item, idx) => {
            const IconComp = icons[idx] || MapPin;
            return (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-lg bg-[#ffffff]/60 p-3.5 border border-[#7e8b5e]/15"
              >
                <div className="mt-0.5 rounded-full bg-[#7e8b5e]/15 p-1.5 text-[#7e8b5e]">
                  <IconComp className="h-4 w-4" />
                </div>
                <p className="font-body text-xs md:text-sm text-[#26231d]/85 leading-snug">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
