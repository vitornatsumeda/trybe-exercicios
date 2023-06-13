const numbers = [19, 21, 30, 3, 45, 22, 15];

const findNumber = numbers.find((number) => number % 15 == 0);
console.log(findNumber);
//--------------------------------------------------------------------------------------------------------
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findName = names.find((name) => name.length === 5);
console.log(findName);
//--------------------------------------------------------------------------------------------------------
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  
  const findID = musicas.find((musica) => musica.id === '31031685'); 
  console.log(findID);