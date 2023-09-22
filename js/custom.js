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

	// Producr slider JS
	$('.product_slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '.product_prev_btn',
		nextArrow: '.product_next_btn',
		touchThreshold: 60,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			}
		}
		]
	});  
});