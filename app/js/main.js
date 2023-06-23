// slider

let screenWidth // переменная для расстояния между слайдами в зависимости от размера экрана

function mediaQuery() {
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
  // цикличность слайдераа
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
