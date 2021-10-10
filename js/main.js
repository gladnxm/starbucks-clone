// 페이지 접속시 맨아래에서 시작하는 현상 강제로 수정
window.onload = function() {
  setTimeout(function() {scrollTo(0,0)}, 100);
}


// 검색창 
const searchEl = document.querySelector(".sub-menu .search");
const inputEl = searchEl.querySelector("input");
searchEl.addEventListener('click', function() {
  inputEl.focus();
});
inputEl.addEventListener('focus', function() {
  inputEl.setAttribute("placeholder", "통합검색");
}); 
inputEl.addEventListener('blur', function() {
  inputEl.setAttribute("placeholder", "");
}); 


// 우측배지 스크롤 동작
const badgeEl = document.querySelector('.badges');
const badgeFadeIn = {
  opacity: 1,
  display: 'block'
};
const badgeFadeOut = {
  opacity: 0,
  display: 'none'
};
window.addEventListener('scroll', _.throttle(function() {
  //gsap.to(요소,지속시간,옵션)
  if (window.scrollY > 500) 
    gsap.to(badgeEl, .7, badgeFadeOut);
  else
    gsap.to(badgeEl, .7, badgeFadeIn);
}, 200))


// visual section의 이미지들이 순차적으로
const fadeEls = document.querySelectorAll('#visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    opacity: 1,
    delay: (index+1) * .6
  });
  //gsap.to(요소,지속시간,옵션)
});


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


// notice의 화살표 아이콘으로 promotion 토글 제어
const promotionEl = document.querySelector('#promotion');
const toggleIcon = document.querySelector('#notice .right i');
let isHide = false // 처음엔 숨겨지지않음 보여짐
toggleIcon.addEventListener('click', function() {
  isHide = !isHide
  if (isHide) {
    promotionEl.classList.add('hide');
    toggleIcon.textContent = 'get_app';
  } // material icon이라 태그 안에 적힌 텍스트(아이콘 이름)만 바꿔주면 아이콘 바뀜
  else {
    promotionEl.classList.remove('hide');
    toggleIcon.textContent = 'upload';
  }
});