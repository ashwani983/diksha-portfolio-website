document.addEventListener('DOMContentLoaded', () => {
    const fab = document.getElementById('chatbot-fab');
    const win = document.getElementById('chatbot-window');
    const closeBtn = document.getElementById('chatbot-close');
    const input = document.getElementById('chatbot-input');
    const sendBtn = document.getElementById('chatbot-send');
    const messages = document.getElementById('chatbot-messages');
    const quickReplies = document.getElementById('chatbot-quick-replies');
    let qaData = [];
    let isOpen = false;

    fetch('data/chatbot-qa.json').then(r => r.json()).then(data => { qaData = data; }).catch(() => {});

    fab.addEventListener('click', () => {
        isOpen = !isOpen;
        win.hidden = !isOpen;
        if (isOpen && messages.children.length === 0) {
            addMsg('bot', "Hi! 👋 I'm Diksha's assistant. Ask me about services, experience, or availability!");
            showQuickReplies(['What services do you offer?', 'Years of experience?', 'Are you available?']);
        }
        if (isOpen) input.focus();
    });

    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        isOpen = false;
        win.hidden = true;
    });

    sendBtn.addEventListener('click', send);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') send(); });

    function send() {
        const text = input.value.trim();
        if (!text) return;
        addMsg('user', text);
        input.value = '';
        quickReplies.innerHTML = '';
        const answer = findAnswer(text);
        setTimeout(() => {
            addMsg('bot', answer.text);
            if (answer.quickReplies) showQuickReplies(answer.quickReplies);
        }, 400);
    }

    function addMsg(type, text) {
        const div = document.createElement('div');
        div.className = `chat-msg ${type}`;
        div.textContent = text;
        messages.appendChild(div);
        messages.scrollTop = messages.scrollHeight;
    }

    function showQuickReplies(replies) {
        quickReplies.innerHTML = replies.map(r => `<button class="quick-reply-btn">${r}</button>`).join('');
        quickReplies.querySelectorAll('.quick-reply-btn').forEach(btn => {
            btn.addEventListener('click', () => { input.value = btn.textContent; send(); });
        });
    }

    const STOP_WORDS = new Set(['what','is','are','do','you','your','the','a','an','how','can','i','me','my','to','for','of','and','in','on','it']);

    function findAnswer(input) {
        const tokens = input.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/).filter(t => !STOP_WORDS.has(t));
        let best = null, bestScore = 0;
        for (const qa of qaData) {
            const score = tokens.filter(t => qa.keywords.some(k => k.includes(t) || t.includes(k))).length / Math.max(tokens.length, 1);
            if (score > bestScore) { bestScore = score; best = qa; }
        }
        if (best && bestScore >= 0.3) return { text: best.answer, quickReplies: best.quickReplies };
        return { text: "I don't have a specific answer for that. You can reach Diksha via the Contact section or email at diku.gupta269@gmail.com.", quickReplies: ['What services do you offer?', 'How to contact?'] };
    }
});
