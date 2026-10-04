const typingText = document.getElementById('typingText');

const PHRASES = [
    'HTML, CSS, JS 연습 중입니다.',
    '꾸준한 연습이 실력이 됩니다.',
    '오늘도 한 줄씩 작성해봅니다.',
];

const TYPE_SPEED = 80;
const ERASE_SPEED = 40;
const HOLD_DELAY = 1200;

let phraseIndex = 0;
let charIndex = 0;
let isErasing = false;

function tick() {
    const phrase = PHRASES[phraseIndex];

    if (!isErasing) {
        charIndex++;
        typingText.textContent = phrase.slice(0, charIndex);

        if (charIndex === phrase.length) {
            isErasing = true;
            setTimeout(tick, HOLD_DELAY);
            return;
        }

        setTimeout(tick, TYPE_SPEED);
        return;
    }

    charIndex--;
    typingText.textContent = phrase.slice(0, charIndex);

    if (charIndex === 0) {
        isErasing = false;
        phraseIndex = (phraseIndex + 1) % PHRASES.length;
        setTimeout(tick, TYPE_SPEED);
        return;
    }

    setTimeout(tick, ERASE_SPEED);
}

tick();
