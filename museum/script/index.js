// const ticketCost = 110;
// let valueAmount18 = 1;
// let valueAmount65 = 1;

// const ticketsBuy = document.querySelector('.tickets__buy');
// const totalAmountContainer = document.querySelector('.tickets__total-amount');

// const buttonPlus18 = document.querySelector('.amount__button-plus18');
// const amount18 = document.querySelector('.amount__number18');
// const buttonMinus18 = document.querySelector('.amount__button-minus18');

// const buttonPlus65 = document.querySelector('.amount__button-plus65');
// const amount65 = document.querySelector('.amount__number65');
// const buttonMinus65 = document.querySelector('.amount__button-minus65');


// buttonPlus18.addEventListener('click', onPlusButton)
// buttonMinus18.addEventListener('click', onMinusButton)
// buttonPlus65.addEventListener('click', onPlusButton)
// buttonMinus65.addEventListener('click', onMinusButton)
// ticketsBuy.addEventListener('click', setDefaultTotal);

// let result = (ticketCost * valueAmount18) + (ticketCost * valueAmount65);
// totalAmountContainer.innerHTML = result;

// function onPlusButton(e) {
//   if (e.target.classList.contains('amount__button-plus18')) {
//     amount18.value = ++valueAmount18;
//     setTotalAmount();
//   }
//   if (e.target.classList.contains('amount__button-plus65')) {
//     amount65.value = ++valueAmount65;
//     setTotalAmount();
//   }
// }

// function onMinusButton(e) {
//   debugger;
//   if (e.target.classList.contains('amount__button-minus18')) {
//     if (valueAmount18 === 0) return;
//     amount18.value = --valueAmount18;
//     setTotalAmount();
//   }
//   if (e.target.classList.contains('amount__button-minus65')) {
//     if (valueAmount65 === 0) return;
//     amount65.value = --valueAmount65;
//     setTotalAmount();
//   }
// }

// function setTotalAmount() {
//   result = amount18.value * ticketCost + amount65.value * ticketCost;
//   totalAmountContainer.innerHTML = result;
// }

// function setDefaultTotal() {
//   amount18.value = 0;
//   amount65.value = 0;
//   valueAmount18 = 0;
//   valueAmount65 = 0;
//   result = ticketCost * amount18.value + ticketCost * amount65.value;
//   totalAmountContainer.innerHTML = result;
// }

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

// Самооценка проекта:
console.log(`
Вниманию проверяющих:
  - разработка велась на мониторе с разрешением 1366px;
  - проверять желательно используя device toolbar браузера в режиме responsive выставив 1920px (ctrl + 0  для выравнивания);
  - согласно техзадания, допускается отклонение вёрстки от макета до +/- 10px по горизонтали и вертикали

Самооценка: \n 
1. Вёрстка валидная "Document checking completed. No errors or warnings to show."  (+10) 
2. Вёрстка семантическая (header,footer, main, nav, section, h1-h5 )               (+20)
3. Для оформления СV используются css-стили +10 
4. Контент блоке по центру +10 
5. Вёрстка адаптивная +10
6. Адаптивное бургер меню, плавная прокрутка по якорям +10
7. На странице СV есть аватарка +10
8. Kонтакты для связи и перечень навыков оформлены в виде списка ul > li +10
9. CV содержит контакты, о себе, навыки, образовании и уровне английского +10
10. CV содержит пример кода +10
11. CV содержит изображения-ссылки на выполненные проекты
12. CV выполнено на английском языке +10
13. Выполнены требования к Pull Request,  выполнена самооценка +10
14. Дизайн, оформление, качество выполнения CV не ниже чем в примерах CV +10

Итого: 150.
`);
