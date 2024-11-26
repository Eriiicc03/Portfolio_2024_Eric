// script.js
const textElement = document.getElementById('typed-text');
const text = '¡Bienvenido al efecto de texto escrito!'; // Aquí pon el texto que quieras

let index = 0;

function typeText() {
  if (index < text.length) {
    textElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 100); // Ajusta la velocidad (100ms entre cada letra)
  }
}

// Llamar a la función para iniciar el efecto
typeText();
