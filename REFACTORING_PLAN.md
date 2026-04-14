# FactrAI Slides Refactoring Plan
## Feature Branch: `feature/slides-refactor`

**Date:** April 13, 2026  
**Authors:** Joshua Lee & Danyang Wang  
**Objective:** Refactor monolithic `app/page.tsx` into maintainable slide components with optimized mobile responsiveness

---

## 📊 Current State Analysis

### Critical Issues

#### 1. **Monolithic Component Architecture**
- **File:** `app/page.tsx` 
- **Lines of Code:** 1,895 lines (!)
- **Problems:**
  - Unmaintainable and difficult to debug
  - Hard to collaborate (merge conflicts inevitable)
  - Impossible to lazy-load individual slides
  - No component isolation for testing
  - Difficult to understand slide structure at a glance

#### 2. **Mobile Responsiveness Issues**

**Slide 2 (Summary) - Publisher Logos:**
```tsx
// Current: Uses fixed pixel calculations that break on mobile
animate={{ x: [0, -1408] }} // Hardcoded for desktop
```
- ❌ Logo carousel overflows on small screens
- ❌ Touch targets too small on mobile
- ❌ Animation timing doesn't scale with screen size

**Slide 6 (Technology) - Hub Diagram:**
```tsx
<div className="hidden md:block ...">
```
- ❌ **Completely hidden on mobile** - users miss key technical content
- ❌ No simplified mobile alternative provided
- ❌ Relies on absolute positioning that doesn't adapt

**Slide 11 (Investment) - Three Cards:**
```tsx
<div className="md:scale-110">
```
- ❌ Center card scaling breaks layout on tablet breakpoints
- ❌ Cards don't stack properly on mobile
- ❌ Text becomes unreadable on small screens

