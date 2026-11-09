const timeDisplay = document.getElementById('timeDisplay');
const secondsInput = document.getElementById('secondsInput');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const status = document.getElementById('status');

let remaining = Number(secondsInput.value);
let intervalId = null;

function formatTime(totalSeconds) {
    const h = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const s = String(totalSeconds % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
}

function render() {
    timeDisplay.textContent = formatTime(remaining);
    timeDisplay.classList.toggle('ending', remaining <= 3 && remaining > 0);
}

function stopInterval() {
    clearInterval(intervalId);
    intervalId = null;
}

startBtn.addEventListener('click', () => {
    if (intervalId) return;

    if (remaining <= 0) {
        remaining = Number(secondsInput.value) || 1;
    }

    secondsInput.disabled = true;
    status.textContent = '진행 중';

    intervalId = setInterval(() => {
        remaining -= 1;
        render();

        if (remaining <= 0) {
            stopInterval();
            status.textContent = '완료!';
            secondsInput.disabled = false;
        }
    }, 1000);
});

pauseBtn.addEventListener('click', () => {
    if (!intervalId) return;
    stopInterval();
    status.textContent = '일시정지됨';
});

resetBtn.addEventListener('click', () => {
    stopInterval();
    remaining = Number(secondsInput.value) || 10;
    secondsInput.disabled = false;
    status.textContent = '대기 중';
    render();
});

render();
