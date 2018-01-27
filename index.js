const controller = new ScrollMagic.Controller();

const handsTimeline = new TimelineMax();
const leftHandTween = TweenMax.to(".hand-left", 1, {left: 0});
const rightHandTween = TweenMax.to(".hand-right", 1, {right: 0});
handsTimeline.add([leftHandTween,rightHandTween]);

const handsScene = new ScrollMagic.Scene({
  triggerHook: 0,
  duration: 750,
  reverse: true,
  triggerElement: '.table',
})
// .addIndicators()
.setTween(handsTimeline)
.addTo(controller);

const logoTimeline = new TimelineMax();
const logoShrinkTween = TweenMax.to(".logo-container", 1, {scale: 0.7});
logoTimeline.add([logoShrinkTween]);

const logoTweenScene = new ScrollMagic.Scene({
  triggerHook: 0,
  duration: 150,
  offset: 0,
  reverse: true,
  triggerElement: '.table',
})
// .addIndicators()
.setTween(logoTimeline)
.addTo(controller);

const lol = new ScrollMagic.Scene({
  triggerHook: 0,
  offset: -20,
  reverse: true,
  triggerElement: '.content',
})
// .addIndicators()
.setClassToggle('.batman', 'batman-fullwidth')
.addTo(controller);