**Slide 12 (Founders) - Split Screen:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 h-full">
```
- ❌ Vertical scrolling required on mobile (content cut off)
- ❌ Portraits too large on mobile (160px → should be 120px)
- ❌ Bio cards overflow on small screens

**General Mobile Issues:**
- Touch targets below 44px minimum (accessibility violation)
- Horizontal overflow on several slides
- Text sizes don't scale properly (too small on mobile)
- Animations cause jank on low-powered devices
- No progressive enhancement strategy

#### 3. **Technical Debt**

**Repetitive Animation Patterns:**
```tsx
// Appears 50+ times throughout the file
<motion.div
  initial={{ y: 20, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
>
```
- Should be extracted to reusable animation variants
- Inconsistent timing values (0.5s, 0.6s, 0.8s mixed)
- No centralized animation configuration

**Mixed Styling Approaches:**
```tsx
// Inline styles mixed with Tailwind
<div 
  className="absolute inset-0 -z-10"
  style={{
    background: 'linear-gradient(to right, rgb(6,192,215), rgb(247,112,36))',
  }}
/>
```
- Should use Tailwind utilities or CSS variables
- Inconsistent color values (hex vs rgb)
- Hard to maintain brand consistency

**Duplicate Code Patterns:**
```tsx
// Publisher logo mapping repeated 3 times for carousel
{PUBLISHER_LOGOS.map((logo, index) => (...))}
{PUBLISHER_LOGOS.map((logo, index) => (...))}
{PUBLISHER_LOGOS.map((logo, index) => (...))}
```
- Should be abstracted into a component
- Carousel logic duplicated

**No Component Abstraction:**
- Founder cards could be a reusable `<FounderProfile />` component
- Investment cards should be `<InvestmentCard />` components
- Timeline milestones are hardcoded (should be data-driven)

---

## 🎯 Proposed Architecture

### Directory Structure

```
components/
├── slides/                     # NEW: Individual slide components
│   ├── HeroSlide.tsx          # Slide 1
│   ├── SummarySlide.tsx       # Slide 2
│   ├── ProductivityGapSlide.tsx  # Slide 3
│   ├── SolutionSlide.tsx      # Slide 4
│   ├── DemoSlide.tsx          # Slide 5
│   ├── HowItWorksSlide.tsx    # Slide 6
│   ├── TechnologySlide.tsx    # Slide 7
│   ├── BusinessModelSlide.tsx # Slide 8
│   ├── MarketOpportunitySlide.tsx  # Slide 9
│   ├── FinancialsSlide.tsx    # Slide 10
│   ├── InvestmentSlide.tsx    # Slide 11
│   └── FoundersSlide.tsx      # Slide 12
│
├── slides/shared/             # NEW: Slide-specific reusable components
│   ├── PublisherCarousel.tsx  # Animated logo carousel
│   ├── FounderProfile.tsx     # Founder card with glassmorphism
│   ├── InvestmentCard.tsx     # Investment info cards
│   ├── TimelineMilestone.tsx  # Financial timeline markers
│   ├── TechDiagram.tsx        # Hub-and-spoke tech visualization
│   └── AnimatedSection.tsx    # Wrapper for common animation patterns
│
├── layout/                    # Existing
│   ├── Navbar.tsx
│   ├── Slide.tsx              # Base slide wrapper (keep as is)
│   └── SlideNav.tsx
│
├── ui/                        # Existing (no changes)
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Container.tsx
│   └── ...
│
└── visualizations/            # Existing (no changes)

constants/
├── animations.ts              # UPDATED: Add common animation variants
├── design-tokens.ts           # Existing
└── slides.ts                  # Existing (data for slides)

app/
└── page.tsx                   # REFACTORED: Thin orchestration layer
```

### Component Size Guidelines

- **Target:** Each slide component should be 80-150 lines
- **Maximum:** 200 lines (if exceeded, extract sub-components)
- **Current:** 1,895 lines → ~158 lines average per slide ✅

---

## 🔧 Refactoring Strategy

### Phase 1: Foundation (Prerequisites)

**Step 1.1: Create Animation Variants**
File: `constants/animations.ts`

```typescript
// Add to existing file
export const slideAnimations = {
  fadeInUp: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6 }
  },
  fadeInLeft: {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.6 }
  },
  fadeInRight: {
    initial: { x: 20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.6 }
  },
  scaleIn: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  },
  floatAnimation: {
    animate: { y: [0, -12, 0] },
    transition: { 
      duration: 4, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }
  }
};

export const viewportConfig = {
  once: true,
  margin: '-100px'
};
```

**Step 1.2: Create Directory Structure**
```bash
mkdir -p components/slides
mkdir -p components/slides/shared
```

### Phase 2: Component Extraction (One at a Time)

We'll refactor slides **sequentially** with user approval at each step:

#### **Slide 1: Hero** (Starting Point)

**Current Issues:**
- Founder avatars too large on mobile (80px → should be 64px)
- Text stacking awkward on small screens
- Animations cause layout shift on mobile

**Mobile Optimizations:**
```tsx
// Before: Fixed sizes
<div className="w-20 h-20">

// After: Responsive sizes
<div className="w-16 h-16 sm:w-20 sm:h-20">

// Before: No mobile text scaling
<Heading level="h1" className="mb-6 gradient-text">

// After: Mobile-first text sizing
<Heading level="h1" className="mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl gradient-text">
```

**Component Structure:**
```tsx
// components/slides/HeroSlide.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Slide from '@/components/layout/Slide';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import { slideAnimations, viewportConfig } from '@/constants/animations';

