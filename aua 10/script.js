// 1 - Verificador de Números
// Peça um número ao usuário e verifique se é positivo, 
// negativo ou zero.


// promt()



// let  numero =  Number(prompt('Digite um número: '))
// if (numero >0){


// console.log('Positivo')


// }else if(numero<0) {


// console.log('Negativo')


// }else{


//     console.log('Zero')


// }



// 2 - Verificador de Votação
// Peça a idade do usuário e verifique se pode votar .



// let idade =  Number(prompt('Idade: '))



// if (idade >= 16){


//     console.log('pode votar')
// }else{


// console.log('Não pode votar')


// }





// 3 - Par ou Ímpar
// Declare um número qualquer e determine se é par ou ímpar.


// let  numero =  Number(prompt('Digite um número: '))
// if (numero % 2 == 0){


// console.log('Par')


// }else{


//     console.log('Impar')


// }





// 4 - Classificador de Triângulos
// Peça 3 números ao usuário e classifique o triângulo como:



// let l1  =  prompt('lado 1')
// let l2  =  prompt('lado 2')
// let l3  =  prompt('lado 3')


// if (l1 == l2 && l2 == l3 && l3 == l1){
// console.log('Equilátero ')
// }else if (l1 != l2 && l2 != l3 && l3 != l1){
//     console.log('Escaleno ')
// }else{
//     console.log('Isósceles')
// }








// Equilátero (todos lados iguais)


// Isósceles (dois lados iguais)


// Escaleno (todos lados diferentes)





// 5 - Múltiplo de  8 e 16
// Verifique se um número é múltiplo de 8 e 16 simultaneamente.


// let n = Number(prompt('Digite um numero'))


// if (n % 8 == 0 && n % 16 == 0){


// console.log('É multiplo de 8 e 16')



// }else{



// console.log('Não é multiplo de ambos...')


// }




// 6 - Número Positivo e Maior que 15
// Verifique se um número atende às duas condições:


// let n = Number(prompt('Digite um numero'))


// if (n >0 && n>15){


// console.log('Positivo e maior que 15')



// }else{



// console.log('Não é... ')


// }




// positivo e maior que 15


// 7 - Divisível por 9 ou 6
// Verifique se um número é divisível por 9 ou .6




// let n = Number(prompt('Digite um numero'))


// if (n % 9 == 0 || n % 6 == 0){
// console.log('è divisivel por um deles')
// }else{
// console.log('Não é... ')
// }



alert('Bem vindo ao restaurante X')


// let numero_pessoas = Number(prompt('Número de pessoas:'))


// if (numero_pessoas == 1){
//     let nome = prompt('Nome') 
//     alert('Seja bem vindo(a) '+ nome)
// }else if (numero_pessoas == 2){
//     let nome1 = prompt('Nome') 
//     let nome2 = prompt('Nome')
//     alert('Sejam bem vindos  '+ nome1+ nome2);
// }else if (numero_pessoas == 3){
//     let nome1 = prompt('Nome') 
//     let nome2 = prompt('Nome')
//     let nome3 = prompt('Nome')
//     alert('Sejam bem vindos '+ ' ' + nome1+' ' + nome2+' '+ nome3);
// }



// let tipoMesa =  prompt('1 - Comum  - R$ 50 por pessoa | 2 - VIP  R$ 80 por pessoa | 3 - Varanda R$ 100 por pessoa')



// if (tipoMesa == '1'){


//    let consumo = numero_pessoas * 50.0
// alert('Você escolheu a mesa Comum - R$ ' + consumo)



// }else if (tipoMesa == '2'){


//     let consumo = numero_pessoas * 80.0
//  alert('Você escolheu a mesa VIP - R$ ' + consumo)
 
 
//  }else if (tipoMesa == '3'){


//     let consumo = numero_pessoas * 100.0


//  alert('Você escolheu a mesa Varanda - R$ ' + consumo)
 
 
//  }