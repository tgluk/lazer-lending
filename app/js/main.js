// slider

// const { active } = require("browser-sync")

let screenWidth; // переменная для расстояния между слайдами в зависимости от размера экрана
const mediaQuery = () => {
  if (window.matchMedia("(min-width: 1025px)").matches) {
    screenWidth = 40;
  }

  if (window.matchMedia("(max-width: 1024px)").matches) {
    screenWidth = 20;
  }

  if (window.matchMedia("(max-width: 540px)").matches) {
    screenWidth = 10;
  }
};
mediaQuery();

const swiper = new Swiper(".swiper", {
  // цикличность слайдера
  loop: true,
  // включение стрелок
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // эффект сладера
  effect: "slide",
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

// tabs
document.addEventListener("DOMContentLoaded", () => {
  const tabletWindow = window.matchMedia("(max-width: 840px)").matches;
  const tabs = () => {
    const head = document.querySelector(".tabs__head");
    const body = document.querySelector(".tabs__body");

    const getActiveTabName = () => {
      return head.querySelector(".tabs__title--active").dataset.tab;
    };

    const setActiveContent = () => {
      if (body.querySelector(".tabs__content--active")) {
        body
          .querySelector(".tabs__content--active")
          .classList.remove("tabs__content--active");
      }
      body
        .querySelector(`[data-tab=${getActiveTabName()}]`)
        .classList.add("tabs__content--active");
    };

    if (!head.querySelector(".tabs__title--active")) {
      head.querySelector(".tabs__title").classList.add(".tabs__title--active");
    }

    setActiveContent(getActiveTabName());

    head.addEventListener("click", (e) => {
      const caption = e.target.closest(".tabs__title");
      if (!caption) return;
      if (!tabletWindow && caption.classList.contains("tabs__title--active"))
        return;

      if (head.querySelector(".tabs__title--active")) {
        head
          .querySelector(".tabs__title--active")
          .classList.remove("tabs__title--active");
      }

      caption.classList.add("tabs__title--active");

      setActiveContent(getActiveTabName());
    });
  };

  tabs();
});

/* burger animated */

const button = document.querySelector(".burger");
const burger = document.querySelector(".burger-btn");
const list = document.querySelector(".list");
const nav = document.querySelector(".nav");

button.addEventListener("click", () => {
  if (burger.classList.contains("active")) {
    burger.classList.remove("active");
    list.classList.remove("list_active");
  } else {
    burger.classList.toggle("active");
    list.classList.toggle("list_active");
  }

  if (burger.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
});

/* Контакты в меню */

const contacts = document.createElement("li");

const getContacts = () => {
  if (window.matchMedia("(max-width: 540px)").matches) {
    contacts.classList.add("contacts-visible");
    contacts.innerHTML = `
      <div class="contacts__wrap">
        <a href="tel:88007071120" class="contacts__link contacts__link--tel">8 800 707 11 20</a>
        <a href="tel:+79512084892" class="contacts__link contacts__link--tel">8 951 208 48 92</a>
        <a href="mailto:amada18@mail.ru" class="contacts__link contacts__link--mail">amada18@mail.ru</a>
      </div>
      <div class="contacts__icons icons">
        <a href="#" class="icons__link"><img class="icons__img" src="./assets/images/icons/telegram.png" alt="telegram"></a>
        <a href="#" class="icons__link"><img class="icons__img" src="./assets/images/icons/whatsapp.png" alt="whatsapp"></a>
      </div>
    `;
    list.appendChild(contacts);
    // console.log(true)
  }
};
getContacts();

window.addEventListener("resize", (e) => {
  e.preventDefault;
  if (
    window.innerWidth <= 540 &&
    document.querySelector(".contacts-visible") == null
  ) {
    getContacts();
    // console.log(true)
  }

  if (window.innerWidth > 540) {
    contacts?.remove();
    // console.log(false)
  }
});

/* Header скролл */

// const nav = document.querySelector('.navigation');
const header = document.querySelector(".header");
let prevScrollpos = window.pageYOffset;
// var rect = header.getBoundingClientRect();

window.addEventListener("scroll", () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header.classList.add("header_fixed");
    // header.classList.remove('header_hidden');
  } else {
    header.classList.remove("header_fixed");
  }
  prevScrollpos = currentScrollPos;

  // if (window.pageYOffset >= 200) {
  //   header.classList.add('header_hidden');
  // }

  if (window.pageYOffset <= 5) {
    // header.classList.remove('header_hidden');
    header.classList.remove("header_fixed");
  }

  // console.log(currentScrollPos);
});
