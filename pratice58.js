const choiceLabels = {
    rock: '바위',
    paper: '보',
    scissors: '가위',
};

const beats = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
};

let playerScore = 0;
let computerScore = 0;

const choiceBtns = document.querySelectorAll('.choice-btn');
const resetBtn = document.getElementById('resetBtn');
const playerScoreEl = document.getElementById('playerScore');
const computerScoreEl = document.getElementById('computerScore');
const resultDetailEl = document.getElementById('resultDetail');
const resultMessageEl = document.getElementById('resultMessage');

function getComputerChoice() {
    const choices = Object.keys(choiceLabels);
    return choices[Math.floor(Math.random() * choices.length)];
}

function judge(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return 'draw';
    return beats[playerChoice] === computerChoice ? 'win' : 'lose';
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = judge(playerChoice, computerChoice);

    resultDetailEl.textContent = `나: ${choiceLabels[playerChoice]} vs 컴퓨터: ${choiceLabels[computerChoice]}`;

    resultMessageEl.classList.remove('win', 'lose', 'draw');

    if (result === 'win') {
        playerScore += 1;
        resultMessageEl.textContent = '이겼습니다!';
        resultMessageEl.classList.add('win');
    } else if (result === 'lose') {
        computerScore += 1;
        resultMessageEl.textContent = '졌습니다.';
        resultMessageEl.classList.add('lose');
    } else {
        resultMessageEl.textContent = '비겼습니다.';
        resultMessageEl.classList.add('draw');
    }

    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
}

choiceBtns.forEach((btn) => {
    btn.addEventListener('click', () => playRound(btn.dataset.choice));
});

resetBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
    resultDetailEl.textContent = '버튼을 눌러 게임을 시작하세요.';
    resultMessageEl.textContent = '';
    resultMessageEl.classList.remove('win', 'lose', 'draw');
});
