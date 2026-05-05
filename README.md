# Diksha Gupta — Portfolio Website

A modern, developer-themed personal portfolio website for **Diksha Gupta**, Sr. Software Developer specializing in Zoho ecosystem solutions (CRM, Creator, Books, API Integrations, Workflow Automation).

## 🖥️ Preview

Dark developer-themed single-page portfolio with:
- Hero section with typing animation and stats
- Experience timeline, skills with animated progress bars
- Project showcase with category filtering
- Freelance services and contact section
- AI chatbot with static Q&A

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| HTML5 | Semantic structure |
| Tailwind CSS (CDN) | Utility-first styling |
| Vanilla JavaScript (ES6) | Interactivity, animations |
| Lucide Icons | UI icons |
| JSON data files | Content management (no backend) |

---

## ✨ Features

- **Developer-themed dark UI** — monospace accents, terminal-style typing, code aesthetics
- **JSON-driven content** — update experience, skills, projects, certifications without touching HTML
- **Responsive** — mobile-first design, works on all screen sizes
- **Chatbot** — keyword-matching static Q&A with quick reply suggestions
- **Scroll animations** — IntersectionObserver-based fade-in and skill bar animations
- **Counter animations** — stats count up when scrolled into view
- **Project filtering** — filter by category (CRM, Creator, Books, Integration)
- **Project modals** — click for detailed view
- **Accessibility** — skip link, ARIA labels, keyboard navigable, reduced motion support
- **SEO** — meta tags, Open Graph, JSON-LD structured data, sitemap, robots.txt

---

## 📁 Project Structure

```
diksha-portfolio-website/
├── index.html              # Main page
├── css/
│   └── custom.css          # Animations, chatbot, card glow effects
├── js/
│   ├── main.js             # Nav, typing effect, scroll-to-top
│   ├── data-renderer.js    # Renders experience, skills, certs from JSON
│   ├── projects.js         # Project filtering and modals
│   ├── chatbot.js          # Chatbot engine with keyword matching
│   └── animations.js       # Scroll animations and counters
├── data/
│   ├── experience.json     # Work history
│   ├── skills.json         # Skills by category with levels
│   ├── certifications.json # Certification cards
│   ├── projects.json       # Project portfolio
│   └── chatbot-qa.json     # Chatbot Q&A pairs
├── assets/
│   ├── images/             # Profile photo
│   └── resume/             # Downloadable resume PDF
├── docs/                   # Requirements, design, tasks documentation
├── robots.txt
├── sitemap.xml
└── README.md
```

---

## 📝 How to Update Content

All content is stored in JSON files. Edit these to update the site — no HTML changes needed:

| What to update | File | Format |
|---------------|------|--------|
| Work experience | `data/experience.json` | `{ date, role, company, points[] }` |
| Skills | `data/skills.json` | `{ zoho[], dev[], tools[] }` with `name, level, icon` |
| Certifications | `data/certifications.json` | `{ name, issuer, icon, color, date }` |
| Projects | `data/projects.json` | `{ title, description, category, industry, techStack[], highlights[] }` |
| Chatbot answers | `data/chatbot-qa.json` | `{ keywords[], question, answer, quickReplies[] }` |

---

## 🚀 Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Create a repository named `diksha-portfolio-website` (or any name)
3. Keep it **Public** (required for free GitHub Pages)
4. Do NOT initialize with README (we already have one)

### Step 2: Push Code to GitHub

```bash
cd /path/to/diksha-portfolio-website

# If remote not already added:
git remote add origin https://github.com/YOUR_USERNAME/diksha-portfolio-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Source", select:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
4. Click **Save**
5. Wait 1-2 minutes for deployment

### Step 4: Access Your Site

Your site will be live at:
```
https://YOUR_USERNAME.github.io/diksha-portfolio-website/
```

GitHub will show the URL in the Pages settings once deployed.

### Step 5: Custom Domain (Optional)

1. Buy a domain (e.g., from Namecheap, GoDaddy)
2. In repo Settings → Pages → Custom domain, enter your domain
3. Add DNS records at your domain provider:
   - **A records** pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Or **CNAME** record: `YOUR_USERNAME.github.io`
4. Check "Enforce HTTPS"

---

## 💻 Local Development

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/diksha-portfolio-website.git
cd diksha-portfolio-website

# Serve locally (required for JSON fetch to work)
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

> ⚠️ Opening `index.html` directly (file://) won't work because `fetch()` requires HTTP.

---

## 📄 License

© 2026 Diksha Gupta. All rights reserved.
