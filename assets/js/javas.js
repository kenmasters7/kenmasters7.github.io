(function () {
	$('.ham').on('click', function() {
		$('.bar').toggleClass('animate');
    $('.navcontent').slideToggle();
	})
})();
