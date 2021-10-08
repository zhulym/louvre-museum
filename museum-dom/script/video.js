const player = document.querySelector('.video__player');
const videoItem = document.querySelectorAll('.video-item');
const play = document.querySelector('.small-play');
const playImage = document.querySelector('.small-play__item');
const largePlay = document.querySelector('.video__large-play-button');
const videoContent = document.querySelector('.video__content');
const videoControl = document.querySelector('.video__controls');
const ranges = document.querySelectorAll('.ranges');
const videoProgress = document.querySelector('.video__progress');
const soundProgress = document.querySelector('.sound__progress');
const speaker = document.querySelector('.speaker');
const fullscreenBtn = document.querySelector('.fullscreen');
const playRate = document.querySelector('.play-back-rate');
const prevBtn = document.querySelector('.swiper-button-prev');
const nextBtn = document.querySelector('.swiper-button-next');
const paginationContainer = document.querySelector('.swiper-pagination');

let currentItem = 0;
let mouseActive = false;
let ended = false;
video.volume = 0.4;

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('keydown', handleKeys);
  play.addEventListener('click', playVideo);
  largePlay.addEventListener('click', playVideo);
  videoItem[currentItem].addEventListener('timeupdate', handleProgress);
  videoItem[currentItem].addEventListener('ended', handleEnd);
  player.addEventListener('fullscreenchange', toogleControl);
  speaker.addEventListener('click', muteVideo);
  fullscreenBtn.addEventListener('click', toggleFullscreen);
  videoContent.addEventListener('click', playVideo);
  videoProgress.addEventListener('input', handleProgressChange);
  videoProgress.addEventListener('click', handleProgressClick);
  videoProgress.addEventListener('mousemove', (e) => mouseActive && handleProgressClick(e));
  videoProgress.addEventListener('mousedown', () => mouseActive = true);
  videoProgress.addEventListener('mouseup', () => mouseActive = false);
  soundProgress.addEventListener('input', handleVolumeChange);
  prevBtn.addEventListener('click', handlePrevBtn);
  nextBtn.addEventListener('click', handleNextBtn);
  paginationContainer.addEventListener('click', handleBulletClick)
});

function playVideo() {
  largePlay.classList.toggle('hide__large-button');
  if (largePlay.classList.contains('hide__large-button')) {
    playImage.setAttribute('src', './assets/images/video/pause-button.png')
    videoItem[currentItem].play();
    setInterval(() => {
      handleProgress();
    }, 10);
  } else {
    playImage.setAttribute('src', './assets/images/video/small-play-button.svg')
    videoItem[currentItem].pause();
  }
}

function rangePosition(range, value) {
  return range.style.background = `linear-gradient(to right, #660606 0%, #660606 ${value}%, #fff ${value}%, #fff 100%)`;
}

function handleProgressChange() {
  rangePosition(videoProgress, videoProgress.value);
}

function handleProgressClick(e) {
  videoItem[currentItem].currentTime = (e.offsetX / videoProgress.offsetWidth) * videoItem[currentItem].duration;
}

function handleProgress() {
  let percentDuration = (videoItem[currentItem].currentTime / videoItem[currentItem].duration) * 100;
  videoProgress.value = percentDuration;
  rangePosition(videoProgress, percentDuration);
  if (videoItem[currentItem].currentTime === videoItem[currentItem].duration && !ended) {
    handleEnd();
    ended = !ended;
  }
}

function handleProgressKeyNum(percent) {
  videoItem[currentItem].currentTime = (percent / 100) * videoItem[currentItem].duration;
}

function handleEnd() {
  largePlay.classList.remove('hide__large-button');
  playImage.setAttribute('src', './assets/images/video/small-play-button.svg');
  rangePosition(videoProgress, 0);
  videoProgress.value = 0;
}

function handleVolumeChange() {
  videoItem[currentItem].volume = soundProgress.value;
  if (videoItem[currentItem].volume === 0) {
    speaker.classList.add('mute');
    videoItem[currentItem].muted = true;
  } else {
    speaker.classList.remove('mute');
    videoItem[currentItem].muted = false;
  }
  rangePosition(soundProgress, soundProgress.value * 100);
}

