// slider

// const { get } = require("browser-sync")

let screenWidth // переменная для расстояния между слайдами в зависимости от размера экрана

const mediaQuery = () => {
  if (window.matchMedia('(min-width: 1025px)').matches ) {
    screenWidth = 40
  }

  if (window.matchMedia('(max-width: 1024px)').matches ) {
    screenWidth = 20
  }

  if (window.matchMedia('(max-width: 540px)').matches ) {
    screenWidth = 10
  }
} 
mediaQuery()

const swiper = new Swiper('.swiper', {
  // цикличность слайдера
  loop: true,
  // включение стрелок
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // эффект сладера
  effect: 'slide',
  // перекючение слайдов стрелками
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  slidesPerView: 2, // количество слайдов
  spaceBetween: screenWidth, // расстояние между слайдами
  // курсор - рука
  grabCursor: true,
})

// tabs
document.addEventListener('DOMContentLoaded', () => {
const tabs = () => {
  const head = document.querySelector('.tabs__head')
  const body = document.querySelector('.tabs__body')

  const getActiveTabName = () => {
    return head.querySelector('.tabs__title--active').dataset.tab
  }

  const setActiveContent = () => {
    if (body.querySelector('.tabs__content--active')) {
      body.querySelector('.tabs__content--active').classList.remove('tabs__content--active')
    }
    body.querySelector(`[data-tab=${getActiveTabName()}]`).classList.add('tabs__content--active')
  }

  if (!head.querySelector('.tabs__title--active')) {
    head.querySelector('.tabs__title').classList.add('.tabs__title--active')
  }

  setActiveContent(getActiveTabName())

  head.addEventListener('click', e => {
    const caption = e.target.closest('.tabs__title')
    if (!caption) return
    if (caption.classList.contains('tabs__title--active')) return

    if (head.querySelector('.tabs__title--active')) {
      head.querySelector('.tabs__title--active').classList.remove('tabs__title--active')
    }

    caption.classList.add('tabs__title--active')

    setActiveContent(getActiveTabName())
  })
}

tabs()
})