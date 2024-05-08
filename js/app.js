const video = document.querySelector('.video-background')

const swiperText = new Swiper('.swiper', {
	speed: 1600, /*скорость перелистывания */
	loop: true, /* бесконечный свайпер*/
	mousewheel: { }, /*перелистывание прокруткой */
	pagination: { /*настр пагинации */
		el: '.swiper-pagination', /* элем с классом контейнера для пагинации*/
		clickable: true /* кликабельность точек пагинации*/
	},
	navigation: { /**парам навигации */
		prevEl: '.swiper-button-prev', /* предыдущ элем */
		nextEl: '.swiper-button-next' /* след элем*/
	}
})

swiperText.on('slideChange', function() {
	gsap.to(video, 1.6, {
		currentTime: (video.duration / (this.slides.length - 1)) * this.realIndex,
		ease: Power2.easeOut
	})
})

swiperText.on('slideChangeTransitionStart', function() {
	video.classList.add('change') /*доб класса при перелистывании*/
}).on('slideChangeTransitionEnd', function() {
	video.classList.remove('change')
})

