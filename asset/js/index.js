import {lightDarkMode, closeVideoSticky, videoSticky, mode} from './variable.js';

//script for light and dark mode
var isLight = true;
lightDarkMode.onclick = function () {
  lightDarkMode.classList.toggle("sun", isLight);
  isLight = !isLight;
  if (isLight) {
    mode.setAttribute("data-theme", "light");
  } else {
    mode.setAttribute("data-theme", "dark");
  }
};

var Top = document.querySelector(".toTop");
var head = document.querySelector("header");
var sticky = head.offsetTop;
window.onscroll = function () {
  showingHeader();
  stopStickyVideo();
};
function showingHeader() {
  var isScroll = window.pageYOffset > sticky ? true : false;
  head.classList.toggle("scroll", isScroll);
  Top.classList.toggle("onTop", isScroll);
}

function stopStickyVideo() {
  var wrapVideo = document.querySelector(".video-float");
  if (!videoSticky.classList.contains("unSticky")) {
    if (window.pageYOffset + window.innerHeight + 100 > wrapVideo.offsetTop) {
      videoSticky.classList.remove("is-sticky");
    } else {
      videoSticky.classList.add("is-sticky");
    }
  }
  //   if( window. )

}

// Close video sticky
closeVideoSticky.onclick = function () {
  videoSticky.classList.add("unSticky");
  videoSticky.classList.remove("is-sticky");
};
