$(document).ready(function () {

	function countup(className) {
		var countBlockTop = $("." + className).offset().top;
		var windowHeight = window.innerHeight;
		var show = true;

		$(window).scroll(function () {
			if (show && (countBlockTop < $(window).scrollTop() + windowHeight)) {
				show = false;				
				$('.' + className).spincrement({
					from: 1,
					thousandSeparator: false,
					duration: 5000,
				});
			}
		})
	}


	$(function () {
		countup("item-number", $(".item-number").text());
	});
});