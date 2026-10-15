const startBtn = document.querySelector('.start-btn');
const statNumbers = document.querySelectorAll('.stat-number');

function animateCount(element) {
    const target = Number(element.dataset.target);
    const duration = 1000;
    const startTime = performance.now();

    function update(currentTime) {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        element.textContent = Math.floor(progress * target);

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    }

    requestAnimationFrame(update);
}

startBtn.addEventListener('click', () => {
    statNumbers.forEach((number) => animateCount(number));
});
