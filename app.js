function drawBoard(size) {
    let board = document.querySelector('.board');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i=0; i<256; i++) {
        let square = document.createElement('div');
        board.insertAdjacentElement('beforeend', square);
    }
}

drawBoard(16);

function changeSize(input) {
    drawBoard(input)
}