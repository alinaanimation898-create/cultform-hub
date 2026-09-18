# ALTAI OPTIMA — Enterprise AI Autonomous Business Optimization

High-end, full-screen immersive landing page for enterprise AI business optimization company **"Altai Optima"** (brand: **ALTAI OPTIMA**, a product of *Altai Production*).

Website language: **Russian (Русский)**.

---

## 💎 Design Architecture & Visual Language

- **Foundation Canvas**: Ambient glacial gradient (pale cerulean `#b0d4f1` blending into luminous ice `#edf3fb` and white `#ffffff`) with floating caustic blur orbs.
- **Deep Sapphire Accent**: `#082f49` / `#081326` (stability, structural clarity, high-contrast readable type).
- **Electric Sky & Cyan**: `#0284c7` / `#38bdf8` (intelligence flow, live data pulses, speed).
- **System Emerald Glow**: `#10b981` (soft reassurance, healthy cashflow, verified execution).
- **Frosted Liquid Glass**: High backdrop blur (`blur-xl`), semi-transparent white fills (`rgba(255,255,255,0.75)` to `0.92`), and subtle white specular highlights (`inset 0 1.5px 2px #ffffff`).

---

## 📐 Precision Cut-Path Controls (index.css)

1. **`.btn-optic-cut`** — 10px chamfered corners primary high-tech button.
2. **`.btn-optic-border`** — Frosted glass outline button with 1px inset simulation, rendering dark sapphire text over frosted glass.
3. **`.btn-optic-sm`** — 6px chamfered corner indicator & status channel chips.

---

## ⏱ Staggered Animation Timeline

| Element | Target Selector | Animation Delay |
|---|---|---|
| Ambient Canvas / Video | Background layer | 0.0s (`anim-fade`) |
| Logo & Brand Typography | Navbar Left | 0.1s (`anim-stagger`) |
| Top Center Pill | Navbar Middle | 0.15s (`anim-stagger`) |
| Header Action Buttons | Navbar Right | 0.2s (`anim-stagger`) |
| Left Philosophy Column | Stage Left | 0.35s (`anim-stagger`) |
| Hero Statement (3 Lines) | Stage Center H1 | 0.5s (`anim-stagger`) |
| Value Proposition Summary | Bottom Row Col 1 | 0.7s (`anim-stagger`) |
| Primary Action & Stat | Bottom Row Col 2 | 0.85s (`anim-stagger`) |
| Ecosystem & Channel Chips | Bottom Row Col 3 | 1.0s (`anim-stagger`) |

---

## 🚀 Tech Stack & Setup

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** (configured with extended `benzin` and `gilroy` font families)
- **Lucide React** (`ArrowRight`, `Bot`, `Sparkles`, `CheckCircle2`, `MessageSquare`)

### Running in Development

```bash
npm install
npm run dev
```

### Direct Browser Opening
The `index.html` file includes built-in standalone browser rendering with Tailwind CDN and fallback support, so it can be previewed immediately in any browser or with `python3 -m http.server 8000`.