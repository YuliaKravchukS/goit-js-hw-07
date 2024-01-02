function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const textInput = document.querySelector('#controls input')
const boxes = document.querySelector('#boxes')


btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes)


console.log(textInput.value);
const amount = 3;
const min = textInput.getAttribute('min');
const max = textInput.getAttribute('max');
console.log(amount, min, max);

function createBoxes(amount) {
  const arr = [];
  let count = 0;
    for (let i = 0; i < amount; i++) {
      if (amount >= min && amount <= max) {
        const markupBox = '<div class = box></div>';
        arr.push(markupBox);
      }
  }
  return arr
}



console.log(createBoxes());

function destroyBoxes() {

}

