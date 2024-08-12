
export function inputJS() {
  $('.fake-input').map((index) => {
    // console.log($(`#fake-input-${index+1}`).val())
    if($(`#fake-input-${index+1}`).val().length > 0) {
      $(`#input-button-${index+1}`).show();
    } else {
      $(`#input-button-${index+1}`).hide();
    }
  })
  $('.fake-input').on('input',function(){
    $('.fake-input').map((index) => {
      // console.log($(`#fake-input-${index+1}`).val())
      if($(`#fake-input-${index+1}`).val().length > 0) {
        $(`#input-button-${index+1}`).show();
      } else {
        $(`#input-button-${index+1}`).hide();
      }
    })
  })
}