export function videoJs() {

  $(function(){
    
    $('.video-play, .center-button').click(function(){
      var id = $(this).data('video-id');
      const video = $(`#video-player-${id}`).get(0);
      if(video.paused) {
        $(`#center-button-${id}`).css('opacity',0);
        video.play();
      } else {
        $(`#center-button-${id}`).css('opacity',0.7);
        video.pause();
      }
    })
    $('.video-play').on('play',function(){
      var id = $(this).data('video-id');
      $(`#center-button-${id}`).css('opacity',0);
    })
    $('.video-play').on('pause',function(){
      var id = $(this).data('video-id');
      $(`#center-button-${id}`).css('opacity',0.7);
    })
  
  
    $('.svg-fullscreen').click(function(){
      var id = $(this).data('video-id');
      const video = $(`#video-player-${id}`).get(0);
      video.requestFullscreen();
    })

    
  })
  
  $(document).ready(function() {
    $(document).keydown(function(event){
      var id = $('.swiper').data('swiper-instance').activeIndex+1;
      var target = event.target;
      var isInput = target.tagName.toLowerCase() === 'input' || target.tagName.toLowerCase() === 'textarea';
      const video = $(`#video-player-${id}`).get(0);
      if(!isInput) {
        if(event.keyCode === 32) {
          event.preventDefault();
          if(video.paused) {
            video.play();
          } else {
            video.pause();
          }
        }
      }
    })
  })
}
