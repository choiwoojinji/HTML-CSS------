const stars = document.querySelectorAll('.star');
const ratingText = document.querySelector('.rating-text');
let selectedValue = 0;

function paintStars(value, className) {
    stars.forEach((star) => {
        const isActive = Number(star.dataset.value) <= value;
        star.classList.toggle(className, isActive);
    });
}

stars.forEach((star) => {
    const value = Number(star.dataset.value);

    star.addEventListener('mouseenter', () => {
        paintStars(value, 'hover');
    });

    star.addEventListener('mouseleave', () => {
        paintStars(0, 'hover');
    });

    star.addEventListener('click', () => {
        selectedValue = value;
        paintStars(selectedValue, 'selected');
        ratingText.textContent = `${selectedValue}점을 선택했습니다`;
    });
});
