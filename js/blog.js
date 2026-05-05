document.addEventListener('DOMContentLoaded', () => {
    let posts = [];

    fetch('data/blog/posts.json').then(r => r.json()).then(data => {
        posts = data;
        renderTags();
        renderList('all');
    }).catch(() => {});

    function renderTags() {
        const tags = ['all', ...new Set(posts.flatMap(p => p.tags))];
        document.getElementById('blog-tags').innerHTML = tags.map(t =>
            `<button class="blog-tag-btn${t === 'all' ? ' active' : ''}" data-tag="${t}">${t}</button>`
        ).join('');
        document.getElementById('blog-tags').addEventListener('click', e => {
            if (!e.target.classList.contains('blog-tag-btn')) return;
            document.querySelectorAll('.blog-tag-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderList(e.target.dataset.tag);
        });
    }

    function renderList(tag) {
        const grid = document.getElementById('blog-grid');
        const filtered = tag === 'all' ? posts : posts.filter(p => p.tags.includes(tag));
        grid.innerHTML = filtered.map(p => `
            <div class="blog-card" data-id="${p.id}">
                <h3>${p.title}</h3>
                <p>${p.excerpt}</p>
                <div class="blog-meta">📅 ${p.date} · ⏱️ ${p.readTime} min read</div>
            </div>
        `).join('');
        grid.querySelectorAll('.blog-card').forEach(card => {
            card.addEventListener('click', () => showPost(card.dataset.id));
        });
        document.getElementById('blog-grid').hidden = false;
        document.getElementById('blog-post-view').hidden = true;
    }

    function showPost(id) {
        const post = posts.find(p => p.id === id);
        if (!post) return;
        document.getElementById('blog-article').innerHTML = `
            <h2>${post.title}</h2>
            <div class="blog-meta" style="margin-bottom:24px">📅 ${post.date} · ⏱️ ${post.readTime} min read</div>
            <div>${post.content}</div>
        `;
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
