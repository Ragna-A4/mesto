
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

const BeachImage = new URL('../images/beach.jpg', import.meta.url);
const CoralsImage = new URL('../images/corals.jpg', import.meta.url);
const IslandImage = new URL('../images/island.jpg', import.meta.url);
const JellyfishImage = new URL('../images/jellyfish.jpg', import.meta.url);
const SunsetImage = new URL('../images/sunset.jpg', import.meta.url);
const FinwhaleImage = new URL('../images/fin_whale.jpg', import.meta.url);

export const initialCards = [
    {
      name: 'Пляж',
      link: BeachImage
    },
    {
      name: 'Кораллы',
      link: CoralsImage
    },
    {
      name: 'Остров',
      link: IslandImage
    },
    {
      name: 'Медуза',
      link: JellyfishImage
    },
    {
      name: 'Закат',
      link: SunsetImage
    },
    {
      name: 'Кашалот',
      link: FinwhaleImage
    }
  ]; 

export const gallery = document.querySelector('.gallery');
export const editButton = document.querySelector('.profile__edit-button');
export const popupProfileEdit = document.querySelector('.popup_type_profile-edit');
export const addButton = document.querySelector('.profile__add-button')
export const popupGalleryAdd = document.querySelector('.popup_type_gallery-add');
export const avatarEditButton = document.querySelector('.profile__avatar-edit-button');
export const popupAvatarEdit = document.querySelector('.popup_type_avatar-edit');
export const avatarFormElement = document.forms['avatar'];
export const avatarInput = popupAvatarEdit.querySelector('.popup__item_el_avatar');
export const profileFormElement = document.forms['profile'];
export const nameInput = popupProfileEdit.querySelector('.popup__item_el_name');
export const jobInput = popupProfileEdit.querySelector('.popup__item_el_job');
export const nameProfile = document.querySelector('.profile__user-name');
export const jobProfile = document.querySelector('.profile__user-job');
export const avatarProfile = document.querySelector('.profile__avatar_image');
export const popupDeletionConfirm = document.querySelector('.popup_type_deletion-confirm');
export const galleryFormElement = document.forms['gallery'];
export const placeNameInput = popupGalleryAdd.querySelector('.popup__item_el_place');
export const placeLinkInput = popupGalleryAdd.querySelector('.popup__item_el_link');
export const imagePopup = document.querySelector('.image-popup');
export const imagePopupPicture = imagePopup.querySelector('.image-popup__picture');
export const imagePopupNaming = imagePopup.querySelector('.image-popup__naming');
export const popups = document.querySelectorAll('.popup');