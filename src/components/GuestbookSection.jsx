import React, { useState } from 'react';
import { Heart, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function GuestbookSection({ t }) {
  const [duas, setDuas] = useState([
    {
      id: 1,
      name: 'Uncle Tariq & Aunt Amina',
      message: 'بارك الله لكما وبارك عليكما وجمع بينكما في خير. May Allah grant you endless happiness and a home full of peace.',
      time: '2 hours ago',
      likes: 14,
      hasLiked: false
    },
    {
      id: 2,
      name: 'Maryam & Bilal',
      message: 'So overjoyed for you both Layla and Omar! May your journey together be as gentle and rooted as the olive tree.',
      time: '5 hours ago',
      likes: 22,
      hasLiked: true
    },
    {
      id: 3,
      name: 'Yusuf Al-Haddad',
      message: 'May Allah bless this beautiful union with barakah, health, and a lifetime of shared laughter and grace.',
      time: 'Yesterday',
      likes: 9,
      hasLiked: false
    }
  ]);

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSelectTemplate = (template) => {
    setMessage(template);
  };

  const handleLike = (id) => {
    setDuas(prev =>
      prev.map(item => {
        if (item.id === id) {
          return {
            ...item,
            likes: item.hasLiked ? item.likes - 1 : item.likes + 1,
            hasLiked: !item.hasLiked
          };
        }
        return item;
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newDua = {
        id: Date.now(),
        name: name.trim(),
        message: message.trim(),
        time: 'Just now',
        likes: 1,
        hasLiked: true
      };

      setDuas([newDua, ...duas]);
      setName('');
      setMessage('');
      setIsSubmitting(false);

      // Trigger sparkle confetti
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#c49a5a', '#7e8b5e', '#ffffff']
        });
      } catch (err) {}
    }, 600);
  };

  return (
    <section className="relative px-6 py-12 text-center" id="duas">
      {/* Title */}
      <div className="mb-2 flex items-center justify-center gap-2.5 text-[#c49a5a]">
        <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M12 2 L18 8 L12 14 L6 8 Z" />
          <path d="M12 5.5 L15 8 L12 10.5 L9 8 Z" fill="currentColor" opacity="0.85" />
          <path d="M12 14 L12 22" />
        </svg>
        <h2 className="font-tenor text-[0.82rem] uppercase tracking-[0.34em] text-[#7e8b5e] font-semibold nw-letterpress">
          {t.duaTitle}
        </h2>
        <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M12 2 L18 8 L12 14 L6 8 Z" />
          <path d="M12 5.5 L15 8 L12 10.5 L9 8 Z" fill="currentColor" opacity="0.85" />
          <path d="M12 14 L12 22" />
        </svg>
      </div>

      <p className="font-body text-xs md:text-sm text-[#26231d]/75 max-w-sm mx-auto leading-relaxed mb-6">
        {t.duaSubtitle}
      </p>

      <div className="mx-auto max-w-sm">
        {/* Inspiration templates */}
        <div className="mb-5 text-left">
          <p className="font-tenor text-[11px] uppercase tracking-wider text-[#c49a5a] font-medium mb-2">
            {t.duaInspirationHeading}
          </p>
          <div className="flex flex-col gap-1.5">
            {t.duaTemplates.map((template, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectTemplate(template)}
                className="rounded-lg bg-[#ffffff]/60 p-2 text-left font-body text-xs text-[#26231d]/85 border border-[#7e8b5e]/20 hover:bg-[#ffffff] hover:border-[#7e8b5e]/50 transition-all"
              >
                “{template}”
              </button>
            ))}
          </div>
        </div>

        {/* Input Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 rounded-xl bg-[#ffffff]/70 p-5 border border-[#7e8b5e]/25 shadow-sm text-left"
        >
          <input
            type="text"
            required
            maxLength={80}
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder={t.yourName}
            className="nw-spine-input w-full rounded-md px-3.5 py-2.5 text-sm focus:outline-none"
          />

          <textarea
            rows={3}
            required
            maxLength={300}
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder={t.yourDuaPlaceholder}
            className="nw-spine-input w-full rounded-md px-3.5 py-2.5 text-sm focus:outline-none"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center justify-center gap-2 rounded-full bg-[#7e8b5e] px-6 py-2.5 font-tenor text-xs uppercase tracking-[0.2em] text-[#fbf8f1] shadow-sm transition-all hover:bg-[#647048] active:scale-95 disabled:opacity-70"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>{isSubmitting ? 'Posting…' : t.addDuaButton}</span>
          </button>
        </form>

        {/* List of Duas */}
        <div className="mt-8 flex flex-col gap-3">
          {duas.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-2 rounded-xl bg-[#ffffff]/60 p-4 border border-[#7e8b5e]/15 shadow-sm text-left transition-all hover:bg-[#ffffff]/80"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-base font-semibold text-[#26231d]">
                  {item.name}
                </span>
                <span className="font-tenor text-[10px] text-[#26231d]/50 tracking-wider">
                  {item.time}
                </span>
              </div>

              <p className="font-body text-xs md:text-sm text-[#26231d]/85 leading-relaxed">
                {item.message}
              </p>

              <div className="flex items-center justify-end pt-1">
                <button
                  type="button"
                  onClick={() => handleLike(item.id)}
                  className={`flex items-center gap-1.5 text-xs transition-colors ${
                    item.hasLiked ? 'text-[#c49a5a]' : 'text-[#26231d]/40 hover:text-[#c49a5a]'
                  }`}
                >
                  <Heart className={`h-3.5 w-3.5 ${item.hasLiked ? 'fill-current' : ''}`} />
                  <span className="font-tenor text-[11px]">{item.likes}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

