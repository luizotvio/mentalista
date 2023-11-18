var numeroSecreto = parseInt(Math.random() * 1001);

while (chute != numeroSecreto) {
    var chute = prompt("Digite um número entre 0 e 1000");

    chute = parseInt(chute);

    if (chute === numeroSecreto) {
        alert("Parabéns, você acertou!!!")
    } else if (chute > numeroSecreto) {
        alert("Você errou!!! o número secreto é menor")
    } else if (chute < numeroSecreto) {
        alert("Você errou!!! o número secreto é maior")
    }
}