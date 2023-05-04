import './index.css'

import Card from '../scripts/Card.js';
import Section from '../scripts/Section.js';
import UserInfo from '../scripts/UserInfo.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import PopupWithConfirmation from '../scripts/PopupWithConfirmation.js';
import FormValidator from '../scripts/FormValidator.js';
import Api from '../scripts/Api.js';
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
    imagePopup} from '../utils/Constants.js';

// ====================================> Api <==================================================

const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-65/',
    headers: {
        authorization: '7c5241b9-77fc-470b-9bc7-1667abece1a2',
        'Content-Type': 'application/json',
    },
})

// ====================================> заполнение галереи <===================================

    const userGallery = new Section(
        {items: initialCards,
         renderer: (card) => {
            userGallery.addItem(addCardElement(card));
         },
        },
        gallery
    );

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
    galleryValidation.resetForm();
});

// ====================================> форма редактирования профиля <======================== 

const profile = new UserInfo(
    {name: nameProfile,
     job: jobProfile
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