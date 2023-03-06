
//добавляем класс с выделением ошибки в поле ввода
const showError = (inputElement, errorMessage, settings) => {
    const errorElement = document.querySelector(`#${inputElement.id}-err`);
    inputElement.classList.add(settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(settings.errorClass);
}

//убираем класс с выделением ошибки в поле ввода
const hideError = (inputElement, settings) => {
    const errorElement = document.querySelector(`#${inputElement.id}-err`);
    inputElement.classList.remove(settings.inputErrorClass);
    errorElement.classList.remove(settings.errorClass);
    errorElement.textContent = '';
}

//функция проверки полей на валидность данных
const checkInputValidity = (inputElement, settings) => {
    if (inputElement.validity.valid) {
      hideError(inputElement, settings);
    } else {
      showError(inputElement, inputElement.validationMessage, settings);
    }
};

  //встречается ли хотябы 1 поле, не прошедшее валидацию
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

// функция отключения кнопки
const disableButton = (buttonElement, settings) => {
  buttonElement.classList.add(settings.inactiveButtonClass);
  buttonElement.setAttribute('disabled', true);
  buttonElement.classList.remove('buttons-hover', 'buttons-hover_type_save');
}

//функция включения кнопки
const enableButton = (buttonElement, settings) => {
  buttonElement.classList.remove(settings.inactiveButtonClass);
  buttonElement.removeAttribute('disabled');
  buttonElement.classList.add('buttons-hover', 'buttons-hover_type_save');
}

//управляем состоянием кнопки сабмит
const toggleButtonState = (inputList, buttonElement, settings) => {
    if (hasInvalidInput(inputList)) {
      disableButton(buttonElement, settings);
    } else {
      enableButton(buttonElement, settings);
    }
  };

//проверка всех полей формы на валидность
const setEventListeners = (formElement, settings) => {
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    const buttonElement = formElement.querySelector(settings.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, settings);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(inputElement, settings);
            toggleButtonState(inputList, buttonElement, settings);
        });
    });
}

//отменяем стандартное поведение 
const disableSubmit = (evt) => {
    evt.preventDefault();
}

//вызываем при попытке сохранения данных в форме
form.addEventListener('submit', disableSubmit);

//вызываем проверку полей после завершения ввода
//formInput.addEventListener('input', checkInputValidity);

//проверка формы на валидность
const enableValidation = (settings) => {
    const formList = Array.from(document.querySelectorAll(settings.formSelector));
     formList.forEach((formElement) => {
       formElement.addEventListener('submit', disableSubmit);
      setEventListeners(formElement, settings);
  }); 
  };