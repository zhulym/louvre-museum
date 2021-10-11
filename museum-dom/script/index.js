const sliderContainer = document.querySelector('.slider__container');
const upArrow = document.querySelector('.slider-left__arrow');
const downArrow = document.querySelector('.slider-right__arrow');
const rightSlides = document.querySelectorAll('.slider-right__item');
const pagination = document.querySelector('.slider__pagination');
const sliderCurrentNumber = document.querySelector('.slider__current-number');
const sliderAmountSlides = document.querySelector('.slider__amount-slides');

const length = rightSlides.length;
let currentLeftIdx = 0;
let currentRightIdx = 0;
let isActive = true;
let paginationItems;
createPagination();
sliderAmountSlides.innerHTML = `0${length}`;

upArrow.addEventListener('click', slideLeft);
downArrow.addEventListener('click', slideRight);
pagination.addEventListener('click', slideOnPag);
// sliderContainer.addEventListener('mousewheel', slideWheel);
// function slideWheel(event) {
//   if (event.wheelDelta < 0) {
//     slideRight();
//   }
//   if (event.wheelDelta > 0) {
//     slideLeft();
//   }
// }

function delPrevSlide(slider, animation, index) {
  isActive = false;
  slider[index].classList.add(animation);
  slider[index].addEventListener('animationend', function () {
    this.classList.remove('active', animation);
  })
}

function addNextSlide(slider, animation, index) {
  slider[index].classList.add('next', animation);
  slider[index].addEventListener('animationend', function () {
    this.classList.remove('next', animation);
    this.classList.add('active');
    isActive = true;
  })
}

function clearPagination() {
  Array.from(paginationItems).forEach(el => {
    if (el.classList.contains('active-pagination')) {
      el.classList.remove('active-pagination');
    }
  })
}

function slideLeft() {
  if (isActive) {
    clearPagination();
    delPrevSlide(rightSlides, 'to-left', currentRightIdx);
    currentRightIdx = ((currentRightIdx - 1) + length) % length;
    addNextSlide(rightSlides, 'from-right', currentRightIdx);
    paginationItems[currentRightIdx].classList.add('active-pagination');
    sliderCurrentNumber.innerHTML = `0${currentRightIdx + 1}`;
  }
}

function slideRight() {
  if (isActive) {
    clearPagination();
    delPrevSlide(rightSlides, 'to-right', currentRightIdx);
    currentRightIdx = ((currentRightIdx + 1) + length) % length;
    addNextSlide(rightSlides, 'from-left', currentRightIdx);
    paginationItems[currentRightIdx].classList.add('active-pagination');
    sliderCurrentNumber.innerHTML = `0${currentRightIdx + 1}`;
  }
}

function createPagination() {
  for (let i = 0; i < length - 1; i++) {
    const pagItem = document.createElement('span');
    pagItem.setAttribute('class', 'pagination-item')
    pagItem.setAttribute('data-idx', i + 1)
    pagination.append(pagItem);
  }
  paginationItems = document.getElementsByClassName('pagination-item');
}

function slideOnPag(event) {
  const currentPag = Number(event.target.dataset.idx);
  if (currentRightIdx === currentPag) {
    return;
  }
  if (currentPag < currentRightIdx && isActive) {
    clearPagination();
    delPrevSlide(rightSlides, 'to-left', currentRightIdx);
    currentRightIdx = currentPag;
    addNextSlide(rightSlides, 'from-right', currentRightIdx);
    paginationItems[currentRightIdx].classList.add('active-pagination');
    sliderCurrentNumber.innerHTML = `0${currentRightIdx + 1}`;
  }
  if (currentPag > currentRightIdx && isActive) {
    clearPagination();
    delPrevSlide(rightSlides, 'to-right', currentRightIdx);
    currentRightIdx = currentPag;
    addNextSlide(rightSlides, 'from-left', currentRightIdx);
    paginationItems[currentRightIdx].classList.add('active-pagination');
    sliderCurrentNumber.innerHTML = `0${currentRightIdx + 1}`;
  }
}

let startX = 0;
let startY = 0;
let distX = 0;
let distY = 0;
let swipeTime = 0;
let startTime = 0;
const distHorizontal = 150;
const distVertical = 200;
const allowedTime = 1000;

