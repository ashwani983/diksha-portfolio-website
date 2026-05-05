# Requirements — Diksha Gupta Portfolio Website

## 1. Overview

A personal portfolio website for **Diksha Gupta**, Sr. Software Developer specializing in Zoho ecosystem solutions. The site will be built with HTML, CSS, and vanilla JavaScript, hosted on GitHub Pages. It must reflect her professional role, showcase projects, certifications, blog posts, freelance services, and include a chatbot with static answers.

---

## 2. Functional Requirements

### 2.1 Navigation & Layout

| ID | Requirement |
|----|-------------|
| FR-01 | Single-page application (SPA) style with smooth scroll navigation between sections |
| FR-02 | Sticky/fixed navigation bar with links to all major sections |
| FR-03 | Mobile-responsive hamburger menu for screens < 768px |
| FR-04 | Active section highlighting in navigation on scroll |

### 2.2 Dynamic Theme

| ID | Requirement |
|----|-------------|
| FR-05 | Light/Dark mode toggle accessible from the navbar |
| FR-06 | Theme preference persisted in localStorage |
| FR-07 | Smooth CSS transition between themes (no flash on reload) |
| FR-08 | Theme applies consistently across all sections and components |

### 2.3 Hero / About Section

| ID | Requirement |
|----|-------------|
| FR-09 | Hero banner with name, title ("Sr. Software Developer"), location, and a professional tagline |
| FR-10 | Animated typing effect for role/skills rotation |
| FR-11 | Call-to-action buttons: "Download Resume" and "Contact Me" |
| FR-12 | Brief career objective paragraph |

### 2.4 Experience Timeline

| ID | Requirement |
|----|-------------|
| FR-13 | Vertical timeline displaying work history in reverse chronological order |
| FR-14 | Each entry shows: company, role, duration, and key achievements |
| FR-15 | Scroll-triggered fade-in animation for timeline entries |

### 2.5 Skills Section

| ID | Requirement |
|----|-------------|
| FR-16 | Visual skill cards or progress bars grouped by category (Zoho Apps, Development, Tools) |
| FR-17 | Hover/click interaction showing skill details |

### 2.6 Projects Section

| ID | Requirement |
|----|-------------|
| FR-18 | Grid/card layout showcasing key projects |
| FR-19 | Each project card includes: title, description, tech stack tags, client industry |
| FR-20 | Filter/tab functionality by category (CRM, Creator, Books, Integration) |
| FR-21 | Modal or expand view for detailed project description |

### 2.7 Certifications Section

| ID | Requirement |
|----|-------------|
| FR-22 | Card layout displaying certifications with issuing organization and year |
| FR-23 | Certifications: Cyber Security (NIELIT), Data Science (360DigiTMG), CIT (NOU) |
| FR-24 | Optional: link to verification or certificate image |

### 2.8 Blog Section

| ID | Requirement |
|----|-------------|
| FR-25 | Blog listing page with post cards (title, excerpt, date, read time) |
| FR-26 | Individual blog post view rendered from JSON/Markdown data files |
| FR-27 | Blog posts stored as JSON files in a `/data/blog/` directory for easy updates |
| FR-28 | Tags/categories for filtering blog posts |
| FR-29 | Topics relevant to Zoho development, automation, API integrations |

### 2.9 Freelance Section

| ID | Requirement |
|----|-------------|
| FR-30 | Services offered listing (Zoho CRM setup, Creator apps, API integration, workflow automation, training) |
| FR-31 | Pricing tiers or "Get a Quote" CTA |
| FR-32 | Client testimonials/reviews carousel |
| FR-33 | Industries served badges (Manufacturing, Finance, Healthcare, Logistics, Real Estate, Travel) |

### 2.10 Connect / Contact Section

| ID | Requirement |
|----|-------------|
| FR-34 | Contact form with fields: Name, Email, Subject, Message |
| FR-35 | Form validation (client-side) with error messages |
| FR-36 | Form submission via Formspree or similar free service (no backend) |
| FR-37 | Social links: LinkedIn, GitHub, Email, Phone |
| FR-38 | Embedded Google Maps showing Bangalore location (optional) |

### 2.11 Chatbot (Static Answers)

