let columns = 64;
let rows = 64;

const grid = document.querySelector('.container');

for (let i = 0; i < columns; i++){
    let column = document.createElement('div');
    column.className ='column';
    for (let j = 0; j < rows; j++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        
        column.appendChild(cell);
    }
    grid.appendChild(column);
}