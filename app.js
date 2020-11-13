window.onload = function(){
	TweenLite.to('.loading-screen', 4, {
	delay: 6.6,
	top: '-110%',	
	ease: Expo.easeInOut
})

	TweenLite.from('.logo', 3,{
		delay: 8.4,
		opacity: 0,
		y: 20,
		ease: Expo.easeInOut
	})

	TweenLite.from('.menu', 3,{
		delay: 8.4,
		opacity: 0,
		y: 20,
		ease: Expo.easeInOut
	})

	TweenLite.from('.contact', 3,{
		delay: 8.4,
		opacity: 0,
		y: 20,
		ease: Expo.easeInOut
	})

	TweenLite.from('.bottom-text', 3,{
		delay: 8.6,
		opacity: 0,
		y: 20,
		ease: Expo.easeInOut
	})
	
	TweenLite.from('.copyright', 3,{
		delay: 8.9,
		opacity: 0,
		y: 20,
		ease: Expo.easeInOut
	})
	TweenMax.staggerFrom('.media ul li', 2,{
		delay: 8.7,
		opacity: 0,
		y: 20,
		ease: Expo.easeInOut
	}, 0.1)

	TweenLite.from('.m17', 3,{
		delay: 8.8,
		opacity: 0,
		y: 20,
		ease: Expo.easeInOut
	})

	TweenLite.from('.p1', 3,{
		delay: 9,
		opacity: 0,
		y: 20,
		ease: Expo.easeInOut
	})

	TweenLite.from('.p2', 3,{
		delay: 9.2,
		opacity: 0,
		y: 20,
		ease: Expo.easeInOut
	})

	TweenLite.from('#one', 3,{
		delay: 9.4,
		opacity: 0,
		y: 20,
		ease: Expo.easeInOut
	})

	TweenLite.from('#two', 3,{
		delay: 9.6,
		opacity: 0,
		y: 20,
		ease: Expo.easeInOut
	})

	var timeline1 = new TimelineMax();

	timeline1.from('.ringOne', 4,{
		delay: 0.4,
		opacity: 0,
		y: 400,
		ease: Expo.easeInOut
	})
	.from('.ringTwo', 4,{
		delay: 0.9,
		opacity: 0,
		y: 400,
		ease: Expo.easeInOut
	}, '-=5')
	.to('.ringOne', 4,{
		delay: 1.8,
		// opacity: 0,
		x: 400,
		ease: Expo.easeInOut
	})
	.to('.ringTwo', 4,{
		delay: 1.5,
		// opacity: 0,
		x: 400,
		ease: Expo.easeInOut
	}, '-=6')


	// var textWrapper = document.querySelector('.m17 .letters');

	// textWrapper.innerHtml = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g,"<span class='letter'>$&</span>");

	// anime.timeline({loop: false}).add({
	// 	targets: '.m17 .letter',
	// 	translateY: ["1.1em", 0],
	// 	translateX: ["0.55em", 0],
	// 	translateZ: 0,
	// 	rotateZ: [180, 0],
	// 	duration: 750,
	// 	easing: 'easeOtExpo',
	// 	delay: function(el ,i){
	// 		return 9000 + 50 *i;
	// 	}
	// });
}