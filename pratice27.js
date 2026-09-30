const stars = document.querySelectorAll('.star');
const result = document.getElementById('result');

let selectedValue = 0;

const messages = {
    1: '별로예요',
    2: '아쉬워요',
    3: '보통이에요',
    4: '좋아요',
    5: '최고예요',
};

function highlight(value) {
    stars.forEach((star) => {
        star.classList.toggle('hover', Number(star.dataset.value) <= value);
    });
}

stars.forEach((star) => {
    const value = Number(star.dataset.value);

    star.addEventListener('mouseenter', () => highlight(value));

    star.addEventListener('mouseleave', () => highlight(selectedValue));

    star.addEventListener('click', () => {
        selectedValue = value;
        stars.forEach((s) => {
            s.classList.toggle('selected', Number(s.dataset.value) <= selectedValue);
        });
        result.textContent = `${selectedValue}점 - ${messages[selectedValue]}`;
    });
});
