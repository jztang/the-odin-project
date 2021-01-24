const gameBoard = (() => {
    let board = new Array(9);
    const getBoard = () => board;

    return { getBoard };
})();