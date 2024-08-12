import { playJS } from "../script/play.js";

class Video {
  videoId;
  videoPath;
  commentsId;
  name;
  title;
  channel;
  poster;
  love;
  share;
  collect;

  constructor(videoItem){
    this.videoId = videoItem.videoId;
    this.videoPath = videoItem.videoPath;
    this.commentsId = videoItem.commentsId;
    this.name = videoItem.name;
    this.title = videoItem.title;
    this.channel = videoItem.channel;
    this.poster = videoItem.poster;
    this.share = videoItem.share;
    this.love = videoItem.love;
    this.collect = videoItem.collect;
  }
}

export var videos = [];

const videoData = [{
  videoId: 1,
  videoPath: './src/video/video_1.mp4',
  commentsId: 1,
  name: '一根华仔',
  title: '哇塞怎么8:45了 ',
  channel: './src/channel/channel_1.jpeg',
  love: '113.6万',
  collect: '6.8万',
  share: '32.7万',
  poster: "../src/image/image_1"
}, {
  videoId: 2,
  videoPath: './src/video/video_2.mp4',
  commentsId: 2,
  name: '柔软fufu',
  title: '这个李柚巴腿还算细吗 要不怎么说站如本呢',
  channel: './src/channel/channel_2.jpeg',
  love: '9.2万',
  collect: '1.2万',
  share: '1.3万',
  poster: "../src/image/image_2"
}, {
  videoId: 3,
  videoPath: './src/video/video_3.mp4',
  commentsId: 3,
  name: '硫磺皂',
  title: '人生苦短',
  channel: './src/channel/channel_3.jpeg',
  love: '33.0万',
  collect: '4.0万',
  share: '7.9万',
  poster: "../src/image/image_3"
}]

function getVideo(id) {
  var matchingItem;
  videos.map((item) => {
    if(item.videoId === id){
      matchingItem = item;
    }
  })
  return matchingItem;
}

function setVideo() {
  videoData.map((item) => {
    var video = new Video(item);
    videos.push(video);
  })
}