sliderContainer.addEventListener('mousedown', function (e) {
  sliderContainer.style.cursor = 'grabbing';
  startX = e.pageX;
  startY = e.pageY;
  startTime = new Date().getTime();
  e.preventDefault();
})

sliderContainer.addEventListener('mouseup', function (e) {
  sliderContainer.style.cursor = 'grab';
  distX = e.pageX - startX;
  distY = e.pageY - startY;
  swipeTime = new Date().getTime() - startTime;

  if (swipeTime <= allowedTime) {
    if (Math.abs(distX) >= distHorizontal && Math.abs(distY) <= distVertical) {
      if (distX > 0) {
        if (isActive) {
          slideRight();
        }
      } else {
        if (isActive) {
          slideLeft();
        }
      }
    }
  }
  e.preventDefault();
})

const burgerIcon = document.querySelector('.burger__icon');
const headerMenuWrap = document.querySelector('.header__menu-wrapper');
const welcomeContent = document.querySelector('.welcome__content');
const menuLinks = document.querySelectorAll('.header__menu-item');
const footerSocial = document.querySelector('.footer__social');
const container = document.querySelector('.container');

document.addEventListener('DOMContentLoaded', () => {
  [burgerIcon, ...menuLinks].forEach(el => el.addEventListener('click', showHideMenu));
  document.addEventListener('click', hideMenuDocClick);
});

function hideMenuDocClick(e) {
  if (e.target.classList.contains('burger__icon')) return;
  [headerMenuWrap, burgerIcon].forEach(el => el.classList.remove('menu__active'));
  headerMenuWrap.addEventListener("click", (e) => e.stopPropagation());
  welcomeContent.classList.remove('hide-welcome-content');
}

function showHideMenu() {
  headerMenuWrap.classList.toggle('menu__active');
  burgerIcon.classList.toggle('menu__active');
  welcomeContent.classList.toggle('hide-welcome-content');
  footerSocial.classList.toggle('menu-class');
}

const body = document.querySelector('body');
const exploreSlider = document.querySelector('.explore-slider');
const exploreScroller = document.querySelector('.explore__scroller');

let positionOne = 0;
let positionTwo = 0;
let openWidth = 440;
function getTemplate(width) {
  return `
    <div class="before" style="width: ${width}px">    </div>
    <div class="explore__scroller" style="left: ${width - 20}px"></div>
    <div class="after"></div>`
}

function render(width) {
  exploreSlider.innerHTML = getTemplate(width);
  document.querySelector('.explore__scroller').addEventListener('mousedown', onMouseDown)
}
render(openWidth);
function onMouseDown(e) {
  positionOne = e.clientX;
  exploreSlider.addEventListener('mousemove', onMouseMove);
}
function onMouseUp() {
  exploreSlider.removeEventListener('mousemove', onMouseMove);
}
function onMouseMove(e) {
  positionTwo = e.clientX;
  openWidth -= (positionOne - positionTwo);
  if (openWidth > 720) openWidth = 720;
  if (openWidth < 0) openWidth = 0;
  render(openWidth);
  positionOne = positionTwo;
}
body.addEventListener('mouseup', onMouseUp)

const scrollTopBtn = document.querySelector(".scroll-up-button");

const handleScroll = () => {

  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    scrollTopBtn.style.display = "block";
  }
  else {
    scrollTopBtn.style.display = "none";
  }
};

const scrollToTop = () => {
  const distFromTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (distFromTop > 0) window.scrollTo(0, 0);
};

document.addEventListener("scroll", handleScroll);
scrollTopBtn.addEventListener("click", function (e) {
  e.preventDefault();
  scrollToTop();
});

mapboxgl.accessToken = 'pk.eyJ1Ijoiemh1bHltIiwiYSI6ImNrdWUxbDdzMTFnNnYydW1vbm5pb2JhbmUifQ.tE8LBwTNY2yQA4ed8ib3ZA';
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [2.3364, 48.86091],
  zoom: 15.75,
});

map.addControl(new mapboxgl.NavigationControl());

