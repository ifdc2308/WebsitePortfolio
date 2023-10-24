//function effect delete and add text about

const textElement = document.getElementById("dynamic-text");
const words = ["Freelancer", "Front-End", "Developer"]; // Array com os textos que você deseja exibir

let currentIndex = 0; // Índice do texto atual

function updateText() {
    textElement.textContent = words[currentIndex]; // Define o texto com base no índice atual
    currentIndex = (currentIndex + 1) % words.length; // Avança para o próximo texto
}

// Atualiza o texto a cada 2 segundos (2000 milissegundos)
setInterval(updateText, 2000);

// Chame a função inicialmente para exibir o primeiro texto
updateText();

