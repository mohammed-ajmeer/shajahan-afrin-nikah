import React, { useState, useEffect } from 'react';
import { Calendar, ChevronDown, Check } from 'lucide-react';

export default function CountdownSection({ t }) {
  const targetDate = new Date('2026-12-27T16:00:00Z').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [calendarMenuOpen, setCalendarMenuOpen] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  // Google Calendar URL generator
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent('Layla & Omar — Wedding');
    const details = encodeURIComponent('Wedding celebration of Layla and Omar at The Orangery, Kensington, London.');
    const location = encodeURIComponent('The Orangery, Kensington, London');
    const start = '20270109T160000Z';
    const end = '20270109T220000Z';
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
  };

  // Download iCal (.ics) file
  const downloadIcs = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Olive Whisper//Wedding Invitation//EN
BEGIN:VEVENT
UID:layla-omar-wedding-2027
DTSTAMP:20261028T120000Z
DTSTART:20270109T160000Z
DTEND:20270109T220000Z
SUMMARY:Layla & Omar — Wedding Ceremony
DESCRIPTION:Wedding celebration of Layla and Omar at The Orangery, Kensington, London.
LOCATION:The Orangery, Kensington, London
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'layla-omar-wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setCalendarMenuOpen(false);
  };

  return (
    <section className="relative px-6 py-12 text-center">
      <div className="mx-auto max-w-sm">
        {/* Section Header */}
        <div className="mb-2 flex items-center justify-center gap-2.5 text-[#c49a5a]">
          <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M12 2 L18 8 L12 14 L6 8 Z" />
            <path d="M12 5.5 L15 8 L12 10.5 L9 8 Z" fill="currentColor" opacity="0.85" />
            <path d="M12 14 L12 22" />
          </svg>
          <h2 className="font-tenor text-[0.82rem] uppercase tracking-[0.34em] text-[#7e8b5e] font-semibold nw-letterpress">
            {t.dateTitle}
          </h2>
          <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M12 2 L18 8 L12 14 L6 8 Z" />
            <path d="M12 5.5 L15 8 L12 10.5 L9 8 Z" fill="currentColor" opacity="0.85" />
            <path d="M12 14 L12 22" />
          </svg>
        </div>

        {/* Date Display */}
        <div className="mt-4 flex flex-col items-center">
          <p className="font-tenor text-sm uppercase tracking-[0.25em] text-[#c49a5a] font-medium">
            {t.weddingDay}
          </p>
          <p className="font-serif text-3xl md:text-4xl italic text-[#26231d] mt-1 font-normal">
            {t.weddingDateFull}
          </p>
          <p className="font-amiri text-base text-[#7e8b5e] mt-1">
            {t.hijriDate}
          </p>
        </div>

        {/* Botanical sequence ornament */}
        <div className="my-5 flex justify-center">
          <img
            src="/templates/olive-whisper/art/spine/reveal-seq/f01.webp"
            alt=""
            aria-hidden="true"
            className="h-10 w-auto opacity-80"
          />
        </div>

        {/* Countdown Timer Grid */}
        <div className="grid grid-cols-4 gap-2.5 my-6">
          {[
            { val: timeLeft.days, label: t.days },
            { val: timeLeft.hours, label: t.hours },
            { val: timeLeft.minutes, label: t.minutes },
            { val: timeLeft.seconds, label: t.seconds }
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center rounded-lg bg-[#ffffff]/70 py-3 px-1 border border-[#7e8b5e]/20 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
            >
              <span className="font-serif text-2xl md:text-3xl font-light text-[#26231d]">
                {String(item.val).padStart(2, '0')}
              </span>
              <span className="font-tenor text-[0.62rem] uppercase tracking-[0.16em] text-[#7e8b5e] mt-0.5">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Add to Calendar Button with Dropdown */}
        <div className="relative inline-block text-left mt-2">
          <button
            type="button"
            onClick={() => setCalendarMenuOpen(!calendarMenuOpen)}
            className="inline-flex items-center gap-2 rounded-full border border-[#7e8b5e]/40 bg-[#fbf8f1] px-5 py-2 font-tenor text-xs uppercase tracking-[0.2em] text-[#3e482f] shadow-sm transition-all hover:bg-[#7e8b5e] hover:text-[#fbf8f1]"
          >
            <Calendar className="h-3.5 w-3.5" />
            <span>{t.addToCalendar}</span>
            <ChevronDown className="h-3.5 w-3.5 opacity-60" />
          </button>

          {calendarMenuOpen && (
            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 rounded-lg bg-[#ffffff] p-1.5 shadow-xl border border-[#7e8b5e]/25 z-50">
              <a
                href={getGoogleCalendarUrl()}
                target="_blank"
                rel="noreferrer"
                onClick={() => setCalendarMenuOpen(false)}
                className="flex items-center gap-2 w-full px-3 py-2 text-xs font-tenor uppercase tracking-wider text-[#26231d] rounded hover:bg-[#f4efe3]"
              >
                <span>{t.calendarGoogle}</span>
              </a>
              <button
                type="button"
                onClick={downloadIcs}
                className="flex items-center gap-2 w-full px-3 py-2 text-xs font-tenor uppercase tracking-wider text-[#26231d] rounded hover:bg-[#f4efe3] text-left"
              >
                <span>{t.calendarIcal}</span>
              </button>
              <button
                type="button"
                onClick={downloadIcs}
                className="flex items-center gap-2 w-full px-3 py-2 text-xs font-tenor uppercase tracking-wider text-[#26231d] rounded hover:bg-[#f4efe3] text-left"
              >
                <span>{t.calendarOutlook}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

