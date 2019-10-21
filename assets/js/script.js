	//event pada saat link di klik
	$('.page-scroll').on('click',function(e){

		// ambil isi href
		var tujuan = $(this).attr('href');
		// tangkap elemen ybs
		var elemenTujuan = $(tujuan);

		$('html, body').animate({
			scrollTop: elemenTujuan.offset().top - 5
		}, 675, 'easeInOutExpo');

		e.preventDefault();

	});



//parallax 
$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	//portfolio
	if( wScroll > $('.portfolio').offset().top -275){
		$('.portfolio .thumbnail').each(function(i){
			setTimeout(function() {
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});


		// 
	}

});