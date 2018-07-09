import $ from 'jquery';

// open popup form
$( '.btn-open-call-js' ).click(function(event) {
	event.preventDefault();
	$( '.overlay' ).addClass( 'is-active' );
	$( 'body' ).toggleClass( 'is-hide-scroll' );
	$( '.overlay-content-form-call' ).addClass( 'is-active' );
});
// /open popup form

// open popup form
$( '.btn-open-app-js' ).click(function(event) {
	event.preventDefault();
	$( '.overlay' ).addClass( 'is-active' );
	$( 'body' ).toggleClass( 'is-hide-scroll' );
	$( '.overlay-content-form-app' ).addClass( 'is-active' );
});
// /open popup form

// open popup form
$( '.btn-open-calabration-js' ).click(function(event) {
	event.preventDefault();
	$( '.overlay' ).addClass( 'is-active' );
	$( 'body' ).toggleClass( 'is-hide-scroll' );
	$( '.overlay-content-form-calabration' ).addClass( 'is-active' );
});
// /open popup form

// close popup form on click close
$( '.overlay__close' ).click(function(event) {
	event.preventDefault();
	$( 'body' ).toggleClass( 'is-hide-scroll' );
	$( '.overlay' ).removeClass( 'is-active' );
	$( '.overlay-content-form' ).removeClass( 'is-active' );
});
// /close popup form on click close

// //close popup form on click outside
// $( '.overlay-content' ).click(function(event) {
// 	if ( $( '.overlay-content' ).has(event.target).length === 0 ) {
// 		$('.overlay').removeClass('is-active');
// 		$( 'body' ).toggleClass( 'is-hide-scroll' );
// 		$('.overlay-content-form').removeClass('is-active');
// 	}
// });
// //close popup form on click outside

// close popup on press Esc
$(document).keyup(function(event) {
	if ( event.keyCode === 27 ) {
		$( '.overlay' ).removeClass( 'is-active' );
		$( '.overlay-content-form' ).removeClass( 'is-active' );
		$( 'body' ).toggleClass( 'is-hide-scroll' );
	}
});
// /close popup on press Esc
