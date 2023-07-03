const closeBtn = document.querySelectorAll('.close-btn');
const popups = document.querySelectorAll('.popup');

closeBtn.forEach((btn, btnIdx) => {
  btn.addEventListener('click', () => {
    popups.forEach((popup, popupIdx) => {
      if (btnIdx === popupIdx) {
        popup.classList.add('hidden');
      }

      setTimeout(() => {
        popups.forEach((popup) => {
          if (popup.classList.contains('hidden')) {
            popup.classList.remove('hidden');
          }
        });
      }, 2000);
    });
  });
});
