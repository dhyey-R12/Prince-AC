var $ = jQuery.noConflict();
jQuery(document).ready(function () {
	// navbar toggle js
	$('.navbar_toggler').click(function(){
		$('body').toggleClass('no_scroll');
		$('.header_link_list').toggleClass('header_menu_active');
		$(this).toggleClass('open_menu');
		$(this).next("nav").toggleClass('navbar_animate');
	});

	// navbar toggle js
	var headerHeight = jQuery('header').outerHeight();
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
		if (scroll >= headerHeight) {
			$("header").addClass("sticky");
			$("body").css("padding-top", headerHeight);
		} else {
			$("header").removeClass("sticky");
			$("body").css("padding-top", "0");
		}
	});

	// scrollspy js
	$(document).on("scroll", onScroll);
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();
		$(document).off("scroll");

		$('a').each(function () {
			$(this).removeClass('active');
		})
		$(this).addClass('active');

		var target = this.hash,
		menu = target;
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top - headerHeight
		}, 500, 'swing', function () {
			// window.location.hash = target;
			$(document).on("scroll", onScroll);
		});
		let windowWidth = jQuery(window).width();
		if (windowWidth < 768) {
			$('.navbar_toggler').trigger('click');
		}
	});

	function onScroll(event){
		var scrollPos = $(document).scrollTop();
		$('header nav.header_link ul li a').each(function () {
			var currLink = $(this);
			var refElement = $(currLink.attr("href"));
			if (refElement.offset().top <= scrollPos + headerHeight && refElement.offset().top + refElement.height() > scrollPos + headerHeight) {
			// if (refElement.position().top <= scrollPos && refElement.height() > scrollPos) {
				$('#menu-center ul li a').removeClass("active");
				currLink.addClass("active");
			}
			else{
				currLink.removeClass("active");
			}
		});
	}
	// var sectionIds = $('header nav.header_link ul li a');
	// jQuery(document).scroll(function(){
	// 	sectionIds.each(function(){
	// 		var container = $(this).attr('href');
	// 		var containerOffset = $(container).offset().top;
	// 		var containerHeight = $(container).outerHeight();
	// 		var containerBottom = containerOffset + containerHeight;
	// 		var scrollPosition = $(document).scrollTop();
	// 		if(scrollPosition < containerBottom - (headerHeight + 1) && scrollPosition >= containerOffset - (headerHeight + 1)){
	// 			$(this).addClass('active');
	// 		} else{
	// 			$(this).removeClass('active');
	// 		}
	// 	});
	// });
	// jQuery("a").on('click', function(event) {
	// 	if (this.hash !== "") {
	// 		event.preventDefault();
	// 		var hash = this.hash;
	// 		jQuery('html, body').animate({
	// 			scrollTop: jQuery(hash).offset().top - headerHeight
	// 		}, 1000);
	// 		/*
	// 		, function(){
	// 			window.location.hash = hash;
	// 			setTimeout(function() {
	// 				jQuery('html, body').animate({
	// 					scrollTop: jQuery(hash).offset().top - headerHeight
	// 				}, 1000);
	// 			},1000);
	// 		}
	// 		*/
	// 		// console.log("jQuery(hash).offset().top - headerHeight",jQuery(hash).offset().top - headerHeight);
	// 		// console.log("jQuery(hash).offset().top",jQuery(hash).offset().top);
	// 	} 
	// });
	
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