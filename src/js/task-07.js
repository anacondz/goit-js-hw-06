const ranger = document.querySelector('#font-size-control');
const abra = document.querySelector('#text');

ranger.addEventListener('ranger', changer);

function changer(event) {
    abra.style.fontSize = event.currentTarget.value + "px";
}