export default function HeroSlide() {
  return (
    <Slide id="hero" background="white">
      <Container className="text-center h-full flex flex-col items-center justify-center px-4">
        {/* Hero Image - Mobile Optimized */}
        <motion.div
          {...slideAnimations.scaleIn}
          {...slideAnimations.floatAnimation}
          whileHover={{ 
            rotateY: 5, 
            rotateX: -3,
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
          className="mb-6 sm:mb-8"
        >
          <Image 
            src="/illustrations/hero-key.svg" 
            alt="Universal Key to Premium Journalism" 
            width={350} 
            height={191}
            className="object-contain w-full max-w-[200px] sm:max-w-[280px] lg:max-w-[350px]"
            priority
            quality={90}
            sizes="(max-width: 640px) 200px, (max-width: 1024px) 280px, 350px"
          />
        </motion.div>

        {/* Main Heading - Mobile Responsive */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Heading 
            level="h1" 
            className="mb-4 sm:mb-6 gradient-text text-3xl sm:text-4xl lg:text-5xl"
          >
            The Universal Key to Premium Journalism
          </Heading>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <Text variant="lead" className="max-w-3xl mx-auto text-gray-600 text-base sm:text-lg">
            Premium Insights, Minus the Paywalls
          </Text>
        </motion.div>

        {/* Founders Mini Avatars - Mobile Optimized */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center justify-center"
        >
          {/* Danyang */}
          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-3 border-cyan-400 shadow-lg mb-2">
              <Image
                src="/team/danyang.png"
                alt="Danyang Wang"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 64px, 80px"
                priority
              />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-gray-900">Danyang Wang</p>
            <div className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-xs font-semibold px-3 py-1 rounded-full mt-1">
              Hustler
            </div>
          </div>

          {/* Joshua */}
          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-3 border-orange-400 shadow-lg mb-2">
              <Image
                src="/team/joshua.png"
                alt="Joshua Lee"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 64px, 80px"
                priority
              />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-gray-900">Joshua Lee</p>
            <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full mt-1">
              Hacker
            </div>
          </div>
        </motion.div>

        {/* Subtext */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-6 sm:mt-8"
        >
          <Text variant="body" className="text-gray-500 max-w-4xl mx-auto text-xs sm:text-sm">
            Restoring the economic bridge between world-class journalism and the everyday consumer
          </Text>
        </motion.div>
      </Container>
    </Slide>
  );
}
```

**Testing Checklist for Slide 1:**
- [ ] Desktop (1920px+): Proper spacing and sizing
- [ ] Tablet (768px-1024px): Images and text scale appropriately
- [ ] Mobile (375px-640px): No horizontal overflow, readable text
- [ ] Touch targets: All interactive elements ≥44px
- [ ] Animations: Smooth on mobile, no jank
- [ ] Images: Load properly with responsive sizes

---

#### **Slide 2-12: Incremental Refactoring**

For each remaining slide, we'll follow the same pattern:

1. **Extract** slide to `components/slides/[Name]Slide.tsx`
2. **Identify** mobile issues specific to that slide
3. **Fix** responsive breakpoints and touch targets
4. **Test** on mobile, tablet, desktop
5. **User approval** before moving to next slide
6. **Commit** when approved

**Per-Slide Mobile Fixes:**

**Slide 2 (Summary):**
- ✅ Fix publisher carousel overflow
- ✅ Make stat cards stack on mobile (2x2 → 1x4)
- ✅ Responsive text sizing

**Slide 3 (Productivity Gap):**
- ✅ Stack pain point cards vertically on mobile
- ✅ Reduce image sizes on small screens
- ✅ Improve pill wrapping

**Slide 4 (Solution):**
- ✅ Stack value prop cards on mobile
- ✅ App mockup scales properly
- ✅ Text doesn't overflow

**Slide 5 (Demo):**
- ✅ Button sizing appropriate for touch
- ✅ Feature pills wrap cleanly

**Slide 6 (How It Works):**
- ✅ Three-card flow stacks vertically on mobile
- ✅ Images scale proportionally
- ✅ Remove connecting line animation on mobile (visual clutter)

**Slide 7 (Technology):**
- ✅ **Show tech diagram on mobile** (simplified version)
- ✅ Reduce diagram complexity for small screens
- ✅ Stack content vertically

**Slide 8 (Business Model):**
- ✅ Revenue stream cards stack on mobile
- ✅ Subscription tiers image scales
- ✅ Key economics list readable

**Slide 9 (Market Opportunity):**
- ✅ TAM visualization simplifies on mobile
- ✅ Floating logos reduce on small screens
- ✅ Text hierarchy clear

**Slide 10 (Financials):**
- ✅ Timeline stacks vertically on mobile
- ✅ Metric cards in 2x2 grid on mobile
- ✅ Numbers remain legible

**Slide 11 (Investment):**
- ✅ **Fix center card scaling** (causes layout break)
- ✅ Three columns stack on mobile
- ✅ Use of funds bars visible

**Slide 12 (Founders):**
- ✅ **Fix vertical scrolling issue**
- ✅ Reduce portrait size on mobile (256px → 120px)
- ✅ Bio cards don't overflow
- ✅ Stack founders vertically on mobile

---

### Phase 3: Shared Component Extraction

After all slides are refactored, extract reusable patterns:

#### **PublisherCarousel.tsx**
```tsx
// components/slides/shared/PublisherCarousel.tsx
interface PublisherCarouselProps {
  logos: string[];
  speed?: number; // Animation duration
}

export default function PublisherCarousel({ logos, speed = 30 }: PublisherCarouselProps) {
  // Responsive animation calculation
  const logoWidth = 128; // desktop
  const gap = 48;
  const totalWidth = logos.length * (logoWidth + gap);
  
  return (
    <div className="mb-8 sm:mb-12 overflow-hidden w-full">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10" />
      
      {/* Scrolling container - Mobile optimized */}
      <motion.div
        className="flex gap-8 sm:gap-12 items-center min-w-max"
        animate={{ x: [0, -totalWidth] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Triple logos for seamless loop */}
        {[1, 2, 3].map((set) =>
          logos.map((logo, index) => (
            <div
              key={`logo-${set}-${index}`}
              className="flex-shrink-0 w-20 sm:w-24 lg:w-32 h-10 sm:h-12 lg:h-16 relative grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={`/publishers/${logo}`}
                alt={logo.replace('.png', '')}
                fill
                sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 128px"
                className="object-contain"
              />
            </div>
          ))
        )}
      </motion.div>
    </div>
  );
}
```

#### **FounderProfile.tsx**
```tsx
// components/slides/shared/FounderProfile.tsx
interface FounderProfileProps {
  name: string;
  title: string;
  role: 'Hustler' | 'Hacker';
  image: string;
  bio: string;
  email: string;
  linkedin: string;
  glowColor: 'cyan' | 'orange';
}

export default function FounderProfile({ 
  name, 
  title, 
  role, 
  image, 
  bio, 
  email, 
  linkedin, 
  glowColor 
}: FounderProfileProps) {
  const colorClasses = {
    cyan: {
      glow: 'bg-cyan-400/30',
      border: 'border-cyan-600',
      badge: 'from-cyan-500 to-cyan-600',
      hover: 'hover:text-cyan-600 hover:bg-cyan-50'
    },
    orange: {
      glow: 'bg-orange-400/30',
      border: 'border-orange-600',
      badge: 'from-orange-500 to-orange-600',
      hover: 'hover:text-orange-600 hover:bg-orange-50'
    }
  };

  const colors = colorClasses[glowColor];

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ duration: 0.3 }}
      className="relative mb-8"
    >
      {/* Portrait - Mobile Responsive */}
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
        {/* Glow ring */}
        <div className={`absolute -inset-4 ${colors.glow} rounded-full blur-xl`} />
        <Image
          src={image}
          alt={`${name} - ${title}`}
          fill
          className="object-cover relative z-10"
          sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 256px"
        />
      </div>

      {/* Info Card - Mobile Optimized */}
      <div className="backdrop-blur-lg bg-white/80 rounded-2xl p-4 sm:p-6 shadow-xl border border-white/50 max-w-md mt-4">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className={`text-${glowColor}-600 font-semibold mb-1 text-sm sm:text-base`}>{title}</p>
        <div className={`inline-block bg-gradient-to-r ${colors.badge} text-white text-xs font-semibold px-3 py-1 rounded-full mb-4`}>
          {role}
        </div>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
          {bio}
        </p>
        <div className="flex gap-3 justify-center">
          <a
            href={`mailto:${email}`}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-700 ${colors.hover} rounded-lg transition-colors`}
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">Email</span>
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-700 ${colors.hover} rounded-lg transition-colors`}
          >
            <ExternalLink className="w-4 h-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
```

#### **AnimatedSection.tsx**
```tsx
// components/slides/shared/AnimatedSection.tsx
interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn';
  delay?: number;
  className?: string;
}

export default function AnimatedSection({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0,
  className = ''
}: AnimatedSectionProps) {
  const variants = slideAnimations[animation];
  
  return (
    <motion.div
      {...variants}
      transition={{ ...variants.transition, delay }}
      viewport={viewportConfig}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

---

### Phase 4: Main Page Refactor

After all slides are extracted, `app/page.tsx` becomes a thin orchestration layer:

```tsx
// app/page.tsx - AFTER REFACTORING
'use client';

import Navbar from '@/components/layout/Navbar';
import SlideNav from '@/components/layout/SlideNav';
import HeroSlide from '@/components/slides/HeroSlide';
import SummarySlide from '@/components/slides/SummarySlide';
import ProductivityGapSlide from '@/components/slides/ProductivityGapSlide';
import SolutionSlide from '@/components/slides/SolutionSlide';
import DemoSlide from '@/components/slides/DemoSlide';
import HowItWorksSlide from '@/components/slides/HowItWorksSlide';
import TechnologySlide from '@/components/slides/TechnologySlide';
import BusinessModelSlide from '@/components/slides/BusinessModelSlide';
import MarketOpportunitySlide from '@/components/slides/MarketOpportunitySlide';
import FinancialsSlide from '@/components/slides/FinancialsSlide';
import InvestmentSlide from '@/components/slides/InvestmentSlide';
import FoundersSlide from '@/components/slides/FoundersSlide';
import FloatingPufferfish from '@/components/slides/shared/FloatingPufferfish';

export default function Home() {
  return (
    <>
      <Navbar />
      <SlideNav />
      
      <HeroSlide />
      <SummarySlide />
      <ProductivityGapSlide />
      <SolutionSlide />
      <DemoSlide />
      <HowItWorksSlide />
      <TechnologySlide />
      <BusinessModelSlide />
      <MarketOpportunitySlide />
      <FinancialsSlide />
      <InvestmentSlide />
      <FoundersSlide />
      
      <FloatingPufferfish />
    </>
  );
}
```

**Result:** ~30 lines instead of 1,895 lines ✅

---

## ✅ Testing Strategy

### Mobile Testing Checklist (Per Slide)

Test on these viewport sizes:
- [ ] **Mobile Small:** 375px (iPhone SE)
- [ ] **Mobile Large:** 414px (iPhone Pro Max)
- [ ] **Tablet Portrait:** 768px (iPad)
- [ ] **Tablet Landscape:** 1024px (iPad Pro)
- [ ] **Desktop:** 1920px

**For Each Slide, Verify:**
- [ ] No horizontal scroll overflow
- [ ] Text is readable (minimum 14px on mobile)
- [ ] Touch targets ≥44px (accessibility requirement)
- [ ] Images load with appropriate sizes
- [ ] Animations don't cause jank (run at 60fps)
- [ ] Layout doesn't break at breakpoint transitions
- [ ] Content hierarchy clear on all screen sizes

### Accessibility Testing

- [ ] Color contrast ratios meet WCAG AA standards
- [ ] All interactive elements have focus states
- [ ] Keyboard navigation works
- [ ] Screen reader can navigate slides
- [ ] Touch targets meet iOS/Android guidelines

### Performance Testing

- [ ] Lighthouse Mobile score ≥90
- [ ] First Contentful Paint <2s on 3G
- [ ] Largest Contentful Paint <2.5s
- [ ] Cumulative Layout Shift <0.1
- [ ] No layout thrashing from animations

---

## 📈 Success Metrics

### Code Quality Metrics

**Before:**
- Lines per file: 1,895 (app/page.tsx)
- Component reusability: Low (hardcoded everywhere)
- Mobile responsiveness: 6/12 slides broken
- Animation consistency: Low (50+ variants)

**After:**
- Lines per file: <200 (all slide components)
- Component reusability: High (shared components)
- Mobile responsiveness: 12/12 slides optimized
- Animation consistency: High (centralized variants)

### User Experience Metrics

- [ ] Mobile bounce rate decreases by >20%
- [ ] Mobile session duration increases
- [ ] All slides viewable on mobile (currently 11/12)
- [ ] Zero horizontal scroll issues
- [ ] Touch interactions feel native

### Developer Experience Metrics

- [ ] Time to find and edit a slide: <30 seconds (vs 5+ minutes)
- [ ] Merge conflicts reduced by >80%
- [ ] New slide creation: <1 hour (vs full day)
- [ ] Component test coverage: >70%

---

## 🚀 Implementation Timeline

### Week 1: Foundation + Slides 1-4
- **Day 1:** Create animation variants, directory structure
- **Day 2:** Refactor Slide 1 (Hero) + test
- **Day 3:** Refactor Slide 2 (Summary) + test
- **Day 4:** Refactor Slide 3 (Productivity Gap) + test
- **Day 5:** Refactor Slide 4 (Solution) + test

### Week 2: Slides 5-8
- **Day 1:** Refactor Slide 5 (Demo) + test
- **Day 2:** Refactor Slide 6 (How It Works) + test
- **Day 3:** Refactor Slide 7 (Technology) + test (CRITICAL: mobile diagram)
- **Day 4:** Refactor Slide 8 (Business Model) + test
- **Day 5:** Code review and fixes

### Week 3: Slides 9-12 + Integration
- **Day 1:** Refactor Slide 9 (Market) + test
- **Day 2:** Refactor Slide 10 (Financials) + test
- **Day 3:** Refactor Slide 11 (Investment) + test (CRITICAL: card scaling)
- **Day 4:** Refactor Slide 12 (Founders) + test
- **Day 5:** Extract shared components

### Week 4: Polish + Testing
- **Day 1:** Refactor app/page.tsx to use all new components
- **Day 2:** Comprehensive mobile testing
- **Day 3:** Performance optimization
- **Day 4:** Accessibility audit
- **Day 5:** Final review and merge to main

---

## 🔄 Iterative Process (Per Slide)

For each slide refactor, follow this workflow:

1. **Create** component file in `components/slides/`
2. **Extract** code from `app/page.tsx`
3. **Identify** mobile issues
4. **Implement** responsive fixes
5. **Test** on mobile/tablet/desktop
6. **Show** to user for approval
7. **User commits** when satisfied
8. **Move** to next slide

**No bulk commits** - one slide at a time ensures quality.

---

## 📝 Commit Message Guidelines

Use this format for consistency:

```
feat(slides): refactor [SlideName] component

- Extract to components/slides/[Name]Slide.tsx
- Fix mobile responsiveness issues
- Improve touch targets (44px minimum)
- Optimize image sizing for mobile
- Add responsive text scaling

Mobile fixes:
- [List specific mobile improvements]

Lines: [Before] → [After]
```

Example:
```
feat(slides): refactor Hero component

- Extract to components/slides/HeroSlide.tsx
- Fix mobile responsiveness issues
- Improve touch targets (44px minimum)
- Optimize founder avatar sizing
- Add responsive text scaling

Mobile fixes:
- Reduce avatar size from 80px to 64px on mobile
- Stack founders vertically on small screens
- Scale heading from text-5xl to text-3xl on mobile
- Add proper image responsive sizes

Lines: 1895 → 145
```

---

## 🛠 Tools & Commands

### Development
```bash
# Start dev server
npm run dev

# Build for production (test build issues)
npm run build

# Type checking
npx tsc --noEmit

# Lint
npm run lint
```

### Testing on Mobile

**Option 1: Local Network (Recommended)**
```bash
# Start dev server
npm run dev

# Get local IP
ipconfig getifaddr en0  # macOS
# or
ip addr show  # Linux

# Access from mobile device
http://[YOUR_IP]:3000
```

**Option 2: Browser DevTools**
- Chrome DevTools → Device Mode
- Toggle device toolbar (Cmd+Shift+M)
- Select mobile device presets

### Git Workflow
```bash
# Ensure you're on feature branch
git branch  # Should show feature/slides-refactor

# After each slide approval
git add components/slides/[Name]Slide.tsx
git commit -m "feat(slides): refactor [Name] component"

# Push to remote
git push origin feature/slides-refactor
```

---

## 🚨 Rollback Plan

If any slide refactor breaks functionality:

1. **Immediate:** Revert the last commit
   ```bash
   git revert HEAD
   ```

2. **Verify:** Test the reverted state
   ```bash
   npm run dev
   # Manually test the affected slide
   ```

3. **Fix:** Address the issue in a new commit

4. **No merge to main** until all slides pass testing

---

## 📚 References

### Mobile Design Guidelines
- [iOS Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [Material Design - Touch Targets](https://m3.material.io/foundations/accessible-design/accessibility-basics#28032e45-c598-450c-b355-f9fe737b1cd8)
- [WCAG 2.1 Touch Target Size](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)

### Performance
- [Web Vitals](https://web.dev/vitals/)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Framer Motion Performance](https://www.framer.com/motion/guide-reduce-bundle-size/)

### React/Next.js Best Practices
- [React Component Patterns](https://kentcdodds.com/blog/colocation)
- [Next.js App Router](https://nextjs.org/docs/app)
- [TypeScript Best Practices](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

---

## ✅ Definition of Done

A slide refactor is **complete** when:

- [ ] Component created in `components/slides/[Name]Slide.tsx`
- [ ] Code extracted from `app/page.tsx`
- [ ] Mobile responsiveness tested on 3+ viewport sizes
- [ ] Touch targets verified ≥44px
- [ ] No horizontal overflow on any breakpoint
- [ ] Animations smooth on mobile (no jank)
- [ ] Images use responsive sizes
- [ ] Text scales appropriately
- [ ] User has tested in browser
- [ ] User has approved the refactor
- [ ] Code is committed with proper message
- [ ] Component is <200 lines (or sub-components extracted)

---

## 🎉 Expected Outcomes

After completing this refactoring:

1. **For Developers:**
   - Find and edit any slide in <30 seconds
   - Add new slides in <1 hour
   - Minimal merge conflicts
   - Clear component boundaries
   - Reusable patterns

2. **For Users (Mobile):**
   - All 12 slides viewable on phone
   - No horizontal scrolling
   - Readable text sizes
   - Smooth animations
   - Fast load times

3. **For Maintenance:**
   - Easy to onboard new team members
   - Simple to test individual slides
   - Clear separation of concerns
   - Documented mobile patterns

---

**Ready to begin?** Start with Phase 1, Step 1.1 (Animation Variants) and proceed slide-by-slide with user approval at each step.

**Current Status:** Planning complete, ready for implementation.

**Next Step:** Toggle to Act Mode and create the animation variants in `constants/animations.ts`.
