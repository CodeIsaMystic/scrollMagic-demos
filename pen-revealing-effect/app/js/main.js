$(document).ready(function(){

  /*  Hide all headings and text 
  TweenMax.set(['.parts h2, .parts p'], {autoAlpha: 0});
  */


  /*  Move the pen body up to connect with the first part  */
  TweenMax.set('.part3', {y: -572});
  /*  Create a tween that will move the pen body back to its original css position  */
  const bodyToStart = TweenMax.to('.part3', 1, {y: 0, ease: Linear.easeNone, paused: false});
  /*  Init ScrollMagic Controller  */
  const controller = new ScrollMagic.Controller();


  /*  Create a Scene 1 -  move pen body to start  -  */
  const bodyToStartScene = new ScrollMagic.Scene({
    triggerElement: '.part1',
    triggerHook: 1,
    offset: 286,
    duration: 572
  })
  .setTween(bodyToStart)
  //.addIndicators()
  .addTo(controller);

  /*  
  Move 4  and  5 down, to connect with part  6
  TweenMax.set('.part5', {y: 120});
  TweenMax.set('.part4', {y: 305});
  */

  /*  Move part  6 to connect with the body   */
  TweenMax.set('.part6', {y: -846});
  /*  Move 4  and  5 down, to connect with part  6  again  */
  TweenMax.set('.part5', {y: -726}); // 120 - 846
  TweenMax.set('.part4', {y: -541}); //  305 - 846


  /*  Create scene for part 6  -  move part 6 to start  */
  const p6ToStart = new TweenMax.to('.part6', 1, {y: 0, ease : Linear.easeNone});
  const p6ToStartScene = new ScrollMagic.Scene({
    triggerElement: '.part1',
    triggerHook: 1,
    offset: 1250,
    duration: 846
  })
  .setTween(p6ToStart)
  //.addIndicators()
  .addTo(controller);


  /*  Create scene for part 5  -  move part 5 to start   */
  const p5ToStart = new TweenMax.to('.part5', 1, {y: 0, ease : Linear.easeNone});
  const p5ToStartScene = new ScrollMagic.Scene({
    triggerElement: '.part1',
    triggerHook: 1,
    offset: 1250,
    duration: 726
  })
  .setTween(p5ToStart)
  //.addIndicators()
  .addTo(controller);


  /*  Create scene for part 4  -  move part 4 to start   */
  const p4ToStart = new TweenMax.to('.part4', 1, {y: 0, ease : Linear.easeNone});
  const p4ToStartScene = new ScrollMagic.Scene({
    triggerElement: '.part1',
    triggerHook: 1,
    offset: 1250,
    duration: 541
  })
  .setTween(p4ToStart)
  //.addIndicators()
  .addTo(controller);


  /*  Loop through all parts and add a class .fade-in   */
  $('.parts li').each(function() {
    const scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.55
    })
    .setClassToggle(this, 'fade-in')
    .addTo(controller);
  });

});
