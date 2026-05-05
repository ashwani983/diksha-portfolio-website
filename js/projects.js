document.addEventListener('DOMContentLoaded', () => {
    let projects = [];

    fetch('data/projects.json').then(r => r.json()).then(data => {
        projects = data;
        render('all');
    }).catch(() => {});

    function render(filter) {
        const grid = document.getElementById('projects-grid');
        const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
        grid.innerHTML = filtered.map(p => `
            <div class="project-card animate-on-scroll visible" data-id="${p.id}">
                <h3>${p.title}</h3>
                <p>${p.description}</p>
                <div class="project-tags">${p.techStack.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>
            </div>
        `).join('');

        grid.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', () => openModal(card.dataset.id));
        });
    }

    // Filters
    document.getElementById('project-filters').addEventListener('click', e => {
        if (!e.target.classList.contains('filter-btn')) return;
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        render(e.target.dataset.filter);
    });

    // Modal
    const modal = document.getElementById('project-modal');
    function openModal(id) {
        const p = projects.find(x => x.id === id);
        if (!p) return;
        document.getElementById('modal-body').innerHTML = `
            <h2>${p.title}</h2>
            <p>${p.description}</p>
            <p><strong>Industry:</strong> ${p.industry}</p>
            <p><strong>Tech Stack:</strong> ${p.techStack.join(', ')}</p>
            <h3>Highlights</h3>
            <ul>${p.highlights.map(h => `<li>${h}</li>`).join('')}</ul>
        `;
        modal.classList.add('active');
    }
    document.getElementById('modal-close').addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('active'); });
});
