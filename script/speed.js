export function checkBox() {
  $('.75').click(function(event){
    $('.75').css('opacity',1);
    $('.video-play').prop('playbackRate',0.75);
    $('.100, .125, .150, .175, .200, .300').css('opacity',0);
  })
  $('.100').click(function(event){
    $('.100').css('opacity',1);
    $('.video-play').prop('playbackRate',1);
    $('.75, .125, .150, .175, .200, .300').css('opacity',0);
  })
  $('.125').click(function(event){
    $('.125').css('opacity',1);
    $('.video-play').prop('playbackRate',1.25);
    $('.75, .100, .150, .175, .200, .300').css('opacity',0);
  })
  $('.150').click(function(event){
    $('.150').css('opacity',1);
    $('.video-play').prop('playbackRate',1.5);
    $('.75, .100, .125, .175, .200, .300').css('opacity',0);
  })
  $('.175').click(function(event){
    $('.175').css('opacity',1);
    $('.video-play').prop('playbackRate',1.75);
    $('.75, .100, .125, .150, .200, .300').css('opacity',0);
  })
  $('.200').click(function(event){
    $('.200').css('opacity',1);
    $('.video-play').prop('playbackRate',2);
    $('.75, .100, .125, .150, .175, .300').css('opacity',0);
  })
  $('.300').click(function(event){
    $('.300').css('opacity',1);
    $('.video-play').prop('playbackRate',3);
    $('.75, .100, .125, .150, .175, .200').css('opacity',0);
  })
}

// checkBox();