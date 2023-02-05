let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__close-button');
let formElement = popup.querySelector('.popup__form');
let nameInput = popup.querySelector('.popup__name');
let jobInput = popup.querySelector('.popup__job');
let nameProfile = document.querySelector('.profile__user-name');
let jobProfile = document.querySelector('.profile__user-job');

let handleEditButtonClick = () => {
    popup.classList.add('popup_opened');
}

let handleCloseButtonClick = () => {
    popup.classList.remove('popup_opened');
}

let handleFormSubmit = (evt) => {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    popup.classList.remove('popup_opened');
}
    
editButton.addEventListener('click', handleEditButtonClick);
closeButton.addEventListener('click', handleCloseButtonClick);
formElement.addEventListener('submit', handleFormSubmit);