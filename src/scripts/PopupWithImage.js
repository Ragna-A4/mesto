import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popup) {
        super(popup);
        this._image = this._popup.querySelector('.image-popup__picture');
        this._title = this._popup.querySelector('.image-popup__naming');
    }

    openPopup = (name, link) => {
        this._image.src = link;
        this._image.alt = name;
        this._title.textContent = name;
        super.openPopup();
    }
}
