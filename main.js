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
}, 200))

