$(document).ready(function(){

  // Init ScrollMagic
  const controller = new ScrollMagic.Controller();


  //  Scene 1 - pin the second section
  const pinScene1 = new ScrollMagic.Scene({
    triggerElement: '#slide01',
    triggerHook: 0,
    duration: '100%'
  })
  .setPin('#slide01 .pin-wrapper')
  .addTo(controller)
  ;

});
