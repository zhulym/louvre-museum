const videoProgress = document.querySelector('.video__progress');
const soundProgress = document.querySelector('.sound__progress');

videoProgress.addEventListener('input', function () {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${value}%, #fff ${value}%, white 100%)`
})
soundProgress.addEventListener('input', function () {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${value}%, #fff ${value}%, white 100%)`
})

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
