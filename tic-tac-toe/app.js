const gameBoard = (() => {
    let board = new Array(9);
    const getBoard = () => board;
    const setSquare = (index, marker) => { board[index] = marker; }
    const resetBoard = () => { board = new Array(9); }

    return { getBoard, setSquare, resetBoard };
})();

const displayController = (() => {
    const squares = document.querySelector("#game-board").children;

    const getSquares = () => squares;

    const updateBoard = () => {
        const board = gameBoard.getBoard();
        for (let i = 0; i < squares.length; i++) {
            squares[i].textContent = board[i];
        }
    }

    const setUpBoard = () => {
        for (let i = 0; i < squares.length; i++) {
            squares[i].classList.add("open");
            squares[i].addEventListener("click", gameController.playerMove);
        }
        setInfoText("X to move");
        console.log("First time setup done");
    }

    const setInfoText = text => {
        document.querySelector("#info-text").textContent = text;
    }

    return { getSquares, updateBoard, setUpBoard, setInfoText }
})();

const gameController = (() => {
    let xToMove = true;

    const playerMove = event => {
        if (event.target.classList.contains("open")) {
            const index = event.target.id;
            let moveMarker, infoText;

            if (xToMove) {
                moveMarker = "X";
                infoText = "O to move";
            } else {
                moveMarker = "O";
                infoText = "X to move";
            }

            gameBoard.setSquare(index, moveMarker);
            displayController.setInfoText(infoText);
            displayController.getSquares()[index].classList.remove("open");
            displayController.updateBoard();
            xToMove = !xToMove;
            console.log(`${moveMarker} plays at square ${index}`);
        }
    }

    return { playerMove };
})();

displayController.setUpBoard();