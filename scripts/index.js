
//функция закрытия попапа при нажатии на "esc"
const closePopupcEscClick = (e)  => {
    if (e.key === "Escape") {
        const thisPopup = document.querySelector('.popup_opened');
        closePopup(thisPopup);
    };
}

//функция открытия попапа
const openPopup = (popup) => {
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
const handleEditButtonClick = () => {
    openPopup(popupProfileEdit);
    const submitButton = popupProfileEdit.querySelector(formValidation.submitButtonSelector);
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
    hideError(nameInput, formValidation);
    hideError(jobInput, formValidation);
}

//функция редактирования данных профиля из формы
const handleProfileFormSubmit = () => {
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closePopup(popupProfileEdit);
}

//кнопки управления формой редактирования данных профиля
editButton.addEventListener('click', handleEditButtonClick);
profileFormElement.addEventListener('submit', handleProfileFormSubmit);

//функция открытия формы добавления карточек в галерею
const handleAddButtonClick = () => {
    openPopup(popupGalleryAdd);
}

//кнопки управления формой добавления карточек в галерею
addButton.addEventListener('click', handleAddButtonClick);
galleryFormElement.addEventListener('submit', (evt) => {
    renderCard(gallery, placeNameInput.value, placeLinkInput.value);
    evt.target.reset();
    closePopup(popupGalleryAdd);
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
    openPopup(imagePopup);
}

//функция обработки шаблона при добавлении карточки в галерею
const getCardElement = (placeName, placeLink) => {
    const newCardElement = cardTemplate.content.cloneNode(true);
    const newCardImage = newCardElement.querySelector('.card__image');
    newCardImage.src = placeLink;
    newCardImage.alt = placeName;
    const newCardNaming = newCardElement.querySelector('.card__naming');
    newCardNaming.textContent = placeName;
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
    if (evt.target.matches('.card-button__trash')) {
        handleDeleteCard(evt);
    } else if (evt.target.matches('.card-button__like')) {
        handleLikeCard(evt);
    } else if (evt.target.matches('.card__image')) {
        handleImageClick(evt);
    } 
});

enableValidation(formValidation);