jQuery(document).ready(function () {
	// banner slider JS
	var $slider = $('.banner_slider');
	// var $progressBar = $('.progress');
	// var $progressBarLabel = $( '.slider__label' );

	// $slider.on('afterChange', function(event, slick, currentSlide, nextSlide) {   
	// 	var currentDot = $(".slick-dots .slick-active").index() + 1;
	// 	var dots = $slider.find('.slick-dots li').length;
	// 	var calc = (currentDot/dots) * 100;
	// 	$progressBar
	// 	.css('background-size', calc + '% 100%')
	// 	.attr('aria-valuenow', calc );
	// 	$progressBarLabel.text( calc + '% completed' );
	// });

	$slider.slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		arrows: false,
	});  
});