// Faça uma lista com as suas frutas favoritas
// const specialFruit = ['kiwi', 'goiaba', 'melao'];

// Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['ameixa', 'uva', 'morango'];

// const fruitSalad = (fruit, additional) => {
//   const fruits = [...fruit, ...additional]
//   return fruits
// };

// console.log(fruitSalad(specialFruit, additionalItens));

// const countParams = (...args) => {
//   console.log('parâmetros:', args);
//   return `Você passou ${args.length} parâmetros para a função.`;
// }

// console.log(countParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
// console.log(countParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

// definindo o objeto
// const character = {
//   name: 'Luke SkyWalker',
//   age: '53',
//   description: {
//     specieName: 'Human',
//     jedi: true,
//   },
//   homeWorld: {
//     name: 'Tatooine',
//     population: '200000',
//   },
// };

// desestruturando o objeto:
// const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// imprimindo os valores:
// console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

// const product = {
//   name: 'Smart TV Crystal UHD',
//   price: '1899.05',
//   seller: 'Casas de Minas',
// };

// const printProductDetails = ({ name, price, seller }) => {
//   console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
// };

// printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas



const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const data = {...user, ...jobInfos}

const { name, age, nationality, profession, squad, squadInitials } = data;

const log = `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as Software engineer and my squad is ${squad}`

console.log(log);