const ranger = document.getElementById('font-size-control');
const abra = document.getElementById('text');

ranger.addEventListener('input', changer);

function changer(event) {
    abra.style.fontSize = event.currentTarget.value + 'px';
};
