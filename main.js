const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-btn');
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function checkWin() {
  for (let condition of winningConditions) {
    const [a, b, c] = condition;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      gameActive = false;
      alert(`Player ${currentPlayer} wins!`);
      return;
    }
  }

  if (!board.includes('')) {
    gameActive = false;
    alert("It's a tie!");
  }
}

function handleClick(event) {
  const index = event.target.getAttribute('data-index');

  if (board[index] !== '' || !gameActive) return;

  board[index] = currentPlayer;
  event.target.textContent = currentPlayer;
  checkWin();

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function resetGame() {
  board.fill('');
  cells.forEach(cell => (cell.textContent = ''));
  currentPlayer = 'X';
  gameActive = true;
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
resetButton.addEventListener('click', resetGame);
