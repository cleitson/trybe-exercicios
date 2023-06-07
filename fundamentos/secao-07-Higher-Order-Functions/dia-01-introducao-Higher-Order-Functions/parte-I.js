const employeeGenerator = (fullName) => {
  const email = fullName.toLowerCase().replace(' ', '_');
  return { fullName, email: `${email}@trybe.com` };
};
const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  };
  return employees;
};

// console.log(newEmployees(employeeGenerator));


const randomNumber = () => {
  return Math.floor(Math.random() * 5) + 1
};
const checkNumber = (number) => {
  const sortedNumber = randomNumber();
  if (number === sortedNumber) {
    return `Numero apostado: ${number},\nNumero sorteado: ${sortedNumber}, \nParabéns, você ganhou`;
  }
  return `Numero apostado: ${number},\nNumero sorteado: ${sortedNumber}, \nTente novamente`;
};
// console.log(checkNumber(1));



const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswers, studentAnswers, checkAnswers) => {
  if (rightAnswers === studentAnswers) {
    return 1;
  } if (studentAnswers === 'N.A') {
    return 0;
  }
  return -0.5;
};

const countPoints = (rightAnswers, studentAnswers, action) => {
  let count = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index])
    count += actionReturn
  }
  return `Resultado final: ${count} pontos`
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));