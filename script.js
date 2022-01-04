'use strict'

document.addEventListener('DOMContentLoaded', createSketchGrid());

function createSketchGrid(gridSize=16) { //default size 16x16
    let sketchGrid = document.getElementById('sketch-grid');
    //tear down grid
    while(sketchGrid.firstElementChild) {
        sketchGrid.removeChild(sketchGrid.firstElementChild);
    }

    for(let rowCount = 1; rowCount <= gridSize; rowCount++) {
        let rowElement = document.createElement('div');
        rowElement.classList.add('row');

        sketchGrid.appendChild(rowElement);

        for(let columnCount = 1; columnCount <= gridSize; columnCount++) {
            let cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.style.width = `${Math.floor(1000/gridSize)}px`;
            cellElement.style.height = `${Math.floor(1000/gridSize)}px`;
            cellElement.addEventListener('mouseover', (e) => fillOnMouseOver(e));

            rowElement.appendChild(cellElement);
        }
    }

    let gridSizeSelect = document.getElementById('grid-size');
    if(!gridSizeSelect.firstElementChild) {
        for(let optionCount = 1; optionCount <= 100; optionCount++) {
            let optionElement = document.createElement('option');
            optionElement.setAttribute('value', optionCount);
            optionElement.innerText = optionCount+' x '+optionCount;
            
            if(optionCount === gridSize) {
                optionElement.setAttribute('selected', true)
            }

            gridSizeSelect.appendChild(optionElement);
        }
    }
}

function fillOnMouseOver(e) {
    e.target.style.backgroundColor = 'grey'
}

function updateGridSize(selectObject) {
    createSketchGrid(selectObject.value)
}

function clearGridColor(e) {
    let rowsArray = [...document.getElementsByClassName('row')];
    for(let row of rowsArray) {
        let cellsArray = [...row.children]
        for(let cell of cellsArray) {
            cell.style.backgroundColor = 'white'
        }
    }
}