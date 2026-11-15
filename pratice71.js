const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('startBtn');
const lapBtn = document.getElementById('lapBtn');
const resetBtn = document.getElementById('resetBtn');
const lapList = document.getElementById('lapList');

let startTime = 0;
let elapsed = 0;
let timerId = null;
let lapCount = 0;

function formatTime(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centiseconds = Math.floor((ms % 1000) / 10);

    return (
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0') + '.' +
        String(centiseconds).padStart(2, '0')
    );
}

function tick() {
    elapsed = Date.now() - startTime;
    timeDisplay.textContent = formatTime(elapsed);
}

startBtn.addEventListener('click', () => {
    if (timerId === null) {
        startTime = Date.now() - elapsed;
        timerId = setInterval(tick, 10);
        startBtn.textContent = '정지';
        startBtn.classList.add('running');
    } else {
        clearInterval(timerId);
        timerId = null;
        startBtn.textContent = '시작';
        startBtn.classList.remove('running');
    }
});

lapBtn.addEventListener('click', () => {
    if (timerId === null) return;

    lapCount++;
    const item = document.createElement('li');
    item.innerHTML = `<span>랩 ${lapCount}</span><span>${formatTime(elapsed)}</span>`;
    lapList.prepend(item);
});

resetBtn.addEventListener('click', () => {
    clearInterval(timerId);
    timerId = null;
    elapsed = 0;
    lapCount = 0;
    timeDisplay.textContent = formatTime(0);
    startBtn.textContent = '시작';
    startBtn.classList.remove('running');
    lapList.innerHTML = '';
});
