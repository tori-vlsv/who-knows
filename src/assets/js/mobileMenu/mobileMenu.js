import { disablePageScroll, enablePageScroll } from "scroll-lock";

function mobileMenu() {
  let burger = $('.header__button');
  let menu = $('.mob-menu');
  let close = $('.mob-menu__close');
  let links = $('.mob-menu a');
  burger.on('click', function() {
    menu.fadeIn();
    disablePageScroll();
  });
  links.on('click', function() {
    menu.fadeOut();
    enablePageScroll();
  });
  close.on('click', function() {
    menu.fadeOut();
    enablePageScroll();
  });
  $(window).on('keydown', function(e) {
    if ( e.keyCode == 27 ) {
      menu.fadeOut();
      enablePageScroll();
    }
  });
}
mobileMenu();