document.addEventListener('DOMContentLoaded', () => {
    let posts = [];
    fetch('data/blog/posts.json').then(r => r.json()).then(data => { posts = data; renderTags(); renderList('all'); }).catch(() => {});

    function renderTags() {
        const tags = ['all', ...new Set(posts.flatMap(p => p.tags))];
        document.getElementById('blog-tags').innerHTML = tags.map(t =>
            `<button class="blog-tag-btn font-mono text-xs px-3 py-1 rounded border border-dev-border ${t === 'all' ? 'bg-dev-accent text-black' : 'text-gray-400'}" data-tag="${t}">${t}</button>`
        ).join('');
        document.getElementById('blog-tags').addEventListener('click', e => {
            if (!e.target.classList.contains('blog-tag-btn')) return;
            document.querySelectorAll('.blog-tag-btn').forEach(b => { b.classList.remove('bg-dev-accent', 'text-black'); b.classList.add('text-gray-400'); });
            e.target.classList.add('bg-dev-accent', 'text-black'); e.target.classList.remove('text-gray-400');
            renderList(e.target.dataset.tag);
        });
    }

    function renderList(tag) {
        const grid = document.getElementById('blog-grid');
        const filtered = tag === 'all' ? posts : posts.filter(p => p.tags.includes(tag));
        grid.innerHTML = filtered.map(p => `
            <div class="blog-card bg-dev-card border border-dev-border rounded-lg p-5 cursor-pointer hover:border-dev-accent/40 transition" data-id="${p.id}">
                <h3 class="font-semibold text-white text-sm mb-2">${p.title}</h3>
                <p class="text-gray-400 text-xs mb-3">${p.excerpt}</p>
                <div class="text-xs text-gray-500 font-mono">📅 ${p.date} · ⏱️ ${p.readTime} min</div>
            </div>
        `).join('');
        grid.querySelectorAll('.blog-card').forEach(card => card.addEventListener('click', () => showPost(card.dataset.id)));
        document.getElementById('blog-grid').hidden = false;
        document.getElementById('blog-post-view').hidden = true;
        document.getElementById('blog-tags').hidden = false;
    }

    function showPost(id) {
        const post = posts.find(p => p.id === id);
        if (!post) return;
        document.getElementById('blog-article').innerHTML = `<h2>${post.title}</h2><div class="text-xs text-gray-500 font-mono mb-4">📅 ${post.date} · ⏱️ ${post.readTime} min</div><div>${post.content}</div>`;
        document.getElementById('blog-grid').hidden = true;
        document.getElementById('blog-tags').hidden = true;
        document.getElementById('blog-post-view').hidden = false;
    }

    document.getElementById('blog-back').addEventListener('click', () => {
        document.getElementById('blog-grid').hidden = false;
        document.getElementById('blog-tags').hidden = false;
        document.getElementById('blog-post-view').hidden = true;
    });
});
