function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const textInput = document.querySelector('input')
const boxesCotnainer = document.querySelector('#boxes')


btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes)




const min = textInput.getAttribute('min');
const max = textInput.getAttribute('max');


function createBoxes() {
  const amount = parseInt(textInput.value);
  
      if (amount >= min && amount <= max) {
      const boxes = Array.from({ length: amount }, (_, index) => createBox(index));
      boxesCotnainer.append(...boxes);
      textInput.value = '';
      }
  
  
}

  function createBox(index) {
    const box = document.createElement('div');
    box.style.width = `${30 + index * 10}px`;
    box.style.height = `${30 + index * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    return box;
  }


function destroyBoxes() {
return boxes.innerHTML = '';
}

