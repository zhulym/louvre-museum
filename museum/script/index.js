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
1. Вёрстка валидная "Document checking completed. No errors or warnings to show."        (+10) 
2. Вёрстка семантическая (header-main-footer, 7 section, 1-h1, 7-h2, 6-h3, 2-nav....)    (+24)
3. Вёрстка соответствует макету                                                          (+45)  
4. Форма покупки билетов                                                                 (+22) 
      - форма выдвигается слева и возвращается назад. Под формой есть полупрозрачный overlay. 
        форма и overlay прокручиваются вместе со страницей +2
      - форма открывается по кнопке Buy Now и закрывается по крестику или по overlay +2
      - 
      - вёрстка формы соответствует макету + 10
5. Требования к css                                                                      (+18)
      - добавлен favicon +2
      - построения сетки используются флексы +2
      - вёрстка размещается по центру, а не сдвигается в сторону +2
      - фоновый цвет секций тянется на всю ширину страницы +2
      - иконки добавлены в формате .svg +2
      - расстояние между буквами регулируется css-свойством letter-spacing +2
      - переключаются радиокнопки в блоке Tickets, одновременно может быть выбрана только одна кнопка +2
      - в блоке Contacts ссылки на почту mailto и на телефон tel +2
      - в футере ссылки на соцсети. Круглая граница вокруг иконок соцсетей выполнена при помощи css +2
6. Интерактивность, реализуемая через css                                                (+25)
      - плавная прокрутка по якорям +5
      - параллакс +5
      - по кнопке Discover the Louvre и карточкам Visiting открываются панорамы Google (iframe) +5
      - изменение стиля интерактивных элементов при наведении и клике (карточки, соцсети, плавность и т.д) +10
7. Интерактивность, реализуемая через js                                                 (+16)
      - можно передвигать ползунки видео, цвет шкалы меняется +2
      - кликами по кнопкам + и - в Tiskets можно менять кол-во билетов от 0 до 20 +2
      - кнопке "Book" в форме покупки билетов добавлен ripple-эффект +2
      - при обновлении страницы, картины в блоке Galery отображаются в рандомном порядке + 10

Итого: 160.
`);
