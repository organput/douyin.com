import { inputJS } from "../script/input.js";
import { videos } from "./videoData.js";

export class Comment {
  id;
  username;
  channel;
  time;
  area;
  hearts;
  isShow;
  isLove;
  container;

  constructor(commentsDetails){
    this.id = commentsDetails.id;
    this.username = commentsDetails.username;
    this.channel = commentsDetails.channel;
    this.time = commentsDetails.time;
    this.area = commentsDetails.area;
    this.hearts = commentsDetails.hearts;
    this.isShow = commentsDetails.isShow;
    this.isLove = commentsDetails.isLove;
    this.container = commentsDetails.container;
  }
}

export const commentsDataReal2 = [{
  id: 1,
  username: 'user2222',
  channel: './src/channel/userChannel_9.jpeg',
  time:'1分钟前',
  area: '海南',
  hearts: 160,
  isShow: true,
  isLove: false,
  container: '你甘心在抖音默默无闻吗，何不去动漫卡通区一展身手'
}
]

export const commentsDataReal = [{
  id: 2,
  username: 'shiery',
  channel: './src/channel/userChannel_2.jpeg',
  time: '1天前',
  area: '安徽',
  hearts: 4000,
  isShow: true,
  isLove: false,
  container: '这是一条评论'
}, {
  id: 1,
  username: '西红没有柿',
  channel: './src/channel/userChannel_1.jpeg',
  time: '1周前',
  area: '江西',
  hearts: 120,
  isShow: true,
  isLove: false,
  container: '一遍过 秒了'
}, {
  id: 3,
  username: 'hayro',
  channel: './src/channel/userChannel_3.jpeg',
  time: '48分钟前',
  area: '湖北',
  hearts: 678,
  isShow: true,
  isLove: false,
  container: '这个我是真喜欢'
}, {
  id: 4,
  username: 'chas4',
  channel: './src/channel/userChannel_4.jpeg',
  time: '1周前',
  area: '贵州',
  hearts: 4706,
  isShow: true,
  isLove: false,
  container: '人生就五字：看漂亮妹子'
}, {
  id: 5,
  username: 'libra',
  channel: './src/channel/userChannel_5.jpeg',
  time: '1周前',
  area: '江苏',
  hearts: 12,
  isShow: true,
  isLove: false,
  container: '还是抖音甜'
}, {
  id: 6,
  username: '徐白羊',
  channel: './src/channel/userChannel_6.jpeg',
  time: '50分钟前',
  area: '浙江',
  hearts: 8,
  isShow: true,
  isLove: false,
  container: '加利奥来了 3级加利奥用了50次技能打了234点伤害'
}, {
  id: 7,
  username: 'COLD-RAT',
  channel: './src/channel/userChannel_7.jpeg',
  time: '2小时前',
  area: '广东',
  hearts: 1,
  isShow: true,
  isLove: false,
  container: '这是我能看的么'
}, {
  id: 8,
  username: '豚一食品',
  channel: './src/channel/userChannel_8.jpeg',
  time: '两天前',
  area: '北京',
  hearts: 1002,
  isShow: true,
  isLove: false,
  container: '就喜欢拿公司账号看这种美女'
}]

export const commentsDataReal3 = [{
  id: 1,
  username: 'COLD-RAT',
  channel: './src/channel/userChannel_7.jpeg',
  time: '2小时前',
  area: '广东',
  hearts: 1,
  isShow: true,
  isLove: false,
  container: '这是我能看的么'
}]; 

// export var comments = [];
export var commentsList = [commentsDataReal,commentsDataReal2,commentsDataReal3];
export var commentsVideo = [];

export function saveToStorge(id,comments) {
  console.log(id)
  localStorage.setItem(`comments-${id}`,JSON.stringify(comments));
}

export function loadFromData() {
  commentsList.map((listItem,index) => {
    var comments = [];
    listItem.map((item) => {
      var comment = new Comment(item);
      comments.push(comment);
    })
    commentsVideo.push(comments);
    console.log(commentsVideo);
    if(localStorage.getItem(`comments-${index+1}`) === null){
      saveToStorge(index+1,comments);
    }
  })
}

export function getLastId(id) {
  var maxid = 0;
  var comments = commentsVideo[id-1];
  comments.map((item) => {
    if(item.id > maxid) {
      maxid = item.id;
    }
  })
  return maxid;
}

