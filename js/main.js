document.addEventListener('DOMContentLoaded', () => {
    // Hamburger
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    hamburger.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', () => mobileMenu.classList.add('hidden')));

    // Active nav
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(n => n.classList.replace('text-dev-accent', 'text-gray-400'));
                const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                if (active) { active.classList.replace('text-gray-400', 'text-dev-accent'); }
            }
        });
    }, { threshold: 0.3 });
    sections.forEach(s => observer.observe(s));

    // Typing
    const phrases = ['Zoho CRM Expert', 'API Integration Specialist', 'Workflow Automation', 'Deluge Scripting Pro'];
    const el = document.getElementById('typing-text');
    let pi = 0, ci = 0, del = false;
    function type() {
        const cur = phrases[pi];
        el.textContent = '> ' + cur.substring(0, ci) + '_';
        if (!del) { ci++; if (ci > cur.length) { del = true; setTimeout(type, 1500); return; } }
        else { ci--; if (ci === 0) { del = false; pi = (pi + 1) % phrases.length; } }
        setTimeout(type, del ? 30 : 70);
    }
    type();

    // Testimonials
    fetch('data/testimonials.json').then(r => r.json()).then(data => {
        const c = document.getElementById('testimonial-carousel');
        c.innerHTML = data.map((t, i) => `<div class="testimonial-card bg-dev-card border border-dev-border rounded-lg p-4${i === 0 ? ' active' : ''}"><p class="text-gray-400 text-sm italic mb-2">"${t.text}"</p><cite class="text-xs text-dev-accent font-semibold">— ${t.name}, ${t.company}</cite></div>`).join('');
        let idx = 0;
        setInterval(() => { const cards = c.querySelectorAll('.testimonial-card'); cards[idx].classList.remove('active'); idx = (idx + 1) % cards.length; cards[idx].classList.add('active'); }, 4000);
    }).catch(() => {});
});
