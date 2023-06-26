const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  const spliting = names.join('').toLowerCase().split('');

  const countA = () => {
    return spliting.reduce((acc, curr) => {
        return curr === 'a' ? acc +1 : acc;
    }, 0)
  }

  console.log(countA());