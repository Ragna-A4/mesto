class Card {
    constructor(data, templateSelector) {
        this._placeName = data.name;
        this._placeLink = data.link;
        this._templateSelector = templateSelector;
    }

    _getTamplate() {
        const cardElement = document
          .querySelector(this._templateSelector)
          .content
          .querySelector('.card')
          .cloneNode(true);

        return cardElement;    
    }

//функция удаления карточки
    _handleDeleteCard() {
        this._element.remove();
    }

//функция "лайков" карточкам
    _handleLikeCard() {
        this._likeButton.classList.toggle('card-button__like_active');
    }

//функция открытия зум-а изображения на карточке
    _handleImageClick () {
        imagePopupPicture.src = this._image.src;
        imagePopupPicture.alt = this._image.alt;
        imagePopupNaming.textContent = this._title.textContent;
        openPopup(imagePopup);
    }

    //добавляем слушателй элементов карточки
    _setEventListeners () {
        this._deleteButton.addEventListener('click', () => {
            this._handleDeleteCard();
        });

        this._likeButton.addEventListener('click', () => {
            this._handleLikeCard();
        });
        this._image.addEventListener('click', () => {
            this._handleImageClick();
        });
    }

    getCardElement() {
        this._element = this._getTamplate();
        this._image = this._element.querySelector('.card__image');
        this._title = this._element.querySelector('.card__naming');
        this._likeButton = this._element.querySelector('.card-button__like');
        this._deleteButton = this._element.querySelector('.card-button__trash');

        this._image.src = this._placeLink;
        this._image.alt = this._placeName;
        this._title.textContent = this._placeName;

        this._setEventListeners();

        return this._element;
    }
}

