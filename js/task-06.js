const input = document.querySelector('#validation-input');

input.addEventListener("blur", blurChange);

function blurChange(event) {
    const onInput = event.currentTarget;
    const inpLength = Number(onInput.dataset.length);
    
    if (onInput.value.length === inpLength) {
        onInput.classList.remove('invalid');
        onInput.classList.add('valid');
    }
    else {
        onInput.classList.add('invalid');
        onInput.classList.remove('valid');
    }
}