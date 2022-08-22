function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const color = document.querySelector('.color');
const buttonCh = document.querySelector('.change-color');

buttonCh.addEventListener("click", () => {
  color.textContent = getRandomHexColor();
  document.body.setAttribute(
    'style', 'background-color:' + color.textContent
  )
});
