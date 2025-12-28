# STUDIO Portfolio 🚀

A stunning, interactive portfolio website built with modern web technologies featuring 3D graphics, smooth animations, and cross-browser optimizations.

![Portfolio Preview](https://img.shields.io/badge/Status-Complete-brightgreen) ![React](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![Vite](https://img.shields.io/badge/Vite-6.0-purple)

## ✨ Features

- **🤖 Interactive 3D Hero** - Spline 3D robot animation
- **🌈 Glowing Effect Cards** - Rainbow gradient borders that follow your cursor
- **⌨️ Typing Animation** - Character-by-character text reveal on scroll
- **🔲 Infinite Grid** - Subtle background pattern with flashlight effect
- **🎛️ 3D Buttons** - Tactile press animations
- **📱 Fully Responsive** - Optimized for all devices
- **🦊 Cross-Browser** - Works on Firefox, Safari, Chrome, Brave

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI Component Library |
| **TypeScript** | Type-safe JavaScript |
| **Vite** | Fast build tool & dev server |
| **Tailwind CSS 4** | Utility-first styling |
| **Framer Motion** | Smooth page animations |
| **Motion** | Glowing effect animations |
| **Spline** | 3D interactive elements |
| **Lucide React** | Beautiful icons |
| **Radix UI** | Accessible UI primitives |

---

## 📁 Project Structure

```
c:\roro\
├── src/
│   ├── components/
│   │   ├── ui/                    # Reusable UI components
│   │   │   ├── button-3d.tsx      # 3D animated buttons
│   │   │   ├── button.tsx         # shadcn Button
│   │   │   ├── card.tsx           # shadcn Card
│   │   │   ├── footer-section.tsx # Premium footer
│   │   │   ├── glowing-effect.tsx # Rainbow glow borders
│   │   │   ├── infinite-grid.tsx  # Background grid
│   │   │   ├── input.tsx          # shadcn Input
│   │   │   ├── label.tsx          # shadcn Label
│   │   │   ├── splite.tsx         # Spline 3D wrapper
│   │   │   ├── spotlight.tsx      # Ambient lighting
│   │   │   ├── switch.tsx         # shadcn Switch
│   │   │   ├── textarea.tsx       # shadcn Textarea
│   │   │   ├── tooltip.tsx        # shadcn Tooltip
│   │   │   └── typewriter.tsx     # Typing animations
│   │   └── HeroSpline.tsx         # Hero with 3D robot
│   ├── lib/
│   │   └── utils.ts               # Utility functions (cn)
│   ├── App.tsx                    # Main application
│   ├── App.css                    # Global styles
│   ├── index.css                  # Tailwind config
│   └── main.tsx                   # Entry point
├── vite.config.ts                 # Vite configuration
├── tsconfig.app.json              # TypeScript config
├── tailwind.config.js             # Tailwind config
└── package.json                   # Dependencies
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd roro

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📦 Dependencies

### Core
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "typescript": "~5.6.2"
}
```

### Styling & Animation
```json
{
  "tailwindcss": "^4.0.0",
  "framer-motion": "^11.x",
  "motion": "^11.x",
  "class-variance-authority": "^0.7.x",
  "clsx": "^2.x",
  "tailwind-merge": "^2.x"
}
```

### 3D & Graphics
```json
{
  "@splinetool/react-spline": "^4.x",
  "@splinetool/runtime": "^1.x"
}
```

### UI Components
```json
{
  "@radix-ui/react-label": "^2.x",
  "@radix-ui/react-slot": "^1.x",
  "@radix-ui/react-switch": "^1.x",
  "@radix-ui/react-tooltip": "^1.x",
  "lucide-react": "^0.468.x"
}
```

---

## 🎨 Component Guide

### GlowingEffect
Rainbow gradient border that follows cursor movement.

```tsx
import { GlowingEffect } from "@/components/ui/glowing-effect"

<div className="relative rounded-xl border p-4">
  <GlowingEffect
    spread={40}
    glow={true}
    proximity={64}
    borderWidth={3}
  />
  <div className="relative z-10">Your content</div>
</div>
```

### Button3D
Tactile 3D buttons with press animation.

```tsx
import { Button3D } from "@/components/ui/button-3d"

<Button3D variant="primary" size="lg">
  Click Me
</Button3D>
```

### TypewriterOnView
Text that types character-by-character when scrolled into view.

```tsx
import { TypewriterOnView } from "@/components/ui/typewriter"

<TypewriterOnView 
  text="Hello World!" 
  delay={50} 
/>
```

### LazyLoad
Fade-in animation when element enters viewport.

```tsx
import { LazyLoad } from "@/components/ui/typewriter"

<LazyLoad delay={0.2}>
  <p>This fades in on scroll</p>
</LazyLoad>
```

### InfiniteGrid
Subtle background grid with mouse-following glow.

```tsx
import { InfiniteGrid } from "@/components/ui/infinite-grid"

<section className="relative">
  <InfiniteGrid gridSize={50} showBlurSpheres={true} />
  <div className="relative z-10">Content</div>
</section>
```

---

## ⚡ Performance Optimizations

| Optimization | Description |
|--------------|-------------|
| **Mobile Detection** | Heavy effects disabled on touch devices |
| **Lazy Loading** | Spline 3D loads after initial content |
| **CSS Grid Pattern** | Uses background-image instead of SVG |
| **Memoization** | Components wrapped with `memo()` |
| **requestAnimationFrame** | Smooth typing animation |
| **Firefox Fixes** | Blur disabled via `@-moz-document` |

---

## 🌐 Browser Support

| Browser | Status |
|---------|--------|
| Chrome 90+ | ✅ Full Support |
| Firefox 90+ | ✅ Optimized |
| Safari 14+ | ✅ Full Support |
| Brave | ✅ Full Support |
| Mobile | ✅ Fallback Mode |

---

## 📄 License

MIT License - feel free to use for personal or commercial projects.

---

## 🙏 Credits

- **Spline** - 3D graphics and animation
- **shadcn/ui** - Component design patterns
- **Radix UI** - Accessible primitives
- **Tailwind CSS** - Styling framework
- **Framer Motion** - Animation library

---

Made with ❤️ using React, TypeScript, and Tailwind CSS
