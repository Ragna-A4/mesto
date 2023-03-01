// выносим настройки валидации по ТЗ в отдельный объект

const formValidationConfig = {
    formSelector: '.popup__form',                          //formElement - form
    inputSelector: '.popup__item',                         //formInput 
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_inactive',
    inputErrorClass: 'popup__item_type_error',
    errorClass: 'popup__error-message_active'   
}

const form = document.querySelector('.popup__form');         //formElement - form
const formInput = form.querySelector('.popup__item');        //formInput
const formError = document.querySelector(`#${formInput.id}-err`); //сообщение об ошибке

//добавляем класс с выделением ошибки в поле ввода
const showError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-err`);
    inputElement.classList.add('popup__item_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__error-message_active');
}

//убираем класс с выделением ошибки в поле ввода
const hideError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-err`);
    inputElement.classList.remove('popup__item_type_error');
    errorElement.classList.remove('popup__error-message_active');
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

//управляем состоянием кнопки сабмит
const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add('popup__save-button_inactive');
      buttonElement.setAttribute('disabled', true);
      buttonElement.classList.remove('buttons-hover', 'buttons-hover_type_save');
    } else {
      buttonElement.classList.remove('popup__save-button_inactive');
      buttonElement.removeAttribute('disabled');
      buttonElement.classList.add('buttons-hover', 'buttons-hover_type_save');
    }
  };

//проверка всех полей формы на валидность
const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__item'));
    const buttonElement = formElement.querySelector('.popup__save-button');
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
    const formList = Array.from(document.querySelectorAll('.popup__form'));
     formList.forEach((formElement) => {
       formElement.addEventListener('submit', (evt) => {
       evt.preventDefault();
       });
      setEventListeners(formElement);
  }); 
  };
  
  enableValidation();

//const enableValidation = (config) => {
//    const form = document.querySelector(config.formSelector);
//    form.addEventListener('submit', disableSubmit);
//    form.addEventListener('input', ( ) => {
//        toggleButton(form, config);
//   });
//
//    setEventListneres(form, config);
//    toggleButton(form, config);
//}

//const handleFormInput = (evt, config) => {
//    const input = evt.target;
//    const inputId = input.id;
//    const errorMessage = document.querySelector(`#${inputId}-err`);
//
//    if (input.validity.valid) {
//       input.classList.remove(config.inputErrorClass);
//       errorMessage.textContent = '';
//   } else {
//        input.classList.add(config.inputErrorClass);
//        errorMessage.textContent = input.validationMessage;
//    }
//}

//const toggleButton = (form, config) => {
//    const submitButton = form.querySelector(config.submitButtonSelector);
//    const isFormValid = form.checkValidity();
//
//    submitButton.disabled = !isFormValid;
//    submitButton.classList.toogle('popup__save-button_inactive', !isFormValid);
//}

//const setEventListneres = (form, config) => {
//    const inputList = Array.from(form.querySelectorAll(config.inputSelector));
//    inputList.forEach = ((element) => {
//        element.addEventListener('input', (evt) => {
//            handleFormInput(evt, config);
//        });
//    });
//}

//enableValidation(formValidationConfig);