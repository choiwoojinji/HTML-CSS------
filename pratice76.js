const box = document.getElementById('box');
const message = document.getElementById('message');
const best = document.getElementById('best');

const STATE = {
    WAITING: 'waiting',
    READY: 'ready',
    GO: 'go',
    TOO_SOON: 'too-soon',
};

let state = STATE.WAITING;
let timeoutId = null;
let startTime = 0;
let bestTime = null;

function setState(next, text) {
    box.classList.remove(STATE.WAITING, STATE.READY, STATE.GO, STATE.TOO_SOON);
    box.classList.add(next);
    box.textContent = text;
    state = next;
}

function startRound() {
    message.textContent = '';
    setState(STATE.READY, '초록색이 되면 클릭하세요!');

    const delay = 1000 + Math.random() * 2000;
    timeoutId = setTimeout(() => {
        startTime = Date.now();
        setState(STATE.GO, '지금 클릭!');
    }, delay);
}

function finishRound() {
    const reactionTime = Date.now() - startTime;
    setState(STATE.WAITING, '클릭해서 다시 시작');
    message.textContent = `반응 속도: ${reactionTime}ms`;

    if (bestTime === null || reactionTime < bestTime) {
        bestTime = reactionTime;
        best.textContent = `최고 기록: ${bestTime}ms`;
    }
}

function handleClick() {
    if (state === STATE.WAITING) {
        startRound();
    } else if (state === STATE.READY) {
        clearTimeout(timeoutId);
        setState(STATE.TOO_SOON, '너무 빨랐어요! 다시 클릭하세요');
        message.textContent = '초록색이 되기 전에 클릭했어요.';
    } else if (state === STATE.GO) {
        finishRound();
    } else if (state === STATE.TOO_SOON) {
        startRound();
    }
}

box.addEventListener('click', handleClick);
