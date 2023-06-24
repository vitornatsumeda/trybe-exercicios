const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparation = (rightAnswers, studentAnswers) => {
    if (rightAnswers === studentAnswers) {
        return 1;
    }
    if (studentAnswers === 'N.A') {
        return 0;
    }   return -0.5;
};

const points = (answers, studentAnswers, callback) => {
    let sum = 0;
    for (let index = 0; index < answers.length; index += 1) {
        const callbackReturn = callback(answers[index], studentAnswers[index]);
        sum += callbackReturn;
    } return sum;
};

console.log(points(RIGHT_ANSWERS, STUDENT_ANSWERS, comparation));