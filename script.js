const ICON = document.querySelectorAll('div.icon');
const FULL_NAME_HEADER = document.querySelectorAll('.full-name');
const USER_NAME_HEADER = document.querySelector('.user-name');
const SIDE_CARD = document.querySelectorAll('.sidebar-link');

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
  if (FULL_NAME_HEADER) {
    FULL_NAME_HEADER.forEach(container => {
    addName(container, FULL_NAME);
  })
  }
  if (USER_NAME_HEADER) {
    addName(USER_NAME_HEADER, `(${USER_NAME})`);
  }
})

SIDE_CARD.forEach(card => {
  card.addEventListener('click', () => {console.log('click')});
})