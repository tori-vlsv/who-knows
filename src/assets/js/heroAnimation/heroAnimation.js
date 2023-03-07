import gsap from 'gsap';

function heroAnimation() {
  let cloud = $('.hero__bg-animation1');
  gsap
    .to(cloud, .6, {opacity: 1, stagger: 0.2, onComplete: function() {
      gsap.to($('.hero__bg-animation2'), .3, {opacity: 1, onComplete: function() {
        gsap.to($('.hero__bg-animation3'), .3, {opacity: 1}, '<1');
      }}, '<1');
    }});
}
setTimeout(function() {
  heroAnimation();
}, 600);