"use strict";

var burger = document.querySelector('.header__burger');
var menu = document.querySelector('.header__nav');

burger.onclick = function () {
  burger.classList.toggle('opened');
  menu.classList.toggle('header__nav-active');
};
//# sourceMappingURL=main.js.map
