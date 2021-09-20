const ticketsBuyBtn = document.querySelector('.tickets__buy');
const ticketsOverlay = document.querySelector('.tickets__overlay');
const ticketsFormItem = document.querySelector('.tickets__form-item');
const closeBtn = document.querySelector('.close-form');


function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
  circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
  circle.classList.add("ripple");
  const ripple = button.querySelector(".ripple");
  if (ripple) {
    ripple.remove();
  }
  button.appendChild(circle);
}
function openTicketsForm() {
  ticketsOverlay.classList.add('active');
  setTimeout(() => { ticketsFormItem.classList.add('form-animation') }, 300)


}

document.addEventListener('DOMContentLoaded', () => {
  ticketsBuyBtn.addEventListener("click", openTicketsForm);
  ticketsFormItem.addEventListener("click", (e) => e.stopPropagation());
  [ticketsOverlay, closeBtn].forEach(el => el.addEventListener("click", () => {
    ticketsOverlay.classList.remove('active');
    ticketsFormItem.classList.remove('form-animation');
  }))
});