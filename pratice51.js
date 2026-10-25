const themeSwitch = document.getElementById('themeSwitch');
const STORAGE_KEY = 'pratice51-theme';

function applyTheme(theme) {
    document.body.classList.toggle('dark', theme === 'dark');
}

const savedTheme = localStorage.getItem(STORAGE_KEY) || 'light';
applyTheme(savedTheme);

themeSwitch.addEventListener('click', () => {
    const nextTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
    applyTheme(nextTheme);
    localStorage.setItem(STORAGE_KEY, nextTheme);
});
