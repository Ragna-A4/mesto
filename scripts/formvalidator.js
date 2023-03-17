class FormValidator {
    constructor(formElement, settings) {
        this._formElement = formElement;
        this._formInput = settings.inputSelector;
        this._inputError = settings.inputErrorClass;
        this._errorMessage = settings.errorClass;
        this._submitButton = settings.submitButtonSelector;
        this._inactiveSubmitButton = settings.inactiveButtonClass;
        this._buttonsHover = settings.buttonsHoverClass;
        this._submitButtonHover = settings.saveButtonHoverClass;  
    }

    //добавляем класс с выделением ошибки в поле ввода
    _showError() {
    const errorElement = this._formElement.querySelector(`#${this._inputElement.id}-err`);
    this._inputElement.classList.add(this._inputError);
    errorElement.textContent = this._inputElement.validationMessage;
    errorElement.classList.add(this._errorMessage);
}

//убираем класс с выделением ошибки в поле ввода
    _hideError() {
    const errorElement = this._formElement.querySelector(`#${this._inputElement.id}-err`);
    this._inputElement.classList.remove(this._inputError);
    errorElement.classList.remove(this._errorMessage);
    errorElement.textContent = '';
}

//функция проверки полей на валидность данных
   _checkInputValidity() {
    if (this._inputElement.validity.valid) {
      this._hideError();
    } else {
      this._showError();
    }
};

// функция отключения кнопки
  _disableButton () {
    this._buttonElement.classList.add(this._inactiveSubmitButton);
    this._buttonElement.setAttribute('disabled', true);
    this._buttonElement.classList.remove(this._buttonsHover, this._submitButtonHover);
  }

//функция включения кнопки
  _enableButton() {
    this._buttonElement.classList.remove(this._inactiveSubmitButton);
    this._buttonElement.removeAttribute('disabled');
    this._buttonElement.classList.add(this._buttonsHover, this._submitButtonHover);
  }

//управляем состоянием кнопки сабмит
  _toggleButtonState() {
    if (!this._formElement.checkValidity()) {
      this._disableButton();
    } else {
      this._enableButton();
    }
  };

//проверка всех полей формы на валидность
  _setEventListeners() {
    this._inputList = this._formElement.querySelectorAll(this._formInput);
    this._buttonElement = this._formElement.querySelector(this._submitButton);

    this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            this._inputElement = inputElement;
            this._checkInputValidity();
            this._toggleButtonState();
        });
    });
  }

//проверка формы на валидность
  enableValidation() {
    this._setEventListeners();
  };

}