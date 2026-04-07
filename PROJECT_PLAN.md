# FactrAI Landing Page - Comprehensive Project Plan

**Georgetown Capstone Project**  
**Project Type:** Essay-Style Landing Page  
**Framework:** Next.js 14 + Tailwind CSS  
**Deployment:** Vercel

---

## 🎯 Project Overview

### Vision
Create a content-rich, visually stunning landing page that showcases the depth and rigor of our Georgetown Capstone research on FactrAI. The page should function as a compelling "visual essay" that combines academic thoroughness with modern web design.

### Design Philosophy
- **Content-First:** Long-form, editorial layout that tells the complete FactrAI story
- **Typography-Driven:** Rich use of Newsreader serif for readability and authority
- **Professional Animations:** Smooth, physics-based animations with Framer Motion for scroll reveals and interactions
- **Interactive Data Visualizations:** Recharts for financial data with hover tooltips and responsive design
- **Academic meets Modern:** Professional, research-backed content with contemporary design

### Core Goals
✅ Showcase full depth of capstone research  
✅ Content-rich, essay-style narrative  
✅ Visually stunning with professional animations (Framer Motion)  
✅ Interactive data visualizations (Recharts)  
✅ Professional typography and layout  
✅ Academic credibility meets modern design  
✅ Performant and accessible  
✅ Vercel deployment-ready

---

## 🎨 Design System

### Color Palette

```typescript
colors: {
  primary: "#06c0d7",      // Cyan/Turquoise (CTAs, links, accents)
  accent: "#f77024",       // Orange (secondary CTAs, highlights)
  "blue-chill": "#117297", // Deep Blue (gradients, depth)
  bunting: "#1b2356",      // Navy Blue (dark sections, primary text)
  ironstone: "#894a3d",    // Brown/Rust (optional accent)
}
```

### Typography

```typescript
fontFamily: {
  newsreader: ["var(--font-newsreader)", "serif"],  // All headings (h1-h6)
  roboto: ["var(--font-roboto)", "sans-serif"],     // Body text, UI elements
}
```

**Hierarchy:**
- **H1 (Hero):** 72px Newsreader, gradient text effect
- **H2 (Sections):** 48px Newsreader, bunting navy
- **H3 (Subsections):** 32px Newsreader
- **H4:** 24px Newsreader
- **Body:** 18px Roboto (larger for readability)
- **Pull Quotes:** 28px Newsreader italic, primary color
- **Captions:** 14px Roboto, gray
- **Stats/Numbers:** 48-64px Newsreader bold, gradient text

### Layout Patterns

- **Full-width hero:** Edge-to-edge gradient
- **Alternating backgrounds:** White → Light gray → Bunting dark
- **Sidebar callouts:** Floating cards with glass effect
- **Two-column layouts:** Text + visual pairings
- **Grid galleries:** 2-3 column stats/features
- **Contained reading width:** Max 1200px for text sections
- **Section padding:** py-20 (80px) for breathing room

---

## 📖 Landing Page Structure (Detailed)

### 1. Hero Section
**Goal:** Capture attention and establish credibility

**Content:**
- Large, editorial-style headline: "The Universal Key to Premium Journalism"
- Extended subheading: Problem statement + solution preview
- Pull quote: "Restoring the economic bridge between world-class journalism and the everyday consumer"
- Georgetown Capstone Project badge (subtle, corner placement)
- Dual CTA buttons: "Read the Full Story" (scroll) + "View Financials" (jump to section)

**Visual Treatment:**
- Full-screen height (100vh)
- Gradient animated background (`gradient-animated` class)
- Logo prominently displayed
- Centered content with max-width container
- Subtle scroll indicator at bottom

---

### 2. Executive Summary
**Goal:** Set the stage with high-level overview

**Content:**
- Opening paragraph from Business Problem Analysis
- "Digital publishers are trapped in a monetization bottleneck where rigid, high-cost subscriptions alienate 95% of high-intent readers, while generative AI platforms simultaneously cannibalize direct traffic through automated summaries."
- Brief solution preview
- Key insight callout: "This 'Subscription Trap' prevents universal access for information workers and creates a systemic crisis"

