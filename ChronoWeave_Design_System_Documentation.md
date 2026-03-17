# ChronoWeave Design System Documentation

## Case Study Resource for Mobile App Prototype

---

## Table of Contents
1. [Overview](#overview)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Layout & Spacing](#layout--spacing)
5. [Components](#components)
6. [Visual Design Patterns](#visual-design-patterns)
7. [Animation & Motion](#animation--motion)
8. [Responsive Design](#responsive-design)

---

## Overview

**App Name:** ChronoWeave  
**Purpose:** Help people with ADHD understand their time perception  
**Platform:** Mobile-first (iOS prototype)  
**Design Philosophy:** Dark mode wellness aesthetic with glassmorphism  
**Target Device:** iPhone 14 Pro (390px × 844px)  
**Total Screens:** 16 screens with voice-over scripts

---

## Color Palette

### Primary Background
- **Main Background:** `#0f172a` (Slate-900)
  - Used as the base background across all screens
  - Deep navy-blue that reduces eye strain in dark environments
  - Creates strong contrast for accessibility

### Secondary Backgrounds
- **Alternative Background:** `#1C2A4A` (Deep Blue)
  - Used on Landing page for variation
  - Slightly lighter than main background for visual hierarchy

### Accent Colors

#### Teal/Turquoise (Primary Brand)
- **Primary Teal:** `#5eead4` (Teal-300)
  - Main interactive elements
  - Progress indicators
  - Success states
  - RGB: `rgba(94, 234, 212, 1)`

- **Darker Teal:** `#14b8a6` (Teal-600)
  - Button backgrounds
  - Hover states
  - `#0d9488` (Teal-700) - Gradient stops
  - `#0f766e` (Teal-800) - Deeper gradient stops

- **Teal Variations:**
  - Light opacity: `rgba(94, 234, 212, 0.1)` - Subtle backgrounds
  - Medium opacity: `rgba(94, 234, 212, 0.15)` - Borders
  - High opacity: `rgba(94, 234, 212, 0.3)` - Accent elements

#### Purple (Secondary Brand)
- **Light Purple:** `#c084fc` (Purple-400)
  - Secondary accents
  - Gradient overlays
  - Decorative elements

- **Purple:** `#a78bfa` (Purple-300)
  - Interactive highlights
  - Particle effects

- **Deep Purple:** `#8b5cf6` (Purple-500)
  - Gradient stops
  - Logo elements

#### Status Colors
- **Error/Problem State:** `#dc2626` (Red-600)
  - Error messages
  - Problem visualization in animations
  - `#ef4444` (Red-500) - Lighter variant

- **Success:** Teal family colors (listed above)

### Neutral Colors

#### White Variants
- **Pure White:** `#ffffff`
  - Primary text on dark backgrounds
  - Icon strokes
  - High contrast elements

- **White with Opacity:**
  - `rgba(255, 255, 255, 0.05)` - Subtle card backgrounds
  - `rgba(255, 255, 255, 0.1)` - Borders, dividers
  - `rgba(255, 255, 255, 0.2)` - Stronger borders
  - `rgba(255, 255, 255, 0.3)` - Home indicator
  - `rgba(255, 255, 255, 0.8)` - Near-solid elements

#### Gray Scale
- **Light Gray:** `#e5e7eb` (Gray-200) - Rarely used
- **Medium Gray:** `#94a3b8` (Slate-400) - Secondary text
- **Dark Gray:** 
  - `#64748b` (Slate-500)
  - `#475569` (Slate-600)
  - `#334155` (Slate-700)

- **Black Variants:**
  - `#000000` - iPhone bezel, notch
  - `#0a0a0a` - Speaker grille
  - `#1f1f1f` - iPhone border
  - `#3a3a3a` - Side buttons

### Gradient Combinations

#### Primary Gradients
1. **Teal Gradient (Buttons, CTAs):**
   ```css
   background: linear-gradient(135deg, #0d9488 0%, #0f766e 100%);
   ```

2. **Purple-Teal Gradient (Particles, Transitions):**
   ```css
   background: linear-gradient(135deg, #dc2626 0%, #5eead4 100%);
   background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
   ```

3. **Radial Gradients (Glows, Halos):**
   ```css
   background: radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%);
   background: radial-gradient(circle, rgba(94, 234, 212, 0.3) 0%, transparent 70%);
   ```

4. **Overlay Gradients:**
   ```css
   background: linear-gradient(to bottom right, rgba(192, 132, 252, 0.1) 0%, transparent 100%);
   ```

---

## Typography

### Font Family
- **Primary Font:** `Inter` (Google Fonts)
  - Sans-serif system font
  - Clean, modern, highly legible
  - Optimized for digital screens
  - Supports wide range of weights

- **Fallback Stack:**
  ```css
  font-family: 'Inter', sans-serif;
  ```

### Font Weights
- **Normal:** `400` (body text, inputs)
- **Medium:** `500` (labels, buttons, headings)
- **Semi-Bold:** `600` (emphasis)
- **Bold:** `700` (strong emphasis, titles)

### Font Sizes

#### Headings
- **H1 (Main Titles):**
  - Size: `32px` (2rem)
  - Weight: `700` (Bold)
  - Line Height: `1.5`
  - Use: Landing page titles, major section headers
  - Example: "Time feels different"

- **H2 (Section Headers):**
  - Size: `24px` (1.5rem)
  - Weight: `700` (Bold)
  - Line Height: `1.5`
  - Use: Card titles, screen headers
  - Example: "Your personal time guide"

- **H3 (Subsection Headers):**
  - Size: `20px` (1.25rem)
  - Weight: `600` (Semi-Bold)
  - Line Height: `1.5`
  - Use: Widget headers, component titles

- **H4 (Small Headers):**
  - Size: `18px` (1.125rem)
  - Weight: `600` (Semi-Bold)
  - Line Height: `1.5`
  - Use: List headers, mini-card titles
  - Example: "Connect Calendar"

#### Body Text
- **Large Body:**
  - Size: `18px` (1.125rem)
  - Weight: `400` (Normal)
  - Line Height: `1.6`
  - Color: `#94a3b8` (Slate-400)
  - Use: Subtitles, important descriptions
  - Example: "Let's discover how it feels for you"

- **Regular Body:**
  - Size: `16px` (1rem) - Base size
  - Weight: `400` (Normal)
  - Line Height: `1.5`
  - Color: White or Gray variants
  - Use: Standard body copy, buttons, inputs

- **Small Body:**
  - Size: `14px` (0.875rem)
  - Weight: `400` (Normal)
  - Line Height: `1.5`
  - Use: Captions, helper text, metadata

- **Extra Small:**
  - Size: `13px` (0.8125rem)
  - Weight: `400` (Normal)
  - Use: Fine print, micro-copy
  - Example: Calendar description text

- **Mini:**
  - Size: `12px` (0.75rem)
  - Weight: `500` (Medium)
  - Use: Navigation labels, timestamps, badges

### Text Colors by Context

#### Primary Text
- **White Text:** `#ffffff`
  - Main headings
  - High-priority content
  - Navigation labels

#### Secondary Text
- **Gray Text:** `#94a3b8` (Slate-400)
  - Subtitles
  - Descriptions
  - Helper text
  - `rgba(148, 163, 184, 0.8)` - Subtle variant

#### Interactive Text
- **Teal Hover:** `#58C7BD`
  - Link hover states
  - Interactive text
  - "Continue as Guest" hover

#### Status Text
- **Error Text:** `#dc2626` (Red-600)
- **Success Text:** `#5eead4` (Teal-300)

### Line Heights
- **Tight:** `1.2` - Display text, large headings
- **Normal:** `1.5` - Most text elements (default)
- **Relaxed:** `1.6` - Long-form content
- **Loose:** `1.75` - Reading-heavy sections

### Letter Spacing
- **Default:** Normal (no custom tracking)
- **Tight:** Used sparingly for large display text

---

## Layout & Spacing

### Container Dimensions
- **iPhone Frame:** `390px × 844px`
- **Viewport Width:** `100vw` (full width)
- **Viewport Height:** `100vh` (full height)
- **Max Content Width:** `375px` (with padding)

### Device-Specific Elements
1. **Notch Area:** `150px × 30px` (top center)
2. **Home Indicator:** `134px × 5px` (bottom center)
3. **Safe Areas:** Content avoids notch and home indicator

### Horizontal Padding
- **Primary Padding:** `24px` (1.5rem)
  - Used on most screens
  - Left and right content margins
  - Example: Landing page, Dashboard

- **Secondary Padding:** `20px`
  - Card interiors
  - Nested containers

- **Minimal Padding:** `16px`
  - Compact sections

### Vertical Spacing

#### Section Spacing
- **Extra Large:** `48px` (3rem) - Major section breaks
- **Large:** `32px` (2rem) - Between major elements
- **Medium:** `24px` (1.5rem) - Between related groups
- **Small:** `16px` (1rem) - Between components
- **Extra Small:** `12px` (0.75rem) - Tight groupings
- **Minimal:** `8px` (0.5rem) - Icon + text pairs
- **Tiny:** `4px` (0.25rem) - Very tight elements

#### Top/Bottom Padding
- **Screen Top Padding:** `48px` - First element spacing
- **Screen Bottom Padding:** `32px` - Last element spacing
- **Card Padding:** `20px` - Interior card spacing
- **Button Padding:** Varies by size

### Border Radius

#### Base Radius
- **Extra Large:** `60px` - iPhone frame outer radius
- **Large (Rounded):** `46px` - iPhone screen inner radius
- **Medium:** `24px` - Large cards, panels
- **Standard:** `16px` - Cards, containers
- **Small:** `12px` - Buttons, avatars, icons
- **Pill:** `9999px` or `full` - Circular buttons, badges

### Button Dimensions

#### Primary Buttons
- **Height:** `56px`
- **Width:** `100%` (full width)
- **Border Radius:** `9999px` (pill shape)
- **Padding:** `0 24px`
- **Font Size:** `16px`
- **Font Weight:** `600` (Semi-Bold)

#### Icon Buttons
- **Size:** `40px × 40px`
- **Border Radius:** `12px`
- **Icon Size:** `20px × 20px`
- **Border:** `2px solid rgba(255, 255, 255, 0.2)`

#### Text Buttons
- **Height:** `48px`
- **Padding:** Minimal
- **Font Size:** `16px`
- **Font Weight:** `400`

### Card Specifications

#### Standard Glassmorphic Card
- **Background:** `rgba(255, 255, 255, 0.05)`
- **Backdrop Filter:** `blur(10px)` or `blur(20px)`
- **Border:** `1px solid rgba(255, 255, 255, 0.1)`
- **Border Radius:** `16px` to `24px`
- **Box Shadow:** `0 2px 8px rgba(0, 0, 0, 0.2)` to `0 8px 32px rgba(0, 0, 0, 0.4)`
- **Padding:** `20px` to `24px`

#### Elevated Card (Stronger)
- **Background:** `rgba(255, 255, 255, 0.1)`
- **Border:** `2px solid rgba(255, 255, 255, 0.2)`
- **Box Shadow:** `0 8px 32px rgba(0, 0, 0, 0.4)`

### Grid System
- **Column Count:** Single column (mobile-first)
- **Gaps:** `12px` to `16px` between items
- **Flex Layouts:** Commonly used with `gap` utilities

### Navigation Bar

#### Bottom Navigation
- **Position:** `absolute` (bottom: 0)
- **Height:** Auto (content-based, ~72px including padding)
- **Background:** `rgba(15, 23, 42, 0.8)` with `backdrop-blur-2xl`
- **Border:** `1px solid rgba(255, 255, 255, 0.1)` (top only)
- **Border Radius:** `40px` (top-left, top-right)
- **Box Shadow:** `0 -10px 40px -10px rgba(0, 0, 0, 0.5)`
- **Items:** 4 navigation items (Home, Insights, Map, Nudge)
- **Padding:** `16px 24px`

#### Top Navigation
- **Padding:** `16px 24px`
- **Elements:** Avatar (left), Calendar + Notification icons (right)
- **Icon Size:** `40px × 40px`
- **Gap:** `12px` between icons

---

## Components

### Buttons

#### Primary Button (Gradient CTA)
```css
background: linear-gradient(135deg, #0d9488 0%, #0f766e 100%);
border: 1px solid rgba(94, 234, 212, 0.15);
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
border-radius: 9999px;
height: 56px;
font-size: 16px;
font-weight: 600;
color: #ffffff;
```
**States:**
- Hover: `scale: 1.01`
- Active/Tap: `scale: 0.98`

#### Secondary Button (Glass)
```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.1);
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
border-radius: 9999px;
height: 56px;
font-size: 16px;
font-weight: 600;
color: #ffffff;
```
**States:**
- Hover: `scale: 1.01`
- Active/Tap: `scale: 0.98`

#### Icon Button
```css
width: 40px;
height: 40px;
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(10px);
border: 2px solid rgba(255, 255, 255, 0.2);
border-radius: 12px;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
```
**Icon:** 20px × 20px, white stroke

### Avatar Component
- **Size:** `40px × 40px`
- **Border Radius:** `12px` (rounded square)
- **Border:** `2px solid rgba(255, 255, 255, 0.2)`
- **Box Shadow:** `0 4px 12px rgba(0, 0, 0, 0.3)`
- **Content:** Emoji (20px) or user icon
- **Background:** User-selected color (e.g., `#B8A8D8`, `#1E2747`)

### Input Fields
```css
background: rgba(255, 255, 255, 0.05);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 12px;
padding: 16px 20px;
font-size: 16px;
font-weight: 400;
color: #ffffff;
```
**Placeholder:** `rgba(148, 163, 184, 0.5)`  
**Focus State:** Border color changes to teal

### Progress Bar
```css
background: rgba(255, 255, 255, 0.1);
border-radius: 9999px;
height: 4px;
width: 256px;
```
**Fill:**
```css
background: linear-gradient(90deg, #5eead4 0%, #0d9488 100%);
height: 100%;
border-radius: inherit;
```

### Notification Badge
- **Size:** `8px × 8px` or `6px × 6px`
- **Position:** `top-0 right-0` (absolute)
- **Background:** `#dc2626` (Red-600)
- **Border:** `2px solid #0f172a`
- **Border Radius:** `9999px` (circular)

### Modal/Panel (Calendar Integration Example)
```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(24px);
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 24px;
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
padding: 20px;
```

### Navigation Item (Bottom Nav)
**Inactive:**
```css
color: rgba(148, 163, 184, 0.6);
font-size: 12px;
font-weight: 500;
```
**Active:**
```css
color: #5eead4;
font-size: 12px;
font-weight: 600;
```
**Icon:** 24px × 24px, stroke-width: 2

---

## Visual Design Patterns

### Glassmorphism
ChronoWeave uses glassmorphism extensively to create depth and modern aesthetics:

**Standard Glass Effect:**
```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.1);
```

**Strong Glass Effect:**
```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(20px) or blur(24px);
border: 1px solid rgba(255, 255, 255, 0.2);
```

**Used On:**
- Cards
- Buttons (secondary)
- Navigation bars
- Modals/Panels
- Icon backgrounds

### Shadows

#### Button Shadows
- **Light:** `0 2px 8px rgba(0, 0, 0, 0.2)`
- **Medium:** `0 2px 8px rgba(0, 0, 0, 0.4)`
- **Strong:** `0 4px 12px rgba(0, 0, 0, 0.3)`

#### Card Shadows
- **Standard:** `0 8px 32px rgba(0, 0, 0, 0.4)`
- **Bottom Nav:** `0 -10px 40px -10px rgba(0, 0, 0, 0.5)` (upward shadow)

#### Device Shadow
- **iPhone Frame:** `0 30px 80px rgba(0, 0, 0, 0.5)`
- **Outer Ring:** `0 0 0 2px #3a3a3a` (layered shadow effect)

### Borders
- **Subtle:** `1px solid rgba(255, 255, 255, 0.1)`
- **Medium:** `1px solid rgba(255, 255, 255, 0.15)`
- **Strong:** `2px solid rgba(255, 255, 255, 0.2)`
- **Accent:** `1px solid rgba(94, 234, 212, 0.15)` (teal tint)

### Overlays & Gradients
- **Purple Overlay:** `background: linear-gradient(to bottom right, rgba(192, 132, 252, 0.1) 0%, transparent 100%)`
- **Teal Overlay:** `from-[#5eead4]/10 to-transparent`
- **Radial Glow:** Used behind logos, important elements

### Icons
- **Style:** Outline/Stroke-based (not filled)
- **Stroke Width:** `2px` (standard)
- **Color:** White `#ffffff`
- **Size:** `20px × 20px` (in buttons), `24px × 24px` (navigation)

### Particle Effects
Small circular elements used for:
- Background ambiance (15 particles)
- Animated intro transitions
- Loading states
- Accent decorations

**Specifications:**
- **Size:** `1px × 1px` to `3px × 3px`
- **Color:** `rgba(94, 234, 212, 0.3)` or purple variants
- **Opacity:** Animated between 0.2 and 0.6
- **Movement:** Floating, pulsing, orbiting

---

## Animation & Motion

### Transition Library
**Framework:** Motion (formerly Framer Motion)  
**Import:** `import { motion } from 'motion/react'`

### Button Interactions

#### Tap Animation
```javascript
whileTap={{ scale: 0.98 }}
```

#### Hover Animation
```javascript
whileHover={{ scale: 1.01 }}
```

#### Standard Transition
```javascript
transition={{ duration: 0.2 }}
```

### Page Transitions

#### Fade In
```javascript
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.6 }}
```

#### Slide Up
```javascript
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

#### Slide Down
```javascript
initial={{ opacity: 0, y: -20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.3 }}
```

### Animated Intro (20 seconds)

**Phase 1: Problem (0-6s)**
- Chaotic, distorted clock
- Question marks floating
- Red color scheme (`#dc2626`)
- Spinning clock hands
- Morphing ellipse

**Phase 2: Transition (6-8s)**
- Particles scattering and reforming
- Color shift from red to teal-purple
- Breaking apart animation

**Phase 3: Solution (8-14s)**
- ChronoWeave logo reveal
- Spinning entry: `rotate: -180 → 0`
- Scale: `0 → 1`
- Glowing halo (radial gradient)
- Pulsing circles (3 waves)
- 6 orbiting particles
- Purple/teal color palette

**Phase 4: Features (14-20s)**
- Mini app preview
- Icons reveal sequentially:
  - Track (delay: 0.2s)
  - Calibrate (delay: 0.4s)
  - Understand (delay: 0.6s)
- Teal accent highlights

**Progress Bar:**
- Background: `rgba(255, 255, 255, 0.1)`
- Fill: Gradient teal `#5eead4 → #0d9488`
- Height: `4px`
- Width: `256px`
- Updates every 16ms (~60fps)

### Floating Animations

#### Bounce Slow (Custom)
```css
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
animation: bounce-slow 3s ease-in-out infinite;
```

#### Float
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
animation: float 4s ease-in-out infinite;
```

#### Spin Slow
```css
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
animation: spin-slow 20s linear infinite;
```

### Particle Animations
```javascript
animate={{
  y: [0, -30, 0],
  opacity: [0.2, 0.6, 0.2],
  scale: [1, 1.5, 1],
}}
transition={{
  duration: 3 + Math.random() * 2,
  repeat: Infinity,
  delay: Math.random() * 2,
}}
```

### Pulsing Circles
```javascript
animate={{
  scale: [0.9, 1.3, 1.3],
  opacity: [0.5, 0, 0],
}}
transition={{
  duration: 2,
  repeat: Infinity,
  delay: i * 0.4,
  ease: "easeOut"
}}
```

### Easing Functions
- **Default:** `ease`
- **Smooth Entry:** `easeOut`
- **Smooth Exit:** `easeIn`
- **Both:** `easeInOut`
- **Linear:** `linear` (for continuous rotations)

---

## Responsive Design

### Device Target
- **Primary:** iPhone 14 Pro (390px × 844px)
- **Orientation:** Portrait only
- **Mockup:** Realistic device frame with notch and home indicator

### Breakpoints
Since this is mobile-first with a specific device target, traditional breakpoints are minimal:
- **Mobile:** `390px` (base)
- **Padding Adjustments:** None (fixed 24px)

### Scrolling Behavior

#### Hidden Scrollbars
```css
/* Chrome, Safari, Opera */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Firefox */
.scrollbar-hide {
  scrollbar-width: none;
}

/* IE, Edge */
.scrollbar-hide {
  -ms-overflow-style: none;
}
```

Applied to:
- `.iphone-screen-content` class
- All screen containers

#### Smooth Scrolling
- **Overflow:** `overflow-y: auto`
- **Behavior:** Smooth, native iOS-style momentum

### Fixed vs. Absolute Positioning
- **Navigation Bars:** `position: absolute` (not fixed)
  - Prevents content from sticking to iPhone mockup borders
  - Proper scrolling within the frame

- **Modals/Panels:** `absolute` within context
  - Positioned relative to parent container

### Content Padding Strategy
1. **Outer Container:** No horizontal padding (full width)
2. **Inner Container:** `padding: 0 24px` (content inset)
3. **Bottom Spacing:** Calculated to avoid home indicator

### Safe Areas
- **Top Safe Area:** Notch clearance (~44px)
- **Bottom Safe Area:** Home indicator clearance (~34px)
- **Side Safe Areas:** None (full width within frame)

---

## Technical Implementation Notes

### CSS Architecture
- **Framework:** Tailwind CSS v4
- **Custom CSS:** `/src/styles/theme.css`
- **Fonts:** `/src/styles/fonts.css`

### React Router
- **Package:** `react-router` (not react-router-dom)
- **Pattern:** Data mode with `RouterProvider`
- **Routes File:** `/src/app/routes.tsx`

### Assets
- **Raster Images:** `figma:asset` virtual module scheme
  - Example: `import img from "figma:asset/abc123.png"`
- **SVG Vectors:** Relative imports from `/src/imports`
  - Example: `import svgPaths from "../imports/svg-abc123"`

### Image Component
- **Custom Component:** `ImageWithFallback.tsx`
- **Location:** `/src/app/components/figma/ImageWithFallback.tsx`
- **Usage:** Replaces `<img>` tag for new images

### Context API
- **User Context:** Manages user name and avatar
- **Avatar Format:** JSON object `{ color: string, emoji: string }`
- **Legacy Support:** Plain color hex values

### Global Keyboard Listener
- **Key:** "R" (restart prototype)
- **Action:** Navigate to animated intro (beginning)
- **Implementation:** Event listener in root component

---

## Screen-Specific Design Patterns

### Landing Page
- **Background:** `#1C2A4A` (unique to this screen)
- **Character Illustration:** 3D rendered figure with gradient backdrop
- **Gradient Circle:** Teal radial gradient at 40% opacity
- **Button Stack:** Primary (Sign Up), Secondary (Log In), Text (Guest)
- **Spacing:** Generous vertical rhythm (48px top, 32px bottom)

### Dashboard Screens (Today, Weekly, Drift Map)
- **Background:** `#0f172a`
- **Top Nav:** Avatar left, Calendar + Notification right
- **Cards:** Glassmorphic with teal accents
- **Charts:** Recharts library with teal/purple color scheme
- **Bottom Nav:** 4 items, absolute positioning

### Calibration Screens
- **Progress Indicators:** Step counters (1/5, 2/5, etc.)
- **Interactive Elements:** Large touch targets (56px+)
- **Feedback:** Visual confirmation on selection
- **Gradual Disclosure:** One question per screen

### Profile Screen
- **Layout:** Relative sizing (not fixed heights)
- **Sections:** Account, Preferences, Support, Legal
- **List Items:** Glass cards with chevron indicators
- **Bottom Padding:** `pb-24` to clear navigation

---

## Brand Assets

### Logo Specifications
- **File Format:** PNG with transparency
- **Size (Animated Intro):** `180px × 180px`
- **Blend Mode:** `screen` (for logo integration)
- **Color Scheme:** Purple-to-blue gradient base
- **Icon:** Three wavy lines (representing time flow)

### Icon System
- **Library:** Custom SVG icons (stroke-based)
- **Consistency:** All icons use 2px stroke
- **Color:** White (#ffffff) with transparency variations
- **Style:** Minimal, rounded corners, consistent weight

---

## Accessibility Considerations

### Color Contrast
- **White on Dark Background:** 15.3:1 (excellent)
- **Teal on Dark Background:** 6.2:1 (AA compliant)
- **Gray on Dark Background:** 4.8:1 (AA compliant for large text)

### Interactive Elements
- **Minimum Touch Target:** 44px × 44px (iOS guidelines)
- **Actual Implementation:** 40px × 40px (icons), 56px (buttons)
- **Spacing:** 12px minimum between targets

### Typography
- **Minimum Size:** 12px (navigation labels)
- **Body Text:** 16px (readable without zoom)
- **Line Height:** 1.5 (comfortable reading)

### Motion
- **Reduced Motion:** Not implemented (future consideration)
- **Animation Duration:** <1s for interactions, 2-4s for ambient

---

## File Structure

```
/src
├── /app
│   ├── /screens           # 16 screen components
│   ├── /components
│   │   ├── /figma         # ImageWithFallback.tsx
│   │   └── IPhoneMockup.tsx
│   ├── /contexts          # UserContext.tsx
│   ├── routes.tsx         # React Router config
│   └── App.tsx            # Root component
├── /imports               # SVG path imports
├── /styles
│   ├── theme.css          # Color tokens, base styles
│   ├── fonts.css          # Google Fonts imports
│   └── index.css          # Tailwind entry point
└── /assets                # Images via figma:asset
```

---

## Design Principles Summary

1. **Dark Mode First:** All screens use dark backgrounds for reduced eye strain and modern aesthetics
2. **Glassmorphism:** Creates depth and visual interest without heavy graphics
3. **Teal as Primary:** Calm, trustworthy, wellness-oriented color
4. **Purple as Secondary:** Creative, supportive, complements teal
5. **High Contrast:** White text on dark ensures readability
6. **Minimal Icons:** Stroke-based, consistent weight
7. **Generous Spacing:** Avoids cramped feeling, improves scannability
8. **Smooth Animations:** Enhances user experience without distraction
9. **Mobile-Optimized:** Every interaction designed for touch
10. **Accessibility-Aware:** Large targets, high contrast, readable text

---

## Version Information

- **Tailwind CSS:** v4.0
- **React Router:** Latest (react-router package)
- **Motion:** Latest (motion/react)
- **Recharts:** Latest (for charts)
- **React:** 18+

---

## Notes for Case Study

This design system creates a cohesive, wellness-focused experience for users with ADHD. The dark mode aesthetic reduces visual overwhelm, while the teal-purple color palette promotes calmness and focus. Glassmorphism adds visual interest without complexity, and generous spacing allows for comfortable interaction. The 20-second animated intro establishes the brand narrative (problem → solution) before the user even interacts with the app.

Every design decision considers the cognitive load on users with attention challenges: clear visual hierarchy, one action per screen during onboarding, progress indicators, and consistent patterns throughout all 16 screens.

---

**Document Created:** March 14, 2026  
**App Version:** Prototype v1.0  
**Design System:** ChronoWeave Dark Wellness Aesthetic
