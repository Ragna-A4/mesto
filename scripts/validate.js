
//добавляем класс с выделением ошибки в поле ввода
const showError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-err`);
    inputElement.classList.add(formValidation.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(formValidation.errorClass);
}

//убираем класс с выделением ошибки в поле ввода
const hideError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-err`);
    inputElement.classList.remove(formValidation.inputErrorClass);
    errorElement.classList.remove(formValidation.errorClass);
    errorElement.textContent = '';
}

//функция проверки полей на валидность данных
const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideError(formElement, inputElement);
    }
};

  //встречается ли хотябы 1 поле, не прошедшее валидацию
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

// функция отключения кнопки
const disableButton = (buttonElement) => {
  buttonElement.classList.add(formValidation.inactiveButtonClass);
  buttonElement.setAttribute('disabled', true);
  buttonElement.classList.remove('buttons-hover', 'buttons-hover_type_save');
}

//функция включения кнопки
const enableButton = (buttonElement) => {
  buttonElement.classList.remove(formValidation.inactiveButtonClass);
  buttonElement.removeAttribute('disabled');
  buttonElement.classList.add('buttons-hover', 'buttons-hover_type_save');
}

//управляем состоянием кнопки сабмит
const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      disableButton(buttonElement);
    } else {
      enableButton(buttonElement);
    }
  };

//проверка всех полей формы на валидность
const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(formValidation.inputSelector));
    const buttonElement = formElement.querySelector(formValidation.submitButtonSelector);
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function() {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
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
formInput.addEventListener('input', () => {
    checkInputValidity(form, formInput);
});

//проверка формы на валидность
const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(formValidation.formSelector));
     formList.forEach((formElement) => {
       formElement.addEventListener('submit', (evt) => {
       evt.preventDefault();
       });
      setEventListeners(formElement);
  }); 
  };