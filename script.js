const pageName = document.createElement('h1');
pageName.setAttribute('id', 'page-name');
document.body.appendChild(pageName);
document.querySelector('#page-name').textContent = 'Etch-a-Sketch (kinda)';

const gridBtn = document.createElement('button');
gridBtn.setAttribute('id', 'grid-button');
pageName.appendChild(gridBtn);
document.querySelector('#grid-button').textContent = 'Generate grid';
gridBtn.addEventListener ('click', generateGrid)

const gridContainer = document.querySelector('#grid-container');
gridContainer.classList.add('container');
console.log(gridContainer);
for (let i = 0; i < 256; i++){
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.style.width = "calc(100%/16)";
    gridItem.style.height = "calc(100%/16)";
    gridContainer.appendChild(gridItem);    
}

const gridItems = document.querySelectorAll('.grid-item');

function hoverColor(e){
    e.target.style.backgroundColor = 'black';
}

gridItems.forEach((gridItem) => {
  gridItem.addEventListener('mouseenter', hoverColor);
});

function removeGrid(){
  let  inputPrompt = prompt('how many cells per side?');
  console.log(typeof inputPrompt);
  if (typeof parseInt(inputPrompt) === 'number'){
      const containers = document.querySelectorAll('.container');
      containers.forEach((container) => {
      container.remove();
    });
      return cellNum = parseInt(inputPrompt);
   }
}

function generateGrid(){
    removeGrid()

    const gridContainerTwo = document.createElement('div');
    gridContainerTwo.classList.add('container')
    gridContainerTwo.setAttribute('id', '#grid-containertwo');
    document.body.appendChild(gridContainerTwo);
    console.log(gridContainerTwo);
    const bodyDouble = document.querySelector('body');
    bodyDouble.classList.add('body-double');

    for (let i = 0; i < cellNum ** 2; i++){
        const sizeReference = parseInt(cellNum)
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.width = "calc(100%"+ "/"+`${sizeReference})` ;
        gridItem.style.height = "calc(100%"+ "/"+`${sizeReference})` ;
        gridContainerTwo.appendChild(gridItem);   

        console.log(gridItem.style.width) 
        console.log(gridItem.style.height)

    }
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach((gridItem) => {
        gridItem.addEventListener('mouseenter', hoverColor);
      });
      
}

