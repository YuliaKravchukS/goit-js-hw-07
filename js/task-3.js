const textInput = document.querySelector('#name-input');

const textOutput = document.querySelector('#name-output');
const eventListener = textInput.addEventListener('input', sayHello);

function sayHello() {
    
    const trimmedValue = textInput.value.trim();
    textOutput.textContent = trimmedValue || 'Anonymous'

}
