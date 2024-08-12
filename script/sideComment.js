
export function sideBar() {
  localStorage.setItem('isopen','false');
  $('.comments-button, .close-button').click(function(){
    var isOpenning = JSON.parse(localStorage.getItem('isopen'));
    console.log(isOpenning);
    var id = $(this).data('video-id');
    if(isOpenning === false) {
      $(`.comments-area`).css('display','flex');
      $(`.video-play`).prop('width','934');
      $(`.video-play`).prop('height','530');
      $(`.video-area`).css('width','934px');
      $(`.video-control-grid`).css('width','934px');
      localStorage.setItem('isopen','true');
    } else {
      $(`.comments-area`).css('display','none');
      $(`.video-play`).prop('width','1308');
      $(`.video-play`).prop('height','560');
      $(`.video-area`).css('width','100%');
      $(`.video-control-grid`).css('width','100%');
      localStorage.setItem('isopen','false');
    }
  })
  
}