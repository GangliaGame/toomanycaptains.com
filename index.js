const controller = new ScrollMagic.Controller();

function vw(v) {
  const w = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0,
  );
  return v * w / 100;
}

// Slide hands in when scrolling
const handsTimeline = new TimelineMax();
const leftHandTween = TweenMax.to('.hand-left', 1, { left: 0 });
const rightHandTween = TweenMax.to('.hand-right', 1, { right: 0 });
handsTimeline.add([leftHandTween, rightHandTween]);
const handsScene = new ScrollMagic.Scene({
  triggerHook: 0,
  duration: 600,
  offset: 100,
  reverse: true,
  triggerElement: '.table',
})
  .setTween(handsTimeline)
  .addTo(controller);

// Scale the logo down when sticky
const logoTweenScene = new ScrollMagic.Scene({
  triggerHook: 0,
  duration: 150,
  offset: vw(-5),
  reverse: true,
  triggerElement: '.table',
})
  .setTween('.logo-container', 1, { scale: 0.6 })
  .setTween('.logo-lower', 1, { opacity: 0 })
  .addTo(controller);

// Expand batman to full width
// This is necessary for mobile, as the content
// width is wider than the batman element.
const lexLuther = new ScrollMagic.Scene({
  triggerHook: 0,
  offset: vw(-8),
  reverse: true,
  triggerElement: 'h1',
})
  .setClassToggle('.batman', 'batman-fullwidth')
  .addTo(controller);

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
});

$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
