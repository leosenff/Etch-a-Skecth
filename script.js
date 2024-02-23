let columns = 4;
let rows = 4;

const grid = document.querySelector('.container');

for (let i = 0; i < columns; i++){
    let column = document.createElement('div');
    column.className ='column';
    for (let j = 0; j < rows; j++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        cell.textContent = "hi";
        column.appendChild(cell);
    }
    grid.appendChild(column);
}