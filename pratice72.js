const board = document.getElementById('board');
const cells = Array.from(document.querySelectorAll('.cell'));
const status = document.getElementById('status');
const resetBtn = document.getElementById('resetBtn');

const WIN_LINES = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
];

let cellValues = Array(9).fill('');
let currentPlayer = 'O';
let gameOver = false;

function checkWinner() {
    for (const line of WIN_LINES) {
        const [a, b, c] = line;
        if (cellValues[a] && cellValues[a] === cellValues[b] && cellValues[a] === cellValues[c]) {
            return line;
        }
    }
    return null;
}

function handleCellClick(event) {
    const index = Number(event.target.dataset.index);

    if (gameOver || cellValues[index] !== '') return;

    cellValues[index] = currentPlayer;
    event.target.textContent = currentPlayer;
    event.target.classList.add(currentPlayer.toLowerCase());

    const winLine = checkWinner();

    if (winLine) {
        gameOver = true;
        winLine.forEach((i) => cells[i].classList.add('win'));
        status.textContent = `${currentPlayer} 승리!`;
        return;
    }

    if (cellValues.every((value) => value !== '')) {
        gameOver = true;
        status.textContent = '무승부입니다';
        return;
    }

    currentPlayer = currentPlayer === 'O' ? 'X' : 'O';
    status.textContent = `${currentPlayer}의 차례입니다`;
}

function resetGame() {
    cellValues = Array(9).fill('');
    currentPlayer = 'O';
    gameOver = false;
    status.textContent = `${currentPlayer}의 차례입니다`;

    cells.forEach((cell) => {
        cell.textContent = '';
        cell.classList.remove('x', 'o', 'win');
    });
}

cells.forEach((cell) => cell.addEventListener('click', handleCellClick));
resetBtn.addEventListener('click', resetGame);
