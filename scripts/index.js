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
const cardImage = document.querySelector('.card__image');
const imagePopup = document.querySelector('.image-popup');
const imagePopupPicture = imagePopup.querySelector('.image-popup__picture');
const imagePopupNaming = imagePopup.querySelector('.image-popup__naming');
const closeImagePopupButton = imagePopup.querySelector('.popup__close-button_form_image');    

//функция открытия формы редактирования профиля
//инпуты формы заполнены текущими данными профиля
const handleEditButtonClick = () => {
    popupProfileEdit.classList.add('popup_opened');
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}

//функция закрытия формы редактирования профиля
const closeProfilePopup =() => {
    popupProfileEdit.classList.remove('popup_opened');
}

//функция закрытия формы редактирования профиля по кнопке ('х')
const handleProfileCloseButtonClick = () => {
    closeProfilePopup()
}

//функция редактирования данных профиля из формы
const handleProfileFormSubmit = (evt) => {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closeProfilePopup();
}

//кнопки управления формой редактирования данных профиля
editButton.addEventListener('click', handleEditButtonClick);
closeProfileButton.addEventListener('click', handleProfileCloseButtonClick);
profileFormElement.addEventListener('submit', handleProfileFormSubmit);

//функция открытия формы добавления карточек в галерею
const handleAddButtonClick = () => {
    popupGalleryAdd.classList.add('popup_opened')
}

//функция закрытия формы добавления карточек в галерею
const closeGalleryPopup = () => {
    popupGalleryAdd.classList.remove('popup_opened')
}

//функция закрытия формы редактирования профиля по кнопке ('х')
const handleGalleryCloseButtonClick = () => {
    closeGalleryPopup()
}

//кнопки управления формой добавления карточек в галерею
addButton.addEventListener('click', handleAddButtonClick);
closeGalleryButton.addEventListener('click', handleGalleryCloseButtonClick);
//при добавлении новой карточки проверяем, что значения не пустые
//если новая карточка добавлена, удаляем карточку, ставшую 7-ой
//закрываем попап
galleryFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (placeNameInput.value !== '' & placeLinkInput !== '') {
    getCardElement(placeNameInput.value, placeLinkInput.value);
    renderCard(gallery, placeNameInput.value, placeLinkInput.value);
    cards[6].remove();
    }
    placeNameInput.value ='';
    placeLinkInput.value ='';
    closeGalleryPopup();
});

//функция удаления карточки
const handleDeleteCard = (evt) => {
    evt.target.closest('.card').remove();
}

//функция "лайков" карточкам
const handleLikeCard = (evt) => {
    evt.target.classList.toggle('card-button__like_active');
}

//функция открытия зум-а изображения на карточке
const handleImageClick = (evt) => {
    const thisCard = evt.target.closest('.card');
    const thisImage = thisCard.querySelector('.card__image');
    const thisNaming = thisCard.querySelector('.card__naming');
    imagePopupPicture.src = thisImage.src;
    imagePopupPicture.alt = thisImage.alt;
    imagePopupNaming.textContent = thisNaming.textContent;
    imagePopup.classList.add('image-popup_opened');
    console.log(imagePopupNaming.textContent);
}

//функция обработки шаблона при добавлении карточки в галерею
const getCardElement = (placeName, placeLink) => {
    const newCardElement = cardTemplate.content.cloneNode(true);
    const newCardImage = newCardElement.querySelector('.card__image');
    newCardImage.src = placeLink;
    newCardImage.alt = placeName;
    const newCardNaming = newCardElement.querySelector('.card__naming');
    newCardNaming.textContent = placeName;
    const cardButtonTrash = newCardElement.querySelector('.card-button__trash');
    const cardButtonLike = newCardElement.querySelector('.card-button__like');
    return newCardElement;
}

//функция добавления карточки в галерею
const renderCard = (wrap, placeName, placeLink) => {
    wrap.prepend(getCardElement(placeName, placeLink))
}

//функция заполнения галереи данными из массива
initialCards.forEach((element) => {
    renderCard(gallery, element.name, element.link)
})

//вызов событий в зависимости от "места" клика по карточке (попап изображения, лайк или корзина)
gallery.addEventListener('click', (evt) => {
    console.log(evt.target);
    if (evt.target.matches('.card-button__trash')) {
        handleDeleteCard(evt);
    } else if (evt.target.matches('.card-button__like')) {
        handleLikeCard(evt);
    } else if (evt.target.matches('.card__image')) {
        handleImageClick(evt);
    } 
});

//функция закрытия попапа изображения
const closeImagePopup = () => {
    imagePopup.classList.remove('image-popup_opened');
}

//функция закрытия формы попапа изображения по кнопке ('х')
closeImagePopupButton.addEventListener('click', closeImagePopup);
