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
const badgeEl = document.querySelector('#badges');
const badgeFadeIn = {
  opacity: 1,
  display: 'block'
};
const badgeFadeOut = {
  opacity: 0,
  display: 'none'
};
window.addEventListener('scroll', _.throttle(function() {
  gsap.to(badgeEl, .7, (window.scrollY > 500) ? badgeFadeOut : badgeFadeIn)
}, 200))


// visual section의 이미지들이 순차적으로
const fadeEls = document.querySelectorAll('#visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  //gsap.to(요소,지속시간,옵션)
  gsap.to(fadeEl, 1, {
    opacity: 1,
    delay: (index+1) * .6
  });
});


// notice의 화살표 아이콘으로 promotion 토글 제어
const promotionEl = document.querySelector('#promotion');
const toggleIcon = document.querySelector('#notice .right .material-icons');
let isHide = false // 처음엔 숨겨지지않고 보여짐

toggleIcon.addEventListener('click', function() {
  isHide = !isHide;
  if (isHide) {
    promotionEl.classList.add('hide');
    toggleIcon.textContent = 'get_app';
  } // material icons라 태그 안에 적힌 텍스트(아이콘 이름)만 바꿔주면 아이콘 바뀜
  else {
    promotionEl.classList.remove('hide');
    toggleIcon.textContent = 'upload';
  }
});


// 화면에 보이면 스르륵 나오게
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')// 토글할요소와 클래스이름
    .addTo(new ScrollMagic.Controller());
});