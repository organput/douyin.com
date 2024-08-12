import { videos } from "../data/videoData.js";

export function parseTime(time) {
  let interval = Math.floor(time);
  let minute = (Math.floor(interval / 60)).toString().padStart(2,'0');
  let second = (interval % 60).toString().padStart(2, '0');
  return `${minute}:${second}`;
}

export function progressPush() {
  videos.map((video) => {
    $(`#video-player-${video.videoId}`).on('loadedmetadata',function(){
      let timeStr = parseTime(this.currentTime) + '/' + parseTime(this.duration);
      $(`#time-number-${video.videoId}`).text(timeStr);
    })
    $(`#video-player-${video.videoId}`).on('timeupdate',function(){
      let timeStr = parseTime(this.currentTime) + '/' + parseTime(this.duration);
      let percent = this.currentTime / this.duration;
      $(`#time-number-${video.videoId}`).text(timeStr);
      $(`#video-played-js-${video.videoId}`).css('width',percent * 100 + '%');
    })
  })
}

export function progressClick() {
  
  $('.video-progress-area').click(function(event){
    var id = $(this).data('video-id');
    const video = $(`#video-player-${id}`).get(0);
    var click_X = event.pageX;
    var margin_X = $(this).offset().left;
    var relativeX = click_X-margin_X;
    var percent = relativeX / this.offsetWidth;
    video.currentTime = percent * video.duration;
    video.play();
    $(`#video-played-js-${id}`).css('width',percent * 100 + '%')
  })
}

export function progressMove() {
  
  var isDragging = false;
  var id;
  $(document).on('mousedown', '.video-progress-area', function() {
    isDragging = true;
    console.log(isDragging);
    id = $(this).data('video-id');
  });
  $(document).mousemove(function(event) {
    if(isDragging) {
      const video = $(`#video-player-${id}`).get(0);
      var left_X = $(`#video-progress-area-${id}`).offset().left;
      var width = $(`#video-progress-area-${id}`).width();
      var click_X = event.pageX;
      var relX = click_X - left_X;
      relX = Math.max(0,relX);
      var percent = relX / width;
      percent = Math.min(1,percent);
      var newTime = percent * video.duration;
      video.currentTime = newTime;
      let timeStr = parseTime(video.currentTime) + '/' + parseTime(video.duration);
      $(`#time-number-${id}`).text(timeStr);
      $(`#video-played-js-${id}`).css('width',percent * 100 + '%');
    }
  })

  $(document).mouseup(function(){
    if(isDragging) {
      isDragging = false;
    }
  })

  $(`#video-player-${id}`).on('seeked',function(){
    video.play();
  })
}

