export default class Card {
    constructor(data, templateSelector, openImagePopup, openDeletionConfirm, toggleLikeHandler) {
        this._placeName = data.name;
        this._placeLink = data.link;
        this._templateSelector = templateSelector;
        this._openImagePopup = openImagePopup;
        this._openDeletionConfirm = openDeletionConfirm;
        this._toggleLikeHandler = toggleLikeHandler;
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
        this._element = null;
    }

//функция "лайков" карточкам
    _handleLikeCard() {
        this._setLikesCounter(count);
        this._likeButton.classList.toggle('card-button__like_active');
    }

    _setLikesCounter(count) {
        this._element.querySelector('.card__like-counter').textContent = count;
    }

//добавляем слушателй элементов карточки
    _setEventListeners () {
        this._deleteButton.addEventListener('click', () => {
            this._openDeletionConfirm(this._element, this._handleDeleteCard);
        });

        this._likeButton.addEventListener('click', () => {
            this._toggleLikeHandler(this._element, this._handleLikeCard);
        });
        this._image.addEventListener('click', () => {
            this._openImagePopup(this._placeName, this._placeLink);
        });
    }

    getCardElement({ cardID, likesArr, authorID, userID}) {
        this._element = this._getTamplate();
        this._image = this._element.querySelector('.card__image');
        this._title = this._element.querySelector('.card__naming');
        this._likeButton = this._element.querySelector('.card-button__like');
        this._deleteButton = this._element.querySelector('.card-button__trash');

        this._image.src = this._placeLink;
        this._image.alt = this._placeName;
        this._title.textContent = this._placeName;

        this._element.id = cardID;

        if (userID !== authorID) {
            this._deleteButton.remove();
            this._deleteButton = null;
        }

        if (likesArr.find((user) => user._id === userID)) {
            this._likeButton.classList.add('card-button__like_active');
        }

        this._setEventListeners();
        this._setLikesCounter(likesArr.length);

        return this._element;
    }
}