function muteVideo() {
  videoItem[currentItem].muted = !videoItem[currentItem].muted;
  videoItem[currentItem].muted ? speaker.classList.add('mute') : speaker.classList.remove('mute');
  if (videoItem[currentItem].muted) {
    videoItem[currentItem].volume = 0;
    soundProgress.value = 0;
    rangePosition(soundProgress, videoItem[currentItem].volume * 100);
  } else {
    videoItem[currentItem].volume = 0.4;
    soundProgress.value = 0.4;
    rangePosition(soundProgress, videoItem[currentItem].volume * 100);
  }
}

function launchFS(element) {
  element.requestFullscreen ? element.requestFullscreen() : null;
}

function exitFS() {
  document.exitFullscreen ? document.exitFullscreen() : null;
}

function toggleFullscreen() {
  document.fullscreenElement ? exitFS() : launchFS(player);
  videoContent.classList.toggle('max-video-height');
}

function toogleControl() {
  videoControl.classList.toggle('show-control');
}

function showPlayBackRate() {
  playRate.innerHTML = `X ${videoItem[currentItem].playbackRate}`;
  setTimeout(() => { playRate.innerHTML = '' }, 1000)
}

function faster() {
  if (videoItem[currentItem].playbackRate >= 2) return;
  videoItem[currentItem].playbackRate += 0.25;
  showPlayBackRate();
}

function slower() {
  if (videoItem[currentItem].playbackRate <= 0.5) return;
  videoItem[currentItem].playbackRate -= 0.25
  showPlayBackRate();
}

function resetParams() {
  videoItem[currentItem].pause();
  rangePosition(videoProgress, 0);
  videoProgress.value = 0;
  videoItem[currentItem].volume = 0.4;
  soundProgress.value = 0.4;
  rangePosition(soundProgress, videoItem[currentItem].volume * 100);
  speaker.classList.remove('mute');
  largePlay.classList.remove('hide__large-button');
  playImage.setAttribute('src', './assets/images/video/small-play-button.svg')
  videoItem[currentItem].classList.remove('video__active', 'video');
  ended = false;
}
let isSlideActive = false;

function handleNextBtn() {
  if (!isSlideActive) {
    isSlideActive = true;
    resetParams();
    if (currentItem === videoItem.length - 1) currentItem = -1;
    currentItem++;
    videoItem[currentItem].classList.add('video__active', 'video');
    videoItem[currentItem] = document.querySelector('.video');
    setTimeout(() => {
      isSlideActive = false;
    }, 350);
  }

}

function handlePrevBtn() {
  if (!isSlideActive) {
    isSlideActive = true;
    resetParams();
    if (currentItem === 0) {
      currentItem = videoItem.length - 1;
    } else {
      currentItem--;
    }
    videoItem[currentItem].classList.add('video__active', 'video');
    videoItem[currentItem] = document.querySelector('.video');
    setTimeout(() => {
      isSlideActive = false;
    }, 350);
  }
}

function handleBulletClick(e) {
  setTimeout(() => {
    if (e.target.classList.contains('swiper-pagination-bullet')) {
      resetParams();
      let currentBullet = Number(e.target.ariaLabel.slice(-1)) - 1;
      currentItem = currentBullet;
      videoItem[currentItem].classList.add('video__active', 'video');
      videoItem[currentItem] = document.querySelector('.video');
    }
  }, 50);
}

function handleKeys(e) {
  let scrollPosition = document.documentElement.scrollTop;
  if (scrollPosition > 1500 && scrollPosition < 4500) {
    e.preventDefault();
    e.code === 'Space' ? playVideo() : null;
    e.key === 'm' || e.key === 'ь' ? muteVideo() : null;
    e.key === 'f' || e.key === 'а' ? toggleFullscreen() : null;
    e.key === '<' || e.key === 'Б' ? slower() : null;
    e.key === '>' || e.key === 'Ю' ? faster() : null;
  }
}

/* ============================ MINI SLIDER =============================================*/
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 42,
  loop: true,
  autoHeight: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  preloadImages: true,
  lazy: {
    loadOnTransitionStart: true,
    loadPrevNext: false,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 41,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    420: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});