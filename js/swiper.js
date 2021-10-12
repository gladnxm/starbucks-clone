// Swiper(선택자, 옵션)

//공지사항의 스와이퍼
new Swiper('#notice .swiper-container', { 
  direction: 'vertical',
  autoplay: true,
  loop: true 
}); 

// 프로모션의 스와이퍼
new Swiper('#promotion .swiper-container', { 
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

// 어워즈의 스와이퍼
new Swiper('#awards .swiper-container', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  autoplay: true,
  navigation: {
    prevEl: '#awards .swiper-prev',
    nextEl: '#awards .swiper-next'
  } 
}); 