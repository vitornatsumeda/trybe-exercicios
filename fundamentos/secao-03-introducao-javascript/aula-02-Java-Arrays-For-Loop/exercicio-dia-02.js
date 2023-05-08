let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Topico 1
// for (index = 0; index < numbers.length; index +=1){
//     console.log(numbers[index]);
// }

//---------------------------------------------------------------------------

//Topico 2
// let sum = 0;

// for (let index = 0; index < numbers.length; index +=1){
//     sum += numbers[index];
// }
// console.log (sum)

//---------------------------------------------------------------------------

//Topico 3 & 4
// let sum = 0;
// let media = 0;
// for (let index = 0; index < numbers.length; index +=1){
//     sum += numbers[index];
//     media = sum/ numbers.length
// } if (media > 20) {
//     console.log("Media maior que 20");
// } else {
//     console.log("Media menor ou igual a 20");
// }

//---------------------------------------------------------------------------

//Topico 5
// let maiorNumero = numbers[0];
// for (index = 1; index < numbers.length; index +=1){
//     if (numbers[index] > maiorNumero) {
//         maiorNumero = numbers[index]
//     }
// }
// console.log (maiorNumero)

//---------------------------------------------------------------------------

//Topico 6
// let qtdImpares = 0;
// for (index = 0; index < numbers.length; index +=1){
//     if (numbers[index] % 2 == 1) {
//         qtdImpares +=1
//     }
// }

// if (qtdImpares == 0){
//     console.log("Nao tem valores impares");
// } else {
//     console.log("A quantidade de impares na array é:", qtdImpares);
// }

//---------------------------------------------------------------------------

//Topico 7
// let menorNumero = numbers[0];
// for (index = 1; index < numbers.length; index +=1){
//     if (numbers[index] < menorNumero) {
//         menorNumero = numbers[index]
//     }
// }
// console.log (menorNumero)

//---------------------------------------------------------------------------

//Topico 8 & 9

// let array = [];

// for (index = 0; index <= 25; index +=1) {
//     array.push(index);
// }
// console.log(array);

// for (index = 0; index < array.length; index +=1){
//     console.log(array[index] / 2); 
// };

//---------------------------------------------------------------------------

//Topico 10

// let numero = 10;
// let fatorial = 1 ;

// for (index = numero; index > 0; index -=1){
//     fatorial *= index
// }
// console.log(fatorial);

//---------------------------------------------------------------------------

// Topico 11

// let word = 'tryber';
// let reverseWord = '';

// reverseWord = word.split('').reverse().join('');
// console.log (reverseWord)

//---------------------------------------------------------------------------

// Topico 12

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maiorPalavra = array[0];
// let menorPalavra = array[0];


// for (index = 1; index < array.length; index +=1){
//     if (maiorPalavra.length < array[index].length){
//         maiorPalavra = array[index]
//     }
// }console.log(maiorPalavra);

// for (index = 1; index < array.length; index +=1){
//     if (menorPalavra.length > array[index].length){
//         menorPalavra = array[index]
//     }
// }console.log(menorPalavra);

//---------------------------------------------------------------------------

// Topico 13

let maiorNumeroPrimo = 0;
for (numero = 50; numero >= 2; numero -=1){
    let numPrimo = true;
    for (let divisor = 2; divisor < numero; divisor +=1){
        if (numero%divisor === 0){
            numPrimo = false;
        }
    }
    if (numPrimo) {
        maiorNumeroPrimo = numero
        break;
    }
} console.log(maiorNumeroPrimo);