const popup = new mapboxgl.Popup({ offset: 25 }).setText(
  'Louvre Museum!'
);
const popup2 = new mapboxgl.Popup({ offset: 25 }).setText(
  'Louvre Museum!'
);
const popup3 = new mapboxgl.Popup({ offset: 25 }).setText(
  'Louvre Museum!'
);
const popup4 = new mapboxgl.Popup({ offset: 25 }).setText(
  'Louvre Museum!'
);
const popup5 = new mapboxgl.Popup({ offset: 25 }).setText(
  'Louvre Museum!'
);

const marker1 = new mapboxgl.Marker({
  color: "#171717",
  draggable: true
})
  .setLngLat([2.3364, 48.86091])
  .setPopup(popup)
  .addTo(map);

const marker2 = new mapboxgl.Marker({
  color: "#757575",
  draggable: true
}).setLngLat([2.3333, 48.8602])
  .setPopup(popup2)
  .addTo(map);
const marker3 = new mapboxgl.Marker({
  color: "#757575",
  draggable: true
}).setLngLat([2.3397, 48.8607])
  .setPopup(popup3)
  .addTo(map);
const marker4 = new mapboxgl.Marker({
  color: "#757575",
  draggable: true
}).setLngLat([2.3330, 48.8619])
  .setPopup(popup4)
  .addTo(map);
const marker5 = new mapboxgl.Marker({
  color: "#757575",
  draggable: true
}).setLngLat([2.3365, 48.8625])
  .setPopup(popup5)
  .addTo(map);

const galleryInnerContainer = document.querySelector('.gallery__picture-inner-container');
const galleryLeft = document.querySelector('.gallery__left');
const galleryCenter = document.querySelector('.gallery__center');
const galleryRight = document.querySelector('.gallery__right');

window.addEventListener('load', addGalleryReload)
window.addEventListener('resize', addGallery);

const galleryImages = [
  './assets/images/gallery/galery1.jpg',
  './assets/images/gallery/galery2.jpg',
  './assets/images/gallery/galery3.jpg',
  './assets/images/gallery/galery4.jpg',
  './assets/images/gallery/galery5.jpg',
  './assets/images/gallery/galery6.jpg',
  './assets/images/gallery/galery7.jpg',
  './assets/images/gallery/galery8.jpg',
  './assets/images/gallery/galery9.jpg',
  './assets/images/gallery/galery10.jpg',
  './assets/images/gallery/galery11.jpg',
  './assets/images/gallery/galery12.jpg',
  './assets/images/gallery/galery13.jpg',
  './assets/images/gallery/galery14.jpg',
  './assets/images/gallery/galery15.jpg',
];

let newImageArr = shuffle(galleryImages);
createGallery();

if (window.innerWidth > 768) {
  while (galleryLeft.firstChild) {
    galleryLeft.removeChild(galleryLeft.firstChild);
  }
  while (galleryCenter.firstChild) {
    galleryCenter.removeChild(galleryCenter.firstChild);
  }
  while (galleryRight.firstChild) {
    galleryRight.removeChild(galleryRight.firstChild);
  }
  newImageArr = shuffle(galleryImages);
  createGallery();
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}
function createImage(column, image, index) {
  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery-img');
  galleryImage.src = `${image}`;
  galleryImage.alt = `galery${index}`;
  column.append(galleryImage);
}
function createGallery() {
  if (window.innerWidth > 768) {
    newImageArr.map((img, i) => {
      if (galleryLeft.children.length < 5) {
        createImage(galleryLeft, img, i);
      } else if (galleryCenter.children.length < 5) {
        createImage(galleryCenter, img, i);
      } else {
        createImage(galleryRight, img, i);
      }
    })
  }
}

window.addEventListener('load', addGalleryReload)
window.addEventListener('resize', addGallery);

function addGalleryReload(e) {
  if (window.innerWidth <= 768) {
    createGallery768();
  }
}
function addGallery(e) {
  if (e.target.innerWidth <= 768) {
    createGallery768();
  }
}

