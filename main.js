// 검색창 
const searchEl = document.querySelector(".search input");
searchEl.addEventListener('focus', function() {
  searchEl.setAttribute("placeholder", "통합검색");
}) 
searchEl.addEventListener('blur', function() {
  searchEl.setAttribute("placeholder", "");
}) 


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
  if (window.scrollY > 500) 
    gsap.to(badgeEl, .7, badgeFadeOut);
  else
    gsap.to(badgeEl, .7, badgeFadeIn);
  //gsap.to(요소,지속시간,옵션)
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