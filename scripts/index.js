
import Card from './card.js';
import Section from './section.js';
import UserInfo from './userinfo.js';
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
    placeNameInput,
    placeLinkInput,
    popups } from './constants.js';

//функция создания карточки
const addCardElement = (data) => {
    const cardElement = new Card(data, '#card');
    return cardElement.getCardElement();
}

//создаем галерею из нового класса секция
const userGallery = new Section(
    {items: initialCards,
     renderer: (card) => {
        userGallery.addItem(addCardElement(card));
     },
    },
    gallery
) 

userGallery.renderItems();

const profile = new UserInfo(
    {nameSelector: nameProfile,
     jobSelector: jobProfile
    })

//функция закрытия попапа при нажатии на "esc"
const closePopupcEscClick = (e)  => {
    if (e.key === "Escape") {
        const thisPopup = document.querySelector('.popup_opened');
        closePopup(thisPopup);
    };
}

//функция открытия попапа
export const openPopup = (popup) => {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupcEscClick);
}

//функция закрытия попапа
const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupcEscClick);
}

//закрытие попапа через "х" и оверлэй
popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if(evt.target.classList.contains('popup_opened')) {
            closePopup(popup);
        }
        if(evt.target.classList.contains('close-button')) {
            closePopup(popup);
        }
    });
})

//функция открытия формы редактирования профиля
//инпуты формы заполнены текущими данными профиля
const handleEditButtonClick = ({name, job}) => {
    openPopup(popupProfileEdit);
    nameInput.value = name;
    jobInput.value = job;
}

//функция редактирования данных профиля из формы
const handleProfileFormSubmit = (evt) => {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closePopup(popupProfileEdit);
}

//кнопки управления формой редактирования данных профиля
editButton.addEventListener('click', () => {
    handleEditButtonClick(profile.getUserInfo);
    profileValidation.resetForm();
})

profileFormElement.addEventListener('submit', handleProfileFormSubmit);

//функция открытия формы добавления карточек в галерею
const handleAddButtonClick = () => {
    openPopup(popupGalleryAdd);
}

//кнопки управления формой добавления карточек в галерею
addButton.addEventListener('click', () => {
    handleAddButtonClick();
    galleryValidation.resetForm();
})


galleryFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const newCard = {
        name: placeNameInput.value,
        link: placeLinkInput.value
    };
    renderCard(gallery, addCardElement(newCard));
    evt.target.reset();
    closePopup(popupGalleryAdd);
});

const profileValidation = new FormValidator(profileFormElement, formValidation);
profileValidation.enableValidation();

const galleryValidation = new FormValidator(galleryFormElement, formValidation);
galleryValidation.enableValidation();