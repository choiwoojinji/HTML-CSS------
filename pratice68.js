const toggleBtn = document.getElementById('toggleBtn');
const modeLabel = document.getElementById('modeLabel');

function applyMode(isDark) {
    document.body.classList.toggle('dark', isDark);
    modeLabel.textContent = `현재 모드: ${isDark ? '다크' : '라이트'}`;
}

const savedMode = localStorage.getItem('darkMode') === 'true';
applyMode(savedMode);

toggleBtn.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark');
    applyMode(isDark);
    localStorage.setItem('darkMode', isDark);
});
