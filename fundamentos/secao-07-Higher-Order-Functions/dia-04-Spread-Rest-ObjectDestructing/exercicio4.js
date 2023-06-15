/**
 * Exercício 4
Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
 */

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
  // bornIn: nascido em
];

const filterPeople = (nationality) => {
  return people.filter((person) => (person.nationality) === nationality)
    .filter((age) => (age.bornIn >= 1901 && age.bornIn <= 2000))
      .map((pessoa) => pessoa.name);
  
}

console.log(filterPeople('Australian'));