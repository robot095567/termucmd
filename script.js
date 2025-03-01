const button = document.getElementById('myButton');

button.addEventListener('click', function() {
    
    window.location.href = 'commands.html';
});

const aboutButton = document.getElementById('About');

// Добавляем обработчик события "клик"
aboutButton.addEventListener('click', function() {
    // Перенаправляем пользователя на about.html
    window.location.href = 'About.html';
});