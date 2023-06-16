  // core version + navigation, pagination modules:
// import Swiper, { Navigation, Pagination } from 'swiper';
//   // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
let screenWidth

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
console.log(screenWidth)

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
});