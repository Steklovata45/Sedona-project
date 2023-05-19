const popup = document.querySelector('.modal__container');
const popupOpenButton = document.querySelector('.search__button');
const popupCloseButton = popup.querySelector('.modal__close__button');

popupOpenButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal__container__close');
})

popupCloseButton.addEventListener('click', function () {
  popup.classList.add('modal__container__close');
})
