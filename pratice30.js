const passwordInput = document.getElementById('passwordInput');
const strengthFill = document.getElementById('strengthFill');
const strengthText = document.getElementById('strengthText');
const ruleLength = document.getElementById('ruleLength');
const ruleUpperLower = document.getElementById('ruleUpperLower');
const ruleNumber = document.getElementById('ruleNumber');
const ruleSpecial = document.getElementById('ruleSpecial');

const EMPTY_LEVEL = { text: '강도를 확인해보세요', color: '#e03838', width: 0 };

const LEVELS = [
    { text: '매우 약함', color: '#e03838', width: 15 },
    { text: '약함', color: '#e07a38', width: 35 },
    { text: '보통', color: '#e0a338', width: 55 },
    { text: '강함', color: '#4a4ae0', width: 80 },
    { text: '매우 강함', color: '#2eb872', width: 100 },
];

function setRule(el, isValid) {
    el.classList.toggle('valid', isValid);
}

passwordInput.addEventListener('input', () => {
    const value = passwordInput.value;

    const hasLength = value.length >= 8;
    const hasUpperLower = /[a-z]/.test(value) && /[A-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecial = /[^a-zA-Z0-9]/.test(value);

    setRule(ruleLength, hasLength);
    setRule(ruleUpperLower, hasUpperLower);
    setRule(ruleNumber, hasNumber);
    setRule(ruleSpecial, hasSpecial);

    const score = [hasLength, hasUpperLower, hasNumber, hasSpecial].filter(Boolean).length;
    const level = value.length === 0 ? EMPTY_LEVEL : LEVELS[score];

    strengthFill.style.width = `${level.width}%`;
    strengthFill.style.backgroundColor = level.color;
    strengthText.textContent = level.text;
});
