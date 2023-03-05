
const formValidation = {
    formSelector: '.popup__form',                          
    inputSelector: '.popup__item',                         
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_inactive',
    inputErrorClass: 'popup__item_type_error',
    errorClass: 'popup__error-message_active'   
}

const form = document.querySelector('.popup__form');         
const formInput = form.querySelector('.popup__item');        

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
const cards = gallery.children;
const editButton = document.querySelector('.profile__edit-button');
const popupProfileEdit = document.querySelector('.popup_type_profile-edit');
const addButton = document.querySelector('.profile__add-button')
const popupGalleryAdd = document.querySelector('.popup_type_gallery-add');
const profileFormElement = document.querySelector('.popup__form_type_profile');
const nameInput = popupProfileEdit.querySelector('.popup__item_el_name');
const jobInput = popupProfileEdit.querySelector('.popup__item_el_job');
const nameProfile = document.querySelector('.profile__user-name');
const jobProfile = document.querySelector('.profile__user-job');
const galleryFormElement = document.querySelector('.popup__form_type_gallery');
const placeNameInput = popupGalleryAdd.querySelector('.popup__item_el_place');
const placeLinkInput = popupGalleryAdd.querySelector('.popup__item_el_link');
const cardImage = document.querySelector('.card__image');
const imagePopup = document.querySelector('.image-popup');
const imagePopupPicture = imagePopup.querySelector('.image-popup__picture');
const imagePopupNaming = imagePopup.querySelector('.image-popup__naming');
const closeButtons = document.querySelectorAll('.close-button');
const popups = document.querySelectorAll('.popup');