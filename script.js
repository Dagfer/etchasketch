const gridContainer = document.querySelector('#grid-container');
console.log(gridContainer);
for (let i = 0; i < 256; i++){
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    // gridItem.style.height = ""
    gridContainer.appendChild(gridItem);
}