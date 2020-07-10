'use strict'

console.log('Задание 7-5!')

// Напиши скрипт который, при наборе текста в инпуте
// input#name-input (событие input), подставляет его
// текущее значение в span#name-output. Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.

const inputName = document.querySelector('#name-input')
const textName = document.querySelector('#name-output')

const name = e => {
  textName.textContent = e.currentTarget.value
  //почему value выводит результат? Ее можно использовать на всех типах, не только для массива?
}

inputName.addEventListener('input', name)
