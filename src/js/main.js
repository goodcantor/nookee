let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');

burger.onclick = function () {
  burger.classList.toggle('opened');
  menu.classList.toggle('header__nav-active');
};
