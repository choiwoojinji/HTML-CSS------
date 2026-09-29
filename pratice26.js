const pwInput = document.getElementById('pwInput');
const barFill = document.getElementById('barFill');
const levelText = document.getElementById('levelText');

const rules = {
    length: { el: document.getElementById('ruleLength'), test: (pw) => pw.length >= 8 },
    case: { el: document.getElementById('ruleCase'), test: (pw) => /[a-z]/.test(pw) && /[A-Z]/.test(pw) },
    number: { el: document.getElementById('ruleNumber'), test: (pw) => /[0-9]/.test(pw) },
    special: { el: document.getElementById('ruleSpecial'), test: (pw) => /[^A-Za-z0-9]/.test(pw) },
};

const levels = [
    { score: 0, text: '강도: 없음', color: '#e6e6e6', width: '0%' },
    { score: 1, text: '강도: 약함', color: '#e74c3c', width: '25%' },
    { score: 2, text: '강도: 보통', color: '#f39c12', width: '50%' },
    { score: 3, text: '강도: 강함', color: '#3498db', width: '75%' },
    { score: 4, text: '강도: 매우 강함', color: '#2ecc71', width: '100%' },
];

pwInput.addEventListener('input', () => {
    const pw = pwInput.value;
    let score = 0;

    Object.values(rules).forEach(({ el, test }) => {
        const passed = test(pw);
        el.classList.toggle('passed', passed);
        if (passed) score += 1;
    });

    const level = levels[score];
    levelText.textContent = level.text;
    barFill.style.width = level.width;
    barFill.style.backgroundColor = level.color;
});
