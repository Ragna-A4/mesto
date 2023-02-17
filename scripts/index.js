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
const cardTemplate = document.getElementById('card');

const getCardElement = (element) => {
    const newCardElement = cardTemplate.content.cloneNode(true);
    const newCardImage = newCardElement.querySelector('.card__image');
    newCardImage.src = element.link;
    newCardImage.alt = element.name;
    const newCardNaming = newCardElement.querySelector('.card__naming');
    newCardNaming.textContent = element.name;
    const cardButtonTrash = newCardElement.querySelector('.card-button__trash');
    const cardButtonLike = newCardElement.querySelector('.card-button__like');
    cardButtonTrash.addEventListener('click', function(evt) {
        evt.target.closest('.card').remove()
    });
    cardButtonLike.addEventListener('click', function(evt) {
        evt.target.classList.toggle('card-button__like_active')
    });
    const newImagePopupPicture = newCardElement.querySelector('.image-popup__picture');
    newImagePopupPicture.src = element.link;
    newImagePopupPicture.alt = element.name;
    const newImagePopupNaming = newCardElement.querySelector('.image-popup__naming');
    newImagePopupNaming.textContent = element.name;
    const newImagePopup = newCardElement.querySelector('.image-popup');
    newCardImage.addEventListener('click', function() {
        newImagePopup.classList.add('image-popup_opened')
    });
    const closeNewImagePopupButton = newCardElement.querySelector('.popup__close-button_form_image');
    closeNewImagePopupButton.addEventListener('click', function() {
        newImagePopup.classList.remove('image-popup_opened')
    });
    return newCardElement;
}

const renderCard = (wrap, element) => {
    wrap.append(getCardElement(element))
}

initialCards.forEach((element) => {
    renderCard(gallery, element)
})

const editButton = document.querySelector('.profile__edit-button');
const popupProfileEdit = document.querySelector('.popup_type_profile-edit');
const addButton = document.querySelector('.profile__add-button')
const popupGalleryAdd = document.querySelector('.popup_type_gallery-add');
const closeProfileButton = document.querySelector('.popup__close-button_form_profile');
const closeGalleryButton = document.querySelector('.popup__close-button_form_gallery');
const profileFormElement = document.querySelector('.popup__form_type_profile');
const nameInput = popupProfileEdit.querySelector('.popup__item_el_name');
const jobInput = popupProfileEdit.querySelector('.popup__item_el_job');
const nameProfile = document.querySelector('.profile__user-name');
const jobProfile = document.querySelector('.profile__user-job');
const galleryFormElement = document.querySelector('.popup__form_type_gallery');
const placeNameInput = popupGalleryAdd.querySelector('.popup__item_el_place');
const placeLinkInput = popupGalleryAdd.querySelector('.popup__item_el_link');

const handleEditButtonClick = () => {
    popupProfileEdit.classList.add('popup_opened');
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}

const closeProfilePopup =() => {
    popupProfileEdit.classList.remove('popup_opened')
}

const handleCloseButtonClick = () => {
    closeProfilePopup()
}

const handleProfileFormSubmit = (evt) => {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closeProfilePopup();
}
    
editButton.addEventListener('click', handleEditButtonClick);
closeProfileButton.addEventListener('click', handleCloseButtonClick);
profileFormElement.addEventListener('submit', handleProfileFormSubmit);