const targetDateInput = document.getElementById('targetDate');
const startBtn = document.getElementById('startBtn');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const messageEl = document.getElementById('message');

let intervalId = null;

function pad(num) {
    return String(num).padStart(2, '0');
}

function updateTimer(targetTime) {
    const diff = targetTime - Date.now();

    if (diff <= 0) {
        clearInterval(intervalId);
        intervalId = null;
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';
        messageEl.textContent = '목표 시간에 도달했습니다!';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysEl.textContent = pad(days);
    hoursEl.textContent = pad(hours);
    minutesEl.textContent = pad(minutes);
    secondsEl.textContent = pad(seconds);
}

startBtn.addEventListener('click', () => {
    const value = targetDateInput.value;

    if (!value) {
        messageEl.textContent = '날짜와 시간을 선택해주세요.';
        return;
    }

    const targetTime = new Date(value).getTime();

    if (targetTime <= Date.now()) {
        messageEl.textContent = '현재 시간보다 미래로 설정해주세요.';
        return;
    }

    messageEl.textContent = '';

    if (intervalId) {
        clearInterval(intervalId);
    }

    updateTimer(targetTime);
    intervalId = setInterval(() => updateTimer(targetTime), 1000);
});
