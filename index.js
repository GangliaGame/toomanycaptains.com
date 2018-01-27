const controller = new ScrollMagic.Controller();

// Slide hands in when scrolling
const handsTimeline = new TimelineMax();
const leftHandTween = TweenMax.to('.hand-left', 1, {left: 0});
const rightHandTween = TweenMax.to('.hand-right', 1, {right: 0});
handsTimeline.add([leftHandTween,rightHandTween]);
const handsScene = new ScrollMagic.Scene({
  triggerHook: 0,
  duration: 750,
  reverse: true,
  triggerElement: '.table',
})
.setTween(handsTimeline)
.addTo(controller);

// Scale the logo down when sticky
const logoTweenScene = new ScrollMagic.Scene({
  triggerHook: 0,
  duration: 150,
  offset: 0,
  reverse: true,
  triggerElement: '.table',
})
.setTween('.logo-container', 1, {scale: 0.7})
.addTo(controller);

// Flatten batman out for mobile devices
const lexLuther = new ScrollMagic.Scene({
  triggerHook: 0,
  offset: -20,
  reverse: true,
  triggerElement: '.content',
})
.setClassToggle('.batman', 'batman-fullwidth')
.addTo(controller);



