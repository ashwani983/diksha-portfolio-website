# Design Specification — Diksha Gupta Portfolio Website

## 1. Architecture

### 1.1 File Structure

```
diksha-portfolio-website/
├── index.html
├── css/
│   ├── style.css          # Main styles
│   ├── theme.css          # CSS custom properties for light/dark
│   └── responsive.css     # Media queries
├── js/
│   ├── main.js            # App initialization, navigation, scroll
│   ├── theme.js           # Theme toggle logic
│   ├── chatbot.js         # Chatbot engine
│   ├── blog.js            # Blog rendering from JSON
│   ├── projects.js        # Project filtering and modals
│   └── animations.js      # Scroll-triggered animations
├── data/
│   ├── blog/              # Blog post JSON files
│   │   └── posts.json
│   ├── projects.json      # Project data
│   ├── chatbot-qa.json    # Chatbot Q&A pairs
│   └── testimonials.json  # Client testimonials
├── assets/
│   ├── images/            # Profile photo, project screenshots
│   ├── icons/             # SVG icons
│   └── resume/            # Downloadable resume PDF
├── docs/
│   ├── requirements.md
│   ├── design.md
│   └── tasks.md
├── CNAME                  # Custom domain (optional)
├── robots.txt
├── sitemap.xml
└── README.md
```

### 1.2 Data Flow

```
[JSON Data Files] → [JS Modules] → [DOM Rendering] → [User Interaction]
                                                            ↓
                                                    [localStorage]
                                                    (theme, chat history)
```

- All content is static — loaded from JSON files via `fetch()`
- No server-side processing; form submission via Formspree
- Theme state and chatbot conversation persisted in `localStorage`

---

## 2. UI/UX Design

### 2.1 Design System

#### Color Palette

**Light Theme:**
| Token | Value | Usage |
|-------|-------|-------|
| `--primary` | `#2563EB` | CTA buttons, links, active states |
| `--primary-dark` | `#1D4ED8` | Hover states |
| `--accent` | `#7C3AED` | Highlights, badges |
| `--bg-primary` | `#FFFFFF` | Main background |
| `--bg-secondary` | `#F8FAFC` | Section alternating background |
| `--text-primary` | `#1E293B` | Headings |
| `--text-secondary` | `#64748B` | Body text |
| `--border` | `#E2E8F0` | Card borders, dividers |

**Dark Theme:**
| Token | Value | Usage |
|-------|-------|-------|
| `--primary` | `#60A5FA` | CTA buttons, links |
| `--primary-dark` | `#3B82F6` | Hover states |
| `--accent` | `#A78BFA` | Highlights, badges |
| `--bg-primary` | `#0F172A` | Main background |
| `--bg-secondary` | `#1E293B` | Section alternating background |
| `--text-primary` | `#F1F5F9` | Headings |
| `--text-secondary` | `#94A3B8` | Body text |
| `--border` | `#334155` | Card borders, dividers |

#### Typography

| Element | Font | Size | Weight |
|---------|------|------|--------|
| H1 (Hero) | Inter | 3rem / 48px | 800 |
| H2 (Section) | Inter | 2rem / 32px | 700 |
| H3 (Card title) | Inter | 1.25rem / 20px | 600 |
| Body | Inter | 1rem / 16px | 400 |
| Small/Caption | Inter | 0.875rem / 14px | 400 |

Font loading: Google Fonts with `font-display: swap` for performance.

#### Spacing Scale

Base unit: 4px. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96px.

#### Border Radius

- Cards: 12px
- Buttons: 8px
- Badges/Tags: 20px (pill)
- Avatar: 50% (circle)

---

### 2.2 Component Specifications

#### Navigation Bar

```
┌─────────────────────────────────────────────────────────────────┐
│  [Logo/Name]   Home  Experience  Skills  Projects  Blog  Contact  [🌙/☀️] │
└─────────────────────────────────────────────────────────────────┘
```

- Fixed top, 64px height
- Backdrop blur (`backdrop-filter: blur(10px)`) with semi-transparent background
- Active link underline indicator
- Mobile: collapses to hamburger → slide-in drawer from right

