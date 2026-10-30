const textInput = document.getElementById('textInput');
const counterResult = document.getElementById('counterResult');

const maxLength = Number(textInput.getAttribute('maxlength'));

function updateCounter() {
    const currentLength = textInput.value.length;
    counterResult.textContent = `${currentLength} / ${maxLength}`;
    counterResult.classList.toggle('warning', currentLength >= maxLength);
}

textInput.addEventListener('input', updateCounter);

updateCounter();
