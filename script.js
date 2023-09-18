// Gerar um número aleatório entre 1 e 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Inicializar contador de tentativas e vidas
let attempts = 0;
let lives = 5; // Defina o número inicial de vidas aqui
const maxAttempts = 5;

// Array para armazenar tentativas anteriores
const previousAttempts = [];

// Função para verificar adivinhação
function checkGuess() {
    const guess = parseInt(document.getElementById('guess').value);
    const message = document.getElementById('message');
    const attemptsMessage = document.getElementById('attempts');
    const livesMessage = document.getElementById('lives');

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = 'Por favor, digite um número válido entre 1 e 100.';
    } else {
        attempts++;
        lives--;

        previousAttempts.push(guess);

        if (guess === randomNumber) {
            message.textContent = `Parabéns! Você acertou em ${attempts} tentativas.`;
            document.getElementById('check').setAttribute('disabled', 'true');
            document.getElementById('restart').style.display = 'block';
        } else if (guess < randomNumber) {
            message.textContent = 'Tente um número maior.';
        } else {
            message.textContent = 'Tente um número menor.';
        }

        if (attempts === maxAttempts || lives === 0) {
            if (lives === 0) {
                message.textContent = `Você perdeu! Suas vidas acabaram. O número correto era ${randomNumber}.`;
            } else {
                message.textContent = `Você usou todas as suas ${maxAttempts} tentativas. O número correto era ${randomNumber}.`;
            }
            
            document.getElementById('check').setAttribute('disabled', 'true');
            document.getElementById('restart').style.display = 'block';
        }
        
        attemptsMessage.textContent = `Tentativas restantes: ${maxAttempts - attempts}`;
        livesMessage.textContent = `Vidas restantes: ${lives}`;
        displayPreviousAttempts();
    }
}

// Função para reiniciar o jogo
function restartGame() {
    document.getElementById('check').removeAttribute('disabled');
    document.getElementById('restart').style.display = 'none';
    document.getElementById('guess').value = '';
    attempts = 0;
    lives = 5; // Defina o número inicial de vidas aqui
    previousAttempts.length = 0;
    document.getElementById('message').textContent = '';
    document.getElementById('attempts').textContent = `Tentativas restantes: ${maxAttempts}`;
    document.getElementById('lives').textContent = `Vidas restantes: ${lives}`;
    displayPreviousAttempts();
}

// Inserir elemento para exibir vidas
const livesElement = document.createElement('p');
livesElement.id = 'lives';
livesElement.textContent = `Vidas restantes: ${lives}`;
document.body.appendChild(livesElement);

// Função para exibir tentativas anteriores
function displayPreviousAttempts() {
    const previousAttemptsList = document.getElementById('previous-attempts');
    previousAttemptsList.innerHTML = '';

    for (let i = 0; i < previousAttempts.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `Tentativa ${i + 1}: ${previousAttempts[i]}`;
        previousAttemptsList.appendChild(listItem);
    }
}

document.getElementById('check').addEventListener('click', checkGuess);
document
