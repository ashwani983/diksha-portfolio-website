document.addEventListener('DOMContentLoaded', () => {
    // Hamburger
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    hamburger.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', () => mobileMenu.classList.add('hidden')));

    // Scroll to top
    const scrollBtn = document.getElementById('scroll-top');
    window.addEventListener('scroll', () => {
        scrollBtn.classList.toggle('show', window.scrollY > 400);
    });
    scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

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

});
