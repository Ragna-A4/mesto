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
    gallery,
    editButton,
    popupProfileEdit,
    popupAvatarEdit, 
    popupDeletionConfirm,  
    addButton,
    popupGalleryAdd,
    profileFormElement,
    nameInput,
    jobInput,
    nameProfile,
    jobProfile,
    avatarProfile,
    avatarFormElement,
    avatarEditButton,
    galleryFormElement,
    imagePopup} from '../utils/Constants.js';

// ====================================> Api <==================================================

const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-65',
    headers: {
        authorization: '7c5241b9-77fc-470b-9bc7-1667abece1a2',
        'Content-Type': 'application/json',
    },
})

let userID;

Promise.all([
    api.getProfile(),
    api.getCards(),
])
  .then((result) => {
    profile.setUserInfo({name: result[0].name, about: result[0].about});
    profile.setUserAvatar({avatar: result[0].avatar});
    userID = result[0]._id;

    userGallery.renderItems(result[1]);
  })
    .catch((err) => {
        console.log(err);
    })

// ====================================> заполнение галереи <===================================

    const userGallery = new Section(
        {
         renderer: (card) => {
            userGallery.addItem(addCardElement(card));
         },
        },
        gallery
    )

// ====================================> popup изображений <=================================== 

const cardPopup = new PopupWithImage(imagePopup);

function openImagePopup(name, link) {
    cardPopup.openPopup(name, link);
}

cardPopup.setEventListeners();
// ====================================> форма удаления изображений <==========================

const popupWithConfirmation = new PopupWithConfirmation(popupDeletionConfirm, (cardID, deleteHandler) => {
    popupWithConfirmation.submitLoad(true, "Да");
    api
      .deleteCard(cardID._id)
      .then(() => {
        deleteHandler();
        popupWithConfirmation.closePopup();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupWithConfirmation.submitLoad(false, "Да");
      })
})

popupWithConfirmation.setEventListeners();

function openDeletionConfirm(cardID, deleteHandler) {
    popupWithConfirmation.openPopup(cardID, deleteHandler);
}

// ====================================> форма добавления изображений <========================

function addCardElement(data) {
    const cardElement = new Card({
        data, 
        templateSelector: '#card', 
        openImagePopup: openImagePopup, 
        openDeletionConfirm: openDeletionConfirm, 
        toggleLikeHandler: toggleLikeIcon,
    });
    return cardElement.getCardElement({
        cardID: data._id,
        likesArr: data.likes,
        authorID: data.owner._id,
        userID,
    });
}

function toggleLikeIcon(thisCard, likeHandler) {
    const likeButton = thisCard.querySelector('.card-button__like');
    if (!likeButton.classlist.contains('card-button__like_active')) {
        api
          .addLike(thisCard._id)
          .then((result) => {
            likeHandler(result.likes.length);
          })
          .catch((err) => {
            console.log(err)
          });
    } else {
        api
          .deleteLike(thisCard._id)
          then((result) => {
            likeHandler(result.likes.length);
          })
          .catch((err) => {
            console.log(err)
          });
    }
}

const galleryForm = new PopupWithForm(popupGalleryAdd, (data) => {
    galleryForm.submitLoad(true, "Cоздать");
    api
      .addCard(data)
      .then((data) => {
        userGallery.addItem(addCardElement(data));
        galleryForm.closePopup();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        galleryForm.submitLoad(true, "Cоздать");
      });
})

galleryForm.setEventListeners();

addButton.addEventListener('click', () => {
    galleryForm.openPopup();
    galleryValidation.resetForm();
});

// ====================================> форма редактирования профиля <======================== 

const profile = new UserInfo(
    {name: nameProfile,
     about: jobProfile,
     avatar: avatarProfile
    })

const profileForm = new PopupWithForm(popupProfileEdit, (data) => {
    profileForm.submitLoad(true, "Cохранить");
    api
      .patchProfile(data)
      .then((data) => {
        profile.setUserInfo(data);
        profileForm.closePopup();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        profileForm.submitLoad(false, "Сохранить");
      });
    })

profileForm.setEventListeners();

function openProfileForm({name, about}) {
    nameInput.value = name;
    jobInput.value = about;

    profileForm.openPopup();
}

editButton.addEventListener('click', () => {
        openProfileForm(profile.getUserInfo());
        profileValidation.resetForm();
    })

// ====================================> форма редактирования аватара <======================== 
const avatarEditForm = new PopupWithForm(popupAvatarEdit, (avatar) => {
    avatarEditForm.submitLoad(true, "Сохранить");
    api
      .patchAvatar(avatar)
      .then((avatar) => {
        profile.setUserAvatar(avatar);
        avatarEditForm.closePopup();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        avatarEditForm.submitLoad(false, "Сохранить");
      });
})

avatarEditForm.setEventListeners();

avatarEditButton.addEventListener('click', () => {
    avatarEditForm.openPopup();
    avatarValidation.resetForm();
})

// ====================================> валидация форм <======================================

const profileValidation = new FormValidator(profileFormElement, formValidation);
profileValidation.enableValidation();

const galleryValidation = new FormValidator(galleryFormElement, formValidation);
galleryValidation.enableValidation();

const avatarValidation = new FormValidator(avatarFormElement, formValidation);
avatarValidation.enableValidation();