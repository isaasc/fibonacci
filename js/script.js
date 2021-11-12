// Faça um programa que dado o numero de elementos pelo usuário, calcule a sequencia de Fibonacci.
// Exemplo se o usuário digitar 8 o programa retornara: 0, 1, 1, 2, 3, 5, 8, 13.
// Não esqueça de inserir as virgulas e o ponto
// Lembrando os números seguintes serão a soma dos dois números anteriores.
// Sequencia: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584...


function fibonacci() {
    const amount = parseInt(document.getElementById('number').value);
    let penultimate = 0;
    let last = 1;
    let numero;
    const numbers = [];

    for (let i = 1; i <= amount; i++) {
        if(i <= 2) {
            numero = i - 1;
            numbers.push(numero);
        } else {
        numero = last + penultimate;
        penultimate = last;
        last = numero;
        numbers.push(numero)
        }
    }
    alert(`${numbers}.`);
}

