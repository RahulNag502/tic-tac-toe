Tic-Tac-Toe Game
A simple and interactive Tic-Tac-Toe game built using HTML, CSS, and JavaScript.

Features
Play with two players, alternating between Player X and Player O.
The game detects the winner or a draw.
Option to restart the game.
Installation
Clone or download the project.
Open the index.html file in your browser.
File Structure
graphql
Copy
Edit
/Tic-Tac-Toe
  ├── index.html      # Main HTML file
  ├── styles.css      # CSS file for styling
  ├── script.js       # JavaScript file for game logic
Usage
Upon loading the page, the game board will appear.
Players take turns clicking the cells to place their X or O.
The game will notify the winner or a draw once the game ends.
Players can click the "Restart Game" button to start a new game.
How It Works
HTML: The basic structure includes a div for the game board, a status area showing whose turn it is or the result, and a restart button.
CSS: Styles are applied to the body, board, and individual cells to create a clean, simple user interface.
JavaScript: The script handles game logic such as alternating turns, checking for a winner, and restarting the game. It tracks the game state in an array and updates the board and status dynamically.
JavaScript Functions
createBoard(): Initializes the game board and resets the state.
handleClick(): Handles each player's move and updates the board.
checkWinner(): Checks if any player has won the game.
restartGame(): Restarts the game by reinitializing the board.
