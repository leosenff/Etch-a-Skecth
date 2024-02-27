const grid = document.querySelector('.container');

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

gridSet(16);
hovering();

function hovering(){
    let hover = document.querySelectorAll(".cell"); 
    for (const hoverColor of hover){
        hoverColor.addEventListener("mouseover", () =>{
        hoverColor.style.backgroundColor = "black";
    });
}

}
const btn = document.querySelector("button");

btn.addEventListener('click', () => {
const userInput = window.prompt('Enter a new grid size (max 100)');
if(isNaN(userInput)){
    alert("Enter a valid number")
} else {
    gridNum = Number(userInput);
    if (gridNum > 100){
        gridNum = 100;
    }
    gridSet(gridNum);
    hovering();
}

})

// for (const hoverColor of hover){
//     hoverColor.addEventListener("mouseout", () =>{
//         hoverColor.style.backgroundColor = "";
//     });
// }