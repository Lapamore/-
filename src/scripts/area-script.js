document.addEventListener("DOMContentLoaded", function () {
    // Пример данных пользователя (замените их на ваши реальные данные)
    const retrievedUser = getUserFromLocalStorage();

    // Заполнение данных пользователя на странице
    document.getElementById("userName").innerText = retrievedUser.name;
    document.getElementById("userSurname").innerText = retrievedUser.surname;
    document.getElementById("userAge").innerText = retrievedUser.age;
    document.getElementById("userEmail").innerText = retrievedUser.email;
    document.getElementById("userGender").innerText = retrievedUser.gender;
});