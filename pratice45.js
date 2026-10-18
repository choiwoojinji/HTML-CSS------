const starsBox = document.getElementById('stars');
const stars = Array.from(starsBox.querySelectorAll('.star'));
const ratingText = document.getElementById('rating-text');

const messages = ['', '별로예요', '그냥 그래요', '보통이에요', '좋아요', '최고예요'];

let selectedValue = 0;

function paintStars(value, className) {
    stars.forEach((star) => {
        const starValue = Number(star.dataset.value);
        star.classList.toggle(className, starValue <= value);
    });
}

starsBox.addEventListener('mouseover', (event) => {
    if (!event.target.classList.contains('star')) return;
    paintStars(Number(event.target.dataset.value), 'hovered');
});

starsBox.addEventListener('mouseleave', () => {
    paintStars(0, 'hovered');
});

starsBox.addEventListener('click', (event) => {
    if (!event.target.classList.contains('star')) return;
    selectedValue = Number(event.target.dataset.value);
    paintStars(selectedValue, 'selected');
    ratingText.textContent = `${selectedValue}점 - ${messages[selectedValue]}`;
});
