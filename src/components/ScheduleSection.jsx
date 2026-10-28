import React from 'react';

export default function ScheduleSection({ t }) {
  return (
    <section className="relative px-6 py-12 text-center">
      {/* Icon header */}
      <img
        src="/templates/olive-whisper/art/spine/icon-schedule.webp"
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
          {t.scheduleTitle}
        </h2>
        <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M12 2 L18 8 L12 14 L6 8 Z" />
          <path d="M12 5.5 L15 8 L12 10.5 L9 8 Z" fill="currentColor" opacity="0.85" />
          <path d="M12 14 L12 22" />
        </svg>
      </div>

      <p className="font-body text-sm italic text-[#26231d]/75 mb-10">
        {t.scheduleSubtitle}
      </p>

      {/* Timeline container */}
      <div className="relative mx-auto max-w-sm">
        {/* Continuous vine spine artwork in center */}
        <div className="flex flex-col items-center">
          <img
            src="/templates/olive-whisper/art/spine/vine-top.webp"
            alt=""
            aria-hidden="true"
            className="w-8 opacity-80"
          />

          {t.events.map((event, index) => (
            <React.Fragment key={index}>
              {/* Event Card */}
              <div className="my-3 w-full rounded-xl bg-[#ffffff]/65 p-5 border border-[#7e8b5e]/20 shadow-[0_4px_16px_rgba(0,0,0,0.02)] transition-all hover:bg-[#ffffff]/85">
                <div className="flex flex-col items-center gap-1.5">
                  <img
                    src={event.icon}
                    alt=""
                    aria-hidden="true"
                    className="h-10 w-auto object-contain my-1 select-none"
                  />
                  <span className="font-tenor text-xs uppercase tracking-[0.22em] text-[#c49a5a] font-medium">
                    {event.time}
                  </span>
                  <h3 className="font-serif text-xl font-medium text-[#26231d]">
                    {event.title}
                  </h3>
                  <p className="font-body text-xs md:text-sm text-[#26231d]/75 max-w-xs leading-relaxed">
                    {event.desc}
                  </p>
                </div>
              </div>

              {/* Vine connector between events */}
              {index === 0 && (
                <img
                  src="/templates/olive-whisper/art/spine/vine-olives.webp"
                  alt=""
                  aria-hidden="true"
                  className="w-8 my-1 opacity-80"
                />
              )}
              {index === 1 && (
                <img
                  src="/templates/olive-whisper/art/spine/vine-blossom.webp"
                  alt=""
                  aria-hidden="true"
                  className="w-8 my-1 opacity-80"
                />
              )}
            </React.Fragment>
          ))}

          <img
            src="/templates/olive-whisper/art/spine/vine-tail.webp"
            alt=""
            aria-hidden="true"
            className="w-8 opacity-80"
          />
        </div>
      </div>
    </section>
  );
}

