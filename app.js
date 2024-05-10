// app.js

// Отримуємо всі елементи з класом "color-option"
var colorOptions = document.querySelectorAll('.color-option');

// Додаємо обробник події для кожного елементу з класом "color-option"
colorOptions.forEach(function(option) {
  option.addEventListener('click', function() {
    // Отримуємо колір фону обраного елементу
    var color = option.style.backgroundColor;
    // Викликаємо функцію для зміни фонового кольору
    changeBackgroundColor(color);
  });
});

// Функція для зміни фонового кольору
function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}
