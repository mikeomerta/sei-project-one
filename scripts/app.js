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

const enemyPosition = [2, 3, 4, 5, 6, 7, 12, 13, 14, 15, 16, 17, 22, 23, 24, 25, 26, 27]


const width = 10
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

// function addFighter() {
//   cells[fighterPosition].classList.add('syringe')
// }

// function removeFighter() {
//   cells[fighterPosition].classList.remove('syringe')
// }

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
  const fighterStart = cells[94].classList.add('syringe')

  // addFighter()
}

function handleStart() {
  console.log('handleStart')
  window.setInterval(() => {
    

    
    
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
