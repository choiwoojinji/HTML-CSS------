const fruits = [
    '사과', '바나나', '포도', '딸기', '수박', '참외', '복숭아', '자두',
    '키위', '파인애플', '망고', '체리', '블루베리', '오렌지', '레몬',
];

const input = document.getElementById('searchInput');
const suggestions = document.getElementById('suggestions');

function highlight(text, query) {
    const index = text.indexOf(query);
    if (index === -1) return text;
    return (
        text.slice(0, index) +
        `<mark>${text.slice(index, index + query.length)}</mark>` +
        text.slice(index + query.length)
    );
}

function render(query) {
    suggestions.innerHTML = '';

    if (!query) return;

    const matches = fruits.filter((fruit) => fruit.includes(query));

    matches.forEach((fruit) => {
        const item = document.createElement('li');
        item.innerHTML = highlight(fruit, query);
        item.addEventListener('click', () => {
            input.value = fruit;
            suggestions.innerHTML = '';
        });
        suggestions.appendChild(item);
    });
}

input.addEventListener('input', () => {
    render(input.value.trim());
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.search-box')) {
        suggestions.innerHTML = '';
    }
});