| ID | Requirement |
|----|-------------|
| FR-39 | Floating chat icon (bottom-right) that opens a chat window |
| FR-40 | Predefined Q&A pairs covering: services, availability, pricing, experience, contact |
| FR-41 | Keyword-matching logic to find the best static answer |
| FR-42 | Fallback response when no match found, directing to contact form |
| FR-43 | Chat window with message bubbles (user + bot), timestamp display |
| FR-44 | Quick-reply suggestion buttons for common questions |

### 2.12 Achievements Section

| ID | Requirement |
|----|-------------|
| FR-45 | Highlight "Star of the Month" award and other recognitions |
| FR-46 | Counter animations for stats (e.g., "100+ users served", "40+ projects") |

### 2.13 Education Section

| ID | Requirement |
|----|-------------|
| FR-47 | Education details: B.Tech CSE from MACET, Magadh University |

---

## 3. Non-Functional Requirements

### 3.1 Performance

| ID | Requirement |
|----|-------------|
| NFR-01 | Page load time < 3 seconds on 3G connection |
| NFR-02 | Lighthouse performance score ≥ 90 |
| NFR-03 | Lazy loading for images and below-the-fold content |
| NFR-04 | Minified CSS/JS for production |

### 3.2 Accessibility

| ID | Requirement |
|----|-------------|
| NFR-05 | WCAG 2.1 AA compliance |
| NFR-06 | Semantic HTML5 elements (header, nav, main, section, footer) |
| NFR-07 | ARIA labels for interactive elements and chatbot |
| NFR-08 | Keyboard navigable (tab order, focus indicators) |
| NFR-09 | Sufficient color contrast in both light and dark themes |

### 3.3 Responsiveness

| ID | Requirement |
|----|-------------|
| NFR-10 | Fully responsive: Mobile (< 768px), Tablet (768–1024px), Desktop (> 1024px) |
| NFR-11 | Touch-friendly tap targets (min 44x44px) |

### 3.4 Browser Compatibility

| ID | Requirement |
|----|-------------|
| NFR-12 | Support latest 2 versions of Chrome, Firefox, Safari, Edge |
| NFR-13 | Graceful degradation for older browsers |

### 3.5 SEO

| ID | Requirement |
|----|-------------|
| NFR-14 | Meta tags (title, description, Open Graph, Twitter Card) |
| NFR-15 | Structured data (JSON-LD) for Person schema |
| NFR-16 | Sitemap.xml and robots.txt |

### 3.6 Hosting & Deployment

| ID | Requirement |
|----|-------------|
| NFR-17 | Hosted on GitHub Pages (static files only) |
| NFR-18 | No server-side dependencies — pure HTML/CSS/JS |
| NFR-19 | Custom domain support ready (CNAME file) |

### 3.7 Maintainability

| ID | Requirement |
|----|-------------|
| NFR-20 | Content (projects, blog, certifications) stored in JSON data files for easy updates without code changes |
| NFR-21 | Modular CSS with CSS custom properties for theming |
| NFR-22 | JavaScript organized in ES6 modules |

---

## 4. Content Data Structure

### 4.1 Blog Post (JSON)
```json
{
  "id": "string",
  "title": "string",
  "excerpt": "string",
  "content": "string (HTML or Markdown)",
  "date": "YYYY-MM-DD",
  "tags": ["string"],
  "readTime": "number (minutes)",
  "coverImage": "string (path)"
}
```

### 4.2 Project (JSON)
```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "category": "CRM | Creator | Books | Integration",
  "industry": "string",
  "techStack": ["string"],
  "highlights": ["string"],
  "image": "string (path)"
}
```

### 4.3 Chatbot Q&A (JSON)
```json
{
  "keywords": ["string"],
  "question": "string",
  "answer": "string",
  "quickReplies": ["string"]
}
```

---

## 5. Constraints

- No frameworks (React, Vue, etc.) — vanilla HTML/CSS/JS only
- No backend or database — all data in static JSON files
- No paid services — free-tier tools only (Formspree, GitHub Pages)
- Must work without JavaScript for core content (progressive enhancement)

---

## 6. Out of Scope

- User authentication / login
- CMS or admin panel
- E-commerce / payment processing
- Server-side rendering
- Database-backed blog (use static JSON instead)
