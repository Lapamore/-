function changeLinkDirection(newHref) {
    // Получаем элемент ссылки по идентификатору
    const linkElement = document.getElementById('area');
  
    // Проверяем, что элемент найден
    if (linkElement) {
      // Изменяем направление ссылки (атрибут href)
      linkElement.href = newHref;
      console.log(newHref);
    } else {
      console.error('Элемент ссылки не найден.');
    }
  }

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

// function checkAge() {
//     var age = document.getElementById("age").value;
//     var ageErrorMessage = document.getElementById("ageErrorMessage");


//     if (parseInt(age) < 0) {
//         displayValidationError("ageError", "Используйте только положительные числа.");
//     }
// }

// function updateAgeValue() {
//     var ageRangeValue = document.getElementById("ageRange").value;
//     document.getElementById("age").value = ageRangeValue;
// }
  
// function updateRangeValue() {
//     var ageValue = document.getElementById("age").value;
//     document.getElementById("ageRange").value = ageValue;
// }

function register() {
    var c=0;
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;


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
        c++;
    }

    if (name.trim() === "") {
        displayValidationError("nameError", "Не введено имя.");
        c++;
    } else if (!/^[a-zA-Zа-яА-ЯёЁ]+$/.test(name.trim())) {
        displayValidationError("nameError", "Некорректное имя. Используйте только буквы.");
        c++;
    }

    if (surname.trim() === "") {
        displayValidationError("surnameError", "Не введена фамилия.");
        c++;
    } else if (!/^[a-zA-Zа-яА-ЯёЁ]+$/.test(surname.trim())) {
        displayValidationError("surnameError", "Некорректная фамилия. Используйте только буквы.");
        c++;
    }

    if (password.trim() === "") {
        displayValidationError("passwordError", "Не введен пароль.");
        c++;
    } else if (password.trim().length < 8) {
        displayValidationError("passwordError", "Пароль должен содержать не менее 8 символов.");
        c++;
    }

    if (password !== confirmPassword) {
        displayValidationError("confirmPasswordError","Пароли не совпадают");
        c++;
    }

    if (email.trim() === "") {
        displayValidationError("emailError", "Не введена почта.");
        c++;
    } else if (!isValidEmail(email.trim())) {
        displayValidationError("emailError", "Некорректный формат email.");
        c++;
    } 

    // if (age.trim() === "") {
    //     displayValidationError("ageError", "Не введен возраст.");
    //     c++;
    // } else if (!/^\d+$/.test(age.trim())) {
    //     displayValidationError("ageError", "Некорректный возраст.");
    //     c++;
    // }

    if (!gender) {
        displayValidationError("genderError", "Не выбран пол.");
        c++;
    }

    // Проверка на соответствие паролей
    if (password !== confirmPassword) {
        displayValidationError("confirmPasswordError", "Пароли не совпадают.");
        c++;   
    }

    if (c > 0) {
        return;
    } 
    saveUserToLocalStorage(name,surname,email,gender,password);

    var retrievedUser=getUserFromLocalStorage;

    if (retrievedUser) {
        console.log('Данные о пользователе:', retrievedUser);
    } else {
        console.log('Данных о пользователе нет в Local Storage');
    }
    
    window.location.href = 'area.html';
    // window.location.href = 'area.html'; 
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


// Сохранение данных о пользователе в Local Storage
function saveUserToLocalStorage(name,surname,email,gender) {
    const userData = { name,surname,email,gender};
    const userDataString = JSON.stringify(userData);
    localStorage.setItem('userData', userDataString);
  }
  
  // Получение данных о пользователе из Local Storage
  function getUserFromLocalStorage() {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      return userData;
    }
    return null;
}
