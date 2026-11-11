const pwInput = document.getElementById('pwInput');
const meterBar = document.getElementById('meterBar');
const status = document.getElementById('status');

const rules = {
    length: { el: document.getElementById('ruleLength'), test: (v) => v.length >= 8 },
    case: { el: document.getElementById('ruleCase'), test: (v) => /[a-z]/.test(v) && /[A-Z]/.test(v) },
    number: { el: document.getElementById('ruleNumber'), test: (v) => /[0-9]/.test(v) },
    special: { el: document.getElementById('ruleSpecial'), test: (v) => /[^a-zA-Z0-9]/.test(v) },
};

const levels = [
    { color: '#e74c3c', text: '약함' },
    { color: '#f39c12', text: '보통' },
    { color: '#f1c40f', text: '좋음' },
    { color: '#2ecc71', text: '강함' },
];

pwInput.addEventListener('input', () => {
    const value = pwInput.value;

    let passedCount = 0;
    Object.values(rules).forEach(({ el, test }) => {
        const passed = test(value);
        el.classList.toggle('passed', passed);
        if (passed) passedCount += 1;
    });

    if (!value) {
        meterBar.style.width = '0%';
        status.textContent = '비밀번호를 입력해보세요';
        return;
    }

    const level = levels[passedCount - 1] || levels[0];
    meterBar.style.width = `${(passedCount / 4) * 100}%`;
    meterBar.style.backgroundColor = level.color;
    status.textContent = `강도: ${level.text}`;
});
