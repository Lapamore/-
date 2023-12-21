document.addEventListener("DOMContentLoaded", function () {
    // Пример данных пользователя (замените их на ваши реальные данные)
    const retrievedUser = getUserFromLocalStorage();

    // Заполнение данных пользователя на странице
    document.getElementById("userName").innerText = retrievedUser.name;
    document.getElementById("userSurname").innerText = retrievedUser.surname;
    document.getElementById("userEmail").innerText = retrievedUser.email;
    document.getElementById("userGender").innerText = retrievedUser.gender;
});

function deleteUserFromLocalStorage() {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('userData');
      window.location.href="main.html"
      console.log('Данные пользователя успешно удалены из localStorage.');
    } else {
      console.log('Ваш браузер не поддерживает localStorage.');
    }
  }