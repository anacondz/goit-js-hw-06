const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', target);
function target(a) {
    output.textContent = a.currentTarget.value;
    if (a.currentTarget.value === "") {
        output.textContent = "Anonymoous";
    }
}