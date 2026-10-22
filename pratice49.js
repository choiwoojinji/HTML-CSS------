const starRating = document.getElementById('starRating');
const stars = starRating.querySelectorAll('.star');
const ratingResult = document.getElementById('ratingResult');

let selectedValue = 0;

function highlightStars(value, className) {
    stars.forEach((star) => {
        const starValue = Number(star.dataset.value);
        star.classList.toggle(className, starValue <= value);
    });
}

starRating.addEventListener('mouseover', (event) => {
    if (!event.target.classList.contains('star')) return;
    highlightStars(Number(event.target.dataset.value), 'hover');
});

starRating.addEventListener('mouseleave', () => {
    highlightStars(0, 'hover');
});

starRating.addEventListener('click', (event) => {
    if (!event.target.classList.contains('star')) return;
    selectedValue = Number(event.target.dataset.value);
    highlightStars(selectedValue, 'selected');
    ratingResult.textContent = `${selectedValue}점을 선택했습니다`;
});
