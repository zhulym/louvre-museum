/*==============================================  WELCOME SLIDER  ============================================*/
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

//// mouse swipes ////
let startX = 0;
let startY = 0;
let distX = 0;
let distY = 0;
let swipeTime = 0;
let startTime = 0;
const distHorizontal = 150;
const distVertical = 100;
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

/*==============================================  BURGER MENU  ============================================*/
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

/*==============================================  Explore Slider  ============================================*/
const exploreScroller = document.querySelector('.explore__scroller');
const exploreSlider = document.querySelector('.explore__image');
const exploreAfter = document.querySelector('.explore__after');
let active = false;

exploreScroller.addEventListener('mousedown', function () {
  active = true;
  exploreScroller.classList.add('scrolling');
});

document.body.addEventListener('mouseup', function () {
  active = false;
  exploreScroller.classList.remove('scrolling');
});

document.body.addEventListener('mouseleave', function () {
  active = false;
  exploreScroller.classList.remove('scrolling');
});

document.body.addEventListener('mousemove', function (e) {
  if (!active) return;
  let x = e.pageX;
  x -= exploreSlider.getBoundingClientRect().left;
  scrollIt(x);
});

function scrollIt(x) {
  let transform = Math.max(0, (Math.min(x, exploreSlider.offsetWidth)));
  exploreAfter.style.width = transform + "px";
  exploreScroller.style.left = transform - 19 + "px";
}

scrollIt(440);

exploreScroller.addEventListener('touchstart', function () {
  active = true;
  exploreScroller.classList.add('scrolling');
});

document.body.addEventListener('touchend', function () {
  active = false;
  exploreScroller.classList.remove('scrolling');
});

document.body.addEventListener('touchcancel', function () {
  active = false;
  exploreScroller.classList.remove('scrolling');
});

/*==============================================  ScrollTop  ============================================*/
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



// Самооценка проекта:
console.log(`
Самооценка: \n
1. Слайдер в секции Welcome (всё работает согласно пунктов задания)                 (+24) 
2. Вёрстка соответствует макету. Ширина экрана 768px(в допустимых отклон.)          (+40)
3. Вёрстка соответствует макету. Ширина экрана 420px(в допустимых отклон.)          (+40)
10. Дополнительный функционал (кнопка scrollTop)

  
Итого: 160.
`);
