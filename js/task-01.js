const numberCateg = document.querySelectorAll('.item');
console.log(`Number of categories: ${numberCateg.length}`);

numberCateg.forEach(function (categories) {
    console.log('Categories:', categories.firstElementChild.textContent);
    console.log('Elements:', categories.lastElementChild.children.length);
}
);