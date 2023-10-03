jQuery(document).ready(function () {
	// banner slider JS
	var $slider = $('.banner_slider');
	var progressBar = jQuery('.progress');

	$slider.on('init', function (event, slick) 
	{
		var calc = (1 / (slick.slideCount)) * 100;
		progressBar.css('background-size', calc + '% 100%').attr('aria-valuenow', calc);
	});
	$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) 
	{
		var calc = ((nextSlide + 1) / (slick.slideCount)) * 100;
		progressBar.css('background-size', calc + '% 100%').attr('aria-valuenow', calc);
	});
	$slider.on("init reInit afterChange", function(event, slick) {
		$(".banenr_slider_counter").html(
			slick.slickCurrentSlide() + 1 + "/" + slick.slideCount
		);
	});

	$slider.slick({
		dots: true,
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

$(function() {
	$('.slides').on('init', function(event, slick) {
		$(this).append('<div class="slick-counter"><span class="current"></span> / <span class="total"></span></div>');
		$('.current').text(slick.currentSlide + 1);
		$('.total').text(slick.slideCount);
	})
	.slick({
		autoplay: true,
		autoplaySpeed: 3000,
		infinite: true,
		arrows: true
	})
	.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		$('.current').text(nextSlide + 1);
	});
});