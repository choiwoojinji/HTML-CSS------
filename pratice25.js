const timeText = document.getElementById('time');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

let elapsed = 0;      // 지금까지 쌓인 시간(ms)
let startTime = 0;
let timerId = null;

function format(ms) {
    const minutes = String(Math.floor(ms / 60000)).padStart(2, '0');
    const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, '0');
    const centis = String(Math.floor((ms % 1000) / 10)).padStart(2, '0');
    return `${minutes}:${seconds}.${centis}`;
}

startBtn.addEventListener('click', () => {
    if (timerId === null) {
        // 시작: Date.now() 기준으로 계산해야 setInterval이 밀려도 시간이 정확합니다
        startTime = Date.now() - elapsed;
        timerId = setInterval(() => {
            elapsed = Date.now() - startTime;
            timeText.textContent = format(elapsed);
        }, 10);
        startBtn.textContent = '정지';
        startBtn.classList.add('running');
    } else {
        // 정지
        clearInterval(timerId);
        timerId = null;
        startBtn.textContent = '시작';
        startBtn.classList.remove('running');
    }
});

resetBtn.addEventListener('click', () => {
    clearInterval(timerId);
    timerId = null;
    elapsed = 0;
    timeText.textContent = format(0);
    startBtn.textContent = '시작';
    startBtn.classList.remove('running');
});
