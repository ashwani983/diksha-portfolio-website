# Diksha Gupta — Portfolio Website

Personal portfolio for Diksha Gupta, Sr. Software Developer specializing in Zoho ecosystem solutions.

## Live Site

🔗 [ashwani983.github.io/diksha-portfolio-website](https://ashwani983.github.io/diksha-portfolio-website/)

## Tech Stack

- HTML5 + Tailwind CSS (CDN)
- Vanilla JavaScript (ES6)
- Lucide Icons
- JSON-driven content (no backend)

## Features

- Developer-themed dark UI with monospace accents
- Hero with typing animation and stats counters
- Experience, Skills, Certifications — all rendered from JSON
- Projects with category filtering and detail modals
- Freelance services section with contact buttons
- Chatbot with keyword-matching static Q&A
- Scroll animations via IntersectionObserver
- Fully responsive (mobile, tablet, desktop)

## How to Update Content

Edit the JSON files in `data/` — no HTML changes needed:

| Content | File |
|---------|------|
| Work experience | `data/experience.json` |
| Skills & proficiency | `data/skills.json` |
| Certifications | `data/certifications.json` |
| Projects | `data/projects.json` |
| Chatbot Q&A | `data/chatbot-qa.json` |

## Local Development

```bash
# Serve locally (required for JSON fetch to work)
python3 -m http.server 8000
# Open http://localhost:8000
```

## Deploy

Push to `main` branch → GitHub Pages auto-deploys from root `/`.
