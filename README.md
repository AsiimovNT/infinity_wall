# 📸 Infinite Gallery

A highly modular, minimalist infinite-scrolling image gallery inspired by Unsplash / Pinterest. Built with a separate **backend** (Node/Express) and **frontend** (React + Vite) so you can scale or swap either side independently.

## Features

• Responsive masonry grid that adapts from phone to desktop
• Smooth infinite scroll powered by `react-infinite-scroll-component`
• Minimal, subtle UI with hover lift effect
• Backend generates (or can store) image URLs and serves them via a paginated API
• Easy to extend with real uploads or a database later

---

## Getting Started

### 1. Clone & install
```
cd infinite-gal
# Backend deps
cd backend && npm install
# Frontend deps
cd ../frontend && npm install
```

### 2. Run in development
Open two terminals (or run one in the background):

```bash
# Terminal 1 – backend
cd infinite-gal/backend
npm run dev            # prints "🌿 Image server running …"

# Terminal 2 – frontend
cd infinite-gal/frontend
npm run dev            # starts Vite on http://localhost:5173
```
The Vite dev server proxies `/api` requests to `http://localhost:4000` so CORS headaches disappear during development.

### 3. Build for production
```
# Build static frontend assets
cd infinite-gal/frontend && npm run build
```
Then serve `dist/` from any static host and deploy the Node backend separately, or combine them behind nginx.

---

## Folder structure
```
infinite-gal/
  backend/
    server.js         Express API (GET /api/images)
    package.json
  frontend/
    src/              React code (Gallery, ImageTile, …)
    index.html
    vite.config.js
    package.json
  README.md
```

---

## Customising / Extending

1. **Real image storage** – Swap the Unsplash placeholder logic in `backend/server.js` with your DB or S3 bucket.
2. **Upload endpoint** – Add `POST /api/images` using `multer` for multipart uploads.
3. **Styling** – The gallery is intentionally bare-bones; tweak CSS variables or introduce a design system.

Happy hacking! ✨ 