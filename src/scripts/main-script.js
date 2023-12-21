  // JavaScript to make the current page highlighted in the navbar
  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function() {
      document.querySelector('.navbar a.current').classList.remove('current');
      this.classList.add('current');
    });
  });

const quotes = [
    "Не трать еще один год на то же самое",
    "Любая трудность на вашем пути - это возможность чему-то научиться и стать лучше.",
    "Мечты не работают, пока не работаешь ТЫ.",
    "Вот тебе чувство причина любого искусства",
    "Сейчас не начнешь через год пожалеешь",
    "Трудись тихо. Пусть успех будет шумом.",
    "Все, что тебе нужно - верить в себя",
    "Сделай шаг, и дорога появится сама собой",
    "«Потом» - утешительная форма «никогда»",
    "Действуй так, будто неудача невозможна",
    "Твои карты лягут так, как ты их положишь",
    "У тебя есть все, чтобы стать номером один",
    "Ты никогда не будешь достаточно готов, начни сейчас",
    "Если хочешь быть лучше, ты должен делать то, что у других нет желания делать"
];
  
let currentQuoteIndex = 0;
const quoteTextElement = document.getElementById('quoteText');

function changeQuote() {
quoteTextElement.style.opacity = 0; // Hide the quote

setTimeout(() => {
    quoteTextElement.innerText = quotes[currentQuoteIndex];
    quoteTextElement.style.opacity = 1; // Fade in the new quote
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
}, 2000); // Wait for the fade out before changing the text

setTimeout(changeQuote, 6000); // Change quote every 6 seconds
}

window.onload = changeQuote;

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

function check_registration () {
  if (getUserFromLocalStorage()) {
    changeLinkDirection('area.html')
    window.location.href = 'area.html';
  } else {
    changeLinkDirection('form.html')
    window.location.href = 'form.html';
  }
}