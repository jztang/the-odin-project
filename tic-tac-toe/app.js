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

    const setInfoText = text => {
        document.querySelector("#info-text").textContent = text;
    }

    const setUpBoard = () => {
        for (let i = 0; i < squares.length; i++) {
            squares[i].classList.add("open");
            squares[i].addEventListener("click", gameController.playerMove);
        }
        setInfoText("X to move");
        console.log("First time setup done");
    }

    const endGame = (indices, marker) => {
        if (indices) {
            setInfoText(`${marker} wins!`);
            console.log(`Game over - ${marker} got 3-in-a-row: ${indices}`);

            for (let i = 0; i < squares.length; i++) {
                squares[i].classList.remove("open");
                if (indices.includes(i)) { squares[i].classList.add("highlight") }
            }
        } else {
            setInfoText("It's a tie!");
            console.log("Game over - tie");
        }
    }

    return { getSquares, updateBoard, setInfoText, setUpBoard, endGame }
})();

const gameController = (() => {
    let xToMove = true;
    let movesMade = 0;

    const playerMove = event => {
        if (event.target.classList.contains("open")) {
            const index = event.target.getAttribute("data-index");
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
            movesMade++;
            console.log(`${moveMarker} plays at square ${index}`);
            checkForWin(moveMarker, index);
        }
    }

    const checkForWin = (moveMarker, index) => {
        const board = gameBoard.getBoard();

        // check horizontal
        const rowStart = Math.floor(index / 3) * 3;
        const rowIndices = [rowStart, rowStart + 1, rowStart + 2];
        if (checkSquares(rowIndices, moveMarker, board)) {
            displayController.endGame(rowIndices, moveMarker);
        }

        // check vertical
        const colStart = index % 3;
        const colIndices = [colStart, colStart + 3, colStart + 6];
        if (checkSquares(colIndices, moveMarker, board)) {
            displayController.endGame(colIndices, moveMarker);
        }

        // check main diagonal
        const mainDiaIndices = [0, 4, 8];
        if (checkSquares(mainDiaIndices, moveMarker, board)) {
            displayController.endGame(mainDiaIndices, moveMarker);
        }

        // check anti diagonal
        const antiDiaIndices = [2, 4, 6];
        if (checkSquares(antiDiaIndices, moveMarker, board)) {
            displayController.endGame(antiDiaIndices, moveMarker);
        }

        // check for tie
        if (movesMade === 9) {
            displayController.endGame();
        }
    }

    const checkSquares = (indices, marker, board) => {
        let numInARow = 0;

        indices.forEach(index => {
            if (board[index] === marker) { numInARow++; }
        });

        if (numInARow === 3) { return true; }
        return false;
    }

    return { playerMove, checkForWin };
})();

displayController.setUpBoard();