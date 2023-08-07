const ICON = document.querySelectorAll('a.icon');

function changeState(item) {
  (item.classList.contains('active'))
    ? item.classList.remove('active')
    : item.classList.add('active');
}

ICON.forEach(cardIcon => {
  cardIcon.addEventListener('click', () => changeState(cardIcon));
})