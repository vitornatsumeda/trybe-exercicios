const numberCheck = (myNumber, number) => myNumber === number;

const lottery = (myNumber, callback) => {
  number = Math.floor(Math.random() * 5) + 1;
  return callback (myNumber, number) ? 'Parabéns, você ganhou' : 'Tente novamente';
}

console.log(lottery(2, numberCheck));