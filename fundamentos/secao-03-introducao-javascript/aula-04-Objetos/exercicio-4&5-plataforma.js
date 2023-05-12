let student1 = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskills: 'Ótimo',
  };
  
  let student2 = {
    html: 'Bom',
    css: 'Ótimo',
    javascript: 'Ruim',
    softskills: 'Ótimo',
    git: 'Bom', // chave adicionada
  };

function listOfSkills(student) {
    let arrayOFSkills = Object.keys(student)
    for (index in arrayOFSkills) {
        console.log(arrayOFSkills[index] + 'Nivel: ' + student[arrayOFSkills[index]]);
    }
};

console.log('Estudante 1');
listOfSkills(student1);

console.log('Estudante 2');
listOfSkills(student2);

//------------------------------------------------------------------------------------------------

function listSkillsValueWithValues(student) {
  return Object.values (student)
}

console.log(listSkillsValueWithValues(student1));
console.log(listSkillsValueWithValues(student2));