---
name: Executive Engineering
colors:
  surface: '#0f131d'
  surface-dim: '#0f131d'
  surface-bright: '#353944'
  surface-container-lowest: '#0a0e18'
  surface-container-low: '#171b26'
  surface-container: '#1c1f2a'
  surface-container-high: '#262a35'
  surface-container-highest: '#313540'
  on-surface: '#dfe2f1'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#dfe2f1'
  inverse-on-surface: '#2c303b'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#c0c1ff'
  on-tertiary: '#1000a9'
  tertiary-container: '#8083ff'
  on-tertiary-container: '#0d0096'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#e1e0ff'
  tertiary-fixed-dim: '#c0c1ff'
  on-tertiary-fixed: '#07006c'
  on-tertiary-fixed-variant: '#2f2ebe'
  background: '#0f131d'
  on-background: '#dfe2f1'
  surface-variant: '#313540'
typography:
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 2rem
  margin-sm: 1rem
  margin-lg: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system is engineered specifically for elite technical leaders—Staff/Principal Engineers, Software Architects, and AI/DevOps Directors. It bridges the authority of enterprise architecture with modern developer aesthetics.

The visual direction combines **Dark Mode Precision** with **Restrained Glassmorphism**. The environment communicates high computational competence, architectural clarity, and bespoke polish. It deliberately avoids noisy gamer neon or juvenile hacker tropes, favoring subtle depth, precision lines, ambient indigo-cyan atmospheric glow, and code-native typographic accents. Micro-interactions are snappy (150ms–250ms), purposeful, and physics-informed.

## Colors

The palette leverages a deep slate-to-indigo atmospheric spectrum paired with electric luminescent accents.

- **Base Surfaces**: The primary canvas sits at `#0B0F19` (Obsidian Slate), with elevated card/container surfaces tiered through `#111827` (Card Surface) and `#1E293B` (Interactive/Elevated Surface).
- **Accents**: 
  - `primary` (`#3B82F6`, Radiant Blue): High-priority CTAs, focus indicators, and milestone lines.
  - `secondary` (`#06B6D4`, Neon Cyan): Metric values, system statuses, runtime telemetry, and interactive glows.
  - `tertiary` (`#6366F1`, Electric Indigo): Secondary accents, deep gradients, and architectural role badges.
- **Borders & Dividers**: Subdued translucent slates (`rgba(255, 255, 255, 0.08)` to `rgba(59, 130, 246, 0.25)`) preserve edge acuity without creating visual noise.
- **Text & Foreground**: Primary headings use pure neutral `#F8FAFC`, secondary descriptions use `#94A3B8`, and disabled/annotation tokens resolve to `#64748B`.

## Typography

The typographic hierarchy establishes clear structural differentiation between human narrative and technical telemetry:

- **Headings (Plus Jakarta Sans)**: Used for executive intros, section heads, and project titles. The geometric yet warm curves humanize deep technical profiles while commanding authority.
- **Body Content (Inter)**: Handles long-form project case studies, architectural impact statements, and executive summaries. High x-height and neutral geometry maximize legibility against dark slate backdrops.
- **Code, Telemetry, and Metas (JetBrains Mono)**: Exclusively employed for tech stacks, terminal widgets, timeline timestamps, KPIs, and status badges.
- **Transformations**: All `label-caps` must be rendered in uppercase to accentuate structural rigor.

## Layout & Spacing

The layout is anchored by a structured 12-column grid container capped at `1280px` maximum width to preserve visual tension on ultra-wide screens.

- **Breakpoints**:
  - `Mobile` (< 768px): Single column, `margin-sm` (1rem / 16px), stacked cards, and scrollable horizontal pill racks.
  - `Tablet` (768px – 1024px): 6 to 8 columns, `margin` (2rem / 32px), with timeline rails condensed inline.
  - `Desktop` (> 1024px): 12 columns, `margin-lg` (4rem / 64px), dual-pane layouts (sticky CV sidebar alongside interactive architecture case studies).
- **Rhythm**: Component interiors scale through a strict 8-point rhythmic system (`space-xs` = 4px through `space-xl` = 40px), maintaining predictable spatial harmony across dense telemetry readouts and open narrative blocks.

## Elevation & Depth

Depth in this system is driven by frosted luminosity, translucent stacking, and localized glow boundaries rather than heavy drop shadows:

