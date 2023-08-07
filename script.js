const ICON = document.querySelectorAll('a.icon');

function changeColor(item) {
  console.log('click');
}

ICON.forEach(cardIcon => {
  cardIcon.addEventListener('click', () => changeColor(cardIcon));
})