
//функция создания карточки
function addCardElement(data) {
    const cardElement = new Card(data, '#card');
    return cardElement.getCardElement();
}

//функция добавления карточки в начало галереи
function renderCard(warp, cardElement) {
    warp.prepend(cardElement);
}

//заполнение галереи данными из массива
initialCards.forEach((element) => {
    renderCard(gallery,addCardElement(element));
});


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
    const newCard = {
        name: placeNameInput.value,
        link: placeLinkInput.value
    };
    renderCard(gallery, addCardElement(newCard));
    evt.target.reset();
    closePopup(popupGalleryAdd);
});

enableValidation(formValidation);