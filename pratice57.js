const quotes = [
    { text: '시작이 반이다.', author: '한국 속담' },
    { text: '피할 수 없으면 즐겨라.', author: '로버트 엘리엇' },
    { text: '실패는 성공의 어머니이다.', author: '서양 속담' },
    { text: '천 리 길도 한 걸음부터.', author: '한국 속담' },
    { text: '어제의 나보다 오늘의 내가 더 나아지면 된다.', author: '작자 미상' },
    { text: '작은 습관이 큰 변화를 만든다.', author: '작자 미상' },
];

const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const newQuoteBtn = document.getElementById('newQuoteBtn');

function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const { text, author } = quotes[randomIndex];
    quoteText.textContent = text;
    quoteAuthor.textContent = `- ${author} -`;
}

newQuoteBtn.addEventListener('click', showRandomQuote);
