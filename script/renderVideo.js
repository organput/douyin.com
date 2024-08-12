import { inputJS } from "./input.js";
import { playJS } from "./play.js";
import { setSwiper } from "./swiper.js";
import { checkBox } from "./speed.js";
import { soundControl,setSounds,soundJS,setSoundSvg } from "./sound.js";
import { sideBar } from "./sideComment.js";
import { updateVideo } from "../data/videoData.js";
import { videoJs } from "./video.js";
import { progressClick,progressMove,progressPush } from "./timeProgress.js";
import { loadFromData,loadFromStroge,setComments } from "../data/comments.js";
import { changePoster } from "./change.js";

function renderVideo() {
  updateVideo();
  changePoster();
  setSwiper();
  inputJS();
  playJS();
  videoJs();
  checkBox();
  setSounds();
  soundJS();
  soundControl();
  setSoundSvg();
  sideBar();
  progressPush();
  progressClick();
  progressMove();
  loadFromData();
  loadFromStroge();
  setComments();
}

renderVideo();