let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
console.log(numbers);

for (let index = 0; index < numbers.length; index++) {
  soma = soma + numbers[index];
}

let media = soma / numbers.length;

console.log("Valor de todo os numeros: ", soma);
console.log("A media da variavel numbers e de: ", media);

if (media > 20) {
  console.log("O valor da média aritmética é maior que 20.");
} else {
  console.log("O valor da média aritmética é menor ou igual a 20.");
}


let maiorNumero = 0;
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] > maiorNumero) {
    maiorNumero = numbers[index]
  }
}
console.log("O maior numero do array e: ", maiorNumero);

let menorNumero = numbers[0];
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] < menorNumero) {
    menorNumero = numbers[index]
  }
}
console.log("O menor numero do array e: ", menorNumero);

let numInpar = [];
let quantidadeImpar = 0;

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 !== 0) {
    numInpar.push(numbers[index])
    quantidadeImpar++
  }

}
if (quantidadeImpar > 0) {
  console.log("Existem " + quantidadeImpar + " valores ímpares no array sendo eles " + numInpar);
}

let adicionandoNumeros = [];

for (let index = 1; index <= 25; index++) {
  adicionandoNumeros.push(index)
}

console.log("adicionando numeros no array: ", adicionandoNumeros);

let divisaoPorDois = "";
for (let index = 0; index < adicionandoNumeros.length; index++) {
  let divisao = adicionandoNumeros[index] / 2;
  divisaoPorDois += divisao + " ";
}
console.log("divisao por 2 no array: ", divisaoPorDois);

let fatorial = 10;
let resultado = 1;
for (let index = fatorial; index >= 1; index--) {
  resultado *= index

}

console.log("10! fatorial e: ", resultado);

let word = 'tryber';
let wordInvertida = "";
for (let index = word.length - 1; index >= 0; index--) {
  wordInvertida += word[index]

}
console.log(wordInvertida);

let array = ['java', 'javascript', 'python', 'html', 'css', 'js'];
let invertidaArray = [];

for (let index = array.length - 1; index >= 0; index--) {
  invertidaArray.push(array[index])

}
console.log(invertidaArray);

let menorString = array[0];
for (let index = 0; index < array.length; index++) {
  if (array[index].length < menorString.length) {
    menorString = array[index]
  }
}
console.log(menorString);

let maiorString = array[0];
for (let index = 0; index < array.length; index++) {
  if (array[index].length > maiorString.length) {
    maiorString = array[index]
  }
}
console.log(maiorString);

let numeroPrimo = 2;
for (let index = 2; index <= 50; index++) {
  let primo = true;
  for (let i = 2; i < index; i++) {
    if (index % i == 0) {
      primo = false;
      break;
    }
  }
  if (primo) {
    numeroPrimo = index
  }
}
console.log(numeroPrimo);