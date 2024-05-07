const swiperText = new Swiper('.swiper', {
	speed: 1600, /*скорость перелистывания */
	mousewheel: {}, /*перелистывание прокруткой */
	pagination: { /*настр пагинации */
		el: '.swiper-pagination', /* элем с классом контейнера для пагинации*/
		clickable: true, /* кликабельность точек пагинации*/
	},
	navigation: { /**парам навигации */
		prevEl: '.swiper-button-prev', /* предыдущ элем */
		nextEl: '.swiper-button-next' /* след элем*/
	}
})