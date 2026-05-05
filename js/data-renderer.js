document.addEventListener('DOMContentLoaded', () => {
    const COLORS = { zoho: 'text-dev-accent', dev: 'text-dev-green', tools: 'text-dev-purple' };
    const TAB_NAMES = { zoho: 'Zoho Apps', dev: 'Development', tools: 'Tools' };

    // Experience
    fetch('data/experience.json').then(r => r.json()).then(data => {
        document.getElementById('experience-grid').innerHTML = data.map(e => `
            <div class="bg-dev-card border border-dev-border rounded-lg p-5 animate-on-scroll">
                <div class="flex items-center gap-2 text-dev-green font-mono text-xs mb-2"><i data-lucide="calendar" class="w-3.5 h-3.5"></i>${e.date}</div>
                <h3 class="text-lg font-semibold text-white">${e.role}</h3>
                <p class="text-gray-400 text-sm mb-3">${e.company}</p>
                <ul class="space-y-1.5 text-sm text-gray-400">${e.points.map(p => `<li class="flex gap-2"><i data-lucide="chevron-right" class="w-4 h-4 text-dev-accent shrink-0 mt-0.5"></i>${p}</li>`).join('')}</ul>
            </div>
        `).join('');
        lucide.createIcons();
    }).catch(() => {});

    // Skills
    fetch('data/skills.json').then(r => r.json()).then(data => {
        const categories = Object.keys(data);
        document.getElementById('skills-tabs').innerHTML = categories.map((cat, i) =>
            `<button class="tab-btn font-mono text-xs px-3 py-1.5 rounded border border-dev-border ${i === 0 ? 'bg-dev-accent text-black' : 'text-gray-400 hover:text-dev-accent'}" data-tab="${cat}">${TAB_NAMES[cat] || cat}</button>`
        ).join('');

        document.getElementById('skills-grid').innerHTML = categories.map((cat, i) => `
            <div class="skills-panel ${i === 0 ? 'active grid' : 'hidden grid'} grid-cols-1 sm:grid-cols-2 gap-3" data-panel="${cat}">
                ${data[cat].map(s => `
                    <div class="skill-card bg-dev-card border border-dev-border rounded-lg p-4 animate-on-scroll">
                        <div class="flex justify-between text-sm mb-2">
                            <span class="flex items-center gap-2 text-gray-200"><i data-lucide="${s.icon}" class="w-4 h-4 ${COLORS[cat]}"></i>${s.name}</span>
                            <span class="text-dev-accent font-mono">${s.level}%</span>
                        </div>
                        <div class="h-1.5 bg-dev-border rounded"><div class="skill-fill h-full bg-gradient-to-r from-dev-accent to-dev-purple rounded" data-level="${s.level}"></div></div>
                    </div>
                `).join('')}
            </div>
        `).join('');

        // Tab switching
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.tab-btn').forEach(b => { b.classList.remove('bg-dev-accent', 'text-black'); b.classList.add('text-gray-400'); });
                document.querySelectorAll('.skills-panel').forEach(p => { p.classList.add('hidden'); p.classList.remove('active', 'grid'); });
                btn.classList.add('bg-dev-accent', 'text-black'); btn.classList.remove('text-gray-400');
                const panel = document.querySelector(`[data-panel="${btn.dataset.tab}"]`);
                panel.classList.remove('hidden'); panel.classList.add('active', 'grid');
            });
        });
        lucide.createIcons();
    }).catch(() => {});

    // Certifications
    fetch('data/certifications.json').then(r => r.json()).then(data => {
        document.getElementById('certifications-grid').innerHTML = data.map(c => `
            <div class="bg-dev-card border border-dev-border rounded-lg p-5 text-center animate-on-scroll">
                <i data-lucide="${c.icon}" class="w-10 h-10 ${c.color} mx-auto mb-3"></i>
                <h3 class="font-semibold text-white text-sm">${c.name}</h3>
                <p class="text-gray-400 text-xs mt-1">${c.issuer}</p>
                ${c.date ? `<p class="text-gray-500 text-[10px] mt-1">${c.date}</p>` : ''}
            </div>
        `).join('');
        lucide.createIcons();
    }).catch(() => {});
});
