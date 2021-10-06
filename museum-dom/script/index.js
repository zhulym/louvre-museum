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

/*==============================================  MapBox  ============================================*/

mapboxgl.accessToken = 'pk.eyJ1Ijoiemh1bHltIiwiYSI6ImNrdWUxbDdzMTFnNnYydW1vbm5pb2JhbmUifQ.tE8LBwTNY2yQA4ed8ib3ZA';
var map = new mapboxgl.Map({
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

// Самооценка проекта:
console.log(`
Самооценка: \n
1. Слайдер в секции Welcome (всё работает согласно пунктов задания)                 (+24)+ 
2. Слайдер в секции Video                                                           (+20)+
3. Кастомный видеоплеер                                                             (+36)+
4. Слайдер сравнения изображений в секции Explore                                   (+10)+
5. Анимация при прокрутке изображений в секции Galery                               (+8 )+
6. Калькулятор продажи билетов в секции Tiskets                                     (+10)+
7. Калькулятор продажи билетов в форме продажи билетов                              (+14)+
   - по кнопке Buy now данные перенос. в форму +2
   - можно изменить тип билетов, р-тат пересчитывается +2
   - можно изменить кол-во билетов, р-тат пересчитывается +2
8. Валидация формы                                                                  (+16)
9. Интерактивная карта в секции Contacts                                            (+12)+
   - карта добавлена +4
   - на карту добавлены маркеры +4
   - стиль соотв. макету +4
10. Дополнительный функционал (кнопка scrollTop)                                    (+10)+

  
Итого: 160.
`);
