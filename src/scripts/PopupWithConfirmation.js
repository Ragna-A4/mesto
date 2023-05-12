import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
    constructor(popup, handleSubmit) {
        super(popup);
        this._handleSubmit = handleSubmit;
        this._form = this._popup.querySelector('.popup__form');
    }

    openPopup = (trashElement, deleteHandler) => {
        this._trashElement = trashElement;
        this._deleteHandler = deleteHandler;
        
        super.openPopup();
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit(this._trashElement, this._deleteHandler);
        });
    }
}