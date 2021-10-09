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
  // setInterval(() => {
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
  // }, 5000);
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}
function createImage(column, image, index) {
  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery-img');
  galleryImage.src = `${image}`;
  galleryImage.alt = `galery${index}`;
  // galleryImage.setAttribute('data-aos', 'fade-up');
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

/* =============== 768 ========================*/
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

/* =============== Animation ========================*/
// AOS.init();
const galleryItems = document.querySelectorAll('.gallery-img')
if (galleryItems.length > 0) {
  window.addEventListener('scroll', animateGallery);

  function animateGallery() {
    for (let i = 0; i < galleryItems.length; i++) {
      const animItem = galleryItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;
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