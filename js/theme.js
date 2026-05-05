(function() {
    const saved = localStorage.getItem('theme') || 'dark';
    if (saved === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
})();

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle');
    toggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        document.body.classList.toggle('bg-dev-bg', isDark);
        document.body.classList.toggle('bg-white', !isDark);
        document.body.classList.toggle('text-gray-200', isDark);
        document.body.classList.toggle('text-gray-800', !isDark);
    });
});
