// 페이지 접속시 맨아래에서 시작하는 현상 강제로 수정
window.onload = function() {
  setTimeout(function() {scrollTo(0,0)}, 100);
}


// 헤더의 검색창 
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


// 푸터에 올해가 몇년인지 
const thisYear = document.querySelector('footer .this-year');
thisYear.textContent = new Date().getFullYear();