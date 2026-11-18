const board = document.getElementById('board');
const movesValue = document.getElementById('movesValue');
const matchValue = document.getElementById('matchValue');
const message = document.getElementById('message');
const retryBtn = document.getElementById('retryBtn');

const SYMBOLS = ['🍎', '🍌', '🍇', '🍉', '🍋', '🍓', '🍒', '🍑'];

let openTiles = [];
let matchedCount = 0;
let moves = 0;
let locked = false;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createBoard() {
    board.innerHTML = '';
    const tiles = shuffle([...SYMBOLS, ...SYMBOLS]);

    tiles.forEach((symbol) => {
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.dataset.symbol = symbol;
        tile.addEventListener('click', () => handleTileClick(tile));
        board.appendChild(tile);
    });
}

function handleTileClick(tile) {
    if (locked) return;
    if (tile.classList.contains('open') || tile.classList.contains('matched')) return;
    if (openTiles.length === 2) return;

    tile.classList.add('open');
    tile.textContent = tile.dataset.symbol;
    openTiles.push(tile);

    if (openTiles.length === 2) {
        moves += 1;
        movesValue.textContent = String(moves);
        checkMatch();
    }
}

function checkMatch() {
    const [first, second] = openTiles;

    if (first.dataset.symbol === second.dataset.symbol) {
        first.classList.add('matched');
        second.classList.add('matched');
        openTiles = [];
        matchedCount += 1;
        matchValue.textContent = `${matchedCount} / ${SYMBOLS.length}`;

        if (matchedCount === SYMBOLS.length) {
            message.textContent = `축하합니다! ${moves}번의 시도로 완료했어요.`;
        }
        return;
    }

    locked = true;
    setTimeout(() => {
        first.classList.remove('open');
        second.classList.remove('open');
        first.textContent = '';
        second.textContent = '';
        openTiles = [];
        locked = false;
    }, 700);
}

function startGame() {
    openTiles = [];
    matchedCount = 0;
    moves = 0;
    locked = false;

    movesValue.textContent = '0';
    matchValue.textContent = `0 / ${SYMBOLS.length}`;
    message.textContent = '';

    createBoard();
}

retryBtn.addEventListener('click', startGame);

startGame();
