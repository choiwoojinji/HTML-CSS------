const stars = document.querySelectorAll('.star');
const ratingResult = document.getElementById('ratingResult');

let selectedValue = 0;

function highlight(value) {
    stars.forEach((star) => {
        const starValue = Number(star.dataset.value);
        star.classList.toggle('hover', starValue <= value);
    });
}

function select(value) {
    selectedValue = value;
    stars.forEach((star) => {
        const starValue = Number(star.dataset.value);
        star.classList.toggle('selected', starValue <= value);
    });
    ratingResult.textContent = `${value}점을 선택하셨습니다`;
}

stars.forEach((star) => {
    const value = Number(star.dataset.value);

    star.addEventListener('mouseenter', () => {
        highlight(value);
    });

    star.addEventListener('mouseleave', () => {
        highlight(selectedValue);
    });

    star.addEventListener('click', () => {
        select(value);
    });
});
