import './index.css'

import Card from '../scripts/card.js';
import Section from '../scripts/section.js';
import UserInfo from '../scripts/userinfo.js';
import PopupWithImage from '../scripts/popupwithimage.js';
import PopupWithForm from '../scripts/popupwithform.js';
import FormValidator from '../scripts/formvalidator.js';
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
    imagePopup} from '../scripts/constants.js';
// ====================================> заполнение галереи <===================================

const userGallery = new Section(
    {items: initialCards,
     renderer: (card) => {
        userGallery.addItem(addCardElement(card));
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
    return cardElement.getCardElement();
}

const galleryForm = new PopupWithForm(popupGalleryAdd, ({name, link}) => {
    userGallery.addItem(addCardElement({name, link}));
    galleryForm.closePopup();
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

function openProfileForm({user, job}) {
    nameInput.value = user;
    jobInput.value = job;

    profileForm.openPopup();
}

editButton.addEventListener('click', () => {
        openProfileForm(profile.getUserInfo());
        profileValidation.resetForm();
    })

// ====================================> валидация форм <======================================

const profileValidation = new FormValidator(profileFormElement, formValidation);
profileValidation.enableValidation();

const galleryValidation = new FormValidator(galleryFormElement, formValidation);
galleryValidation.enableValidation();