export function updateVideo() {
  let swiperHTML = '';
  videos.map((video) => {
    swiperHTML += 
    `
      <div class="swiper-slide">
      <div class="video-grid" id="video-grid-${video.videoId}">
        
        <div class="blurOverlay"></div>
        <div class="comments-area" id="comments-area-${video.videoId}">
            <div class="comments-header">
              <div class="header-text">TA的作品</div>
              <div class="header-text-sp">评论</div>
              <div class="header-text">相关推荐</div>
              <img src="./src/image/close_white.svg" class="close-button" data-video-id="${video.videoId}">
            </div>
            <div class="comments-display">
              <div class="comments-all" id="comments-all-${video.videoId}"></div>
              <div class="news-area">
                <div class="news-text">&#10003; Copied</div>
              </div>
              <div class="comments-list" id="comments-list-${video.videoId}">
                
              </div>
              <div class="input-box">
                <input class="fake-input" id="fake-input-${video.videoId}" data-video-id="${video.videoId} placeholder="留下你的精彩评论吧">
                <img src="./src/image/reply.svg" class="input-button" id="input-button-${video.videoId}" data-video-id="${video.videoId}">
              </div>
            </div>
        </div>
        <div class="video-area" id="video-area-${video.videoId}">
          <img src="./src/image/pause_center.svg" class="center-button" id="center-button-${video.videoId}" data-video-id="${video.videoId}">
          <video id="video-player-${video.videoId}" class="video-play" src="${video.videoPath}" data-video-id="${video.videoId}" width="1308" height="560"></video>
          
          <div class="video-info-area">
            <div class="video-info-grid">
              <div class="creator-name">
                @${video.name}
              </div>
              <div class="video-title">
                ${video.title}
              </div>
            </div>
            <div class="info-buttons">
              <div class="info-button-channel">
                <img src="${video.channel}" class="channel-image">
                <img src="./src/image/follow.svg" class="svg-all-follow">
              </div>
              <div class="info-button" id="love-button">
                <img src="./src/image/love.svg" class="svg-all">
                <div class="button-text">${video.love}</div>
              </div>
              <div class="info-button">
                <img src="./src/image/comments.svg" class="svg-all comments-button"> 
                <div class="button-text-num" id="button-text-num-${video.videoId}"></div>
              </div>
              <div class="info-button">
                <img src="./src/image/collect.svg" class="svg-all">
                <div class="button-text">${video.collect}</div>
              </div>
              <div class="info-button">
                <img src="./src/image/share-side.svg" class="svg-all">
                <div class="button-text">${video.share}</div>
              </div>
              <div class="info-button-special">
                <img src="./src/image/seeMore.svg" class="svg-all-more">
                <div class="button-text">看相关</div>
              </div>
              <div class="info-button-more">
                <img src="./src/image/more.svg" class="svg-all">
              </div>
            </div>
          </div>
        </div>
        
        <!-- 下方控制栏 -->
        <div class="video-control-grid" id="video-control-grid-${video.videoId}">
          <div class="video-progress-area" id="video-progress-area-${video.videoId}" data-video-id="${video.videoId}">
            <div class="video-progress">
              <div class="video-played" id="video-played-js-${video.videoId}">
              </div>
              <div class="progress-ball"></div>
            </div>
          </div>
          <div class="video-control">
            <div class="play-area">
              <img src="./src/image/play.svg" class="play-button" id="control-play-${video.videoId}" data-video-id="${video.videoId}">
              <div class="time-info" id="time-number-${video.videoId}">00:01/14:15</div>
            </div>
            
            <div class="message-area">
              <div class="message-box">
                <div class="svg-box">
                  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.29 6.29a2 2 0 012-2h10.693a2 2 0 012 2v5.404a5.55 5.55 0 00-2.472-.55V8.274a.6.6 0 00-.6-.6h-.771l.321-.478a.6.6 0 10-.996-.67l-.771 1.148h-.317l-.772-1.148a.6.6 0 00-.996.67l.322.478h-.775a.6.6 0 00-.6.6v3.772a.6.6 0 00.6.6h1.609a5.602 5.602 0 00-.625.69h-1.463a.6.6 0 100 1.2h.763a5.554 5.554 0 00-.443 2.181c0 .76.152 1.484.428 2.144H6.289a2 2 0 01-2-2V6.29zm11.021 4.997a5.525 5.525 0 00-.552.158h-.626v-.684h1.178v.526zM6.277 7.332a.6.6 0 01.6-.6h2.378a.6.6 0 01.6.6v2.83a.6.6 0 01-.6.6H7.477v1.157h1.778a.6.6 0 01.6.6v3.3a.6.6 0 01-.6.6H6.877a.6.6 0 010-1.2h1.778v-2.1H6.877a.6.6 0 01-.6-.6V10.16a.6.6 0 01.6-.6h1.778V7.932H6.877a.6.6 0 01-.6-.6zm5.48 4.113v-.684h1.177v.684h-1.178zm0-1.884h1.177v-.688h-1.178v.688zm2.377 0h1.177v-.688h-1.178v.688z" fill="#fff"></path><path d="M20.425 16.713a3.857 3.857 0 11-7.714 0 3.857 3.857 0 017.714 0z" fill="#fff"></path><path d="M15.258 16.802l1.028 1.079L18 15.859" stroke="#FE2C55" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class="vpn447p8" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.867 6.29a2 2 0 012-2H16.44a2 2 0 012 2v5.25l-1.644-.959a1 1 0 00-.801-.09V8.272a.6.6 0 00-.6-.6h-.76l.32-.48a.6.6 0 00-.999-.666l-.764 1.146h-.305l-.764-1.146a.6.6 0 00-.998.666l.32.48h-.765a.6.6 0 00-.6.6v3.772a.6.6 0 00.6.6h1.57l-.605.353a1 1 0 00-.346.337h-1.091a.6.6 0 100 1.2h.94v4.178c0 .05.005.1.012.147H5.867a2 2 0 01-2-2V6.29zm10.927 4.87l-.488.285h-.67v-.684h1.158v.4zM5.836 7.333a.6.6 0 01.6-.6h2.358a.6.6 0 01.6.6v2.83a.6.6 0 01-.6.6H7.036v1.157h1.758a.6.6 0 01.6.6v3.3a.6.6 0 01-.6.6H6.436a.6.6 0 010-1.2h1.758v-2.1H6.436a.6.6 0 01-.6-.6V10.16a.6.6 0 01.6-.6h1.758V7.932H6.436a.6.6 0 01-.6-.6zm5.443 4.113v-.684h1.157v.684h-1.157zm0-1.884h1.157v-.688h-1.157v.688zm2.357 0h1.158v-.688h-1.158v.688z" fill="#fff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.778 12.703a1 1 0 00-.98 0l-2.429 1.366a1 1 0 00-.51.871v2.688a1 1 0 00.51.871l2.429 1.366a1 1 0 00.98 0l2.429-1.366a1 1 0 00.51-.871V14.94a1 1 0 00-.51-.871l-2.429-1.366zm-.49 2.299a1.286 1.286 0 100 2.571 1.286 1.286 0 000-2.571z" fill="#fff"></path></svg>
                </div>
                <div class="bind-line"></div>
                <input class="message-input" placeholder="发一条友好的弹幕吧">
              </div>
            </div>
            
            <div class="more-button">
              <div class="speed-area">
                <div class="speed-text">倍速</div>
                <div class="checkbox-speed">
                  <div class="check-area">
                    <div class="speed-check">0.75x</div>                      
                  </div>
                  <div class="check-area">
                    <div class="speed-check">1.0x</div>
                  </div>
                  <div class="check-area">
                    <div class="speed-check">1.25x</div>
                  </div>
                  <div class="check-area">
                    <div class="speed-check">1.5x</div>   
                  </div>
                  <div class="check-area">
                    <div class="speed-check">1.75x</div>
                  </div>
                  <div class="check-area">
                    <div class="speed-check">2.0x</div>
                  </div>
                  <div class="check-area">
                    <div class="speed-check">3.0x</div>
                  </div>
                  <div class="chosen-check-75 75" id="75"></div>
                  <div class="chosen-check-100 100" id="100"></div>
                  <div class="chosen-check-125 125" id="125"></div>
                  <div class="chosen-check-150 150" id="150"></div>
                  <div class="chosen-check-175 175" id="175"></div>
                  <div class="chosen-check-200 200" id="200"></div>
                  <div class="chosen-check-300 300" id="300"></div>
                </div>
              </div>
              
              <div class="svg-controls">
                <div class="sounds-area">
                  <img src="./src/image/sound.svg" class="svg-sounds">
                  <div class="sounds-control">
                    <div class="sounds-number">0</div>
                    <div class="sounds-progress" id="sounds-progress-${video.videoId}">
                      <div class="sounds-used">
                        <div class="sounds-ball"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <svg class= "svg-control" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 32 32"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.97 8.73C7.882 8.73 7 9.72 7 10.94v10.58c0 1.22.882 2.21 1.97 2.21h8.254A5.5 5.5 0 0123 15.59v-4.65c0-1.22-.882-2.21-1.97-2.21H8.97zm4.723 10.464l3.822-2.451a1.025 1.025 0 000-1.743l-3.822-2.451c-.724-.464-1.693.035-1.693.871v4.902c0 .837.97 1.336 1.693.872z" fill="#fff" fill-opacity="0.9"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22 25a4 4 0 100-8 4 4 0 000 8zm.4-6a.9.9 0 10-1.8 0v2.5a.9.9 0 00.9.9H24a.9.9 0 100-1.8h-1.6V19z" fill="#fff" fill-opacity="0.9"></path></svg>
                <svg class="svg-fullscreen" data-video-id="${video.videoId}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" focusable="false" style="font-size:32px"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 8C8.39543 8 7.5 8.89543 7.5 10V22C7.5 23.1046 8.39543 24 9.5 24H22.5C23.6046 24 24.5 23.1046 24.5 22V10C24.5 8.89543 23.6046 8 22.5 8H9.5ZM19.5 19H17.9986V21H20.5C21.0523 21 21.5 20.5523 21.5 20V17.5H19.5V19ZM12.5 19V17.5H10.5V20C10.5 20.5523 10.9477 21 11.5 21H13.9986V19H12.5ZM12.5 13H13.9986V11H11.5C10.9477 11 10.5 11.4477 10.5 12V14.5H12.5V13ZM19.5 13H17.9986V11H20.5C21.0523 11 21.5 11.4477 21.5 12V14.5H19.5V13Z" fill="#fff"></path></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    `
  })
  $('.swiper-wrapper').html(swiperHTML);
}

setVideo();


