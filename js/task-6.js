function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const textInput = document.querySelector('input')
const boxesContainer = document.querySelector('#boxes')


btnCreate.addEventListener('click', () => createBoxes(parseInt(textInput.value)));
btnDestroy.addEventListener('click', destroyBoxes)



function createBoxes(amount) {
  const min = parseInt(textInput.getAttribute('min'));
  const max = parseInt(textInput.getAttribute('max'));

  if (amount >= min && amount <= max) {
      destroyBoxes();
      const boxes = Array.from({ length: amount }, (_, index) => createBox(index));
      boxesContainer.append(...boxes);
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
boxesContainer.innerHTML = '';
}