1. **Layer 0 (Canvas Base)**: Deep flat `#0B0F19` with ambient radial gradients (`radial-gradient(ellipse at top, rgba(99, 102, 241, 0.08), transparent 70%)`).
2. **Layer 1 (Card & Section Containers)**: `rgba(17, 24, 39, 0.75)` with a backdrop blur of `16px` to `24px` and a uniform `1px` outer stroke of `rgba(255, 255, 255, 0.07)`.
3. **Layer 2 (Hover & Active States)**: On cursor hover, cards shift their border to `rgba(6, 182, 212, 0.45)` or `rgba(59, 130, 246, 0.45)`, accompanied by a calibrated glow: `0 0 25px -5px rgba(6, 182, 212, 0.22)`.
4. **Layer 3 (Modals & Overlays)**: Surface `rgba(30, 41, 59, 0.9)`, backdrop blur `32px`, subtle border `rgba(255, 255, 255, 0.15)`, and ambient shadow `0 20px 40px -15px rgba(0, 0, 0, 0.7)`.

## Shapes

The design system employs a rounded visual vocabulary (Value `2`), striking a deliberate balance between surgical precision and refined glass panels:

- **Cards & Architectural Blocks**: `rounded-lg` (1rem / 16px) creates soft framing for data-heavy sections without feeling bubbly.
- **Buttons & Input Fields**: `rounded` (0.5rem / 8px) ensures sharp, tool-like interaction targets.
- **Pills, Tech Tags, and Status Indicators**: `rounded-full` (9999px) strictly reserved for technology chips, live status indicators, and micro-metrics.
- **Code Blocks & Terminal Panels**: `rounded-lg` (1rem / 16px) with an inner `0.5rem` radius on embedded code snippet viewports.

## Components

### Buttons
- **Primary**: Solid background with a linear gradient from `#3B82F6` to `#2563EB`, text `#FFFFFF` (Plus Jakarta Sans 600), `rounded` (8px). Box shadow: `0 0 20px -3px rgba(59, 130, 246, 0.4)`. Active state compresses slightly (`transform: scale(0.98)`).
- **Secondary (Outline / Glass)**: Background `rgba(255, 255, 255, 0.03)`, border `1px solid rgba(255, 255, 255, 0.12)`, text `#F8FAFC`. On hover, border transitions to `#3B82F6` with `rgba(59, 130, 246, 0.1)` fill.
- **Ghost / Minimal**: Monospace text (`JetBrains Mono`), color `#06B6D4`, inline animated hover arrow (`->`).

### Chips & Tech Stack Tags
- Built with `JetBrains Mono` (`code-sm`), pill-shaped (`rounded-full`), padding `4px 12px`.
- **Neutral Stack**: Background `rgba(255, 255, 255, 0.04)`, border `1px solid rgba(255, 255, 255, 0.08)`, text `#94A3B8`.
- **Highlighted / Core Competency**: Background `rgba(6, 182, 212, 0.1)`, border `1px solid rgba(6, 182, 212, 0.3)`, text `#38BDF8`.

### Metric Displays & Stat Counters
- Numeric value rendered in `Plus Jakarta Sans` 700 with a subtle horizontal gradient mask from `#FFFFFF` to `#06B6D4`.
- Accompanying descriptor formatted via `label-caps` in `#64748B`.
- Integrated subtle vertical track indicator along the left edge using a 2px stroke of `rgba(99, 102, 241, 0.5)`.

### Cards & Case Studies
- Card surfaces feature glassmorphism (`rgba(17, 24, 39, 0.7)` with `backdrop-filter: blur(16px)`).
- Border behavior: `1px solid rgba(255, 255, 255, 0.08)` by default, smoothly morphing to a dual-stop cyan/blue glow border on mouse over.
- Header zone contains project status (e.g., `PROD`, `SCALE`, `OSS`) in monospace uppercase tags.

### Timeline Rails (Career & Architecture Milestones)
- Central/left vertical connector line: 2px dashed or gradient line (`rgba(59, 130, 246, 0.3)` to transparent).
- Node markers: 12px circular rings with `#0B0F19` center and a glowing `#06B6D4` pulsing outer ring (`box-shadow: 0 0 8px #06B6D4`).
- Event cards pinned to nodes with asymmetric hover triggers.

### Form Inputs & Terminal Command Filter
- Background `rgba(11, 15, 25, 0.8)`, border `1px solid rgba(255, 255, 255, 0.1)`.
- Focus ring: `0 0 0 2px rgba(6, 182, 212, 0.3)`. Text uses `JetBrains Mono` for search queries, filter inputs, or terminal-style contact forms.