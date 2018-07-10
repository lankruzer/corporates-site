import $ from 'jquery';
import slick from 'slick-carousel';
import lightbox from 'lightbox2';
import '../js/popups.js';
// import '../js/tabs.js';
import datepicker from 'air-datepicker';


//hero video toggle
if (document.querySelector('.btn-hero-toggle')) {
	var interval;

	$('.btn-hero-toggle').click(function() {
		if (!$(this).hasClass('is-play')) {
	  $(this).html('Читать текст');

	  $('.hero-video__video').get(0).muted = false;
	  $('.hero-video__video').get(0).volume = 0;

	  if (interval !== undefined) {
				clearInterval(interval);
	  }

	  interval = setInterval(function() {
				$('.hero-video__video').get(0).volume += 0.01;
				if ($('.hero-video__video').get(0).volume >= 0.99) {
		  clearInterval(interval);
				}
	  }, 5);
		} else {
	  $(this).html('Смотреть видео');

	  if (interval !== undefined) {
				clearInterval(interval);
	  }

	  interval = setInterval(function() {
				$('.hero-video__video').get(0).volume -= 0.01;
				if ($('.hero-video__video').get(0).volume <= 0.02) {
		  clearInterval(interval);
		  $('.hero-video__video').get(0).muted = true;
				}
	  }, 5);

		}

		$('body').toggleClass('is-hide-scroll');
		$('.hero__wrapper').toggleClass('is-hide');
		$('.hero-video').toggleClass('is-sound');
		$(this).toggleClass('is-play');

	});
}

//hero-slider
if (document.querySelector('.hero-slider')) {
	$('.hero-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 7500,
		dots: false,
		arrows: true
	});
}

//lightbox
if (document.querySelector('a[data-lightbox]')) {
	lightbox.option({
		albumLabel: 'Изображение %1 из %2'
	});
}

//reviews-slider
if (document.querySelector('.reviews-slider')) {
	$('.reviews-slider').slick({
		dots: false,
		arrows: true,
		responsive: [
			{
				breakpoint: 800,
				settings: {
      				adaptiveHeight: true
				}
			}
		]
	});
}

// yandeks map
if (document.querySelector('#map')) {
	$(document).ready(function() {

		var myMap;
		ymaps.ready(init);

		function init() {
	  		myMap = new ymaps.Map('map', {
				center: [53.902496, 27.561481],
				zoom: 10,
				controls: []
	  		}, {
				searchControlProvider: 'yandex#search'
	  		});
	  // ,
	  // myMap.geoObjects
	  //   .add(new ymaps.Placemark([53.902496, 27.561481], {
	  //     balloonContent: 'Адрес компании'
	  //   }, {
	  //     iconColor: 'red'
	  //   })); 
		}
	});
}

// fixed header on index
if (document.querySelector('.header-index')) {
	var scrolled,
		header = $('.header'),
		headerIndex = $('.header-index');

	$(window).scroll(function(event) {
		scrolled = $(window).scrollTop();
		
		if (scrolled >= headerIndex.offset().top) {
			if (!header.hasClass('is-fixed')) {
				headerIndex.css('padding-top', header.height());
				header.addClass('is-fixed');
			}
		} else {
			if (header.hasClass('is-fixed')) {
				headerIndex.css('padding-top', 0);
				header.removeClass('is-fixed');
			}
		}
	});

	// if (header.hasClass('is-fixed')) {

	// }
}

// datapicker
$('.input-date').datepicker({
	inline: true,
	position: 'right top'
});

// header mobile
if (document.querySelector('.btn-mobile-menu')) {
	var btnMobileMenu = $('.btn-mobile-menu'),
		mobileBlock = $('.header .mobile-block');

	$('.btn-mobile-menu').click(function() {
		$(this).toggleClass('is-active');
		if ($('.header').hasClass('is-fixed')) {
			if (!mobileBlock.hasClass('is-active')) {
				$('body').toggleClass('is-hide-scroll');
			} else {
				if ($('body').hasClass('is-hide-scroll')) {
					$('body').removeClass('is-hide-scroll');
				}
			}
		}
		mobileBlock.toggleClass('is-active');
	});
}

//page event sliders
if (document.querySelector('.page-event-article__slider-for') && document.querySelector('.page-event-article__slider-nav')) {
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		adaptiveHeight: true,
		asNavFor: '.slider-nav'
	});

	$('.slider-nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.slider-for',
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
      				slidesToShow: 4
				}
			},
			{
				breakpoint: 600,
				settings: {
      				slidesToShow: 3
				}
			}
		]
	});
}
