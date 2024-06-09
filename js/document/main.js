(function ($) {
	"use strict";

	$(".mode").on("click", function () {
		$('.mode i').toggleClass("fa-moon-o").toggleClass("fa-lightbulb-o");
		$('body').toggleClass("dark-only");
	});

	// font size
	$(".decrease").on("click", function () {
		$('.content').addClass("font-decrease").removeClass("font-increase");
	});

	$(".increase").on("click", function () {
		$('.content').addClass("font-increase").removeClass("font-decrease");
	});

	$(".reset").on("click", function () {
		$('.content').removeClass("font-decrease").removeClass("font-increase");
	});

	$(".toggle-sidebar").on("click", function () {
		$('.left-sidebar').toggleClass("open");
		$('.sidebar-overlay').addClass("show");
	});

	$(".sidebar-close").on("click", function () {
		$('.left-sidebar').removeClass("open");
	});

	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 600) {
			$('.tap-top').fadeIn();
		} else {
			$('.tap-top').fadeOut();
		}
	});
	$('.tap-top').click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});

})(jQuery);

// sidebar active
var current = window.location.pathname
$(".nav-sidebar >li .nav-link").filter(function () {

	var link = $(this).attr("href");
	// console.log("active page", $(this).attr("href"));
	if (link) {
		if (current.indexOf(link) != -1) {
			$(this).parents().children('ul').css('display', 'block');
			$(this).parents().children('.title').addClass('active');
			$(this).addClass('active');
			return false;
		}
	}
});

// $('.left-sidebar').animate({
// 	scrollTop: $('a.nav-link.active').offset().top - 200
// }, 1000);


  //dark mode
function myFunction() {
  var element = document.getElementById('agenda');
  element.classList.toggle("dark-mode");

  var x = document.getElementById("btnValue");
  if (x.innerHTML === "Dark mode") {
    x.innerHTML = "Light mode";
    x.classList.remove('btn-dark')
    x.classList.toggle('btn-light')
  } else {
    x.innerHTML = "Dark mode";
    x.classList.remove('btn-light')
    x.classList.toggle('btn-dark')
  }

}



// SLIDER
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
  },
  // init: false,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.next-btn',
    prevEl: '.prev-btn',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },

    1024: {
      slidesPerView: 5,
      spaceBetween: 10,
    },

    // 1440:{
    //   slidesPerView: 5,
    //   spaceBetween: 10,
    // },

  }
});
// card-slider
$(document).ready(function() {
  $("#news-slider").owlCarousel({
      items: 3,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [980, 2],
      itemsMobile: [600, 1],
      pagination: false, // Hide pagination dots
      navigation: true, // Show navigation buttons
      navigationText: ["<", ">"], // Custom text for navigation
      autoPlay: false
  });
  $("#news-slider1").owlCarousel({
    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [980, 2],
    itemsMobile: [600, 1],
    pagination: false, // Hide pagination dots
    navigation: true, // Show navigation buttons
    navigationText: ["<", ">"], // Custom text for navigation
    autoPlay: false
});
$("#news-slider2").owlCarousel({
  items: 3,
  itemsDesktop: [1199, 3],
  itemsDesktopSmall: [980, 2],
  itemsMobile: [600, 1],
  pagination: false, // Hide pagination dots
  navigation: true, // Show navigation buttons
  navigationText: ["<", ">"], // Custom text for navigation
  autoPlay: false
});
$("#news-slider3").owlCarousel({
  items: 3,
  itemsDesktop: [1199, 3],
  itemsDesktopSmall: [980, 2],
  itemsMobile: [600, 1],
  pagination: false, // Hide pagination dots
  navigation: true, // Show navigation buttons
  navigationText: ["<", ">"], // Custom text for navigation
  autoPlay: false
});
});