export function loadFromStroge() {
  for(var i=0;i<videos.length;i++) {
    var comments = JSON.parse(localStorage.getItem(`comments-${i+1}`));
    commentsVideo[i] = comments;
  }
}


export function setComments() {
  videos.map((video) => {
    let commentHTML = '';
    var id = video.commentsId;
    var comments = commentsVideo[id-1];
    console.log(comments)
    comments.map((comment) => {
      if(comment.isShow === true){
        commentHTML += `
        
          <div class="comments-cards">
            
            <div class="channel-area">
              <img class="comments-channel" src="${comment.channel}">
            </div>
            <div class="comments-container">
              <div class="user-name">${comment.username}</div>
              <div class="comments-text">${comment.container}</div>
              <div class="info-area">
                ${comment.time} &middot; ${comment.area}
              </div>
              <div class="buttons-area">
                <div class="comments-svg">
                  <img src="./src/image/comment.svg">
                  <div class="buttons-text">回复</div>
                </div>
                <div class="comments-svg">
                  <img src="./src/image/share.svg" class="share-button" data-comment-id="${comment.id}" data-video-id="${video.videoId}">
                  <div class="buttons-text">分享</div>
                </div>
                <div class="comments-love">
                  <img src="./src/image/${comment.isLove ? 'loved' : 'loveThis'}.svg" class="love-button" data-comment-id="${comment.id}" data-video-id="${video.videoId}">
                  <div class="buttons-text">${comment.hearts}</div>
                </div>
                <div class="comments-fuck">
                  <img src="./src/image/fuck.svg" class='remove-button' data-comment-id="${comment.id}" data-video-id="${video.videoId}">
                </div>
              </div>
            </div>
          </div>
        `;
      }
    });
    $(`#comments-list-${id}`).html(commentHTML);
    $(`#comments-all-${id}`).text(`全部评论(${comments.length})`);
    $(`#button-text-num-${id}`).text(`${comments.length}`);
  })
}

$(function(){
  $('.input-button').on('click', function() {
    var id = $(this).data('video-id');
    var comments = commentsVideo[id-1];
    const value = $(`#fake-input-${id}`).val();
    console.log(value);
    if(value.trim() !== '') {
      const myComments = new Comment({
        id: getLastId(id)+1,
        username: 'Your name',
        channel: './src/channel/channel_user.jpeg',
        time: '刚刚',
        area: '江西',
        hearts: 0,
        isShow: true,
        isLove: false,
        container: value
      });
      comments.unshift(myComments);
      saveToStorge(id,comments);
      setComments();
      $(`#fake-input-${id}`).val('');
      inputJS();
    }
  });

  $(document).on('click', '.love-button', function() {
    var commentId = $(this).data('comment-id');
    var videoId = $(this).data('video-id');

    var comments = commentsVideo[videoId-1];
    var matchingItem;
    comments.map((item) => {
      if(item.id === commentId) {
        matchingItem = item;
      }
    })
    matchingItem.isLove = !matchingItem.isLove;
    matchingItem.hearts += matchingItem.isLove ? 1 : -1;
    saveToStorge(videoId,comments);
    setComments();
  });

  $(document).on('click', '.remove-button', function() {
    var commentId = $(this).data('comment-id');
    var videoId = $(this).data('video-id');

    var comments = commentsVideo[videoId-1];
    var matchingItem;

    comments.map((item) => {
      if(item.id === commentId) {
        matchingItem = item;
      }
    })

    if(matchingItem) {
      matchingItem.isShow = false;
      saveToStorge(videoId,comments);
      setComments();
    }
  });

  $(document).on('click','.share-button',function() {
    var commentId = $(this).data('comment-id');
    var videoId = $(this).data('video-id');

    var comments = commentsVideo[videoId-1];
    var matchingItem;

    comments.map((item) => {
      if(item.id === commentId) {
        matchingItem = item;
      }
    })
    var copyText = matchingItem.container;
    if(navigator.clipboard) {
      navigator.clipboard.writeText(copyText).then(() => {
        $('.news-area').css('display','flex');
        setTimeout(function(){
          $('.news-area').css('display','none');
        },1000);
      }).catch(() => {
        alert('复制评论出错！');
      })
    } else {
      alert('复制评论出错！');
    }
  })
});




