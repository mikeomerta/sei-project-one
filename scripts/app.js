// Actions

// make the start button clickable
// make the click action 



// * DOM Elements

const grid = document.querySelector('.grid')
const cells = []
const startButton = document.querySelector('#start')




// * Variables

const width = 10
const gridCellCount =  width * width

// const fighterPosition = cells[94]



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

function handleStart() {
  console.log('button clicked')
  cells[94].classList.add('syringe')
  cells[2].classList.add('virus')
  cells[3].classList.add('virus')
  cells[4].classList.add('virus')
  cells[5].classList.add('virus')
  cells[6].classList.add('virus')
  cells[7].classList.add('virus')
  cells[12].classList.add('virus')
  cells[13].classList.add('virus')
  cells[14].classList.add('virus')
  cells[15].classList.add('virus')
  cells[16].classList.add('virus')
  cells[17].classList.add('virus')
  cells[22].classList.add('virus')
  cells[23].classList.add('virus')
  cells[24].classList.add('virus')
  cells[25].classList.add('virus')
  cells[26].classList.add('virus')
  cells[27].classList.add('virus')
  cells[74].classList.add('blast')
}





// * Events

startButton.addEventListener('click', handleStart)