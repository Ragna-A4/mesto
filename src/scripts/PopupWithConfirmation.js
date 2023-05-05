import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
    constructor(popup, handleSubmit) {
        super(popup);
        this._handleSubmit = handleSubmit;
    }

    openPopup = (cardId, deleteHandler) => {
        this._cardId = cardId;
        this._deleteHandler = deleteHandler;
        
        super.openPopup();
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit(this._cardId, this._deleteHandler);
        });
    }
}