// Actions





// * DOM Elements

const grid = document.querySelector('.grid')
const cells = []


// * Variables

const width = 10
const gridCellCount =  width * width


// * Bulding the grid

function createGrid() {
  for (let i = 0; i < gridCellCount; i++) {
    const cell = document.createElement('div')
    cell.textContent = i
    cells.push(cell)
    grid.appendChild(cell)
  }
}
createGrid()


// * Functions




// * Events
