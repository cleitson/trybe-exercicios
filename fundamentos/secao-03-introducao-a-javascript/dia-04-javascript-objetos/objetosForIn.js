// // 1
// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };
// console.log('Bem-vinda,', info.personagem);

// // 2
// info.recorrente = 'sim';
// console.log(info);

// // 3
// for (let key in info) {
//   console.log(key);
// }

// // 4
// for (let value in info) {
//   console.log(info[value]);
// }

// // 5
// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
//   nota: 'O último MacPatinhas',
//   recorrente: 'sim'
// };

// for (let key in info) {
//   if (key === 'recorrente' && info[key] === 'sim' && info2[[key]] === 'sim') {
//       console.log('ambos recorrentes');
//   } else {
//     console.log(info[key], 'e', info2[key]);
//   }
// }

// leitura de objetos
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

// 1

console.log('O livro favorito de',leitor.nome, leitor.sobrenome, 'se chama',"'",leitor['livrosFavoritos'][0]['titulo'], "'");

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
})
console.log(leitor);

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');