import Popup from './popup.js';
import {
    imagePopupPicture,
    imagePopupNaming
} from './constants.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = imagePopupPicture;
        this._title = imagePopupNaming;
    }

    openPopup = (name, link) => {
        this._image.src = link;
        this._image.alt = name;
        this._title.textContent = name;
        super.openPopup();
    }
}