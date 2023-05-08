const addCard = document.querySelector('.addCard');
const newCard = document.querySelector('.newCard');

addCard.addEventListener('click', () => {
  newCard.classList.add('testClass');
});

addCard.addEventListener('dblclick', () => {
  newCard.classList.remove('testClass');
});
