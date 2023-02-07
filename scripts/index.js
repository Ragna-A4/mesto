let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__close-button');
let formElement = popup.querySelector('.popup__form');
let nameInput = popup.querySelector('.popup__item_el_name');
let jobInput = popup.querySelector('.popup__item_el_job');
let nameProfile = document.querySelector('.profile__user-name');
let jobProfile = document.querySelector('.profile__user-job');

let handleEditButtonClick = () => {
    popup.classList.add('popup_opened');
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}

let closePopup =() => {
    popup.classList.remove('popup_opened');
}

let handleCloseButtonClick = () => {
    closePopup();
}

let handleFormSubmit = (evt) => {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closePopup();
}
    
editButton.addEventListener('click', handleEditButtonClick);
closeButton.addEventListener('click', handleCloseButtonClick);
formElement.addEventListener('submit', handleFormSubmit);