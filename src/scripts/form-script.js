function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var eyeIcon = document.querySelector(".eye-icon");

    // Изменяем тип поля пароля и фоновое изображение глаза в зависимости от состояния
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.add("show-password");
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("show-password");
    }
}

function isValidEmail(email) {
    // Регулярное выражение для проверки формата email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function checkAge() {
    var age = document.getElementById("age").value;
    var ageErrorMessage = document.getElementById("ageErrorMessage");

    // Проверка на отрицательный возраст
    if (parseInt(age) < 0) {
        ageErrorMessage.innerText = "Введите положительное число для возраста";
    } else {
        // Сброс ошибки, если возраст введен корректно
        ageErrorMessage.innerText = "";
    }
}

function updateAgeValue() {
    var ageRangeValue = document.getElementById("ageRange").value;
    document.getElementById("age").value = ageRangeValue;
}
  
function updateRangeValue() {
    var ageValue = document.getElementById("age").value;
    document.getElementById("ageRange").value = ageValue;
}

function register() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;
    var age = document.getElementById("age").value;

    var genderElements = document.getElementsByName("gender");
    var gender;
    for (var i = 0; i < genderElements.length; i++) {
        if (genderElements[i].checked) {
            gender = genderElements[i].value;
            break;
        }
    }

    clearValidationErrors();

    var agreeTermsCheckbox = document.getElementById("agreeTerms");
    if (!agreeTermsCheckbox.checked) {
        displayValidationError("agreeTermsError", "Необходимо согласиться с условиями пользовательского соглашения.");
    } else {
        clearValidationError("agreeTermsError");
    }

    if (name.trim() === "") {
        displayValidationError("nameError", "Не введено имя.");
    } else if (!/^[a-zA-Zа-яА-ЯёЁ]+$/.test(name.trim())) {
        displayValidationError("nameError", "Некорректное имя. Используйте только буквы.");
    }

    if (surname.trim() === "") {
        displayValidationError("surnameError", "Не введена фамилия.");
    } else if (!/^[a-zA-Zа-яА-ЯёЁ]+$/.test(surname.trim())) {
        displayValidationError("surnameError", "Некорректная фамилия. Используйте только буквы.");
    }

    if (password.trim() === "") {
        displayValidationError("passwordError", "Не введен пароль.");
    } else if (password.trim().length < 8) {
        displayValidationError("passwordError", "Пароль должен содержать не менее 8 символов.");
    }

    if (password !== confirmPassword) {
        displayValidationError("confirmPasswordError","Пароли не совпадают")
    }

    if (email.trim() === "") {
        displayValidationError("emailError", "Не введена почта.");
    } else if (!isValidEmail(email.trim())) {
        displayValidationError("emailError", "Некорректный формат email.");
    }

    if (age.trim() === "") {
        displayValidationError("ageError", "Не введен возраст.");
    } else if (!/^\d+$/.test(age.trim())) {
        displayValidationError("ageError", "Некорректный возраст. Используйте только положительные числа.");
    }

    if (!gender) {
        displayValidationError("genderError", "Не выбран пол.");
    }

    // Если есть замечания, не продолжаем регистрацию
    var validationErrors = document.querySelectorAll(".validation-error");
    if (validationErrors.length > 0) {
        return;
    }

    // Проверка на соответствие паролей
    if (password !== confirmPassword) {
        alert("Пароли не совпадают");
        return;
    }
}

function clearValidationErrors() {
    var validationErrorElements = document.querySelectorAll(".validation-error");
    validationErrorElements.forEach(function (element) {
        element.innerText = "";
    });
}

function displayValidationError(elementId, message) {
    var errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
}

function clearValidationError(elementId) {
    var errorElement = document.getElementById(elementId);
    errorElement.innerText = "";
}