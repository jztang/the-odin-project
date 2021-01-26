const gameBoard = (() => {
    let board = new Array(9);
    board = ["X", "O", "X", "", "", "", "O", "X", "O"];
    const getBoard = () => board;

    return { getBoard };
})();

const displayController = (() => {
    const updateBoard = () => {
        const squares = document.querySelector("#game-board").children;
        const board = gameBoard.getBoard();
        for(let i = 0; i < squares.length; i++) {
            squares[i].textContent = board[i];
        }
    }

    return { updateBoard }
})();

displayController.updateBoard();