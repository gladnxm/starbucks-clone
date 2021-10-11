// Swiper(선택자, 옵션)
new Swiper('#notice .swiper-container', { //공지사항의 스와이퍼
  direction: 'vertical',
  autoplay: true,
  loop: true 
}); 
new Swiper('#promotion .swiper-container', { // 프로모션의 스와이퍼
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: { delay: 3500 },
  pagination: {
    el: '#promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '#promotion .swiper-prev',
    nextEl: '#promotion .swiper-next'
  } 
}); 