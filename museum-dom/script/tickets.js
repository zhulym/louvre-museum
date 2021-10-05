/*==============================================  Tickets Calc  ============================================*/
const ticketsType = document.querySelectorAll('.tickets__type-input');
const ticketsTotal = document.querySelector('.tickets__total-amount');
const ticketBasic = document.querySelector('.amount__number18');
const ticketSenior = document.querySelector('.amount__number65');
const ticketsBtns = document.querySelectorAll('.tickets-btns');

let typeValue = 20;
let discount = 0.5;
let params = {};

if (localStorage.getItem('tickets')) {
  params = JSON.parse(localStorage.getItem('tickets'));
  ticketBasic.value = params.basic;
  ticketSenior.value = params.senior;
  typeValue = params.type;
  setCheckedRadio();
}
console.log(localStorage.getItem('tickets'))

ticketsType.forEach(el => el.addEventListener('click', setTypeValue));
ticketsBtns.forEach(el => el.addEventListener('click', getTotalPrice));

function setTypeValue() {
  ticketsType.forEach(el => {
    if (el.checked) typeValue = +el.dataset.price;
    getTotalPrice();
    saveParams();
  })
}

function getTotalPrice() {
  ticketsTotal.innerHTML = typeValue * +ticketBasic.value + typeValue * discount * +ticketSenior.value;
  saveParams();
}

function saveParams() {
  params = {
    basic: ticketBasic.value,
    senior: ticketSenior.value,
    type: typeValue,
  }
  localStorage.setItem("tickets", JSON.stringify(params));
}
function setCheckedRadio() {
  ticketsType.forEach(el => el.removeAttribute('checked'));
  ticketsType.forEach(el => {
    if (+el.dataset.price === params.type) {
      el.setAttribute('checked', 'checked');
    }
  })
}

getTotalPrice();
// localStorage.removeItem('tickets');


/*==============================================  Ripple Effect  ============================================*/
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


