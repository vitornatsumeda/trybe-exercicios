const primeNumbers = [17, 23, 37]
const [num1, num2, num3] = primeNumbers;
const sum = (a, b) => {
  console.log(a + b);
}

sum(num1, num3 ) // 54

//-----------------------------------------------------------------------------

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';
[comida, animal, bebida] = [bebida, comida, animal];

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

//-----------------------------------------------------------------------------

let numerosPares = [1, 3, 5, 6, 8, 10, 12];
[,,, ...numerosPares] = numerosPares;
console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log acima