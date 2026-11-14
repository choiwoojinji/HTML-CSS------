const dice = document.getElementById('dice');
const rollBtn = document.getElementById('rollBtn');
const historyList = document.getElementById('historyList');

const MAX_HISTORY = 8;

rollBtn.addEventListener('click', () => {
    dice.classList.add('rolling');

    let ticks = 0;
    const spin = setInterval(() => {
        dice.textContent = Math.floor(Math.random() * 6) + 1;
        ticks++;

        if (ticks >= 8) {
            clearInterval(spin);
            dice.classList.remove('rolling');

            const result = Math.floor(Math.random() * 6) + 1;
            dice.textContent = result;
            addHistory(result);
        }
    }, 60);
});

function addHistory(value) {
    const item = document.createElement('span');
    item.textContent = value;
    historyList.prepend(item);

    while (historyList.children.length > MAX_HISTORY) {
        historyList.removeChild(historyList.lastChild);
    }
}
