const ICON = document.querySelectorAll('a.icon');

function changeState(item) {
  item.classList.toggle('active');
}

ICON.forEach(cardIcon => {
  cardIcon.addEventListener('click', () => changeState(cardIcon));
})