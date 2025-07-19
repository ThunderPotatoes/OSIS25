let firstCount = JSON.parse(localStorage.getItem('firstCount'));
let secondCount = JSON.parse(localStorage.getItem('secondCount'));
let thirdCount = JSON.parse(localStorage.getItem('thirdCount'));
let fourthCount = JSON.parse(localStorage.getItem('fourthCount'));

function addFirstCount() {
  firstCount += 1;
}

function addSecondCount() {
  secondCount += 1;
}

function addThirdCount() {
  thirdCount += 1;
}

function addFourthCount() {
  fourthCount += 1;
}

function removeFirstCount() {
  if (firstCount > 0) {
    firstCount -= 1
  }
}

function removeSecondCount() {
  if (secondCount > 0) {
    secondCount -= 1
  }
}

function removeThirdCount() {
  if (thirdCount > 0) {
    thirdCount -= 1
  }
}

function removeFourthCount() {
  if (fourthCount > 0) {
    fourthCount -= 1
  }
}

function clearAll() {
  firstCount = 0
  secondCount = 0
  thirdCount = 0
  fourthCount = 0
}

function updateLocalStorage() {
  localStorage.setItem('firstCount', firstCount)
  localStorage.setItem('secondCount', secondCount);
  localStorage.setItem('thirdCount', thirdCount);
  localStorage.setItem('fourthCount', fourthCount);
}

function updateAll() {
  const firstCounts = document.querySelector('.countOne')
  const secondCounts = document.querySelector('.countTwo')
  const thirdCounts = document.querySelector('.countThree')
  const fourthCounts = document.querySelector('.countFour')
  updateLocalStorage()
  firstCounts.innerHTML = firstCount
  secondCounts.innerHTML = secondCount
  thirdCounts.innerHTML = thirdCount
  fourthCounts.innerHTML = fourthCount
  
}

document.querySelector('.one').addEventListener('click', () => {
  addFirstCount();
  updateAll()
})

document.querySelector('.two').addEventListener('click', () => {
  addSecondCount();
  updateAll()
})

document.querySelector('.three').addEventListener('click', () => {
  addThirdCount();
  updateAll()
})

document.querySelector('.four').addEventListener('click', () => {
  addFourthCount();
  updateAll()
})

document.querySelector('.removeOne').addEventListener('click', () => {
  removeFirstCount();
  updateAll()
})

document.querySelector('.removeTwo').addEventListener('click', () => {
  removeSecondCount();
  updateAll()
})

document.querySelector('.removeThree').addEventListener('click', () => {
  removeThirdCount();
  updateAll()
})

document.querySelector('.removeFour').addEventListener('click', () => {
  removeFourthCount();
  updateAll()
})

document.querySelector('.clearAll').addEventListener('click', () => {
  clearAll()
  updateAll()
})

updateAll()