const textElement = document.getElementById("dynamic-text");
const words = ["Freelancer", "Front-End", "Developer"]; // Array com os textos que você deseja exibir

let currentIndex = 0; // Índice do texto atual
let charIndex = 0; // Índice do caractere atual
let isDeleting = false; // Se está apagando ou não

function updateText() {
    let currentWord = words[currentIndex]; // Palavra atual
    let currentDisplayText = currentWord.substring(0, charIndex); // Texto atualmente exibido

    if (isDeleting) {
        // Se estiver apagando, diminua o índice do caractere
        charIndex--;
    } else {
        // Se não estiver apagando, aumente o índice do caractere
        charIndex++;
    }

    if (charIndex === currentWord.length) {
        // Se todos os caracteres da palavra atual foram exibidos, comece a apagar
        isDeleting = true;
    } else if (charIndex === 0) {
        // Se todos os caracteres da palavra atual foram apagados, avance para a próxima palavra e comece a adicionar
        isDeleting = false;
        currentIndex = (currentIndex + 1) % words.length;
    }

    textElement.textContent = currentDisplayText; // Atualize o texto exibido

    let timeout = isDeleting ? 200 : 100; // Defina o tempo de espera com base em se está apagando ou não

    setTimeout(updateText, timeout); // Chame a função após o tempo de espera
}

// Chame a função inicialmente para começar o efeito
updateText();