**Visual Treatment:**
- Clean white background
- Centered text with optimal reading width (700px)
- Large drop cap for opening paragraph
- Pull quote styling for key insight
- Subtle divider line after section

---

### 3. The Problem: A Deep Dive
**Goal:** Establish the severity and scope of the problem with data

**Content Blocks:**

#### 3.1 The Subscription Trap
- Full explanation of binary monetization failure
- Statistics on subscription ceiling (17% global payment rate)
- Subscription fatigue data (12 average services)

#### 3.2 Quantifiable Impact
- **Traffic Collapse:** U.S. search traffic to news publishers ↓38% since late 2024
- **The Bounce:** Publishers lose 95%+ of potential revenue at paywalls
- **Zero-Click Crisis:** 69% of searches in 2025, $2B annual ad revenue loss
- **Productivity Drain:** 9 hours/week wasted on "digital hide-and-seek"
- **Enterprise Cost:** $14.8M lost productivity per 4,000 workers

#### 3.3 Root Cause Analysis
- "5 Whys" summary: Publishers cannot distinguish humans from bots
- Legacy technology problems (third-party cookie deprecation)
- Mental Transaction Cost explanation

#### 3.4 Market Dynamics
- Winner-takes-most hierarchy (NYT, WSJ dominance)
- Aggregator problems (Apple News+, Google News walled gardens)
- Failed micropayment attempts (Blendle case study)

**Visual Treatment:**
- Dark background (bunting navy) for contrast
- Large stat cards in 3-column grid:
  ```
  [95% BOUNCE RATE] [$2B LOST] [9 HRS/WEEK]
  ```
