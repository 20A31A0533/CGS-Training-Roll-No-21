const cells = document.querySelectorAll('[data-cell]');
const gameStatus = document.getElementById('gameStatus');
const restartBtn = document.getElementById('restartBtn');
const board = document.querySelector('.board');

let currentPlayer = 'X';
let gameActive = true;
const boardState = Array(9).fill(null);

const winningCombinations = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6] 
];

const handleClick = (e) => {
    const cell = e.target;
    const cellIndex = Array.from(cells).indexOf(cell);

    if (boardState[cellIndex] || !gameActive) {
        return; 
    }

    boardState[cellIndex] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWin()) {
        gameStatus.textContent = `Player ${currentPlayer} Wins!`;
        gameActive = false;
    } else if (boardState.every(cell => cell)) {
        gameStatus.textContent = `It's a Draw!`;
        gameActive = false;
    } else {
        switchPlayer();
    }
};

const switchPlayer = () => {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    gameStatus.textContent = `Player ${currentPlayer}'s turn`;
};

const checkWin = () => {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return boardState[index] === currentPlayer;
        });
    });
};

const restartGame = () => {
    currentPlayer = 'X';
    gameActive = true;
    boardState.fill(null);
    cells.forEach(cell => cell.textContent = '');
    gameStatus.textContent = `Player X's turn`;
};

cells.forEach(cell => cell.addEventListener('click', handleClick));
restartBtn.addEventListener('click', restartGame);
