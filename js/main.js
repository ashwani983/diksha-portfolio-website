document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('open'));
    });

    // Active nav on scroll
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-link');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navItems.forEach(n => n.classList.remove('active'));
                const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                if (active) active.classList.add('active');
            }
        });
    }, { threshold: 0.3 });
    sections.forEach(s => observer.observe(s));

    // Typing effect
    const phrases = ['Zoho CRM Expert', 'API Integration Specialist', 'Workflow Automation', 'Deluge Scripting Pro'];
    const el = document.getElementById('typing-text');
    let phraseIdx = 0, charIdx = 0, deleting = false;
    function type() {
        const current = phrases[phraseIdx];
        el.textContent = current.substring(0, charIdx);
        if (!deleting) {
            charIdx++;
            if (charIdx > current.length) { deleting = true; setTimeout(type, 1500); return; }
        } else {
            charIdx--;
            if (charIdx === 0) { deleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; }
        }
        setTimeout(type, deleting ? 40 : 80);
    }
    type();

    // Skills tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.skills-panel').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            document.querySelector(`[data-panel="${btn.dataset.tab}"]`).classList.add('active');
        });
    });

    // Contact form validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', e => {
        let valid = true;
        form.querySelectorAll('[required]').forEach(input => {
            const err = input.parentElement.querySelector('.form-error');
            if (!input.value.trim()) {
                input.classList.add('error');
                err.textContent = 'This field is required';
                valid = false;
            } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
                input.classList.add('error');
                err.textContent = 'Enter a valid email';
                valid = false;
            } else {
                input.classList.remove('error');
                err.textContent = '';
            }
        });
        if (!valid) e.preventDefault();
    });

    // Testimonials carousel
    fetch('data/testimonials.json').then(r => r.json()).then(data => {
        const carousel = document.getElementById('testimonial-carousel');
        data.forEach((t, i) => {
            carousel.innerHTML += `<div class="testimonial-card${i === 0 ? ' active' : ''}"><p>"${t.text}"</p><cite>— ${t.name}, ${t.company}</cite></div>`;
        });
        let idx = 0;
        setInterval(() => {
            const cards = carousel.querySelectorAll('.testimonial-card');
            cards[idx].classList.remove('active');
            idx = (idx + 1) % cards.length;
            cards[idx].classList.add('active');
        }, 4000);
    }).catch(() => {});
});
