// Actions

// get the virus to move acroos 2 squares
// get the virus to move down 1 row 
// get the virus to move back 4 squares



//////// * DOM Elements ////////

const grid = document.querySelector('.grid')
const cells = []
const loadButton = document.querySelector('#load')
const startButton = document.querySelector('#start')
const scoreCard = document.querySelector('.score-display')


//////// * Variables ////////

const width = 19
const gridCellCount =  width * width

let enemyPosition = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53]
let fighterPosition = [332]
let blastPosition = fighterPosition - width
fighterBlastMoving = 0
let score = 0




aliensMoving  = null
alienMoveTracker = 7
aliensMovingRight = true



const xAxis = fighterPosition % width
const yAxis = Math.floor(fighterPosition / width)




//////// * Bulding the grid ////////

function createGrid() {
  for (let i = 0; i < gridCellCount; i++) {
    const cell = document.createElement('div')
    cell.textContent = i
    cells.push(cell)
    grid.appendChild(cell)
  }
}
createGrid()


//////// * Functions ////////

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
function removingAlien() {
  enemyPosition.forEach(alien => removeEnemy(alien)) 
}
function addingAlien() {
  enemyPosition.forEach(alien => addEnemy(alien))
}
function addBlast() {
  cells[blastPosition].classList.add('blast')
}
function removeBlast() {
  cells[blastPosition].classList.remove('blast')
}


function handleLoad() {
  console.log('handleLoad')
  enemyPosition.forEach(alien => addEnemy(alien))
  cells[fighterPosition]; addFighter()
}


function handleStart() {
aliensMoving = window.setInterval(() => {
    removingAlien()

    if (alienMoveTracker < 10) {
      if (aliensMovingRight) {
        enemyPosition = enemyPosition.map(alien => alien + 1)
      } else {
        enemyPosition = enemyPosition.map(alien => alien - 1)
      }
      alienMoveTracker++
    } else if (alienMoveTracker === 10) {
      alienMoveTracker = 0
      enemyPosition = enemyPosition.map(alien => alien + width)
      aliensMovingRight = !aliensMovingRight
    }
    addingAlien()
  }, 1000)
}


function handleArrowMovement(event) {
  console.log('handleArrowMovement')
  event.preventDefault()
  removeFighter(fighterPosition) 
  switch (event.keyCode) { 
    case 39:
      if (xAxis < width - 1) fighterPosition++
      break
    case 37:
      if (xAxis > 0) fighterPosition--
      break
    default:
      console.log('invalid key do nothing')
  }
  addFighter(fighterPosition) 
  addBlast() 
}



function handleBlastMovement (event) {
  event.preventDefault()
  console.log('Im firing over here')
  if (event.keycode === 38) {
    let blastPosition = fighterPosition - width
    fighterBlastMoving = window.setInterval(() => {
      if(yAxis === 0) {
        removeBlast()
      } else if (cells[blastPosition].classlist.contains('virus')) {
        removeBlast()
        const enemyIndex = enemyPosition.indexOf(blastPosition)
        enemyPosition.splice(enemyIndex, 1)
        score = score + 500
        console.log(score)
        window.clearInterval(fighterBlastMoving)
      } else {
        removeBlast()
        blastPosition = blastPosition - width
        addBlast()
      }
    }, 500)

  }
}



//////// * Events ////////

loadButton.addEventListener('click', handleLoad)
startButton.addEventListener('click', handleStart)
document.addEventListener('keydown', handleArrowMovement)
document.addEventListener('keydown', handleBlastMovement)
