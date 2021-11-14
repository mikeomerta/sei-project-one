// Actions

// get the virus to move acroos 2 squares
// get the virus to move down 1 row 
// get the virus to move back 4 squares



// * DOM Elements

const grid = document.querySelector('.grid')
const cells = []
const loadButton = document.querySelector('#load')
const startButton = document.querySelector('#start')


// * Variables

const width = 10
const gridCellCount =  width * width
let enemyPosition = 0
let fighterPosition = 0
// let totalEnemies = 0






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

function addFighter() {
  cells[fighterPosition].classList.add('syringe')
}
function removeFighter() {
  cells[fighterPosition].classList.remove('syringe')
}
function addEnemy() {
  cells[enemyPosition].classList.add('virus')
}
function removeEnemy() {
  cells[enemyPosition].classList.remove('virus')
}
function handleLoad() {
  console.log('button clicked')
  enemyPosition = 2
  fighterPosition = 94
  addFighter()
  addEnemy()
}
function handleStart() {
  console.log('start game')
  window.setInterval(() => {
    removeEnemy()
    enemyPosition = 3
    addEnemy()
  }, 1000)
}

function handleKeyDown(event) {

  console.log('key pushed')

  removeFighter(fighterPosition) 

  const x = fighterPosition % width
  
  switch (event.keyCode) { 
    case 39 :
      if (x < width - 1) fighterPosition++
      break
    case 37:
      if (x > 0) fighterPosition--
      break
    default:
      console.log('invalid key do nothing')
  }
  
  addFighter(fighterPosition) 
}





// * Events

loadButton.addEventListener('click', handleLoad)
startButton.addEventListener('click', handleStart)
document.addEventListener('keydown', handleKeyDown )