function createGallery768() {
  while (galleryLeft.firstChild) {
    galleryLeft.removeChild(galleryLeft.firstChild);
  }
  while (galleryCenter.firstChild) {
    galleryCenter.removeChild(galleryCenter.firstChild);
  }
  while (galleryRight.firstChild) {
    galleryRight.removeChild(galleryRight.firstChild);
  }
  newImageArr.map((img, i) => {
    if (galleryLeft.children.length < 8) {
      createImage(galleryLeft, img, i);
    } else {
      createImage(galleryRight, img, i);
    }
  })
}

const galleryItems = document.querySelectorAll('.gallery-img')
if (galleryItems.length > 0) {
  window.addEventListener('scroll', animateGallery);

  function animateGallery() {
    for (let i = 0; i < galleryItems.length; i++) {
      const animItem = galleryItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 32;
      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('item-animation');
      } else {
        animItem.classList.remove('item-animation');
      }

    }
  }
}

function offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

animateGallery();

window.addEventListener("load", function () {
  let scrollPosition = document.documentElement.scrollTop;
  if (scrollPosition > 2500 && scrollPosition < 6500) {
    animateGallery();
  }
});

const ticketsType = document.querySelectorAll('.tickets__type-input');
const ticketsTotal = document.querySelector('.tickets__total-amount');
const ticketBasic = document.querySelector('.amount__number18');
const ticketSenior = document.querySelector('.amount__number65');
const ticketsBtns = document.querySelectorAll('.tickets-btns');
const entryTicketsBtns = document.querySelectorAll('.entry-tickets-button');
const inputBasicForm = document.querySelector('#input-basic');
const inputSeniorForm = document.querySelector('#input-senior');
const ticketTypeForm = document.querySelector('#ticket-selected-type');
const selectOptions = document.querySelectorAll('.select-options');
const ticketsBuy = document.querySelector('.tickets__buy');
const rightTicketsType = document.querySelector('.right-tickets-type');
const formBasicPrice = document.querySelectorAll('.form-basic-price');
const formSeniorPrice = document.querySelectorAll('.form-senior-price');
const amountBasic = document.querySelector('.amount-basic');
const amountSenior = document.querySelector('.amount-senior');
const basicTotalPrice = document.querySelector('.basic-total-price');
const seniorTotalPrice = document.querySelector('.senior-total-price');
const totalFormResult = document.querySelector('.total-block__result');
const formDate = document.querySelector('#date');
const formTime = document.querySelector('#time');

let typeValue = 20;
let discount = 0.5;
let params = {};

if (localStorage.getItem('tickets')) {
  params = JSON.parse(localStorage.getItem('tickets'));
  ticketBasic.value = params.basic;
  ticketSenior.value = params.senior;
  inputBasicForm.value = params.basic;
  inputSeniorForm.value = params.senior;
  typeValue = params.type;
  setCurrentParams();
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.close-form').addEventListener('click', handleCloseForm);
  ticketsBuy.addEventListener('click', blockPastDate);
  formDate.addEventListener('change', handleDateChange);
  formTime.addEventListener('change', handleTimeChange);
  ticketTypeForm.addEventListener('change', handleSelectChange);
  ticketsBuy.addEventListener('click', setCurrentParams);
  ticketsType.forEach(el => el.addEventListener('click', setTypeValue));
  ticketsBtns.forEach(el => el.addEventListener('click', getTotalPrice));
  entryTicketsBtns.forEach(el => el.addEventListener('click', handleEntryBtns));
});

function handleDateChange() {
  let date = new Date(formDate.value);
  let formateDate = date.toLocaleDateString('en-US', { month: 'long', day: '2-digit', weekday: 'long', }).split(' ');
  document.querySelector('.tickets__cards-date').innerHTML = `${formateDate[0]} ${formateDate[1]} ${formateDate[2]}`

  if (formDate.value.length) {
    document.querySelector('.hide-date').style.display = 'none';
    formDate.style.color = '#000000'
  } else {
    document.querySelector('.hide-date-time').style.display = 'inline';
  }
}

function handleTimeChange() {
  document.querySelector('.hide-time').style.display = 'none';
  document.querySelector('.tickets__cards-time').innerHTML = formTime.value;
  formTime.style.color = '#000000';
}

