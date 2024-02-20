const gridContainer = document.querySelector('#grid-container');
console.log(gridContainer);
for (let i = 0; i < 256; i++){
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    // gridItem.style.height = ""
    gridContainer.appendChild(gridItem);    
}

const gridItems = document.querySelectorAll('.grid-item');
const gridItem = document.querySelector ('.grid-items');
function hoverColor(e){
    e.target.style.backgroundColor = 'black';
}

gridItems.forEach((gridItem) => {
  gridItem.addEventListener('mouseenter', hoverColor);
});