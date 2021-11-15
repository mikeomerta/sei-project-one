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

let enemyPosition = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56]
const fighterPosition = [369]


const width = 20
const gridCellCount =  width * width


// const x = fighterPosition % width
// const y = Math.floor(fighterPosition / width)


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

function addEnemy(cellNumber) {
  cells[cellNumber].classList.add('virus')
}

function removeEnemy(cellNumber) {
  cells[cellNumber].classList.remove('virus')
}

// function addBlast() {
//   cells[fighterPosition -= width].classList.add('blast')
// }

// function removeBlast() {
//   cells[fighterPosition -= width].classList.remove('blast')
// }

function handleLoad() {
  console.log('handleLoad')
  enemyPosition.forEach(alien => addEnemy(alien))
  cells[fighterPosition]; addFighter()
}



function handleStart() {
  console.log(enemyPosition)
  window.setInterval(() => {
    console.log('handleLoad')
    enemyPosition.forEach(alien => removeEnemy(alien)) 
    enemyPosition.map(alien => alien + 1).forEach(alien => addEnemy(alien))
  }, 1000)
}
  






// function handleArrowDown(event) {
//   console.log('handleArrowDown')
//   removeFighter(fighterPosition) 
//   switch (event.keyCode) { 
//     case 39:
//       if (x < width - 1) fighterPosition++
//       break
//     case 37:
//       if (x > 0) fighterPosition--
//       break
//     default:
//       console.log('invalid key do nothing')
//   }
//   addFighter(fighterPosition) 
// }

// function handleSpaceDown(event) {
//   console.log('handleSpaceDown')
//   removeBlast(blastPosition) 
//   switch (event.keyCode) { 
//     case 32: 
//       if (y < width - 1) blastPosition = 84
//       addBlast(blastPosition)
//       break
//     default:
//       console.log('invalid key do nothing')
//   }
//   addBlast(fighterPosition) 
// }


// * Events

loadButton.addEventListener('click', handleLoad)
startButton.addEventListener('click', handleStart)
// document.addEventListener('keydown', handleArrowDown)
// document.addEventListener('keydown', handleSpaceDown)
