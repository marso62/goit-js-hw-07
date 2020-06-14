'use strict';

console.log('Задание 7-1!');

const categories = document.querySelector('#categories');
const subcategories = categories.children.length;
console.log(subcategories);

const cat = categories.querySelector('.item');
const c = cat.children.length;
const catm = [...cat.children].forEach(e => e.children.textContent);

console.log(catm);

const elements = [...categories.children]
    .map(
        e =>
            `Категория; ${e.children[0].textContent} \nКоличество элементов: ${e.children[1].children.length}`
    )
    .join('\n\n');

console.log(elements);
