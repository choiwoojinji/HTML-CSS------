const themeToggle = document.getElementById('themeToggle');
const STORAGE_KEY = 'pratice20-theme';

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeToggle.setAttribute('aria-checked', theme === 'dark');
}

const savedTheme = localStorage.getItem(STORAGE_KEY) || 'light';
applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const isDark = themeToggle.getAttribute('aria-checked') === 'true';
    const nextTheme = isDark ? 'light' : 'dark';
    applyTheme(nextTheme);
    localStorage.setItem(STORAGE_KEY, nextTheme);
});
