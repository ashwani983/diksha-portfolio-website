document.addEventListener('DOMContentLoaded', () => {
    const animObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                const fill = entry.target.querySelector('.skill-fill');
                if (fill) fill.style.width = fill.dataset.level + '%';
                animObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    const counterObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = +el.dataset.count;
                let current = 0;
                const step = Math.ceil(target / 40);
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) { current = target; clearInterval(timer); }
                    el.textContent = current;
                }, 30);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    function observeAll() {
        document.querySelectorAll('.animate-on-scroll:not(.observed)').forEach(el => {
            el.classList.add('observed');
            animObserver.observe(el);
        });
        document.querySelectorAll('.stat-number:not(.observed)').forEach(el => {
            el.classList.add('observed');
            counterObserver.observe(el);
        });
    }

    observeAll();

    // Watch for dynamically added elements
    new MutationObserver(observeAll).observe(document.body, { childList: true, subtree: true });
});
