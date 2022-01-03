'use strict'

document.addEventListener('DOMContentLoaded', createSketchGrid());

function createSketchGrid() {
    let sketchGrid = document.getElementById('sketch-grid');

    for(let rowCount = 0; rowCount < 16; rowCount++) {
        let rowElement = document.createElement('div');
        rowElement.classList.add('row');
        sketchGrid.appendChild(rowElement);

        for(let columnCount = 0; columnCount < 16; columnCount++) {
            let cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.addEventListener('mouseover', (e) => fillOnMouseOver(e))
            rowElement.appendChild(cellElement);
        }
    }
}

function fillOnMouseOver(e) {
    e.target.style.backgroundColor = 'grey'
}