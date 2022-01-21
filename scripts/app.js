

//////// * DOM Elements ////////

const grid = document.querySelector('.grid')
const cells = []
const loadButton = document.querySelector('#load')
const startButton = document.querySelector('#start')
const resetButton = document.querySelector('#reset')
const instructionButton = document.querySelector('#instruction')
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
    cells.push(cell)
    grid.appendChild(cell)
  }
}
createGrid()

//////// * Functions ////////

// Condensed Functions //

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

// Button Functions //

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
  }, 300)
  handleEnemyBomb()
}

function handleReset() {
  window.location.reload()
}

function handleInstruction() {
  window.alert('Captain Tom needs your help in defeating the evil Coronavirus. Use your skills to defeat them and save the world. \n\nKeys: Arrow Left - Left \nArrow Right - Right \nArrow Up - Shoot \n\nGood luck solider!')
}

// Movement Fnctions //

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
    } else if (cells[blastPosition].classList.contains('bomb')) {
      clearInterval(blastMovingInterval)
      clearInterval(parseInt(cells[blastPosition].dataset.interval))
      console.log(parseInt(cells[blastPosition].dataset.interval))
      cells[blastPosition].classList.remove('blast')
      cells[blastPosition].classList.remove('bomb')
      console.log(cells[blastPosition].dataset)
      cells[blastPosition].classList.add('explosion')
      window.setTimeout(() => {
        cells[blastPosition].classList.remove('explosion')
      }, 100)
      score = score + 100
      scoreCard.textContent = score 
    } else if (blastPosition <= width) {
      clearInterval(blastMovingInterval)
      cells[blastPosition].classList.remove('blast')
    }
  }, 200)
}

function handleEnemyBomb() {
  setInterval(() => {
    let bombIndex = enemyPosition[Math.floor(Math.random() * enemyPosition.length)]
    const alienBombInterval = setInterval(() => {
      cells[bombIndex].classList.remove('bomb')
      cells[bombIndex].removeAttribute('data-interval')
      bombIndex += width
      cells[bombIndex].classList.add('bomb')
      cells[bombIndex].setAttribute('data-interval', alienBombInterval)
      if (cells[bombIndex].classList.contains('syringe')) {
        clearInterval(alienBombInterval)
        cells[bombIndex].classList.remove('syringe')
        cells[bombIndex].classList.add('explosion')
        cells[bombIndex].classList.remove('bomb')
        livesLeft -= 1
        livesLeftMeter.textContent = livesLeft
        window.setTimeout(() => {
          cells[bombIndex].classList.remove('explosion')
        }, 300)
        window.setTimeout(() => {
          cells[fighterPosition].classList.add('syringe')
        }, 500)
      } else if (bombIndex >= 341) {
        clearInterval(alienBombInterval)
        cells[bombIndex].classList.remove('bomb')
      } else if (cells[bombIndex].classList.contains('blast')) {
        clearInterval(alienBombInterval)
        cells[bombIndex].classList.remove('blast')
        cells[bombIndex].classList.remove('bomb')
        cells[bombIndex].classList.add('explosion')
        window.setTimeout(() => {
          cells[bombIndex].classList.remove('explosion')
        }, 100)
        score = score + 100
        scoreCard.textContent = score 
      } 
    }, 500)
  }, 2000)
}

// Admin Functions //

function handlegameOver() {
  if (cells[fighterPosition].classList.contains('virus')) {
    grid.textContent = 'You caught Covid-19. Self-isolate for 10 days and come back and try again!'
    document.querySelector('.grid').style.color = '	#008000'
    document.querySelector('.grid').style.fontSize = '40px'
    document.querySelector('.grid').style.fontWeight = 'bolder'
    document.querySelector('.grid').style.textAlign = 'center'
  } if (livesLeft === 0) {
    grid.textContent = 'Out of lives solider. Pick up your mask and try again!'
    document.querySelector('.grid').style.color = '	#008000'
    document.querySelector('.grid').style.fontSize = '40px'
    document.querySelector('.grid').style.fontWeight = 'bolder'
    document.querySelector('.grid').style.textAlign = 'center'
  } if (enemyPosition.length === 0) {
    grid.textContent = 'You defeated the Coronavirus. The pubs can now reopen!'
    document.querySelector('.grid').style.color = '	#008000'
    document.querySelector('.grid').style.fontSize = '40px'
    document.querySelector('.grid').style.fontWeight = 'bolder'
    document.querySelector('.grid').style.textAlign = 'center'
  } 
}

//////// * Events ////////

loadButton.addEventListener('click', handleLoad)
startButton.addEventListener('click', handleStart)
resetButton.addEventListener('click', handleReset)
instructionButton.addEventListener('click', handleInstruction)
document.addEventListener('keydown', handleArrowMovement)