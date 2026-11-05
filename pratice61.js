const rating = document.getElementById('rating');
const stars = rating.querySelectorAll('.star');
const ratingText = document.getElementById('ratingText');

let selectedValue = 0;

const highlight = (value) => {
    stars.forEach((star) => {
        star.classList.toggle('hover', Number(star.dataset.value) <= value);
    });
};

stars.forEach((star) => {
    const value = Number(star.dataset.value);

    star.addEventListener('mouseenter', () => highlight(value));

    star.addEventListener('click', () => {
        selectedValue = value;
        stars.forEach((s) => {
            s.classList.toggle('selected', Number(s.dataset.value) <= selectedValue);
        });
        ratingText.textContent = `${selectedValue}점을 선택하셨습니다.`;
    });
});

rating.addEventListener('mouseleave', () => {
    highlight(0);
    stars.forEach((s) => {
        s.classList.toggle('hover', Number(s.dataset.value) <= selectedValue);
    });
});
