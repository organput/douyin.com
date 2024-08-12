
export function sideBar() {
  localStorage.setItem('isopen','false');
  $('.comments-button, .close-button').click(function(){
    var isOpenning = JSON.parse(localStorage.getItem('isopen'));
    console.log(isOpenning);
    var id = $(this).data('video-id');
    if(isOpenning === false) {
      $(`.comments-area`).css('display','flex');
      // $(`.video-play`).css('width','100%');
      // $(`.video-play`).css('height','80%');
      $(`.video-area`).css('width','74.5%');
      $(`.video-control-grid`).css('width','74.5%');
      localStorage.setItem('isopen','true');
    } else {
      $(`.comments-area`).css('display','none');
      // $(`.video-play`).css('width','100%');
      // $(`.video-play`).css('height','93%');
      $(`.video-area`).css('width','100%');
      $(`.video-control-grid`).css('width','100%');
      localStorage.setItem('isopen','false');
    }
  })
  
}
