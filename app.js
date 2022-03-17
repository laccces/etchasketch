function drawBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size
    for (let i =0 ; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black'});
        board.insertAdjacentElement('beforeend', square);
    }
}

drawBoard(16);

function changeSize() {
    let input = prompt("How many squares per row?", 16)
    if(input >= 2 && input <= 100) {
    drawBoard(input);
    } else {
        console.log('Error. Number must be between 2 and 100.');
    }
    
}
/*
function resetBoard() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}
*/