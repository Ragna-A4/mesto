
export const formValidation = {
    formSelector: '.popup__form',                          
    inputSelector: '.popup__item',                         
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_inactive',
    inputErrorClass: 'popup__item_type_error',
    errorClass: 'popup__error-message_active',
    buttonsHoverClass: 'buttons-hover',
    saveButtonHoverClass: 'buttons-hover_type_save',   
}     

export const initialCards = [
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

export const gallery = document.querySelector('.gallery');
export const editButton = document.querySelector('.profile__edit-button');
export const popupProfileEdit = document.querySelector('.popup_type_profile-edit');
export const addButton = document.querySelector('.profile__add-button')
export const popupGalleryAdd = document.querySelector('.popup_type_gallery-add');
export const profileFormElement = document.forms['profile'];
export const nameInput = popupProfileEdit.querySelector('.popup__item_el_name');
export const jobInput = popupProfileEdit.querySelector('.popup__item_el_job');
export const nameProfile = document.querySelector('.profile__user-name');
export const jobProfile = document.querySelector('.profile__user-job');
export const galleryFormElement = document.forms['gallery'];
export const placeNameInput = popupGalleryAdd.querySelector('.popup__item_el_place');
export const placeLinkInput = popupGalleryAdd.querySelector('.popup__item_el_link');
export const imagePopup = document.querySelector('.image-popup');
export const imagePopupPicture = imagePopup.querySelector('.image-popup__picture');
export const imagePopupNaming = imagePopup.querySelector('.image-popup__naming');
export const popups = document.querySelectorAll('.popup');