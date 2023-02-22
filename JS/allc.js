$('.view-more-btn').on('click', function() {
	var thisParentInit = $(this).parent('.item-wrapper');
	var thisParent = thisParentInit.parent('.item');
	var thisSymbol = $(this).find('.view-symbol');
	if (thisParent.hasClass('active') == false) {
		thisParent.addClass('active');
		$(this).text('VIEW LESS -');
	} else if (thisParent.hasClass('active') == true) {
		thisParent.removeClass('active');
		$(this).text('VIEW MORE +');
	}
});