const newUserCard = document.querySelector('.new-user-card');
const plusWrapper = document.querySelector('.plus-wrapper');
let newUserDisplay = document.querySelector('.new-user-display');

const addNewUser = document.getElementById('add-new-user');
let addProfilePic = document.getElementById('add-profile-pic');

newUserCard.addEventListener('click', () => {
  activateModal();

  let newProfilePic = document.createElement('img');
  let userImg = addProfilePic.value;
  newProfilePic.setAttribute('src', userImg);
  newUserCard.appendChild(newProfilePic);
  newUserCard.insertBefore(newProfilePic, newUserDisplay);
  newProfilePic.classList.add('w-24', 'h-24', 'rounded-full');
  newUserDisplay.textContent = addNewUser.value;

  plusWrapper.classList.add('hidden');
});

// MODAL CODE
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.btn');
let titleMessage = document.querySelector('.titleMessage');
let message = document.querySelector('.message');

function activateModal() {
  modal.classList.remove('hiddenM');
  overlay.classList.remove('hiddenM');
  titleMessage.innerHTML = `Your acquired the Starter plan.`;
}

function closeModal() {
  modal.classList.add('hiddenM');
  overlay.classList.add('hiddenM');
}

closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hiddenM')) {
    closeModal();
  }
});
