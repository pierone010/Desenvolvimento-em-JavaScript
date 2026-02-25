// 1 Contagem de 1 a 10
// for (let i = 1; i <= 10; i++) {
    // console.log(i);
// }

// 2 Números pares de 0 a 20


// for (let i = 0; i <= 20; i += 2) {
    // console.log(i);
// }

// 3 Tabuada do 5


// for (let i = 1; i <= 10; i++) {
    // console.log(`5 x ${i} = ${5 * i}`);
// }

// 4 Imprimir elementos de um array

// let frutas = ["Maçã", "Banana", "Uva", "Morango"];

// for (let i = 0; i < frutas.length; i++) {
    // console.log(frutas[i]);
// }

// 5 Soma de números de 1 a 100

// let soma = 0;

// for (let i = 1; i <= 100; i++) {
    // soma += i;
// }

// console.log("Soma:", soma);

// 6 Contagem regressiva de 10 a 1

// let i = 10;

// while (i >= 1) {
//     console.log(i);
//     i--;
// }let i = 10;

// while (i >= 1) {
//     console.log(i);
//     i--;
// }

// 7 Adivinhe o número (1 a 10)

// let numeroSecreto = 7;
// let palpite;

// while (palpite !== numeroSecreto) {
//     palpite = Number(prompt("Adivinhe o número de 1 a 10:"));
// }

// alert("Parabéns! Você acertou!");

// 8 Soma até digitar 0

// let numero = 1;
// let soma = 0;

// while (numero !== 0) {
//     numero = Number(prompt("Digite um número (0 para parar):"));
//     soma += numero;
// }

// console.log("Soma total:", soma);

// 9 Percorrendo array com while

// let nomes = ["André", "Carlos", "João", "Maria"];
// let i = 0;

// while (i < nomes.length) {
//     console.log(nomes[i]);
//     i++;
// }

// Desafio

let lista = [];
let opcao = "";

while (opcao !== "4") {

    opcao = prompt(
        "1 - Adicionar\n" +
        "2 - Remover\n" +
        "3 - Listar\n" +
        "4 - Sair"
    );

    if (opcao === "1") {
        let item = prompt("Digite o item:");
        lista.push(item);

    } else if (opcao === "2") {
        let item = prompt("Digite o item para remover:");
        let posicao = lista.indexOf(item);

        if (posicao !== -1) {
            lista.splice(posicao, 1);
        }

    } else if (opcao === "3") {
        let texto = "Lista:\n";

        for (let i = 0; i < lista.length; i++) {
            texto += lista[i] + "\n";
        }

        alert(texto);
    }
}