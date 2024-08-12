import { videos } from "../data/videoData.js";

export function setSwiper() {
  var swiper = new Swiper('.swiper', {
    direction: 'vertical', 
    loop: false, 
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    mousewheel: {
      enabled: false
    },
    allowTouchMove: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });

  $('.swiper').data('swiper-instance', swiper);

  $('.video-play').on('mouseenter',function(){
    swiper.mousewheel.enable();
  })

  $('.video-play').on('mouseleave',function(){
    swiper.mousewheel.disable();
  })

  $('.swiper').on('keydown',function(event) {
    if(event.keyCode === 38) {
      swiper.slidePrev();
    }
    if(event.keyCode === 40) {
      swiper.slideNext();
    }
  })

  swiper.on('slideChange',function(){
    var id = $('.swiper').data('swiper-instance').activeIndex + 1; 
    var video = $(`#video-player-${id}`).get(0);
    if(id - 1 > 0) {
      var video_prev = $(`#video-player-${id-1}`).get(0);
      video_prev.pause();
    }
    if(id + 1 <= videos.length) {
      var video_nxt = $(`#video-player-${id+1}`).get(0);
      video_nxt.pause();
    }
    video.play();
  })
}



