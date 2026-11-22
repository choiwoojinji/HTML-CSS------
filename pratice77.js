const starsContainer = document.getElementById('stars');
const stars = Array.from(starsContainer.querySelectorAll('.star'));
const result = document.getElementById('result');

let selectedValue = 0;

function paintStars(upToValue, className) {
    stars.forEach((star) => {
        const value = Number(star.dataset.value);
        star.classList.toggle(className, value <= upToValue);
    });
}

function clearHover() {
    stars.forEach((star) => star.classList.remove('hovered'));
}

starsContainer.addEventListener('mouseover', (event) => {
    const star = event.target.closest('.star');
    if (!star) return;
    clearHover();
    paintStars(Number(star.dataset.value), 'hovered');
});

starsContainer.addEventListener('mouseleave', () => {
    clearHover();
});

starsContainer.addEventListener('click', (event) => {
    const star = event.target.closest('.star');
    if (!star) return;

    selectedValue = Number(star.dataset.value);
    paintStars(selectedValue, 'selected');
    result.textContent = `${selectedValue}점을 선택했습니다.`;
});
