# Implementation Tasks — Diksha Gupta Portfolio Website

## Task Overview

Total estimated effort: ~45–55 hours across 7 phases.

---

## Phase 1: Project Setup & Foundation (4–5 hours)

| # | Task | Description | Est. |
|---|------|-------------|------|
| 1.1 | Initialize project structure | Create all directories (`css/`, `js/`, `data/`, `assets/`) and placeholder files | 0.5h |
| 1.2 | Create `index.html` skeleton | Semantic HTML5 structure with all section placeholders, meta tags, font links | 1h |
| 1.3 | Set up CSS architecture | Create `theme.css` (custom properties for light/dark), `style.css` (base resets, utilities), `responsive.css` (media queries) | 1.5h |
| 1.4 | Configure GitHub Pages | Create repo, add README, CNAME, robots.txt, sitemap.xml | 0.5h |
| 1.5 | Add assets | Profile photo, placeholder project images, SVG icons, resume PDF | 1h |

**Deliverable:** Empty but structured site loads with correct fonts, colors, and responsive container.

---

## Phase 2: Navigation & Theme System (4–5 hours)

| # | Task | Description | Est. |
|---|------|-------------|------|
| 2.1 | Build fixed navbar | Logo/name, nav links, theme toggle button, sticky positioning with backdrop blur | 1.5h |
| 2.2 | Mobile hamburger menu | Hamburger icon, slide-in drawer, overlay, close on link click | 1.5h |
| 2.3 | Theme toggle (JS) | `theme.js` — toggle class on `<html>`, persist to localStorage, apply on load without flash | 1h |
| 2.4 | Active section highlighting | `IntersectionObserver` to detect current section and highlight corresponding nav link | 1h |

**Deliverable:** Fully functional navigation with smooth scroll, mobile menu, and working dark/light toggle.

---

## Phase 3: Hero & Static Sections (6–7 hours)

| # | Task | Description | Est. |
|---|------|-------------|------|
| 3.1 | Hero section | Full-height hero with name, title, location, CTA buttons, background pattern/gradient | 1.5h |
| 3.2 | Typing animation | JS typewriter effect cycling through roles: "Zoho CRM Expert", "API Integration Specialist", "Workflow Automation" | 1h |
| 3.3 | Experience timeline | Vertical timeline with 3 entries, alternating layout (desktop), single-column (mobile) | 2h |
| 3.4 | Education section | Simple card with B.Tech details | 0.5h |
| 3.5 | Achievements section | "Star of the Month" highlight card + animated counters (100+ users, 40+ projects, 4+ years) | 1h |
| 3.6 | Scroll animations | `animations.js` — IntersectionObserver-based fade-in/slide for timeline, headings, cards | 1h |

**Deliverable:** Hero with typing effect, complete experience timeline, education, and achievements with scroll animations.

---

## Phase 4: Skills & Projects (7–8 hours)

| # | Task | Description | Est. |
|---|------|-------------|------|
| 4.1 | Skills section — HTML/CSS | Category tabs (Zoho Apps, Development, Tools), skill cards with progress bars | 2h |
| 4.2 | Skills — animated bars | JS to animate progress bar width on scroll into view | 1h |
| 4.3 | Create `projects.json` | Populate with 6–8 sample projects across CRM, Creator, Books, Integration categories | 1h |
| 4.4 | Projects section — grid | `projects.js` — fetch JSON, render card grid, implement category filter tabs | 2h |
| 4.5 | Project detail modal | Click card → overlay modal with full description, tech stack, highlights | 1.5h |
| 4.6 | Certifications section | Card layout for 3 certifications with issuing org and year | 1h |

**Deliverable:** Interactive skills display, filterable project grid with modals, certifications listed.

---

## Phase 5: Blog System (6–7 hours)

| # | Task | Description | Est. |
|---|------|-------------|------|
| 5.1 | Create `posts.json` | Write 3–4 sample blog posts (Zoho tips, API integration guide, workflow automation) | 1.5h |
| 5.2 | Blog listing view | `blog.js` — fetch posts, render card grid with title, excerpt, date, tags, read time | 2h |
| 5.3 | Blog post detail view | Click card → render full post content in-page, back button to return to listing | 2h |
| 5.4 | Blog tag filtering | Filter posts by tag/category, update URL hash for direct linking | 1h |

**Deliverable:** Working blog with listing, individual post view, and tag filtering — all from static JSON.

---

## Phase 6: Freelance, Contact & Chatbot (10–12 hours)

