export function changePoster() {
  $('.video-grid').map((index) => {
    $(`#video-grid-${index + 1}`).css('background-image',`url("../src/image/image_${index + 1}.png")`)
  })
}