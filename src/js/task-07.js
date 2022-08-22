const range = document.getElementById('font-size-control');
const abra = document.getElementById('text');

range.addEventListener('range', change);
function change(event) {
    abra.style.fontSize = event.currentTarget.value + 'px';
}
