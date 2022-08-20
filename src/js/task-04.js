
const value1 = document.querySelector('#value');
const handleClick = () => {
    console.log("click");
};
let counterValue = 0;
const addListener =
    document.querySelector('[data-action="increment"]');
addListener.addEventListener("click", (handleClick) => {
    counterValue += 1;
    value1.textContent = counterValue;
});

const removeListener =
    document.querySelector('[data-action="decrement"]');
removeListener.addEventListener("click", (handleClick) => {
    counterValue -= 1;
    value1.textContent = counterValue;
});