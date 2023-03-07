import { disablePageScroll, enablePageScroll } from "scroll-lock";

function popup() {
  let button = $('.callback__button');
  let popup = $('.popup');
  let bg = $('.popup__bg');
  let close = $('.popup__close');
  let body = $('body');
  button.on('click', function() {
    body.addClass('popup-open');
    popup.addClass('active');
    bg.addClass('active');
    disablePageScroll();
  });
  bg.on('click', function() {
    body.removeClass('popup-open');
    popup.removeClass('active');
    bg.removeClass('active');
    enablePageScroll();
  });
  close.on('click', function() {
    body.removeClass('popup-open');
    popup.removeClass('active');
    bg.removeClass('active');
    enablePageScroll();
  });
  $(window).on('keydown', function(e) {
    if ( e.keyCode == 27 ) {
      body.removeClass('popup-open');
      popup.removeClass('active');
      bg.removeClass('active');
      enablePageScroll();
    }
  });
}
popup();