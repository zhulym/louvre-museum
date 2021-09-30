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
