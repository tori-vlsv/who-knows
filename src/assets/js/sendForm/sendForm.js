import { disablePageScroll, enablePageScroll } from "scroll-lock";
import lottie from "lottie-web";

function sendForm() {
  let form = $('.form');
  let popup = $('.popup');
  let bg = $('.popup__bg');
  let body = $('body');
  if (form) {
    form.on('submit', function(e) {
      e.preventDefault();
      fetch('assets/files/callback.php', {
        method: 'POST',
        body: new FormData(form.get(0))
      }).then((response) => {
        if (response.status == 404) {
          body.removeClass('popup-open');
          popup.removeClass('active');
          bg.removeClass('active');
          errorMessage();
        } else if (response.status == 200) {
          body.removeClass('popup-open');
          popup.removeClass('active');
          bg.removeClass('active');
          successMessage();
        }
      });
    });
  }
}
sendForm();

function errorMessage() {
  disablePageScroll();
  let form = $('.form');
  let popupForm = $('.popup .form');
  form.get(0).reset();
  popupForm.get(0).reset();
  let container = $(".error");
  let close = $(".error__close");
  let bg = $(".error__bg");
  container.addClass("error-active");
  bg.addClass("error__bg-active");
  setTimeout(function () {
    container.removeClass("error-active");
    bg.removeClass("error__bg-active");
    setTimeout(function () {
      enablePageScroll();
      enablePageScroll();
    }, 300);
  }, 2000);
  close.on("click", function () {
    container.removeClass("error-active");
    bg.removeClass("error__bg-active");
    setTimeout(function () {
      enablePageScroll();
      enablePageScroll();
    }, 300);
  });
}

function successMessage() {
  disablePageScroll();
  let form = $('.form');
  let popupForm = $('.popup .form');
  form.get(0).reset();
  popupForm.get(0).reset();
  let container = $(".success");
  let close = $(".success__close");
  let bg = $(".success__bg");
  container.addClass("success-active");
  bg.addClass("success__bg-active");
  let successContainer = document.getElementById("success__alert");
  let anim1 = lottie.loadAnimation({
    container: successContainer,
    renderer: "svg",
    loop: false,
    autoplay: false,
    animationData: require("../../files/success-animation.json"),
  });
  anim1.play();
  setTimeout(function () {
    container.removeClass("success-active");
    bg.removeClass("success__bg-active");
    setTimeout(function () {
      anim1.destroy();
      enablePageScroll();
      enablePageScroll();
    }, 300);
  }, 2000);
  close.on("click", function () {
    container.removeClass("success-active");
    bg.removeClass("success__bg-active");
    setTimeout(function () {
      anim1.destroy();
      enablePageScroll();
      enablePageScroll();
    }, 300);
  });
}
