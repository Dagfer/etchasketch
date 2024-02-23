const pageName = document.createElement('h1');
pageName.setAttribute('id', 'page-name');
document.body.appendChild(pageName);
document.querySelector('#page-name').textContent = 'Etch-a-Sketch (kinda)';
const gridBtn = document.createElement('button');
gridBtn.setAttribute('id', 'grid-button');
pageName.appendChild(gridBtn);
document.querySelector('#grid-button').textContent = 'Generate grid';


const gridContainer = document.querySelector('#grid-container');
console.log(gridContainer);
for (let i = 0; i < 256; i++){
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    // gridItem.style.height = ""
    gridContainer.appendChild(gridItem);    
}

const gridItems = document.querySelectorAll('.grid-item');
const gridItem = document.querySelector ('.grid-item');
function hoverColor(e){
    e.target.style.backgroundColor = 'black';
}

gridItems.forEach((gridItem) => {
  gridItem.addEventListener('mouseenter', hoverColor);
});
