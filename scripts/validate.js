// выносим настройки валидации по ТЗ в отдельный объект

const formValidationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_inactive',
    inputErrorClass: 'popup__item_type_error',
    errorClass: 'popup__error-message_active'   
}

const disableSubmit = (evt) => {
    evt.preventDefault();
}

const enableValidation = (config) => {
    const form = document.querySelector(config.formSelector);

    form.addEventListener('submit', disableSubmit);
    form.addEventListener('input', ( ) => {
        toggleButton(form, config);
    });

    setEventListneres(form, config);
    toggleButton(form, config);
}

const handleFormInput = (evt, config) => {
    const input = evt.target;
    const inputId = input.id;
    const errorMessage = document.querySelector(`#${inputId}-err`);

    if (input.validity.valid) {
       input.classList.remove(config.inputErrorClass);
       errorMessage.textContent = '';
    } else {
        input.classList.add(config.inputErrorClass);
        errorMessage.textContent = input.validationMessage;
    }
}

const toggleButton = (form, config) => {
    const submitButton = form.querySelector(config.submitButtonSelector);
    const isFormValid = form.checkValidity();

    submitButton.disabled = !isFormValid;
    submitButton.classList.toogle('popup__save-button_inactive', !isFormValid);
}

const setEventListneres = (form, config) => {
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));
    inputList.forEach = ((element) => {
        element.addEventListener('input', (evt) => {
            handleFormInput(evt, config);
        });
    });
}

enableValidation(formValidationConfig);