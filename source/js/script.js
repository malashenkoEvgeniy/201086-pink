'use strict';
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var pageHeaderBg = document.querySelector('.page-header__bg');
navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    //pageHeaderBg.style.backgroundPosition = '0 0';
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    //pageHeaderBg.style.backgroundPosition = '0 155px';
  }
});
