import $ from 'jquery';

if (document.querySelector('.page-reviews')) {
	var categoriesOptions = $('.select-items div'),
		categoriesSelect = $('.page-reviews-select__select-js'),
		categoriesCurrent = categoriesSelect.val(),
		reviews = $('.review'),
		reviewCategory = 0;

	categoriesOptions.click(function() {
		categoriesCurrent = categoriesSelect.val();

		if (categoriesCurrent === 'Всё') {
			categoriesCurrent = 0;
			reviews.slideDown(250);
		} else {
			reviews.each(function(index, review) {
				reviewCategory = $(review).data('category');
				
				if (reviewCategory !== +categoriesCurrent) {
					$(review).slideUp(250);
				} else {
					$(review).slideDown(250);
				}
			});
		}
	});
}
