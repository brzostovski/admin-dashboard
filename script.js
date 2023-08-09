const ICON = document.querySelectorAll('div.icon');
const FULL_NAME_HEADER = document.querySelectorAll('.full-name');
const USER_NAME_HEADER = document.querySelector('.user-name');
const FULL_NAME = 'John Snow';
const USER_NAME = '@jsnow';

function changeState(item) {
  (item.classList.contains('active'))
    ? item.classList.remove('active')
    : item.classList.add('active');
}

function addName(container, name) {
  container.textContent = name;
}

ICON.forEach(cardIcon => {
  cardIcon.addEventListener('click', () => changeState(cardIcon));
})

window.addEventListener('load', () => {
  FULL_NAME_HEADER.forEach(container => {
    addName(container, FULL_NAME);
  })
  addName(USER_NAME_HEADER, `(${USER_NAME})`);
})