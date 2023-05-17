let lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

let lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1 - Crie uma função para adicionar o turno da noite na lesson2.Essa função deve ter três parâmetros: o objeto a ser modificado, a chave a ser adicionada e o valor dela.
const addTurno = (obj, key, value) => {
  return obj[key] = value;
}
addTurno(lesson2, 'turno', 'noite');
console.log(lesson2);

// 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listKey = (key) => {
  return Object.keys(key);
};
console.log(listKey(lesson1));

// 3 - Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.
const tamObj = (obj) => {
  return Object.keys(obj).length
};
console.log(tamObj(lesson1));

// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listValues = (obj) => {
  return Object.values(obj);
};
console.log(listValues(lesson1));

// 5 - Crie um objeto de nome allLessons, que deve agrupar todas as aulas por meio do Object.assign. Cada chave desse novo objeto será uma aula, portanto essas chaves serão nomeadas lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons).
let destino = Object.assign({}, {
  lesson1: lesson1,
  lesson2: lesson2,
  lesson3: lesson3
});

console.log(destino);

// 6 Com base no objeto elaborado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.
const totalAlunos = () => {
  let sum = 0;
  let a = lesson1.numeroEstudantes;
  let b = lesson2.numeroEstudantes;
  let c = lesson3.numeroEstudantes;
  sum = a + b + c;
  return sum;
}
console.log(totalAlunos());

// 7 - Crie uma função que obtenha o valor da chave de acordo com sua posição no objeto. Por exemplo: console.log(getValueByNumber(lesson1, 0));
// Output: 'Matemática'
const objValue = (obj, value) => {
  return Object.values(obj)[value]
}
console.log(objValue(lesson1,0));

// 8 - Crie uma função que verifique se o par chave/valor existe na função. Essa função deve possuir três parâmetros:o objeto, o nome da chave e o valor dela. Por exemplo:
const check = (obj, key, value) => {
  let chave = Object.entries(obj);
  let exist = false;
  for (let index in chave)
    if (chave[index][0]=== key && chave[index][1] === value) {
      exist = true;
    }
  return exist;
}

console.log(check(lesson3, 'materia', 'Maria Clara'));