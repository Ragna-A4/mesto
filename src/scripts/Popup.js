export default class Popup {
    constructor(popup) {
        this._popup = popup;
    }

    //закрытие попапа при нажатии на "esc"
    _handleEscClose = (e) => {
        if (e.key === "Escape") {
            this.closePopup();
        };
    }

    //открытие попапа
    openPopup() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    //закрытие попапа
    closePopup() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    submitLoad(loading, buttonText) {
        this._buttonText = this._popup.querySelector('.popup__save-button');
        if(loading) {
            this._buttonText.textContent = "Сохранение ..."
        } else {
            this._buttonText.textContent = buttonText;
        }
    }

    setEventListeners() {
        this._popup.addEventListener('mousedown', (evt) => {
            if(evt.target.classList.contains('popup_opened')) {
                this.closePopup();
            }
            if(evt.target.classList.contains('close-button')) {
                this.closePopup();
            }
        });
    }
}
