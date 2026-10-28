# Olive Whisper — React Wedding Invitation Website

A luxury, interactive wedding invitation website replica inspired by the **Olive Whisper** template from [NoorWeds](https://noorweds.com/templates/olive-whisper/full), built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons**.

---

## ✨ Features Included

1. **Interactive Wax-Seal Envelope Opener**:
   - High-definition wax seal video and poster artwork.
   - Interactive golden sheen, breathing pulse, and "Touch the seal" / "المس الختم للفتح" call-to-action.
   - Smooth wax seal breaking animation and golden flash unveiling the card.

2. **Ambient Music Player**:
   - Floating audio control button at the bottom-right with audio visualizer ripple effect.
   - Automatic play trigger upon breaking the wax seal, with pause/play toggle and mute states.
   - Plays the authentic acoustic reed & vocals soundtrack (`olive-whisper-voices.mp3`).

3. **Bilingual Support (English & Arabic) with Full RTL**:
   - Floating language switcher pill (EN / AR) in the top-right.
   - Seamlessly switches text, typography, date formats, direction (`dir="ltr"` / `dir="rtl"`), and Arabic calligraphy (Amiri font).

4. **Atmospheric Hero Section**:
   - Looping botanical video background (`scene.mp4`) with poster fallback.
   - Drifting olive leaves and blossom motes with gentle swaying animations.
   - Cormorant Garamond calligraphy for Bride & Groom names: *Layla & Omar* (*ليلى وعمر*).
   - Bismillah and Quranic verse: *✦ “And We created you in pairs”* (Surah An-Naba 78:8).

5. **Formal Announcement Card**:
   - Handcrafted botanical cartouche border with ornate top and bottom trims.
   - Heartfelt family invitation text.

6. **Sacred Quranic Verse**:
   - Surah Ar-Rum (30:21) displayed in Arabic calligraphy with English translation and gold diamond ornament separators.

7. **Date & Live Countdown Clock**:
   - Hijri and Gregorian wedding date displays (*Saturday, 9 January 2027* / *1 Rajab 1448 AH*).
   - Real-time countdown timer tracking Days, Hours, Minutes, and Seconds.
   - **"Add to Calendar"** dropdown supporting Google Calendar, Apple iCal / `.ics` download, and Outlook.

8. **Botanical Vine Timeline & Programme**:
   - Continuous olive branch spine linking each milestone of the day:
     - 4:00 PM: *Arrival & reception*
     - 4:45 PM: *Nikah ceremony*
     - 6:30 PM: *Dinner & dua*

9. **The Venue & Travel Logistics**:
   - Illustrated venue wash of *The Orangery, Kensington, London*.
   - Direct button for Google Maps directions.
   - Practical guest information on parking, nearest train stations, and hotel accommodations.

10. **Dress Code & Color Palette**:
    - "Garden formal" style guidance.
    - Interactive color swatch circles with tooltip hex codes and shade names (*Cream*, *Sage*, *Ochre*, *Deep Olive*, *Warm Taupe*).

11. **Gifts & Etiquette**:
    - Thoughtful message emphasizing that presence and duas are the greatest gift.
    - Adults-only celebration notice and unplugged ceremony reminder.

12. **Interactive RSVP Form**:
    - Full Name, Email, Phone.
    - Attendance selection (*Yes, with joy* / *No, with apologies* / *I'll send my blessings*).
    - Guest count steppers.
    - Side selection (*Bride's family* / *Groom's family* / *Friends of both*).
    - Dietary preference tags (*Vegetarian*, *Vegan*, *Gluten-free*, *Nut allergy*, *Halal only*).
    - Optional notes for the couple.
    - Golden celebration confetti burst on submission!

13. **Guestbook & Dua Wall**:
    - Form to leave a personalized prayer or warm wish for the couple.
    - Quick-tap inspirational templates.
    - Real-time list of guest blessings with interactive heart like counters.

14. **Farewell Footer**:
    - Sunnah marriage blessing: *بارك الله لكما وبارك عليكما وجمع بينكما في خير*.
    - Botanical farewell watercolor illustration and branding.

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` to view the website.

### 3. Build for production
```bash
npm run build
```
The optimized production files will be placed into the `dist/` directory.

---

## 🛠 Customization

All text content, dates, names, events, and translations are located in:
- `src/data/translations.js`

To customize the couple's names, wedding date, venue, or schedule, simply edit `src/data/translations.js`!


# shajahan-afrin-nikah