| # | Task | Description | Est. |
|---|------|-------------|------|
| 6.1 | Freelance services section | Service cards (CRM Setup, API Integration, Workflow Automation, Training) with icons and CTAs | 1.5h |
| 6.2 | Industries served | Pill-shaped badge row for Manufacturing, Finance, Healthcare, Logistics, Real Estate, Travel | 0.5h |
| 6.3 | Testimonials carousel | `testimonials.json` + auto-rotating carousel with manual prev/next controls | 1.5h |
| 6.4 | Contact form — HTML/CSS | Form fields (name, email, subject, message), validation styling, social links | 1.5h |
| 6.5 | Contact form — JS validation | Client-side validation with error messages, Formspree integration for submission | 1h |
| 6.6 | Create `chatbot-qa.json` | Write 15–20 Q&A pairs covering services, experience, pricing, availability, contact, skills | 1h |
| 6.7 | Chatbot UI | FAB button, chat window (open/close), message bubbles, input field, send button | 2h |
| 6.8 | Chatbot engine | `chatbot.js` — keyword tokenization, stop-word removal, scoring, best-match selection, fallback | 2h |
| 6.9 | Quick reply buttons | Render suggestion buttons after bot responses, handle click to send as user message | 1h |

**Deliverable:** Complete freelance section, working contact form, and functional chatbot with static Q&A.

---

## Phase 7: Polish, Performance & Deployment (5–6 hours)

| # | Task | Description | Est. |
|---|------|-------------|------|
| 7.1 | Responsive testing & fixes | Test all breakpoints (mobile, tablet, desktop), fix layout issues | 1.5h |
| 7.2 | Accessibility audit | Run Lighthouse/axe, fix contrast issues, add ARIA labels, test keyboard navigation | 1.5h |
| 7.3 | Performance optimization | Lazy load images, inline critical CSS, optimize image sizes (WebP), defer JS | 1h |
| 7.4 | SEO finalization | Verify meta tags, Open Graph, JSON-LD, sitemap, robots.txt | 0.5h |
| 7.5 | Cross-browser testing | Test on Chrome, Firefox, Safari, Edge — fix any inconsistencies | 1h |
| 7.6 | Deploy to GitHub Pages | Push to repo, enable Pages, verify live site, test custom domain if applicable | 0.5h |

**Deliverable:** Production-ready, accessible, performant portfolio live on GitHub Pages.

---

## Dependency Graph

```
Phase 1 (Setup)
    ↓
Phase 2 (Nav & Theme)
    ↓
┌───────────────────┬──────────────────┐
Phase 3 (Hero/Static)  Phase 4 (Skills/Projects)  Phase 5 (Blog)
└───────────────────┴──────────────────┘
    ↓
Phase 6 (Freelance/Contact/Chatbot)
    ↓
Phase 7 (Polish & Deploy)
```

Phases 3, 4, and 5 can be worked on in parallel after Phase 2 is complete.

---

## Priority Order (if time-constrained)

1. **Must Have (MVP):** Phases 1–3 + Contact form + Deploy → Basic portfolio live
2. **Should Have:** Phase 4 (Projects/Skills) + Phase 6.7–6.9 (Chatbot)
3. **Nice to Have:** Phase 5 (Blog) + Phase 6.1–6.3 (Freelance details)

---

## Data Files to Create

| File | Content | Priority |
|------|---------|----------|
| `data/projects.json` | 6–8 project entries | Must |
| `data/blog/posts.json` | 3–4 blog posts | Should |
| `data/chatbot-qa.json` | 15–20 Q&A pairs | Must |
| `data/testimonials.json` | 4–5 client testimonials | Nice |

---

## Testing Checklist

- [ ] All sections render correctly on mobile (375px)
- [ ] All sections render correctly on tablet (768px)
- [ ] All sections render correctly on desktop (1440px)
- [ ] Dark/light theme toggle works and persists
- [ ] Navigation smooth-scrolls to correct sections
- [ ] Mobile menu opens/closes correctly
- [ ] Project filter tabs work
- [ ] Project modal opens/closes
- [ ] Blog posts load from JSON and render
- [ ] Blog tag filtering works
- [ ] Contact form validates and submits
- [ ] Chatbot opens, accepts input, returns relevant answers
- [ ] Chatbot fallback works for unknown queries
- [ ] All animations trigger on scroll
- [ ] Keyboard navigation works throughout
- [ ] Lighthouse scores: Performance ≥ 90, Accessibility ≥ 90, SEO ≥ 90
- [ ] No console errors
- [ ] Works in Chrome, Firefox, Safari, Edge
