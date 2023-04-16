

import Card from './card.js';
import Section from './section.js';
import UserInfo from './userinfo.js';
import PopupWithImage from './popupwithimage.js';
import PopupWithForm from './popupwithform.js';
import FormValidator from './formvalidator.js';
import { 
    formValidation,
    initialCards,
    gallery,
    editButton,
    popupProfileEdit,   
    addButton,
    popupGalleryAdd,
    profileFormElement,
    nameInput,
    jobInput,
    nameProfile,
    jobProfile,
    galleryFormElement,
    imagePopup} from './constants.js';
// ====================================> заполнение галереи <===================================

const userGallery = new Section(
    {items: initialCards,
     renderer: (item) => {
        userGallery.addItem(getCardElement(item));
     },
    },
    gallery
) 

userGallery.renderItems();

// ====================================> popup изображений <=================================== 

const cardPopup = new PopupWithImage(imagePopup);

function openImagePopup(name, link) {
    cardPopup.openPopup(name, link);
}

cardPopup.setEventListeners();

// ====================================> форма добавления изображений <========================

function addCardElement(data) {
    const cardElement = new Card(data, '#card', openImagePopup);
          cardElement.getCardElement();
    return userGallery.addItem(cardElement);
}

const galleryForm = new PopupWithForm(popupGalleryAdd, (data) => {
    addCardElement({name: data.name, link: data.link});
    galleryForm.closePopup();
    galleryValidation.resetForm();
})

galleryForm.setEventListeners();

addButton.addEventListener('click', () => {
    galleryForm.openPopup();
});

// ====================================> форма редактирования профиля <======================== 

const profile = new UserInfo(
    {nameSelector: nameProfile,
     jobSelector: jobProfile
    })

const profileForm = new PopupWithForm(popupProfileEdit, (data) => {
    profile.setUserInfo(data);
    profileForm.closePopup();
    })

profileForm.setEventListeners();

editButton.addEventListener('click', () => {
        profileForm.openPopup();
        nameInput.value = profile.getUserInfo.name;
        jobInput.value = profile.getUserInfo.job;
    })

// ====================================> валидация форм <======================================

const profileValidation = new FormValidator(profileFormElement, formValidation);
profileValidation.enableValidation();

const galleryValidation = new FormValidator(galleryFormElement, formValidation);
galleryValidation.enableValidation();