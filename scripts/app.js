// Actions

// fighter explosion not disappearing
// cant shoot alien bombs
// lives left meter

// stretch goal - speeding up aliens as 19 (width) dissapear

// CSS (audio, pop up, start pop up)




//////// * DOM Elements ////////

const grid = document.querySelector('.grid')
const cells = []
const loadButton = document.querySelector('#load')
const startButton = document.querySelector('#start')
const scoreCard = document.querySelector('#score-display')
const livesLeftMeter = document.querySelector('#lives-left')


//////// * Variables ////////

const width = 19
const gridCellCount =  width * width

let enemyPosition = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53]
let fighterPosition = 332


let score = 0

let enemyMovementTracker = 3
let enemyMovingRight = true

let livesLeft = 3



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


function handleLoad() {
  enemyPosition.forEach(alien => addEnemy(alien))
  addFighter()
}


function handleStart() {
  window.setInterval(() => {
    removingAlien()

    if (enemyMovementTracker < 6) {
      if (enemyMovingRight) {
        enemyPosition = enemyPosition.map(alien => alien + 1)
      } else {
        enemyPosition = enemyPosition.map(alien => alien - 1)
      }
      enemyMovementTracker++ 
    } else if (enemyMovementTracker === 6) {
      enemyMovementTracker = 0
      enemyPosition = enemyPosition.map(alien => alien + width)
      enemyMovingRight = !enemyMovingRight
    }
    addingAlien()
    handlegameOver() 

  }, 1000)
  handleEnemyBomb()
}

function handleArrowMovement(event) {
  event.preventDefault()
  const xAxis = fighterPosition % width
  removeFighter(fighterPosition) 
  // let blastPosition = fighterPosition - width
  switch (event.keyCode) { 
    case 39:
      if (xAxis < width - 1) fighterPosition++
      break
    case 37:
      if (xAxis > 0) fighterPosition--
      break
    case 38:
      handleBlastMovement()
      break
    default:
      console.log('what are you doing solider?')
  }
  addFighter(fighterPosition) 
}

function handleBlastMovement() {
  let blastPosition = fighterPosition 
  const blastMovingInterval = window.setInterval(() => {
    cells[blastPosition].classList.remove('blast')
    blastPosition -= width
    cells[blastPosition].classList.add('blast')
    if (cells[blastPosition].classList.contains('virus')) {
      cells[blastPosition].classList.remove('blast', 'virus')
      cells[blastPosition].classList.add('explosion')
      clearInterval(blastMovingInterval)
      window.setTimeout(() => {
        cells[blastPosition].classList.remove('explosion')
      }, 300)
      const enemyIndex = enemyPosition.indexOf(blastPosition)
      enemyPosition.splice(enemyIndex, 1)
      score = score + 500
      scoreCard.textContent = score
    } else if (blastPosition <= width) {
      clearInterval(blastMovingInterval)
      cells[blastPosition].classList.remove('blast')
    }
  }, 300)
}

function handleEnemyBomb() {
  // const alienWMD = 
  setInterval(() => {
    let bombIndex = enemyPosition[Math.floor(Math.random() * enemyPosition.length)]
    const alienBombMovement = setInterval(() => {
      cells[bombIndex].classList.remove('bomb')
      bombIndex += width
      cells[bombIndex].classList.add('bomb')

      if (cells[bombIndex].classList.contains('syringe')) {
        clearInterval(alienBombMovement)
        cells[bombIndex].classList.remove('syringe')
        cells[bombIndex].classList.add('explosion')
        livesLeftMeter.textContent = livesLeft - 1
        window.setTimeout(() => {
          cells[fighterPosition].classList.add('syringe')
        }, 300)
        console.log('hit hit hit')
      } else if (bombIndex >= 341) {
        clearInterval(alienBombMovement)
        cells[bombIndex].classList.remove('bomb')
        console.log('miss miss miss')
      }
      if (cells[bombIndex].classList.contains('blast')) {
        clearInterval(alienBombMovement)
        cells[bombIndex].classList.remove('blast', 'bomb')
        cells[bombIndex].classList.add('explosion')
        window.setTimeout(() => {
          cells[bombIndex].classList.remove('explosion')
        }, 100)
        score = score + 100
        scoreCard.textContent = score } 
    }, 500)
  }, 2000)
}



function handlegameOver() {
  if (cells[fighterPosition].classList.contains('virus')) {
    window.alert('Game Over')
  }
  if (livesLeft === 0) {
    window.alert('Game Over')
  }
  if (enemyPosition.length === 0) {
    window.alert('Game Over')
  } 
}





//////// * Events ////////

loadButton.addEventListener('click', handleLoad)
startButton.addEventListener('click', handleStart)
document.addEventListener('keydown', handleArrowMovement)


