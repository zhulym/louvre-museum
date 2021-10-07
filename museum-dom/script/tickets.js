/*==============================================  Tickets Calc  ============================================*/
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
  let formateDate = date.toLocaleDateString('en-US', { month: 'long', year: '2-digit', weekday: 'long', }).split(' ');
  document.querySelector('.tickets__cards-date').innerHTML = `${formateDate[2]}, ${formateDate[0]} ${formateDate[1]}`

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

/*==============================================  Form Validation  ============================================*/
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