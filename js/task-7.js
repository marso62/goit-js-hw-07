'use strict'

console.log('Задание 7-7!')

const input = document.querySelector('#font-size-control')
const text = document.querySelector('#text')

input.addEventListener('input', fontChange)

function fontChange(scrolling) {
  text.style.fontSize = `${scrolling.currentTarget.value}px`
}