#### Hero Section

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                   │
│         DIKSHA GUPTA                                             │
│         Sr. Software Developer                                   │
│         [Typing animation: "Zoho CRM Expert | API Integration   │
│          Specialist | Workflow Automation"]                       │
│                                                                   │
│         [Download Resume]  [Contact Me]                          │
│                                                                   │
│         Bangalore, Karnataka 📍                                  │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

- Full viewport height (100vh)
- Subtle gradient or geometric pattern background
- Particles.js or CSS-only animated background (lightweight)

#### Experience Timeline

```
        ┌──────────────────────┐
   ●────│ Dec 2024 - Present   │
   │    │ Wisethink Info Sol.   │
   │    │ Sr. Zoho Developer    │
   │    │ • Led Zoho One...     │
   │    └──────────────────────┘
   │
   │    ┌──────────────────────┐
   ●────│ Feb 2024 - Dec 2024  │
   │    │ EKI Energy Services   │
   │    │ Sr. Zoho Developer    │
   │    └──────────────────────┘
   │
   │    ┌──────────────────────┐
   ●────│ Nov 2021 - Feb 2024  │
        │ CRM Masters Infotech  │
        │ Zoho Developer        │
        └──────────────────────┘
```

- Alternating left/right cards on desktop
- Single column (left-aligned) on mobile
- Scroll-triggered reveal animation (IntersectionObserver)

#### Skills Section

```
┌─────────────────────────────────────────────────────────────────┐
│  [Zoho Apps]  [Development]  [Tools]     ← Category tabs        │
│                                                                   │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐       │
│  │ Zoho CRM │  │ Creator  │  │  Books   │  │ Project  │       │
│  │  ████░░  │  │  █████░  │  │  ████░░  │  │  ███░░░  │       │
│  │   85%    │  │   90%    │  │   80%    │  │   70%    │       │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘       │
└─────────────────────────────────────────────────────────────────┘
```

- Animated progress bars that fill on scroll into view
- Grouped by category with tab switching
- Hover tooltip with years of experience or detail

#### Project Cards

```
┌──────────────────┐
│  [Project Image] │
│                  │
│  Project Title   │
│  Brief desc...   │
│                  │
│  [CRM] [API]    │  ← tech tags
│  Healthcare 🏥   │  ← industry
│                  │
│  [View Details]  │
└──────────────────┘
```

- 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Filter tabs: All | CRM | Creator | Books | Integration
- Click opens modal overlay with full details

#### Blog Cards

```
┌──────────────────┐
│  [Cover Image]   │
│                  │
│  Blog Title      │
│  Excerpt text... │
│                  │
│  📅 2024-01-15   │
│  ⏱️ 5 min read   │
│  [Zoho] [API]   │  ← tags
└──────────────────┘
```

- Click navigates to full blog post view (rendered in-page from JSON)
- Back button returns to listing
- Markdown content rendered to HTML via simple parser

#### Freelance Section

```
┌─────────────────────────────────────────────────────────────────┐
│  SERVICES                                                        │
│                                                                   │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐               │
│  │ 🔧 Zoho   │  │ 🔗 API    │  │ ⚙️ Workflow │               │
│  │ CRM Setup │  │ Integration│  │ Automation │               │
│  │            │  │            │  │            │               │
│  │ From ₹XX  │  │ From ₹XX  │  │ From ₹XX  │               │
│  │ [Get Quote]│  │ [Get Quote]│  │ [Get Quote]│               │
│  └────────────┘  └────────────┘  └────────────┘               │
│                                                                   │
│  INDUSTRIES SERVED                                               │
│  [Manufacturing] [Finance] [Healthcare] [Logistics] [Real Estate]│
│                                                                   │
│  TESTIMONIALS                                                    │
│  ← "Great work on our CRM..." — Client Name, Company →         │
└─────────────────────────────────────────────────────────────────┘
```

- Service cards with icon, title, brief description, CTA
- Industry badges as pill-shaped tags
- Testimonial carousel with auto-play and manual navigation

#### Chatbot Widget

```
                              ┌──────────────────────┐
                              │  🤖 Ask Diksha       │
                              │──────────────────────│
                              │                      │
                              │  Bot: Hi! How can I  │
                              │  help you today?     │
                              │                      │
                              │       You: What are  │
                              │       your services? │
                              │                      │
                              │  Bot: I offer Zoho   │
                              │  CRM setup, API...   │
                              │                      │
                              │──────────────────────│
                              │  [Quick Replies...]  │
                              │  [Type message... ]  │
                              │  [Send]              │
                              └──────────────────────┘
                                                    [💬]  ← FAB
```

- Floating Action Button (FAB) at bottom-right, 56px
- Chat window: 350px wide, 500px tall (desktop); full-width bottom sheet (mobile)
- Message bubbles: bot (left, gray bg), user (right, primary color bg)
- Quick reply buttons shown after bot responses
- Keyword matching algorithm: tokenize input → match against Q&A keywords → return best match or fallback

#### Contact Form

```
┌─────────────────────────────────────────────────────────────────┐
│  LET'S CONNECT                                                   │
│                                                                   │
│  ┌─────────────────────────┐  ┌─────────────────────────┐      │
│  │  Name*                  │  │  Email*                 │      │
│  └─────────────────────────┘  └─────────────────────────┘      │
│  ┌─────────────────────────────────────────────────────┐        │
│  │  Subject*                                           │        │
│  └─────────────────────────────────────────────────────┘        │
│  ┌─────────────────────────────────────────────────────┐        │
│  │  Message*                                           │        │
│  │                                                     │        │
│  └─────────────────────────────────────────────────────┘        │
│                                                                   │
│  [Send Message]                                                  │
│                                                                   │
│  📧 diku.gupta269@gmail.com  📱 +916201475562                   │
│  [LinkedIn] [GitHub]                                             │
└─────────────────────────────────────────────────────────────────┘
```

---

### 2.3 Animations & Interactions

| Element | Animation | Trigger |
|---------|-----------|---------|
| Hero text | Typing effect (typewriter) | Page load |
| Timeline cards | Fade-in + slide from side | Scroll into viewport |
| Skill bars | Width animation 0% → N% | Scroll into viewport |
| Project cards | Scale up on hover | Hover |
| Stats counters | Count-up from 0 | Scroll into viewport |
| Theme toggle | Rotate icon 180° | Click |
| Chatbot FAB | Pulse animation | Idle (every 10s) |
| Section headings | Fade-in from bottom | Scroll into viewport |

All animations use `IntersectionObserver` API — no scroll event listeners for performance.

---

## 3. Responsive Breakpoints

| Breakpoint | Target | Layout Changes |
|------------|--------|----------------|
| < 480px | Small mobile | Single column, stacked elements, full-width cards |
| 480–768px | Large mobile | Single column, slightly larger cards |
| 768–1024px | Tablet | 2-column grids, side navigation drawer |
| 1024–1440px | Desktop | 3-column grids, full navigation bar |
| > 1440px | Large desktop | Max-width container (1200px), centered |

---

## 4. Chatbot Design

### 4.1 Matching Algorithm

```
User Input → Lowercase → Tokenize (split by space/punctuation)
    → Remove stop words
    → Match tokens against keyword arrays in chatbot-qa.json
    → Score each Q&A pair (matched keywords / total keywords)
    → Return highest scoring answer (threshold > 0.3)
    → If no match: return fallback response
```

### 4.2 Predefined Q&A Categories

| Category | Sample Questions |
|----------|-----------------|
| Services | "What services do you offer?", "Do you do Zoho CRM?" |
| Experience | "How many years experience?", "Where have you worked?" |
| Availability | "Are you available for freelance?", "What's your availability?" |
| Pricing | "How much do you charge?", "What are your rates?" |
| Contact | "How can I reach you?", "What's your email?" |
| Skills | "What technologies do you know?", "Do you know Python?" |
| Location | "Where are you based?", "Do you work remotely?" |

### 4.3 Fallback Response

> "I don't have a specific answer for that. You can reach Diksha directly via the [Contact Form](#connect) or email at diku.gupta269@gmail.com."

---

## 5. Performance Strategy

| Strategy | Implementation |
|----------|---------------|
| Critical CSS | Inline above-the-fold styles in `<head>` |
| Lazy loading | `loading="lazy"` on images below fold |
| Font optimization | `font-display: swap`, preconnect to Google Fonts |
| Image optimization | WebP format with fallback, responsive `srcset` |
| JS deferral | `defer` attribute on all script tags |
| Minimal dependencies | Zero external JS libraries (vanilla only) |

---

## 6. SEO Implementation

```html
<!-- Primary Meta -->
<title>Diksha Gupta — Sr. Software Developer | Zoho Expert</title>
<meta name="description" content="Portfolio of Diksha Gupta, Senior Zoho Developer with 4+ years experience in CRM, Creator, Books, API integrations and workflow automation.">

<!-- Open Graph -->
<meta property="og:title" content="Diksha Gupta — Sr. Software Developer">
<meta property="og:description" content="...">
<meta property="og:image" content="assets/images/og-image.png">
<meta property="og:type" content="website">

<!-- JSON-LD -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Diksha Gupta",
  "jobTitle": "Sr. Software Developer",
  "address": { "@type": "PostalAddress", "addressLocality": "Bangalore", "addressRegion": "Karnataka" },
  "email": "diku.gupta269@gmail.com",
  "telephone": "+916201475562"
}
</script>
```

---

## 7. Accessibility Considerations

- Skip-to-content link as first focusable element
- All images have descriptive `alt` text
- Form inputs have associated `<label>` elements
- Chatbot widget has `role="dialog"` and `aria-label`
- Focus trap inside chatbot and modals when open
- Reduced motion: `@media (prefers-reduced-motion: reduce)` disables animations
- Color is never the sole indicator of state (icons + text accompany color changes)
