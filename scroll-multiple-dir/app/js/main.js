$(document).ready(function(){

	// Init ScrollMagic
	const controller = new ScrollMagic.Controller();

	/*   Step   1  -  pin  the main section   */

	/*   Step   2  -  Create a timeline playing during 300% of scrolling   */

	/*   Step   3  -  Add a timeline to the scene   */


	const horizontalMoveTl = new TimelineMax();
	horizontalMoveTl
		.to('.horizontal-container', 1, {x: '-66.666%', ease: Linear.easeNone});

	const pinMainScene = new ScrollMagic.Scene({
		triggerElement: '#main',
		triggerHook: 0,
		duration: '300%'
	})
	.setTween(horizontalMoveTl)
	.setPin('#main')
	.addTo(controller);

});


















