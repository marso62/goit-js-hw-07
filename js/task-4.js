'use strict'

console.log('Задание 7-4!')

const button = document.querySelectorAll('button')
const buttIncrement = document.querySelector('button[data-action="increment"]')
const buttDecrement = document.querySelector('button[data-action="decrement"]')
const value = document.querySelector('#value')

let counterValue = 0

const increment = () => {
  counterValue += 1
  value.innerHTML = counterValue
}
const decrement = () => {
  counterValue -= 1
  value.innerHTML = counterValue
}

buttIncrement.addEventListener('click', increment)
buttDecrement.addEventListener('click', decrement)
