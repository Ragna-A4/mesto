export default class Card {
    constructor({
        data, 
        templateSelector, 
        openPicture, 
        openConfirmation, 
        toggleLikeHandler
    }) {
        this._placeName = data.name;
        this._placeLink = data.link;
        this._templateSelector = templateSelector;
        this._openPicture = openPicture;  
        this._openConfirmation = openConfirmation;
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
    _handleDeleteCard = () => {
        this._element.remove();
        this._element = null;
    }

//функция "лайков" карточкам
    _handleLikeCard = (count) => {
        this._setLikesCounter(count);
        this._likeButton.classList.toggle('card-button__like_active');
    }

    _setLikesCounter(count) {
        this._element.querySelector('.card__like-counter').textContent = count;
    }

//добавляем слушателй элементов карточки
    _setEventListeners () {
        this._deleteButton.addEventListener('click', () => {
            this._openConfirmation(this._element, this._handleDeleteCard);
        });

        this._likeButton.addEventListener('click', () => {
            this._toggleLikeHandler(this._element, this._handleLikeCard);
        });
        this._image.addEventListener('click', () => {
            this._openPicture(this._placeName, this._placeLink);
        });
    }

    getCardElement({ cardID, likesArr, authorID, userID}) {

        this._element = this._getTamplate();
        this._image = this._element.querySelector('.card__image');
        this._title = this._element.querySelector('.card__naming');
        this._likeButton = this._element.querySelector('.card-button__like');
        this._deleteButton = this._element.querySelector('.card-button__trash');

        this._setEventListeners();
        this._setLikesCounter(likesArr.length);

        if (userID !== authorID) {
            this._deleteButton.remove();
            this._deleteButton = null;
        }

        if (likesArr.find((user) => user._id === userID)) {
            this._likeButton.classList.add('card-button__like_active');
        }

        this._image.src = this._placeLink;
        this._image.alt = this._placeName;
        this._title.textContent = this._placeName;

        this._element.id = cardID;

        return this._element;
    }
}