import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Check, Heart, Send } from 'lucide-react';

export default function RSVPSection({ t }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendance: 'yes', // 'yes' | 'no' | 'blessings'
    guestsCount: 1,
    womenCount: 0,
    menCount: 0,
    side: 'friends', // 'bride' | 'groom' | 'friends'
    dietary: [],
    dietaryOther: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleDietaryToggle = (item) => {
    setFormData(prev => ({
      ...prev,
      dietary: prev.dietary.includes(item)
        ? prev.dietary.filter(d => d !== item)
        : [...prev.dietary, item]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger wedding celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#7e8b5e', '#c49a5a', '#fbf8f1', '#4f5c3a']
        });
      } catch (err) {
        // Fallback
      }
    }, 900);
  };

  return (
    <section className="relative px-6 py-12 text-center" id="rsvp">
      {/* Icon header */}
      <img
        src="/templates/olive-whisper/art/spine/icon-rsvp.webp"
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
          {t.rsvpTitle}
        </h2>
        <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M12 2 L18 8 L12 14 L6 8 Z" />
          <path d="M12 5.5 L15 8 L12 10.5 L9 8 Z" fill="currentColor" opacity="0.85" />
          <path d="M12 14 L12 22" />
        </svg>
      </div>

      <p className="font-body text-xs md:text-sm italic text-[#26231d]/75 mb-6">
        {t.rsvpSubtitle}
      </p>

      <div className="mx-auto max-w-sm">
        {isSubmitted ? (
          <div className="rounded-xl bg-[#ffffff]/85 p-8 border border-[#7e8b5e]/30 shadow-md text-center">
            <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-[#7e8b5e]/15 text-[#7e8b5e]">
              <Check className="h-7 w-7" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-[#26231d]">
              {t.rsvpSuccessTitle}
            </h3>
            <p className="font-body text-sm text-[#26231d]/80 mt-2 leading-relaxed">
              {t.rsvpSuccessMsg}
            </p>
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="mt-6 font-tenor text-xs uppercase tracking-[0.2em] text-[#7e8b5e] underline underline-offset-4 hover:text-[#4f5c3a]"
            >
              Modify response
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-xl bg-[#ffffff]/70 p-6 border border-[#7e8b5e]/25 shadow-sm text-left"
          >
            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label className="font-tenor text-xs uppercase tracking-[0.18em] text-[#26231d]/80 font-medium">
                {t.fullName} <span className="text-[#c49a5a]">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                placeholder={t.fullNamePlaceholder}
                className="nw-spine-input w-full rounded-md px-3.5 py-2.5 text-sm focus:outline-none"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="font-tenor text-xs uppercase tracking-[0.18em] text-[#26231d]/80 font-medium">
                {t.email} <span className="text-[#c49a5a]">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                placeholder={t.emailPlaceholder}
                className="nw-spine-input w-full rounded-md px-3.5 py-2.5 text-sm focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label className="font-tenor text-xs uppercase tracking-[0.18em] text-[#26231d]/80 font-medium">
                {t.phone}
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                placeholder={t.phonePlaceholder}
                className="nw-spine-input w-full rounded-md px-3.5 py-2.5 text-sm focus:outline-none"
              />
            </div>

            {/* Attendance Radios */}
            <div className="flex flex-col gap-2 pt-2">
              <label className="font-tenor text-xs uppercase tracking-[0.18em] text-[#26231d]/80 font-medium">
                {t.attendanceQuestion}
              </label>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { id: 'yes', label: t.attendYes },
                  { id: 'no', label: t.attendNo },
                  { id: 'blessings', label: t.attendBlessings }
                ].map(opt => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: opt.id })}
                    className={`flex items-center justify-between rounded-md px-4 py-2.5 text-xs font-tenor uppercase tracking-wider transition-all border ${
                      formData.attendance === opt.id
                        ? 'border-[#7e8b5e] bg-[#7e8b5e] text-[#fbf8f1] font-medium shadow-sm'
                        : 'border-[#7e8b5e]/25 bg-[#ffffff]/60 text-[#26231d] hover:bg-[#ffffff]'
                    }`}
                  >
                    <span>{opt.label}</span>
                    {formData.attendance === opt.id && <Check className="h-3.5 w-3.5" />}
                  </button>
                ))}
              </div>
            </div>

            {formData.attendance === 'yes' && (
              <>
                {/* Number of Guests */}
                <div className="flex items-center justify-between pt-2 border-t border-[#7e8b5e]/15">
                  <span className="font-tenor text-xs uppercase tracking-[0.18em] text-[#26231d]/80">
                    {t.numberOfGuests}
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData(p => ({ ...p, guestsCount: Math.max(1, p.guestsCount - 1) }))}
                      className="grid h-8 w-8 place-items-center rounded-full border border-[#7e8b5e]/40 bg-[#ffffff] text-sm text-[#7e8b5e] hover:bg-[#7e8b5e] hover:text-[#ffffff]"
                    >
                      −
                    </button>
                    <span className="font-serif text-lg font-medium w-4 text-center">
                      {formData.guestsCount}
                    </span>
                    <button
                      type="button"
                      onClick={() => setFormData(p => ({ ...p, guestsCount: Math.min(10, p.guestsCount + 1) }))}
                      className="grid h-8 w-8 place-items-center rounded-full border border-[#7e8b5e]/40 bg-[#ffffff] text-sm text-[#7e8b5e] hover:bg-[#7e8b5e] hover:text-[#ffffff]"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Which Side */}
                <div className="flex flex-col gap-1.5 pt-2 border-t border-[#7e8b5e]/15">
                  <label className="font-tenor text-xs uppercase tracking-[0.18em] text-[#26231d]/80">
                    {t.whichSide}
                  </label>
                  <div className="grid grid-cols-3 gap-1.5 text-center">
                    {[
                      { id: 'bride', label: t.brideSide },
                      { id: 'groom', label: t.groomSide },
                      { id: 'friends', label: t.mutualFriends }
                    ].map(side => (
                      <button
                        key={side.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, side: side.id })}
                        className={`rounded-md p-2 text-[10px] font-tenor uppercase tracking-wider border transition-all ${
                          formData.side === side.id
                            ? 'border-[#7e8b5e] bg-[#7e8b5e] text-[#fbf8f1]'
                            : 'border-[#7e8b5e]/25 bg-[#ffffff]/60 text-[#26231d] hover:bg-[#ffffff]'
                        }`}
                      >
                        {side.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dietary Requirements */}
                <div className="flex flex-col gap-1.5 pt-2 border-t border-[#7e8b5e]/15">
                  <label className="font-tenor text-xs uppercase tracking-[0.18em] text-[#26231d]/80">
                    {t.dietaryHeader}
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {t.dietaryOptions.map((diet, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleDietaryToggle(diet)}
                        className={`rounded-full px-3 py-1 text-[11px] font-tenor uppercase tracking-wider border transition-all ${
                          formData.dietary.includes(diet)
                            ? 'border-[#c49a5a] bg-[#c49a5a] text-[#ffffff]'
                            : 'border-[#7e8b5e]/25 bg-[#ffffff]/60 text-[#26231d] hover:bg-[#ffffff]'
                        }`}
                      >
                        {diet}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Special notes */}
            <div className="flex flex-col gap-1.5 pt-2 border-t border-[#7e8b5e]/15">
              <label className="font-tenor text-xs uppercase tracking-[0.18em] text-[#26231d]/80">
                {t.specialNotes}
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={e => setFormData({ ...formData, notes: e.target.value })}
                placeholder={t.specialNotesPlaceholder}
                className="nw-spine-input w-full rounded-md px-3.5 py-2 text-sm focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#7e8b5e] px-6 py-3 font-tenor text-xs uppercase tracking-[0.25em] text-[#fbf8f1] shadow-md transition-all hover:bg-[#647048] hover:shadow-lg active:scale-95 disabled:opacity-70"
            >
              <Send className="h-3.5 w-3.5" />
              <span>{isSubmitting ? t.sendingRSVP : t.sendRSVP}</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

