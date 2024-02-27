let columns = 6;
let rows = 6;

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

let hover = document.querySelectorAll(".cell");
for (const hoverColor of hover){
    hoverColor.addEventListener("mouseover", () =>{
        hoverColor.style.backgroundColor = "blue";
    });
}

// for (const hoverColor of hover){
//     hoverColor.addEventListener("mouseout", () =>{
//         hoverColor.style.backgroundColor = "";
//     });
// }