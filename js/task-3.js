'use strict'

console.log('Задание 7-3!')

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
]

const ul = document.querySelector('#gallery')
ul.classList.add('picture')
const item = images.map(e => {
  const li = document.createElement('li')
  li.insertAdjacentHTML(
    'afterbegin',
    `<img src=${e.url} alt=${e.alt.replace(/ /g, '_')} width=420 height=250>`
  )
  // li.setAttribute('src', `${e.url}`)  //почему такое создание атрибут не работает?
  // li.setAttribute('alt', `${e.alt}`)
  // li.setAttribute('width', 420)
  // li.setAttribute('height', 250)
  return li
})
ul.append(...item)
