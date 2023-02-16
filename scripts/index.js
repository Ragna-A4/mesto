const initialCards = [
    {
      name: 'Пляж',
      link: './images/beach.jpg'
    },
    {
      name: 'Кораллы',
      link: './images/corals.jpg'
    },
    {
      name: 'Остров',
      link: './images/island.jpg'
    },
    {
      name: 'Медуза',
      link: './images/jellyfish.jpg'
    },
    {
      name: 'Закат',
      link: './images/sunset.jpg'
    },
    {
      name: 'Кашалот',
      link: './images/fin_whale.jpg'
    }
  ]; 

const gallery = document.querySelector('.gallery');
const template = document.getElementById('card');


const getCardElement = (element) => {
    const newCardElement = template.content.cloneNode(true);
    const newCardImage = newCardElement.querySelector('.card__image');
    newCardImage.src = element.link;
    newCardImage.alt = element.name;
    const newCardNaming = newCardElement.querySelector('.card__naming');
    newCardNaming.textContent = element.name;
    const cardButtonTrash = newCardElement.querySelector('.card-button__trash');
    const cardButtonLike = newCardElement.querySelector('.card-button__like');
    cardButtonTrash.addEventListener('click', function(evt) {
        evt.target.closest('card').remove();
    });
    cardButtonLike.addEventListener('click', function(evt) {
        evt.target.classList.toggle('card-button__like_active')
    });
    const newImagePopupPicture = newCardElement.querySelector('.image-popup__picture');
    newImagePopupPicture.src = element.link;
    newImagePopupPicture.alt = element.name;
    const newImagePopupNaming = newCardElement.querySelector('.image-popup__naming');
    newImagePopupNaming.textContent = element.name;
    return newCardElement;
}

const renderCard = (wrap, element) => {
    wrap.append(getCardElement(element))
}

initialCards.forEach((element) => {
    renderCard(gallery, element);
})















const cardImage = document.querySelector('.card__image');
const imagePopup = document.querySelector('.image-popup');

const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = popup.querySelector('.popup__close-button');
const formElement = popup.querySelector('.popup__form');
const nameInput = popup.querySelector('.popup__item_el_name');
const jobInput = popup.querySelector('.popup__item_el_job');
const nameProfile = document.querySelector('.profile__user-name');
const jobProfile = document.querySelector('.profile__user-job');

const handleCardImageClick = () => {
    imagePopup.classList.add('image-popup_opened');
}

const handleEditButtonClick = () => {
    popup.classList.add('popup_opened');
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}

const closePopup = () => {
    popup.classList.remove('popup_opened');
}

const closeImagePopup = () => {
    imagePopup.classList.remove('image-popup_opened');
}

const handleCloseButtonClick = () => { 
    closeImagePopup();
    closePopup();
}
const handleFormSubmit = (evt) => {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closePopup();
}
    
editButton.addEventListener('click', handleEditButtonClick);
closeButton.addEventListener('click', handleCloseButtonClick);
formElement.addEventListener('submit', handleFormSubmit);
cardImage.addEventListener('click', handleCardImageClick);