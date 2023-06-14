// Fonte: <https://restcountries.com/v2/all>
// array contries para as questoes de 1 a 3;
const countries = [
  {
    name: 'Afghanistan',
    region: 'Asia',
    currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
    capital: 'Kabul',
    population: 40218234,
    area: 652230
  },
  {
    name: 'Åland Islands',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Mariehamn',
    population: 28875,
    area: 1580
  },
  {
    name: 'Albania',
    region: 'Europe',
    currencies: [{ code: 'ALL', name: 'Albanian lek' }],
    capital: 'Tirana',
    population: 2837743,
    area: 28748
  },
  {
    name: 'Algeria',
    region: 'Africa',
    currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
    capital: 'Algiers',
    population: 44700000,
    area: 2381741
  },
  {
    name: 'American Samoa',
    region: 'Oceania',
    currencies: [{ code: 'USD', name: 'United States Dollar' }],
    capital: 'Pago Pago',
    population: 55197,
    area: 199
  },
  {
    name: 'Andorra',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Andorra la Vella',
    population: 77265,
    area: 468
  },
  {
    name: 'Angola',
    region: 'Africa',
    currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
    capital: 'Luanda',
    population: 32866268,
    area: 1246700
  },
  {
    name: 'Anguilla',
    region: 'Americas',
    currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
    capital: 'The Valley',
    population: 13452,
    area: 91
  }
];

// 1 - Calcule a quantidade total da população de todos os países.

const getPopulation = () => {
  return countries.map((country) => country.population)
    .reduce((acc, curr) => acc + curr)
}
// console.log(getPopulation());

// 2 - Calcule a área total de todos os países.

const getTotalArea = () => {
  return countries.map((country) => country.area)
    .reduce((acc, curr) => acc + curr)
}
// console.log(getTotalArea());

// 3 - Encontre o país com o maior nome.
/* De olho na dica 👀: o reduce consegue comparar o valor do primeiro com o segundo parâmetro.
Compare o tamanho da string name do primeiro parâmetro com a do segundo parâmetro e retorne aquele que for maior.*/

const longestName = () => {
  return countries.reduce((acc, curr) => acc.name.length > curr.name.length ? acc : curr);
}
// console.log(longestName());

// array para questao 4
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
// 4 - Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes.
// De olho na dica 👀: faça com que o array de nomes seja um array de letras.


const splitNames = () => {
  return names.map((letters) => letters.split("")).flat()
    .filter((letter) => letter.toLowerCase() === 'a').length
};
// console.log(splitNames());

// 5 - Crie um array de objetos e calcule a média de notas. Utilize as constantes students e grades para 
// criar um array de objetos e calcule a média da nota das pessoas estudantes:

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];


const studentAverage = () => {
  return students.map((student,index) => ({
    name: student,
    average: grades[index].reduce((sum, grade) => sum + grade, 0) / grades[index].length
  }))
}

console.log(studentAverage());

const expectedResult = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];