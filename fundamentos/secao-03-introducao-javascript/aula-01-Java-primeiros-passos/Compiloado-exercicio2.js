// Exercicio 8
// let n1 = 2;
// let n2 = 5;
// let n3 = 7;

// if (n1%2===0 || n2%2===0 || n3%2===0){
//     console.log("True");
// } else{
//     console.log("False");
// }

//------------------------------------------------------------------------

// Exercicio 9
// let n1 = 2;
// let n2 = 4;
// let n3 = 5;

// if (n1%2===1 || n2%2===1 || n3%2===1){
//     console.log("True");
// } else{
//     console.log("False");
// }

//------------------------------------------------------------------------

// Exercicio 10
// let custo = 30;
// let valorVenda = 50;
// let imposto = 0.2;
// let custoTotal = custo * (1 + imposto)
// let lucroTotal = (valorVenda - custoTotal)*1000

// if (custo < 0 || valorVenda < 0) {
//     console.log("Erro");
// } else {
//     console.log("Seu lucro é:", lucroTotal);
// }

//------------------------------------------------------------------------

// Exercicio 11
// let salarioBruto = 3000;
// let aliquotaINSS = "";
// let aliquotaIR = "";

// if (salarioBruto > 0 && salarioBruto <= 1556.94) {
//     aliquotaINSS = salarioBruto*0.08
// } else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
//     aliquotaINSS = salarioBruto*0.09
// } else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
//     aliquotaINSS = salarioBruto*0.11
// } else if (salarioBruto > 5189.93) {
//     aliquotaINSS = 570.88
// } else {
//     console.log("Salario Invalido")
// }

// let salarioBase = salarioBruto - aliquotaINSS;
// let ir = "";

// if (salarioBase > 0 && salarioBruto < 1903.98) {
//     ir = 0
// } else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
//     ir = (salarioBase * 0.075) - 142.80
// } else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
//     ir = (salarioBase * 0.15) - 354.80
// } else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
//     ir = (salarioBase * 0.225) - 636.13
// } else if (salarioBase > 4664.68) {
//     ir = (salarioBase * 0.275) - 869.36
// }

// let salarioLiquido = salarioBase - ir
// console.log(salarioLiquido);
