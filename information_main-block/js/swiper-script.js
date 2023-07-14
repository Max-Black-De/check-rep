// init Swiper:
let mql = window.matchMedia('(min-width: 768px)');

window.addEventListener('resize', () => {
    if (mql.matches) {
        let newSwiper = new Swiper('.swiper', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            slidesPerView: 'auto',
            spaceBetween: 16,
            slidesOffsetAfter: 64,
            breakpoints: {
                768: {
                    spaceBetween: 24,
                    slidesPerView: 'auto',
                },
                1120: {
                    spaceBetween: 32,
                    slidesPerView: 'auto',
                }
            }
        })
    } else {
        swiper.destroy();
    }
})