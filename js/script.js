document.addEventListener('DOMContentLoaded', function () {
    const HEADER_MENU = document.querySelector('.header__navigation-container');
    const BUTTON_MENU = HEADER_MENU.querySelector('.header__menu-button');
    const BUTTON_MENUES = HEADER_MENU.querySelectorAll('.navigation-menu__link');

    BUTTON_MENU.addEventListener('click', function () {
        HEADER_MENU.classList.toggle('header__navigation-container--active');
    })

    BUTTON_MENUES.forEach(element => {
      element.addEventListener('click', function () {
        HEADER_MENU.classList.remove('header__navigation-container--active');
      })
    });
})

// const className = "has-background";
// const scrollTrigger = 60;

// window.addEventListener('scroll', function(e) {
//   // We add pageYOffset for compatibility with IE.
//   if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
//     document.getElementById("header").classList.add(className);
//   } else {
//     document.getElementById("header").classList.remove(className);
//   }
// });