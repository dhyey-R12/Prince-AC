var $ = jQuery.noConflict();
jQuery(document).ready(function () {
	// navbar toggle js
	$('.navbar_toggler').click(function(){
		$('body').toggleClass('no_scroll');
		$('.header_link_list').toggleClass('header_menu_active');
		$(this).toggleClass('open_menu');
		$(this).next("nav").toggleClass('navbar_animate');
	});
	
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
		speed: 1500,
		slidesToShow: 1,
		arrows: false,
		touchThreshold: 60,
		autoplay: true,
		autoplaySpeed: 4000,
	});  

	// Producr slider JS
	$('.product_slider').not('.slick-initialized').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '.product_prev_btn',
		nextArrow: '.product_next_btn',
		touchThreshold: 120,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});

	// Product Gallery JS
	$('.product_gallery_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.product_gallery_thumbnails_slider'
	});
	$('.product_gallery_thumbnails_slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.product_gallery_slider',
		arrows: false,
		dots: false,
		focusOnSelect: true,
		vertical: true,
		responsive: [
		{
			breakpoint: 576,
			settings: {
				vertical: false,
				slidesToShow: 1,
			}
		}
		]
	});
});