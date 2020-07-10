'use strict'

console.log('Задание 7-1!')
const categories = document.querySelector('#categories')
const ubcategories = categories.children.length
console.log(`В списке ${ubcategories} категории.`)

const elements = [...categories.children]
  .map(
    e =>
      `Категория: ${e.children[0].textContent} \nКоличество элементов: ${e.children[1].children.length}`
  )
  .join('\n\n')

console.log(elements)
