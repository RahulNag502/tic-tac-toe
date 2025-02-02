const board = document.getElementById("board");
const status = document.getElementById("status");
let cells = [];
let currentPlayer = "X";
let gameActive = true;
let boardState = ["", "", "", "", "", "", "", "", ""];

function createBoard() {
    board.innerHTML = "";
    boardState = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    status.textContent = "Player X's Turn";
    currentPlayer = "X";

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = i;
        cell.addEventListener("click", handleClick);
        board.appendChild(cell);
        cells[i] = cell;
    }
}

function handleClick(event) {
    const index = event.target.dataset.index;
    if (boardState[index] === "" && gameActive) {
        boardState[index] = currentPlayer;
        event.target.textContent = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        if (gameActive) {
            status.textContent = `Player ${currentPlayer}'s Turn`;
        }
    }
}

function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]
    ];

    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            gameActive = false;
            status.textContent = `Player ${boardState[a]} Wins!`;
            return;
        }
    }

    if (!boardState.includes("")) {
        gameActive = false;
        status.textContent = "It's a Draw!";
    }
}

function restartGame() {
    createBoard();
}

createBoard();