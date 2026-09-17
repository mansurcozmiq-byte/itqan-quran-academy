# ইতকান কুরআন একাডেমি — Website

Production-ready website for **Itqan Quran Academy**.

## Tech Stack
- Frontend: React + Vite + JavaScript
- Backend: Node.js + Express
- Animation: GSAP + ScrollTrigger (optional, graceful fallback)
- **All visual assets are 100% local**

## Structure
```
client/
  public/
    images/   ← replace SVG placeholders with real photos
    videos/   ← place academy-intro.mp4
    logo/
    favicon.svg
  src/
    components/  Header, Footer, FloatingWhatsApp
    sections/    Hero, Programs, FAQ, Contact, ...
    data/        images.js, content.js
    styles/
server/
  index.js
```

## Run
```bash
cd client
npm install
npm run dev
```

Backend (optional):
```bash
cd server
npm install
npm start
```

## Important
- WhatsApp: 8801575040095
- All CTAs open WhatsApp with Bengali pre-filled messages
- Replace images in `public/images/` — paths are centralized in `src/data/images.js`
- No external image/video/logo URLs anywhere
