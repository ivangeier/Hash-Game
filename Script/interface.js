// check if document is loaded

document.addEventListener("DOMContentLoaded", () => {

    let squares = document.querySelectorAll(".square");

    document.querySelector(".reset").addEventListener("click", resetButton)

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event) {

    let position = event.target.id
    if (handleMove(position)) {
        setTimeout(() => {
            alert(`O jogo acabou, o jogador: ${symbol[playerTime]} ganhou!`);
        }, 10);
    }
    updateSquare(position);

}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.classList.add(`${symbol}`);
}

function updateSquares() {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.classList.remove("o");
        square.classList.remove("x");
    })

}