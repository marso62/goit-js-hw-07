'use strict'

console.log('Задание 7-2!')

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
]

const ul = document.querySelector('#ingredients')
const items = ingredients.map(e => {
  const li = document.createElement('li')
  li.textContent = e
  return li
})
ul.append(...items)

// function createLi(e) {
//   const li = document.createElement('li')
//   li.textContent = e
//   return li
// }
// const ul = document.querySelector('#ingredients')
// const items = ingredients.map(createLi)
// ul.append(...items)
