let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 5;

function verificarPalpite() {
    const palpite = document.getElementById('palpite').valueAsNumber;
    const resultado = document.getElementById('resultado');

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        alert("O número inserido deve ser entre 1 e 100!");
        return;
    }

    tentativas--;

    if (palpite === numeroAleatorio) {
        resultado.innerHTML = "<span>Parabéns Irmão! Você acertou!</span>";
        resultado.classList.add("vitoria");
        document.getElementById('adivinhar').disabled = true;
    } else if (tentativas === 0) {
        resultado.innerHTML = "<span>Você perdeu amigo! O número era " + numeroAleatorio + "</span>";
        resultado.classList.add("derrota");
        document.getElementById('adivinhar').disabled = true;
    } else if (palpite > numeroAleatorio) {
        resultado.innerHTML = "<span>O número é menor! Tentativas restantes: " + tentativas + "</span>";
    } else {
        resultado.innerHTML = "<span>O número é maior! Tentativas restantes: " + tentativas + "</span>";
    }
}