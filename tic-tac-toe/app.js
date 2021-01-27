const gameBoard = (() => {
    let board = new Array(9);
    // board = ["X", "O", "X", "", "", "", "O", "X", "O"];
    const getBoard = () => board;
    const setSquare = (index, marker) => { board[index] = marker; }
    const resetBoard = () => { board = new Array(9); }

    return { getBoard, setSquare, resetBoard };
})();

const displayController = (() => {
    const squares = document.querySelector("#game-board").children;
    
    const updateBoard = () => {
        const board = gameBoard.getBoard();
        for (let i = 0; i < squares.length; i++) {
            squares[i].textContent = board[i];
        }
    }

    const resetBoard = () => {
        for (let i = 0; i < squares.length; i++) {
            const curSquare = squares[i];
            if (!curSquare.classList.contains("open")) {
                curSquare.textContent = undefined;
                curSquare.classList.add("open");
                curSquare.addEventListener("click", () => {
                    gameController.playerMove(i);
                });
            }
        }
    }
    
    return { updateBoard, resetBoard }
})();

const gameController = (() => {
    let xToMove = true;

    const playerMove = index => {
        const moveMarker = xToMove ? "X" : "O";
        gameBoard.setSquare(index, moveMarker);
        xToMove = !xToMove;
        displayController.updateBoard();
    }

    return { playerMove };
})();

displayController.resetBoard();