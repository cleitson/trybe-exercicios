
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// // for (let index = 1; index < numbers.length; index += 1) {
// //   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
// //     if (numbers[index] < numbers[secondIndex]) {
// //       let position = numbers[index];
// //       numbers[index] = numbers[secondIndex];
// //       numbers[secondIndex] = position;
// //     }
// //   }
// // }
// // console.log("Em ordem crescente", numbers);

// // for (let index = 1; index < numbers.length; index += 1) {
// //   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
// //     if (numbers[index] > numbers[secondIndex]) {
// //       let position = numbers[index];
// //       numbers[index] = numbers[secondIndex];
// //       numbers[secondIndex] = position;
// //     }
// //   }
// // }
// // console.log("Em ordem decrescente", numbers);

// let multiplicado = [];

// for (let index = 0; index < numbers.length; index += 1) {
//   if (index < (numbers.length - 1)) {
//     multiplicado.push(numbers[index] * numbers[index + 1])
//   } else {
//     multiplicado.push(numbers[index] * 2);
//   }
// }

// console.log(multiplicado);

// let num = 5;
// let asterisco = "";
// let posicao = num - 1;
// // for (let index = 1; index <= num; index++) {
// //   asterisco +=  "*"
// // }
// // for (let index = 1; index <= num; index++) {
// //   console.log(asterisco);
// // }

// for (let index = 0; index < num; index++) {
//   for (let i = 0; i < num; i++) {
//     if (i < posicao) {
//       asterisco+= " ";
//     }else{
//       asterisco+= "*"
//     }
//   }
//   console.log(asterisco);
//   asterisco = "";
//   posicao -=1;
// }

// let n = 5;
// let symbol = '*';
// let inputLine = '';

// let midOfMatrix = (n + 1) / 2;
// let controlLeft = midOfMatrix;
// let controlRight = midOfMatrix;

// for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
//   for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
//     if (columnIndex > controlLeft && columnIndex < controlRight) {
//       inputLine = inputLine + symbol;
//     } else {
//       inputLine = inputLine + ' ';
//     }
//   }
//   console.log(inputLine);
//   inputLine = '';
//   controlRight += 1;
//   controlLeft -= 1
// };

// let n = 7;
// let middle = (n + 1) / 2;
// let controlLeft = middle;
// let controlRight = middle;
// let symbol = '*';
// for (let line = 1; line <= middle; line += 1) {
//   let outputLine = '';
//   for (let col = 1; col <= n; col += 1) {
//     if (col == controlLeft || col == controlRight || line == middle) {
//       outputLine += symbol;
//     } else {
//       outputLine += ' ';
//     }
//   }
//   controlLeft -= 1;
//   controlRight += 1;
//   console.log(outputLine);
// }
let divisors = 1;
let numberToCheck = 31;

for (let number = 2; number <= numberToCheck; number += 1) {
  if (numberToCheck % number === 0) divisors += 1;
}

if (divisors === 2) console.log(numberToCheck + ' é primo');
else console.log(numberToCheck + ' não é primo');