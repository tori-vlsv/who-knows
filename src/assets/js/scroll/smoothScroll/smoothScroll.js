import SmoothScroll from "smooth-scroll";

function smoothScroll() {
  let offset;
  if ($(window).width() >= 1202) {
    offset = 124;
  } else {
    offset = 60;
  }
  new SmoothScroll('a[href*="#"]', {
    speed: 800,
    speedAsDuration: true,
    after: function () {
      $("body").css("overflow", "");
    },
    offset: offset
  });
}
smoothScroll();
