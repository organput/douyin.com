
export function playJS() {
  // const video = $('#video-player').get(0);
  // console.log(video);
  var isSelf = false;
  $('.play-button').click(function(){
    var id = $(this).data('video-id');
    var video = $(`#video-player-${id}`).get(0);
    console.log(id); 
    if(video.paused) {
      $(this).attr('src','./src/image/pause.svg');
      isSelf = true;
      video.play();
    } else {
      $(this).attr('src','./src/image/play.svg');
      isSelf = true;
      video.pause();
    }
  });
  $('.video-play').on('play',function(){
    var id = $(this).data('video-id');
    if(isSelf === false) {
      $(`#control-play-${id}`).attr('src','./src/image/pause.svg');
    } else {
      isSelf = false;
    }
  })
  $('.video-play').on('pause',function(){
    var id = $(this).data('video-id');
    if(isSelf === false) {
      $(`#control-play-${id}`).attr('src','./src/image/play.svg');
    } else {
      isSelf =false;
    }
  })
}