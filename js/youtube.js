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