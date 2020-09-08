$(document).ready(function(){

  //  move the pen body up to connect with the first part
  TweenMax.set('.part3', {y: -572});

  //  hide all headings and text
  TweenMax.set(['.parts h2, .parts p'], {autoAlpha: 0});

  //  create a tween that will move the pen body back to its original css position
  const bodyToStart = TweenMax.to('.part3', 1, {y: 0, ease: Linear.easeNone, paused: false});

  //  Init ScrollMagic Controller 
  const controller = new ScrollMagic.Controller();

  //  create a Scene 1 -  move pen body to start  -
  const bodyToStartScene = new ScrollMagic.Scene({
    triggerElement: '.part1',
    triggerHook: 1,
    offset: 287,
    duration: 572
  })
  .setTween(bodyToStart)
  .addIndicators()
  .addTo(controller);

});
