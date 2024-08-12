export function soundControl() {
  $('.sounds-progress').click(function(event){
    var pageY = event.pageY;
    var domY = $(this).offset().top;
    var height = $(this).height();
    var relY = height- (pageY - domY);
    var percent = relY / height;
    if(percent > 0){
      if(localStorage.getItem('mute') !== null) localStorage.removeItem('mute');
    }
    localStorage.setItem('volume',percent);
    setSounds();
  })
}



export function soundJS() {
  var isDragging = false;
  $('.sounds-progress').mousedown(function(){
    isDragging = true;
  })

  $(document).mousemove(function(event){
    if(isDragging) {
      var id = $('.swiper').data('swiper-instance').activeIndex + 1;
      console.log('move');
      var pageY = event.pageY;
      var domY = $(`#sounds-progress-${id}`).offset().top;
      var height = $(`#sounds-progress-${id}`).height();
      var relY = height - (pageY - domY);
      relY = Math.max(0,relY);
      var percent = relY / height;
      percent = Math.min(1,percent);
      localStorage.setItem('volume',percent);
      setSounds();
    }
  })

  $(document).mouseup(function(){
    if(isDragging) {
      isDragging = false;
    }
  })
}

export function setSounds() {
  var height = localStorage.getItem('volume');
  if(height === null) height = 1;
  if(localStorage.getItem('mute') !== null) {
    height = 0;
    $('.svg-sounds').attr('src',"./src/image/mute.svg");
  }
  
  $('.sounds-number').text(`${Math.floor(height * 100)}`)
  $('.sounds-used').css('height', (height * 100 )+ '%');
  $('.video-play').prop('volume', height);
  if(height < 0.5 && height > 0) {
    $('.svg-sounds').attr('src',"./src/image/sound_small.svg");
  } 
  if(height >= 0.5) {
    $('.svg-sounds').attr('src',"./src/image/sound.svg");
  }
  if(height <= 0) {
    $('.svg-sounds').attr('src',"./src/image/mute.svg");
  }
}

export function setSoundSvg() {
  $('.svg-sounds').click(function(){
    if(localStorage.getItem('mute') === null ) {
      $('.video-play').prop('volume', localStorage.getItem('volume'));
      localStorage.setItem('mute', JSON.stringify(true));
      setSounds();
    } else {
      $('.video-play').prop('volume',0);
      localStorage.removeItem('mute');
      setSounds();
    }
  })
}


// setSounds();
// soundControl();
