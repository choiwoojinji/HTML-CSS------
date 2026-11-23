const passwordInput = document.getElementById('password');
const barFill = document.getElementById('barFill');
const strengthText = document.getElementById('strengthText');

const ruleLength = document.getElementById('ruleLength');
const ruleCase = document.getElementById('ruleCase');
const ruleNumber = document.getElementById('ruleNumber');
const ruleSpecial = document.getElementById('ruleSpecial');

const LEVELS = [
    { color: '#e74c3c', text: '약함', width: '25%' },
    { color: '#f39c12', text: '보통', width: '50%' },
    { color: '#f1c40f', text: '좋음', width: '75%' },
    { color: '#27ae60', text: '강함', width: '100%' },
];

function toggleRule(element, passed) {
    element.classList.toggle('met', passed);
}

passwordInput.addEventListener('input', () => {
    const value = passwordInput.value;

    if (!value) {
        barFill.style.width = '0%';
        strengthText.textContent = '강도: 입력 대기중';
        [ruleLength, ruleCase, ruleNumber, ruleSpecial].forEach((el) => toggleRule(el, false));
        return;
    }

    const hasLength = value.length >= 8;
    const hasCase = /[a-z]/.test(value) && /[A-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecial = /[^a-zA-Z0-9]/.test(value);

    toggleRule(ruleLength, hasLength);
    toggleRule(ruleCase, hasCase);
    toggleRule(ruleNumber, hasNumber);
    toggleRule(ruleSpecial, hasSpecial);

    const score = [hasLength, hasCase, hasNumber, hasSpecial].filter(Boolean).length;
    const level = LEVELS[Math.max(score - 1, 0)];

    barFill.style.width = level.width;
    barFill.style.backgroundColor = level.color;
    strengthText.textContent = `강도: ${level.text}`;
});
