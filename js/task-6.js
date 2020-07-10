'use strict'

console.log('Задание 7-6!')

const inputText = document.querySelector('#validation-input')

const inputColor = number => {
  if (inputText.getAttribute('data-length') > inputText.value.length) {
    //почему в данном случае не работает === и !==?
    inputText.classList.remove('valid')
    inputText.classList.add('invalid')
  } else {
    inputText.classList.remove('invalid')
    inputText.classList.add('valid')
  }
}

inputText.addEventListener('input', inputColor)
