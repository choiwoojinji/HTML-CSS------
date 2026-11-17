const sample = document.getElementById('sample');
const inputBox = document.getElementById('inputBox');
const timeValue = document.getElementById('timeValue');
const speedValue = document.getElementById('speedValue');
const accuracyValue = document.getElementById('accuracyValue');
const retryBtn = document.getElementById('retryBtn');

const SAMPLE_TEXTS = [
    '오늘도 좋은 하루 되세요',
    '꾸준함이 실력을 만든다',
    '커피 한 잔의 여유를 즐기자',
    '작은 습관이 큰 변화를 만든다',
    '코드는 읽기 쉽게 작성하자',
];

let sampleText = '';
let startTime = null;
let finished = false;

function renderSample() {
    const typed = inputBox.value;
    let html = '';

    for (let i = 0; i < sampleText.length; i += 1) {
        const char = sampleText[i];

        if (i >= typed.length) {
            html += char;
        } else if (typed[i] === char) {
            html += `<span class="correct">${char}</span>`;
        } else {
            html += `<span class="wrong">${char}</span>`;
        }
    }

    sample.innerHTML = html;
}

function finishTest() {
    finished = true;
    inputBox.disabled = true;

    const elapsedSeconds = (Date.now() - startTime) / 1000;
    const minutes = elapsedSeconds / 60;
    const speed = Math.round(sampleText.length / minutes);

    let correctCount = 0;
    for (let i = 0; i < sampleText.length; i += 1) {
        if (inputBox.value[i] === sampleText[i]) correctCount += 1;
    }
    const accuracy = Math.round((correctCount / sampleText.length) * 100);

    timeValue.textContent = `${elapsedSeconds.toFixed(1)}초`;
    speedValue.textContent = `${speed} 타/분`;
    accuracyValue.textContent = `${accuracy}%`;
}

function handleInput() {
    if (finished) return;

    if (startTime === null) {
        startTime = Date.now();
    }

    renderSample();

    if (inputBox.value.length >= sampleText.length) {
        finishTest();
    }
}

function startTest() {
    sampleText = SAMPLE_TEXTS[Math.floor(Math.random() * SAMPLE_TEXTS.length)];
    startTime = null;
    finished = false;

    inputBox.value = '';
    inputBox.disabled = false;
    inputBox.focus();

    timeValue.textContent = '0.0초';
    speedValue.textContent = '0 타/분';
    accuracyValue.textContent = '100%';

    renderSample();
}

inputBox.addEventListener('input', handleInput);
retryBtn.addEventListener('click', startTest);

startTest();
