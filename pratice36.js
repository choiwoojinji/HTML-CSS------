const circle = document.querySelector('.progress-ring__fg');
const label = document.getElementById('progressLabel');
const circumference = 2 * Math.PI * 80;

let percent = 0;

function render() {
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
    label.textContent = `${percent}%`;
}

document.getElementById('increaseBtn').addEventListener('click', () => {
    percent = Math.min(100, percent + 10);
    render();
});

document.getElementById('decreaseBtn').addEventListener('click', () => {
    percent = Math.max(0, percent - 10);
    render();
});

document.getElementById('resetBtn').addEventListener('click', () => {
    percent = 0;
    render();
});

render();