- Gradient text for numbers
- Side-by-side comparison cards (Current Model vs. What's Needed)
- Timeline visualization (CSS-based) showing traffic decline
- Pull quotes from referenced research
- "Glass" cards for key insights

---

### 4. Customer Landscape
**Goal:** Define who suffers from this problem

**Content:**
- Primary audience: Information Workers (25-45 years old)
  - Consultants, VCs, Lawyers, Analysts
  - Cross-disciplinary insight needs
- Secondary: "Polymath" News Junkies (45-60 years old)
- Early adopters: Read-it-later app users, Substack subscribers

**Pain Points:**
- 55% hit paywall barriers causing project delays
- 60% prefer hybrid/flexible access models
- Professional credibility requires diverse sources
- Can't justify 10+ separate subscriptions

**Visual Treatment:**
- Two-column layout: Persona cards + pain point list
- Icon-based visual identifiers for each persona
- Blockquote styling for user pain points
- Gradient accent cards for statistics

---

### 5. The Solution: FactrAI
**Goal:** Present comprehensive solution with technical credibility

**Content Blocks:**

#### 5.1 Solution Statement
"FactrAI is a frictionless, credit-based access layer that utilizes browser-level identity (FedCM) to unlock premium journalism across the web with a single 'Universal Key.'"

#### 5.2 How It Works
- Universal Browser Key (OAuth/JWT token)
- Predictive Credit System (AI handles article valuation)
- Lead-Gen Onramp (credit-to-subscription bridge)

#### 5.3 Quantifiable Impact
**For Publishers:**
- Monetize the 95% bounce
- Yield floor for 69% zero-click traffic
- $2B ad revenue restoration opportunity
- 5-10% recovery = material ARPU uplift

**For Users:**
- Productivity reclamation (9 hours/week saved)
- Financial efficiency ($15-40/mo vs. 10+ separate subscriptions)
- Compressed time + money cost

#### 5.4 Value Propositions
- **"One Key, All Paywalls":** Single identity, auto-unlock
- **The Credit Economy:** No decision fatigue
- **Data Reciprocity:** Unlike Apple News+, we share 1st-party data

**Visual Treatment:**
- Three-step process diagram (CSS-designed):
  ```
  [USER] → [FactrAI Platform] → [Publishers]
     ↑                               ↓
     └─────── Value Flow ────────────┘
  ```
- Split-screen comparison: "For Users | For Publishers"
- Feature highlight cards with icons
- Glass-morphism cards for key benefits
- Before/After comparison table

---

### 6. Technology & Innovation
**Goal:** Demonstrate technical sophistication and moat

**Content:**

#### 6.1 Core Technology Stack
- **Federated Credential Management (FedCM) API**
  - Privacy-preserving identity standard
  - Browser-mediated sign-ins
  - No 3rd-party cookies needed
  
- **SmartReader Yield Algorithm**
  - ML engine for pricing optimization
  - Real-time publisher traffic analysis
  - Market-clearing credit prices
  
- **Authenticated API Gateways**
  - JWT/OAuth 2.0 secure access
  - Decentralized control
  - Session validation

#### 6.2 Cross-Industry Validation
- **ClassPass Model:** Credit-based economy blueprint
  - SmartRate/SmartSpot algorithms
  - Perishable inventory management
  - Proven unit economics
  
- **FedCM Implementation:** Already used by major identity providers
  
- **Wellhub (Gympass):** B2B enterprise success model

**Visual Treatment:**
- Technology badge grid (styled pills)
- Architecture diagram (CSS boxes + arrows)
- Comparison table: FactrAI vs. Apple News+ vs. Traditional Subscriptions
- Timeline showing tech adoption path

---

### 7. Business Model
**Goal:** Demonstrate sustainable economics

**Content:**

#### 7.1 Revenue Streams (3 Sources)

**1. Subscription Revenue (81% of total)**
- Lite: $15/month for 30 credits (~15-20 articles) — 70% of users
- Pro: $40/month for 100 credits + research tools — 25% of users
- Enterprise: $100/user/month unlimited access — 5% of users

**2. Affiliate Fees (12% of total)**
- 15% commission when users convert to direct publisher subscriptions
- Aligns incentives (we're a funnel, not competitor)

**3. Credit Breakage (7% of total)**
- 8% of purchased credits unused (standard SaaS dynamic)

#### 7.2 Cost Structure
- **Publisher Payouts:** 65% of recognized credit revenue (~$0.50/article avg)
- **Operating Expenses:** Scaling from $3.9M (Y1) to $13.7M (Y5)
- **Customer Acquisition:** $75→$40 declining CAC as organic growth kicks in

**Visual Treatment:**
- Pricing comparison table (3 tiers side-by-side)
- Revenue breakdown: CSS-based pie chart visualization
  ```
  81% Subscriptions | 12% Affiliate | 7% Breakage
  ```
- Cost structure: Horizontal bar chart (CSS flex)
- Margin waterfall diagram

---

### 8. Market Opportunity & Strategy
**Goal:** Show market size and capture strategy

**Content:**

#### 8.1 Market Sizing
- **Total Addressable Market (TAM):** $2B+ (current publisher subscription gap)
- **Serviceable Addressable Market (SAM):** ~500K information workers in target segments
- **Serviceable Obtainable Market (SOM):** 19,430 users by Year 5

#### 8.2 Market Dynamics
- 77% of publishers focus on subscriptions
- Only 18% of consumers pay in wealthy nations
- Elite players (NYT, WSJ) prevent niche player growth
- Aggregators withhold first-party data

#### 8.3 Go-to-Market Strategy
- **Channel 1:** B2B partnerships (consulting firms as corporate perk)
- **Channel 2:** Publisher exit-intent integration
- **Channel 3:** Browser extension stores (organic SEO)

**Visual Treatment:**
- TAM/SAM/SOM funnel visualization (CSS-styled)
- Market share opportunity chart
- Channel strategy cards with icons
- Competitive positioning grid

---

### 9. Financial Model: The Full Picture
**Goal:** Demonstrate strong unit economics and path to value

**Content:**

#### 9.1 Investment Highlights Table

| Metric | Value | Benchmark |
|--------|-------|-----------|
| 5-Year Revenue | $13.6M cumulative | 58% CAGR |
| Year 5 ARR | $6.29M | 19,430 active users |
| LTV:CAC Ratio (Y5) | 11.5x | >3x is excellent |
| CAC Payback | 5 months | <12 months target |
| Gross Margin | 35% | Consistent, scalable |
| IRR | 18.4% | Exceeds 10% hurdle |
| Exit Multiple | 4.1x (base case) | 15x for Seed investors |
| Break-Even | Year 6 | Clear path to profitability |

#### 9.2 User Growth & Retention
- Trajectory: 50 users (M1) → 19,430 users (M60)
- Improving retention: 4.5% → 2.0% monthly churn
- Enterprise segment: 0.3% churn (best-in-class)
- Cohort analysis: 81% retention at 60 months for Y5 cohorts

#### 9.3 Unit Economics Deep Dive
- **LTV progression:** $350 (Y1) → $550 (Y5)
- **CAC efficiency:** $75 (Y1) → $40 (Y5)
- **LTV:CAC ratio:** 4.7x → 11.5x
- **Payback period:** 13 months → 5 months
- **Contribution margin:** 35% gross margin

#### 9.4 Marketplace Network Effects
- Publisher growth: 5 → 350 partners over 5 years
- Content unlocked: 1.1M+ articles by Year 5
- Publisher economics: $5.7M total payouts, avg $16K/publisher/year
- Publisher NPS: 45 → 75 (strong satisfaction)

#### 9.5 Capital Efficiency
**CapEx (Year 0): $1.44M**
- Platform development (55%)
- Browser/mobile apps (17%)
- ML/AI engine (14%)

**OpEx Scaling:**
- Year 1: $3.9M (24 employees)
- Year 5: $13.7M (88 employees)
- OpEx growth decelerating: 60% (Y1→Y2) down to 19% (Y4→Y5)

#### 9.6 Enterprise Value Proposition
- Cost avoidance: $35M in Y5 from eliminating subscription complexity
- Productivity gains: $3.9M in research efficiency
- Value-to-cost ratio: 32.4x for enterprise customers
- **Case study:** 200-person consulting firm
  - Annual FactrAI cost: $240K
  - Productivity recapture: $4.2M
  - ROI: 17.3x return (1,734%)

#### 9.7 P&L Summary

| Year | Revenue | Gross Profit | EBITDA | Net Income |
|------|---------|--------------|--------|------------|
| 1 | $216K | $71K | ($3.8M) | ($4.1M) |
| 2 | $969K | $319K | ($5.8M) | ($6.2M) |
| 3 | $2.1M | $704K | ($8.2M) | ($8.6M) |
| 4 | $4.0M | $1.3M | ($10.1M) | ($10.3M) |
| 5 | $6.3M | $2.1M | ($11.6M) | ($11.8M) |

**Cash Flow:**
- Cumulative burn through Y5: $40.2M
- Break-even: Year 6 (Month 54)
- Total capital requirement: $31M over 5 years

#### 9.8 Scenario Analysis

| Scenario | User Growth | 5Y Revenue | Break-Even | Probability |
|----------|-------------|------------|------------|-------------|
| Best Case | +50% | $20.4M | Year 5 | 20% |
| Base Case | As planned | $13.6M | Year 6 | 55% |
| Worst Case | -40% | $8.2M | Never | 25% |

**Key Sensitivities:**
- ±30% user growth → NPV swings from ($4.8M) to $8.5M
- ±2% churn → NPV swings from ($1.5M) to $5.2M
- ±10% publisher payout → NPV swings from ($0.4M) to $4.1M

**Visual Treatment:**
- Large metric cards with gradient backgrounds
- Static line chart (CSS/SVG): User growth 5-year trajectory
- Static bar chart (CSS): Revenue progression Y1-Y5
- Progress bars for retention improvement
- Waterfall chart for unit economics
- Table formatting with hover effects
- Scenario comparison side-by-side cards
- Color-coded metrics (green for positive, gray for neutral)

---

### 10. The Investment Opportunity
**Goal:** Make the investment case compelling

**Content:**

#### 10.1 Current Round: Seed ($3M) - RAISING NOW

**Use of Funds:**
- 55% Platform development (core marketplace infrastructure)
- 17% Browser/mobile app development
- 14% ML/AI yield engine
- 14% Early pilot expansion & first publisher partnerships

#### 10.2 Funding Strategy
- **Seed ($3M @ Year 0):** Platform build, early pilot scale, 12-month runway
- **Series A ($8M @ Year 1):** Scale user acquisition + publisher network
- **Series B ($20M @ Year 3):** Fund path to profitability + market expansion

#### 10.3 Investor Returns (Base Case - $45M Exit)
- **Seed investors (Year 0):** 15.0x multiple, 62.4% IRR
- **Series A (Year 1):** 5.6x multiple, 41.2% IRR
- **Blended (all investors):** 4.1x multiple, 33.5% IRR

#### 10.4 Exit Scenarios

| Exit Type | Timing | Valuation | Probability |
|-----------|--------|-----------|-------------|
| Strategic Acquisition (Publisher) | Year 4-5 | $40-60M | 40% |
| IPO | Year 6-7 | $100M+ | 15% |
| Secondary Sale (PE) | Year 5-6 | $60-80M | 30% |
| Acqui-hire (Downside) | Year 3-4 | $15-25M | 10% |
| Liquidation | Any | <$5M | 5% |

**Most Likely:** Strategic acquisition by major publisher consortium (NYT, WSJ, FT) seeking to modernize monetization and compete with AI aggregators.

**Visual Treatment:**
- Use of funds: CSS pie chart
- Funding timeline: Horizontal timeline with milestones
- Investor returns table with gradient highlights
- Exit scenario cards with probability indicators
- Large CTA button: "Let's Talk" or "Contact Us"

---

### 11. Why FactrAI Wins: Strategic Moat
**Goal:** Explain defensibility and unfair advantages

**Content:**

#### 11.1 Unfair Advantages
1. **Network Effects:** Two-sided marketplace gets stronger with scale
   - More publishers = more value for users
   - More users = more revenue for publishers
   
2. **First-Mover Advantage:** FedCM browser integration creates technical barrier
   - Early adoption of emerging standard
   - Integration complexity deters copycats
   
3. **Data Reciprocity:** Unlike Apple News+, we share 1st-party data back to publishers
   - Makes us a partner, not a parasite
   - Publishers actively want to participate
   
4. **Verified Human Network:** In age of AI scraping, we prove genuine readership
   - 16% of web requests are bot traffic (GPTBot)
   - We provide "clean room" for advertisers
   
5. **Enterprise Lock-In:** B2B contracts create sticky, high-LTV revenue base
   - Corporate benefits are hard to cancel
   - Network effects within organizations

#### 11.2 Competitive Positioning
**FactrAI vs. Competitors:**

| Feature | FactrAI | Apple News+ | Traditional Subs | Blendle (Failed) |
|---------|---------|-------------|------------------|------------------|
| Publisher Data Access | ✅ Yes | ❌ No | ✅ Yes | 🟡 Limited |
| Flexible Pricing | ✅ Credits | ❌ Fixed $10/mo | ❌ $15-40/mo each | ✅ Pay-per-article |
| Decision Fatigue | ✅ Low | ✅ Low | 🟡 Medium | ❌ High |
| Publisher Yield | ✅ Optimized | 🟡 Shared pool | ✅ High | 🟡 Low |
| Human Verification | ✅ Yes | ❌ No | ❌ No | ❌ No |

**Visual Treatment:**
- Five advantage cards with icons and explanations
- Competitive matrix table (styled with brand colors)
- Moat diagram (concentric circles showing defensibility layers)

---

### 12. Vision & Impact
**Goal:** Inspire with long-term vision and social impact

**Content:**

#### 12.1 Long-Term Vision
"Restoring the economic bridge between world-class journalism and the everyday consumer."

- **Phase 1 (Years 1-3):** Prove model with top-tier publishers
- **Phase 2 (Years 4-5):** Scale to 350+ publishers, 20K+ users
- **Phase 3 (Year 6+):** International expansion, new verticals (academic journals, trade publications)

#### 12.2 Social Impact
- **Journalism Sustainability:** Provide viable revenue stream for quality journalism
- **Information Democracy:** Break down paywalls that prevent universal access
- **Productivity Liberation:** Give knowledge workers back 9 hours/week
- **AI Accountability:** Create verified human consumption metrics to fight scraper bots

#### 12.3 Call to Action
- Primary: "Join us in rebuilding the news economy"
- Secondary: "Contact us" / "Download pitch deck"

**Visual Treatment:**
- Large, inspirational quote block
- Phase timeline with visual milestones
- Impact metrics in gradient cards
- Hero-style CTA section with gradient background

---

### 13. Georgetown Capstone Context
**Goal:** Establish academic credibility

**Content:**
- Statement about research methodology
- Academic rigor and data sources
- Team size (2 members)
- Project timeline

#### 13.1 References
Full bibliography from research documents:
- Chrome for Developers (2026) - FedCM API
- Digital Content Next (2025) - Subscription trends
- DoubleVerify (2026) - AI crawler traffic
- FT Strategies (2026) - Dynamic paywalls
- Plus 15+ additional academic and industry sources

**Visual Treatment:**
- Georgetown logo/branding
- Clean, academic formatting for references
- Two-column reference list

---

### 14. Footer
**Content:**
- FactrAI logo
- Navigation: About | Technology | Financials | Team | Contact
- Georgetown Capstone Project © 2026
- Social links (placeholder)
- Legal: Privacy Policy | Terms of Service

**Visual Treatment:**
- Dark background (bunting)
- Multi-column layout
- Subtle top border with gradient

---

## 🎨 CSS-Only Visual Elements & Animations

### Gradient Backgrounds

```css
/* Animated gradient for hero */
.gradient-animated {
  background: linear-gradient(-45deg, #06c0d7, #117297, #1b2356, #f77024);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Static gradients for sections */
.gradient-primary {
  background: linear-gradient(135deg, #06c0d7 0%, #117297 100%);
}

.gradient-accent {
  background: linear-gradient(135deg, #f77024 0%, #894a3d 100%);
}

.gradient-text {
  background: linear-gradient(135deg, #06c0d7, #f77024);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Hover & Transition Effects

```css
/* Card hover lift */
.hover-lift {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08), 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Button hover scale */
.button-hover {
  transition: all 0.3s ease;
}

.button-hover:hover {
  transform: scale(1.02);
  filter: brightness(110%);
}

.button-hover:active {
  transform: scale(0.98);
}

/* Glassmorphism */
.glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.glass-dark {
  background: rgba(27, 35, 86, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Scroll-Triggered Animations (with Intersection Observer)

```css
/* Fade in up animation */
.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Fade in left/right for side-by-side content */
.fade-in-left {
  opacity: 0;
  transform: translateX(-20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in-left.visible {
  opacity: 1;
  transform: translateX(0);
}

.fade-in-right {
  opacity: 0;
  transform: translateX(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in-right.visible {
  opacity: 1;
  transform: translateX(0);
}
```

### CSS Data Visualizations

```css
/* Pie chart using conic-gradient */
.pie-chart {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    #06c0d7 0deg 291.6deg,    /* 81% Subscriptions */
    #f77024 291.6deg 334.8deg, /* 12% Affiliate */
    #117297 334.8deg 360deg    /* 7% Breakage */
  );
}

/* Progress bar */
.progress-bar {
  width: 100%;
  height: 8px;
  background: #e5e7eb;
  border-radius: 9999px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #06c0d7, #117297);
  border-radius: 9999px;
  transition: width 1s ease;
}

/* Bar chart (horizontal) */
.bar-chart-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.bar-chart-label {
  width: 150px;
  font-size: 0.875rem;
}

.bar-chart-bar {
  flex: 1;
  height: 32px;
  background: linear-gradient(90deg, #06c0d7, #117297);
  border-radius: 4px;
  transition: width 1s ease;
}
```

### Shadow Utilities

```css
.shadow-glow-primary {
  box-shadow: 0 0 20px rgba(6, 192, 215, 0.3), 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.shadow-glow-accent {
  box-shadow: 0 0 20px rgba(247, 112, 36, 0.3), 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.shadow-soft {
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.02),
    0 4px 8px rgba(0, 0, 0, 0.03),
    0 8px 16px rgba(0, 0, 0, 0.04);
}

.shadow-elevated {
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.05),
    0 10px 20px rgba(0, 0, 0, 0.08),
    0 20px 40px rgba(0, 0, 0, 0.1);
}
```

---

## 🏗️ Technical Implementation

### Tech Stack

**Core:**
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS v4

**Fonts:**
- next/font (for Google Fonts optimization)
  - Newsreader (serif)
  - Roboto (sans-serif)

**Animation & Visualization Libraries:**
- ✅ **Framer Motion** (v11.0+) - Professional animations, scroll reveals, stagger effects
- ✅ **Recharts** (v2.12+) - Interactive financial charts with hover tooltips
- ✅ **Lucide React** (v0.344+) - Beautiful, consistent icon library

### Project Structure

```
factr-pitch/
├── app/
│   ├── layout.tsx              # Root layout with fonts
│   ├── page.tsx                # Main landing page
│   ├── team/
│   │   └── page.tsx            # Team bios page
│   └── globals.css             # Tailwind + custom CSS
├── components/
│   ├── ui/
│   │   ├── Button.tsx          # Reusable button component
│   │   ├── Card.tsx            # Card component (variants)
│   │   ├── Badge.tsx           # Badge component
│   │   ├── Section.tsx         # Section wrapper
│   │   └── Container.tsx       # Max-width container
│   ├── sections/
│   │   ├── Hero.tsx            # Hero section
│   │   ├── ExecutiveSummary.tsx
│   │   ├── Problem.tsx         # The Problem section
│   │   ├── CustomerLandscape.tsx
│   │   ├── Solution.tsx        # The Solution section
│   │   ├── Technology.tsx      # Technology section
│   │   ├── BusinessModel.tsx   # Business Model section
│   │   ├── Market.tsx          # Market Opportunity
│   │   ├── Financials.tsx      # Financial Model section
│   │   ├── Investment.tsx      # The Investment section
│   │   ├── Moat.tsx            # Strategic Moat section
│   │   ├── Vision.tsx          # Vision & Impact
│   │   ├── References.tsx      # Academic references
│   │   └── Footer.tsx          # Footer
│   └── visualizations/
│       ├── PieChart.tsx        # CSS pie chart
│       ├── BarChart.tsx        # CSS bar chart
│       ├── ProgressBar.tsx     # Progress bar component
│       └── StatCard.tsx        # Animated stat card
├── lib/
│   └── hooks/
│       └── useIntersectionObserver.ts  # Scroll animations
├── public/
│   └── images/
│       ├── factr.png
│       └── logo.png
├── tailwind.config.ts          # Brand colors & config
├── tsconfig.json
├── package.json
└── PROJECT_PLAN.md            # This file
```

### Key Components

#### Button Component

```typescript
// components/ui/Button.tsx
type ButtonVariant = 'primary' | 'accent' | 'dark' | 'outline';

interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}
```

#### Card Component

```typescript
// components/ui/Card.tsx
type CardVariant = 'default' | 'glass' | 'gradient';

interface CardProps {
  variant?: CardVariant;
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}
```

#### StatCard Component

```typescript
// components/visualizations/StatCard.tsx
interface StatCardProps {
  value: string | number;
  label: string;
  description?: string;
  gradient?: boolean;
  icon?: React.ReactNode;
}
```

### Intersection Observer Hook

```typescript
// lib/hooks/useIntersectionObserver.ts
import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
}
```

### Tailwind Configuration

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#06c0d7',
        accent: '#f77024',
        'blue-chill': '#117297',
        bunting: '#1b2356',
        ironstone: '#894a3d',
      },
      fontFamily: {
        newsreader: ['var(--font-newsreader)', 'serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(6, 192, 215, 0.3), 0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'glow-accent': '0 0 20px rgba(247, 112, 36, 0.3), 0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'soft': '0 2px 4px rgba(0, 0, 0, 0.02), 0 4px 8px rgba(0, 0, 0, 0.03), 0 8px 16px rgba(0, 0, 0, 0.04)',
        'elevated': '0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 20px rgba(0, 0, 0, 0.08), 0 20px 40px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
export default config
```

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "next": "14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.4.20",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}
```

**No Additional Libraries Required!**

---

## 🚀 Development Roadmap

### Phase 1: Setup & Foundation
- [x] Document comprehensive plan
- [ ] Initialize Next.js 14 project
- [ ] Configure Tailwind with brand colors
- [ ] Set up fonts (Newsreader + Roboto)
- [ ] Create base layout and globals.css
- [ ] Build reusable UI components

### Phase 2: Core Sections (Content-Heavy)
- [ ] Build Hero section
- [ ] Create Executive Summary
- [ ] Build Problem section (4 subsections)
- [ ] Create Customer Landscape
- [ ] Build Solution section (4 subsections)
- [ ] Create Technology section

### Phase 3: Business & Financials
- [ ] Build Business Model section
- [ ] Create Market Opportunity section
- [ ] Build Financial Model section (comprehensive)
- [ ] Create Investment Opportunity section

### Phase 4: Closing Sections
- [ ] Build Strategic Moat section
- [ ] Create Vision & Impact section
- [ ] Build References section
- [ ] Create Footer
- [ ] Build Team page (placeholder structure)

### Phase 5: Polish & Optimization
- [ ] Implement scroll-triggered animations
- [ ] Add CSS data visualizations
- [ ] Optimize responsive design
- [ ] Test cross-browser compatibility
- [ ] Performance optimization
- [ ] SEO metadata
- [ ] Prepare for Vercel deployment

### Phase 6: Deployment
- [ ] Deploy to Vercel
- [ ] Custom domain setup (if applicable)
- [ ] Final QA testing
- [ ] Documentation for team members to add content

---

## 📝 Content Guidelines

### Writing Style
- **Academic yet Accessible:** Use precise language but avoid jargon where possible
- **Data-Driven:** Support claims with specific statistics from research
- **Narrative Flow:** Connect sections logically, build argument progressively
- **Active Voice:** Prefer active constructions for clarity and impact

### Visual Hierarchy
- **Section Headings:** Always use consistent H2 styling
- **Subsections:** Use H3 for major subsections, H4 for minor
- **Pull Quotes:** Highlight 1-2 key insights per major section
- **Statistics:** Make numbers visually prominent (large text, gradient)
- **Captions:** Add context to all visualizations

### Responsive Design Breakpoints
- **Mobile:** < 640px (single column, larger touch targets)
- **Tablet:** 640px - 1024px (balanced columns)
- **Desktop:** 1024px - 1280px (full multi-column layouts)
- **Large Desktop:** > 1280px (max content width 1400px)

---

## 🎯 Success Metrics

### Performance
- Lighthouse score > 90 across all categories
- First Contentful Paint < 1.5s
- Time to Interactive < 3.5s

### Design
- Consistent brand application across all sections
- Clear visual hierarchy
- Readable typography (18px body minimum)
- Smooth scroll experience

### Content
- Complete research narrative from all source documents
- All key statistics included and visualized
- Academic references properly cited
- Clear call-to-action

---

## 📚 Reference Documents

This landing page draws content from:
1. `Factr AI_Business Problem Analysis.docx`
2. `Factr AI_Business Solution Analysis.docx`
3. `FactrAI_Financial_Model.docx`
4. `Lean Canvas_ FactrAI.docx`
5. Brand assets: `images/factr.png`, `images/logo.png`

---

## 🤝 Team

**Georgetown Capstone Project**
- 2 Team Members (bios to be added later)
- Team page structure: Photo, Name, Role, Bio paragraph, LinkedIn link

---

## 📞 Contact & Next Steps

Once deployed, the landing page will serve as:
1. **Investor pitch tool** (comprehensive business case)
2. **Academic capstone showcase** (research depth + execution)
3. **Portfolio piece** (demonstrates technical + design skills)
4. **Product validation** (gauge market interest)

---

## 🔗 Vercel Deployment

### Deployment Checklist
- [ ] Connect GitHub repository to Vercel
- [ ] Configure build settings (default Next.js settings work)
- [ ] Set environment variables (if any)
- [ ] Custom domain setup (optional)
- [ ] Enable analytics
- [ ] Test production build

### Build Command
```bash
npm run build
```

### Vercel Configuration (vercel.json)
```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "installCommand": "npm install"
}
```

---

**End of Project Plan**

*This document serves as the comprehensive blueprint for the FactrAI landing page. All sections, design decisions, and technical implementations are detailed above. Ready to build!*
