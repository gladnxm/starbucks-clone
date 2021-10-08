// 검색창 
const searchEl = document.querySelector(".search input");
searchEl.addEventListener('focus', function() {
  searchEl.setAttribute("placeholder", "통합검색");
}) 
searchEl.addEventListener('blur', function() {
  searchEl.setAttribute("placeholder", "");
}) 