var mySwiper = new Swiper('#topNav', {
	freeMode: true,
	freeModeMomentumRatio: 0.5,
	slidesPerView: 4,

});

swiperWidth = mySwiper.container[0].clientWidth
maxTranslate = mySwiper.maxTranslate();
maxWidth = -maxTranslate + swiperWidth / 2

$(".swiper-container").on('touchstart', function(e) {
	e.preventDefault()
})

mySwiper.on('tap', function(swiper, e) {
	console.log(e)
	/*//e.preventDefault();
	slide = swiper.slides[swiper.clickedIndex]
	slideLeft = slide.offsetLeft
	slideWidth = slide.clientWidth
	slideCenter = slideLeft + slideWidth / 2
	// 被点击slide的中心点
	mySwiper.setWrapperTransition(300)
	if (slideCenter < swiperWidth / 2) {
		mySwiper.setWrapperTranslate(0)
	} else if (slideCenter > maxWidth) {
		mySwiper.setWrapperTranslate(maxTranslate)
	} else {
		nowTlanslate = slideCenter - swiperWidth / 2
		mySwiper.setWrapperTranslate(-nowTlanslate)
	}*/
	$("#topNav  .active").removeClass('active')
	$("#topNav .swiper-slide").eq(swiper.clickedIndex).addClass('active')

})

