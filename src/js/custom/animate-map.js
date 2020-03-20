$(document).ready( () => {

	function startAnimate(idBlock, className) {
		const countBlockTop = $(idBlock).offset().top;
		const windowHeight = window.innerHeight;
		let show = true;
        let blockHeight = $(idBlock).height();
		$(window).scroll(() => {
			if (show && (countBlockTop < $(window).scrollTop() + windowHeight - blockHeight)) {
				show = false;
               $(idBlock).addClass(className);
			}
		})
    }
    
	$(() => {
		startAnimate("#map-SBS", "active-map");
	});
	$(() => {
		startAnimate(".about-us_slideshow", "active");
	});
});
