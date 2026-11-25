const toggle = document.getElementById('toggle');
const statusText = document.getElementById('statusText');

let dark = false;

toggle.addEventListener('click', () => {
    dark = !dark;

    document.body.classList.toggle('dark', dark);
    toggle.classList.toggle('on', dark);
    statusText.textContent = dark ? '🌙 다크 모드' : '☀️ 라이트 모드';
});
