const grid = document.querySelector('.container');
const btn = document.querySelector(".grid-button");
const randomBtn = document.querySelector(".random-button");

function gridSet(gridNum){
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    for (let i = 0; i < gridNum; i++){
        let column = document.createElement('div');
       column.className ='column';
       for (let j = 0; j < gridNum; j++) {
          let cell = document.createElement('div');
         cell.className = 'cell';
        
         column.appendChild(cell);
     }
      grid.appendChild(column);
    }
}
gridNum = 16;
gridSet(gridNum);
paintCells();

function paintCells(){
    let hover = document.querySelectorAll(".cell"); 
    for (const hoverColor of hover){
        hoverColor.addEventListener("mouseover", () =>{
        hoverColor.style.backgroundColor = "black";
    });
    }
}

btn.addEventListener('click', () => {
const userInput = window.prompt('Enter a new grid size (max 100)');
if(isNaN(userInput)){
    alert("Enter a valid number")
} else {
    gridNum = Number(userInput);
    if (gridNum > 100){
        gridNum = 100;
    } else if (gridNum == "" || gridNum == null){
        gridNum = 16;
    }
    gridSet(gridNum);
    paintCells();
    }   
})

randomBtn.addEventListener('click', () => {
    gridSet(gridNum);
    randomColors();
})

function getRandomColor(){
    let red = String(Math.floor(Math.random() * 255));
    let green = String(Math.floor(Math.random() * 255));
    let blue = String(Math.floor(Math.random() * 255));

    return `rgb(${red}, ${green}, ${blue})`;
}

function randomColors(){
    let hover = document.querySelectorAll(".cell");
    for (const hoverRandomColor of hover){
        hoverRandomColor.addEventListener("mouseover", () =>{
        hoverRandomColor.style.backgroundColor = getRandomColor();
        });
    }
}
