let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
//  armazena um número inteiro aleatório entre 1 e 100.
let tentativas = 5;
// Isso significa que o jogador terá 5 tentativas para adivinhar o número aleatório.

function verificarPalpite() {
    const palpite = document.getElementById('palpite').valueAsNumber;
    const resultado = document.getElementById('resultado');
    // Isso obtém o valor que o usuário inseriu em um campo de entrada de texto com o ID 'palpite' e o converte em um número.

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        alert("O número inserido deve ser entre 1 e 100!");
        return;
    }
    // verifica se o palpite do usuário é um número válido entre 1 e 100.

    tentativas--;

    if (palpite === numeroAleatorio) {
        resultado.innerHTML = "<span>Parabéns! Você acertou!</span>";
        resultado.classList.add("vitoria");
        document.getElementById('adivinhar').disabled = true;
        // Se o palpite do usuário for igual ao número aleatório, isso significa que o jogador acertou. 


    } else if (tentativas === 0) {
        resultado.innerHTML = "<span>Você perdeu! O número era " + numeroAleatorio + "</span>";
        resultado.classList.add("derrota");
        document.getElementById('adivinhar').disabled = true;
        // Se o jogador ficar sem tentativas (tentativas igual a 0), uma mensagem informando que o jogador perdeu é exibida, juntamente com o número correto


    } else if (palpite > numeroAleatorio) {
        resultado.innerHTML = "<span>O número é menor! Tentativas restantes: " + tentativas + "</span>";
    } else {
        resultado.innerHTML = "<span>O número é maior! Tentativas restantes: " + tentativas + "</span>";
    }


    // Se o palpite do jogador estiver errado, esta parte do código informará se o número correto é maior ou menor que o palpite e mostrará o número de tentativas restantes.
}