function blockPastDate() {
  let currentDate = new Date();
  let month = currentDate.getMonth() + 1;
  let day = currentDate.getDate();
  let year = currentDate.getFullYear();
  if (month < 10) month = '0' + month.toString();
  if (day < 10) day = '0' + day.toString();
  let maxDate = year + '-' + month + '-' + day;
  formDate.setAttribute('min', maxDate)

  if (formDate.value.length) {
    document.querySelector('.hide-date-time').style.display = 'none';
  } else {
    document.querySelector('.hide-date-time').style.display = 'inline';
  }
}

function setTypeValue() {
  ticketsType.forEach(el => {
    if (el.checked) typeValue = +el.dataset.price;
    getTotalPrice();
    saveParams(typeValue, ticketBasic.value, ticketSenior.value);
  })
}

function getTotalPrice() {
  ticketsTotal.innerHTML = typeValue * +ticketBasic.value + typeValue * discount * +ticketSenior.value;
  saveParams(typeValue, ticketBasic.value, ticketSenior.value);
}

function saveParams(type, basicVal, seniorVal) {
  params = {
    basic: basicVal,
    senior: seniorVal,
    type: type,
  }
  localStorage.setItem("tickets", JSON.stringify(params));
}

function setCurrentParams() {
  ticketsType.forEach(el => el.removeAttribute('checked'));
  selectOptions.forEach(el => el.removeAttribute('selected'));
  ticketsType.forEach(el => {
    if (+el.dataset.price === params.type) el.setAttribute('checked', 'checked');
  })
  selectOptions.forEach(el => {
    if (+el.dataset.price === params.type) el.setAttribute('selected', 'selected');
  })
  rightTicketsType.innerHTML = params.type === 20 ? 'Permanent exhibition' : params.type === 25 ? 'Temporary exhibition' : 'Combined Admission'
  formBasicPrice.forEach(el => el.innerHTML = params.type);
  formSeniorPrice.forEach(el => el.innerHTML = params.type * discount);
  inputBasicForm.value = params.basic;
  inputSeniorForm.value = params.senior;
  amountBasic.innerHTML = params.basic;
  amountSenior.innerHTML = params.senior;
  basicTotalPrice.innerHTML = +params.basic * params.type + '€';
  seniorTotalPrice.innerHTML = +params.senior * params.type * discount + '€';
  totalFormResult.innerHTML = params.type * params.basic + params.type * params.senior * discount + '€';
}

function handleSelectChange() {
  let currentPrice = +ticketTypeForm.options[ticketTypeForm.selectedIndex].dataset.price;
  saveParams(currentPrice, inputBasicForm.value, inputSeniorForm.value);
  setCurrentParams();
}

function handleEntryBtns() {
  saveParams(typeValue, inputBasicForm.value, inputSeniorForm.value);
  setCurrentParams();
}

function handleCloseForm() {
  setCurrentParams();
  ticketBasic.value = params.basic;
  ticketSenior.value = params.senior;
  ticketsTotal.innerHTML = params.type * params.basic + params.type * params.senior * discount;
}

getTotalPrice();

const ticketsBuyBtn = document.querySelector('.tickets__buy');
const formBookBtn = document.querySelector('.card-form-submit');
const ticketsOverlay = document.querySelector('.tickets__overlay');
const ticketsFormItem = document.querySelector('.tickets__form-item');
const closeBtn = document.querySelector('.close-form');

document.addEventListener('DOMContentLoaded', () => {
  ticketsBuyBtn.addEventListener("click", openTicketsForm);
  formBookBtn.addEventListener('click', (e) => e.preventDefault());
  formBookBtn.addEventListener("click", createRipple);
  ticketsFormItem.addEventListener("click", (e) => e.stopPropagation());
  [ticketsOverlay, closeBtn].forEach(el => el.addEventListener("click", () => {
    setTimeout(() => { ticketsOverlay.classList.remove('active') }, 300)
    ticketsFormItem.classList.remove('form-animation');
  }))
});

function openTicketsForm() {
  ticketsOverlay.classList.add('active');
  setTimeout(() => { ticketsFormItem.classList.add('form-animation') }, 300)
}

