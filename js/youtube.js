let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() { // 라이브러리 내장함수라 이름바꾸면안됨
  // 첫번째인자 'player'는 아이디 이름이라 앞에#붙이지 않는다 선택자아님
  new YT.Player('player', { 
    videoId: 'An6LvWQuj_8',
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: 'An6LvWQuj_8'
    },
    events: {
      onReady: function(event) { event.target.mute(); }
    }
  });
}


// 동그라미3개 애니메이션 
function random(min, max) { 
  /*
    범위 랜덤 함수(소수점 2자리까지)
    toFixed()를 통해 반환된 문자를
    parseFloat()로 소수점을 가지는 숫자로 변환 
  */
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
function floatingObject(selector, delay, range) {
  // gsap.to(요소 시간 옵션)
  gsap.to(
    selector,
    random(1.5, 2.5),
    {
      y: range,
      repeat: -1, // 무한반복
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}
floatingObject('#youtube .floating:first-of-type', 1, 15);
floatingObject('#youtube .floating:last-of-type', .5, 15);
floatingObject('#season-product .floating', 1.5, 20);