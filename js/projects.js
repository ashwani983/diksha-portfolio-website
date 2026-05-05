document.addEventListener('DOMContentLoaded', () => {
    let projects = [];
    fetch('data/projects.json').then(r => r.json()).then(data => { projects = data; render('all'); }).catch(() => {});

    function render(filter) {
        const grid = document.getElementById('projects-grid');
        const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
        grid.innerHTML = filtered.map(p => `
            <div class="project-card bg-dev-card border border-dev-border rounded-lg p-5 cursor-pointer hover:border-dev-accent/40 transition animate-on-scroll visible" data-id="${p.id}">
                <h3 class="font-semibold text-white text-sm mb-2">${p.title}</h3>
                <p class="text-gray-400 text-xs mb-3">${p.description}</p>
                <div class="flex flex-wrap gap-1">${p.techStack.map(t => `<span class="text-[10px] px-2 py-0.5 rounded-full border border-dev-border text-dev-accent">${t}</span>`).join('')}</div>
            </div>
        `).join('');
        grid.querySelectorAll('.project-card').forEach(card => card.addEventListener('click', () => openModal(card.dataset.id)));
    }

    document.getElementById('project-filters').addEventListener('click', e => {
        if (!e.target.classList.contains('filter-btn')) return;
        document.querySelectorAll('.filter-btn').forEach(b => { b.classList.remove('bg-dev-accent', 'text-black'); b.classList.add('text-gray-400'); });
        e.target.classList.add('bg-dev-accent', 'text-black'); e.target.classList.remove('text-gray-400');
        render(e.target.dataset.filter);
    });

    const modal = document.getElementById('project-modal');
    function openModal(id) {
        const p = projects.find(x => x.id === id);
        if (!p) return;
        document.getElementById('modal-body').innerHTML = `
            <h2 class="text-lg font-bold text-white mb-3">${p.title}</h2>
            <p class="text-gray-400 text-sm mb-3">${p.description}</p>
            <p class="text-xs text-gray-400 mb-1"><span class="text-dev-accent font-semibold">Industry:</span> ${p.industry}</p>
            <p class="text-xs text-gray-400 mb-3"><span class="text-dev-accent font-semibold">Stack:</span> ${p.techStack.join(', ')}</p>
            <h3 class="text-sm font-semibold text-white mb-2">Highlights</h3>
            <ul class="space-y-1">${p.highlights.map(h => `<li class="flex gap-2 text-xs text-gray-400"><span class="text-dev-accent">▸</span>${h}</li>`).join('')}</ul>
        `;
        modal.classList.add('active');
    }
    document.getElementById('modal-close').addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('active'); });
});
