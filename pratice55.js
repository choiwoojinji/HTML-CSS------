const stars = document.querySelectorAll('#stars .star');
const ratingResult = document.getElementById('ratingResult');

let selectedRating = 0;

function paintStars(upTo, className) {
    stars.forEach((star) => {
        const value = Number(star.dataset.value);
        star.classList.toggle(className, value <= upTo);
    });
}

function updateResult() {
    if (selectedRating === 0) {
        ratingResult.textContent = '별점을 선택해주세요';
        return;
    }
    ratingResult.textContent = `${selectedRating}점을 선택하셨습니다`;
}

stars.forEach((star) => {
    star.addEventListener('mouseenter', () => {
        paintStars(Number(star.dataset.value), 'hover');
    });

    star.addEventListener('mouseleave', () => {
        paintStars(0, 'hover');
    });

    star.addEventListener('click', () => {
        selectedRating = Number(star.dataset.value);
        paintStars(selectedRating, 'selected');
        updateResult();
    });
});

updateResult();
