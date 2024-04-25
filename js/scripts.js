let numeroSecreto = Math.floor(Math.random() * 100) + 1;

let limiteTentativas = 5;
let tentativas = 1;

function playGame() {
    let chute = parseInt(document.getElementById('chute').value);

    tentativas++;

    if (tentativas > limiteTentativas) {
        document.getElementById('title-page').textContent = `Você usou todas as ${limiteTentativas} tentativas...`;
        document.getElementById('feedback').textContent = 'Você perdeu!! Não desanime, você pode iniciar um novo jogo!';
        document.getElementById('feedback').style.color = 'red';
        document.getElementById('chute').disabled = true;
    } else if (chute === numeroSecreto) {
        document.getElementById('title-page').textContent = `Você acertou com ${tentativas} tentativas...`;
        document.getElementById('feedback').textContent = 'Parabéns, você GANHOU!!!';
        document.getElementById('feedback').style.color = 'green';
        document.getElementById('chute').disabled = true;
    } else if (chute < numeroSecreto) {
        document.getElementById('title-page').textContent = `Tentativa ${tentativas}, você ainda tem ${limiteTentativas - tentativas} tentativas.`;
        document.getElementById('feedback').textContent = 'Você errou!!! o número secreto é maior';
    } else {
        document.getElementById('title-page').textContent = `Tentativa ${tentativas}, você ainda tem ${limiteTentativas - tentativas} tentativas.`;
        document.getElementById('feedback').textContent = 'Você errou!!! o número secreto é menor';
    }
}

function newGame() {
    document.getElementById('title-page').textContent = 'Adivinhe um número entre 1 e 100';
    document.getElementById('feedback').textContent = 'Você tem 5 chances de acertar!';
    document.getElementById('feedback').style.color = '';
    document.getElementById('chute').disabled = false;
    document.getElementById('chute').value = '';
    tentativas = 1;
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
}