function createRipple(e) {
  const circle = document.createElement('span')
  circle.classList.add('circle')
  circle.style.top = e.offsetY + 'px'
  circle.style.left = e.offsetX + 'px'
  this.appendChild(circle)
  setTimeout(() => circle.remove(), 500)
}

const ticketForm = document.forms['ticketsForm'];
const validateInputs = document.querySelectorAll('.validate-input');
const validateControl = document.querySelectorAll('.validate-control');
const inputName = document.querySelector('#name');

const validationShema = {
  name: {
    regexp: /^[a-zA-Zа-яА-Я \s]{3,15}$/gi,
    message: 'Incorrect name or field is empty!',
  },
  email: {
    regexp: /^[A-za-z0-9\-\_]{3,15}@\w+([\.-]?[a-zA-Z]{3,})(\.[a-zA-Z]{2,})+$/ig,
    message: 'Incorrect email or field is empty!'
  },
  tel: {
    regexp: /^[ -]*([0-9][ -]*){1,10}$/,
    message: 'Incorrect phone number or field is empty!'
  }
}

validateInputs.forEach((item) => {
  item.addEventListener('blur', validateForm)
});

function validateForm(event) {
  const input = event.target || event;
  const error = validationShema[input.name].message;
  const regExp = validationShema[input.name].regexp;

  const isValid = input.value.match(regExp);
  if (!input.required) return;

  if (!isValid) {
    input.nextElementSibling.innerHTML = error;
    input.parentNode.classList.add('error');
    return false;
  } else {
    input.nextElementSibling.innerHTML = '';
    input.parentNode.classList.remove('error');
    return true;
  }
};

ticketForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const inputErrors = [];
  const inputValues = {};

  validateInputs.forEach((input) => {
    const isValid = validateForm(input);
    if (!isValid) {
      inputErrors.push(input);
      return;
    }
    inputValues[input.name] = input.value;
    console.log('FORM IS VALIDATED!!!');
  });
}

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
  resetParams();
  if (!isSlideActive) {
    isSlideActive = true;
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
  resetParams();
  if (!isSlideActive) {
    isSlideActive = true;
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

// Самооценка проекта:
console.log(`
Самооценка: \n
1. Слайдер в секции Welcome (всё работает согласно пунктов задания)                 (+24)
2. Слайдер в секции Video                                                           (+16)
3. Кастомный видеоплеер (всё работает согласно пунктов задания)                     (+36)
4. Слайдер сравнения изображений в секции Explore                                   (+10)
   - ползунок можно перетягивать мышкой по горизонтали +2
   - ползунок никогда не выходит за границы картины +2
   - при перемещении ползунка справа налево плавно появляется нижняя картина +2
   - при перемещении ползунка слева направо плавно появляется верхняя картина +2
   - при обновлении страницы ползунок возвращается в исходное положение +2
5. Анимация при прокрутке изображений в секции Galery                               (+8 )
   - при прокрутке анимация всплытия +4
   - если прокрутить стр. вверх и затем вниз, анимация повторяется +2
   - при обновлении страницы анимация повторяется +2
6. Калькулятор продажи билетов в секции Tiskets                                     (+10)
7. Калькулятор продажи билетов в форме продажи билетов                              (+14)
   - по кнопке Buy now данные перенос. в форму +2
   - при выборе даты, она отображается в правом блоке +2
   - нельзя выбрать дату в прошлом +2
   - при выборе времени, оно отображ. в правом блоке +2
   - время с 9:00 до 18:00 с интервалом в 30 минут +2
   - можно изменить тип билетов, р-тат пересчитывается +2
   - можно изменить кол-во билетов, р-тат пересчитывается +2
8. Валидация формы                                                                  (+16)
   - валидация имени пользователя согласно условий +4
   - валидация e-mail согласно условий +4
   - валидация номера телефона согласно условий +4
   - при невалидном значении граница подсвечивается красным, с ошибкой
9. Интерактивная карта в секции Contacts                                            (+12)
   - карта добавлена +4
   - на карту добавлены маркеры +4
   - стиль соотв. макету +4
10. Дополнительный функционал (кнопка scrollTop)                                    (+10)

Итого: 156.
`);
