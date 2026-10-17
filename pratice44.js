const passwordInput = document.getElementById('password-input');
const strengthFill = document.getElementById('strength-fill');
const strengthText = document.getElementById('strength-text');

function getStrength(value) {
    let score = 0;

    if (value.length >= 8) score += 1;
    if (/[a-z]/.test(value) && /[A-Z]/.test(value)) score += 1;
    if (/[0-9]/.test(value)) score += 1;
    if (/[^a-zA-Z0-9]/.test(value)) score += 1;

    return score;
}

const levels = [
    { width: '0%', color: '#e2e4ea', text: '강도를 확인해 보세요' },
    { width: '25%', color: '#e74c3c', text: '약함' },
    { width: '50%', color: '#f39c12', text: '보통' },
    { width: '75%', color: '#f1c40f', text: '강함' },
    { width: '100%', color: '#2ecc71', text: '매우 강함' },
];

passwordInput.addEventListener('input', (event) => {
    const value = event.target.value;
    const score = value.length === 0 ? 0 : getStrength(value);
    const level = levels[score];

    strengthFill.style.width = level.width;
    strengthFill.style.backgroundColor = level.color;
    strengthText.textContent = level.text;
});
