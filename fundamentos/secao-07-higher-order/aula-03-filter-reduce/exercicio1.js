const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const filtering = numbers.filter((number) => number % 2 === 0);
// console.log(filtering);

const sum = filtering.reduce((acc, curr) => {
    return acc + curr;
}, 0);

// console.log(sum);

const sumWithReduceOnly = numbers.reduce((acc, curr) => curr % 2 === 0 ? acc + curr : acc);
console.log(sumWithReduceOnly);