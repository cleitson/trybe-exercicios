/*
let a = 5;
let b = 2;
let c = 1;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

if (a > b){
  console.log(a, "e maior que", b);
}
else{
  console.log(b, "e maior que", a);
}
*/

/*
if(a > b && a > c){
  console.log(a, "e maior que", b, "e maior que", c);
  
}else if(b > a && b > c){
  console.log(b, "e maior que", a, "e maior que", c);
}else{
  console.log(c, "e maior que", a, "e maior que", b);
}
*/
/*
let num = -5;

if (num > 0){
  console.log("positive");
}else if (num === 0){
  console.log("zero");
}else{
  console.log("negative");
}
*/

/*
let num1 = 50;
let num2 = 50;
let num3 = 100;

if ((num1+num2+num3)>=180){
  console.log(true);
}else{
  console.log(false);
}

*/
/*
let pecaXadrez = "BISpo";

switch(pecaXadrez.toLowerCase()){
  case 'rei':
    console.log("O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.");break;
  case 'rainha':
    console.log("A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.");break;
  case 'bispo':
    console.log("O bispo move-se ao longo da diagonal. Não pode pular outras peças.");break;
  case 'cavalo':
    console.log("É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");break;
  case 'torre':
    console.log("A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.");break;
  case 'peao':
    console.log("O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.");break;
  default:
    console.log("peca invalida");
}
*/
/*
let nota = 80;

if(nota >= 90){
  console.log("A");
}else if(nota >=80){
  console.log("B");
}else if(nota >=70){
  console.log("C");
}else if(nota >=60){
  console.log("D");
}else if(nota >=50){
  console.log("E");
}else if(nota < 50){
  console.log("F");
}else if(nota > 100 || nota < 0){
  console.log("nota invalida");
}
*/

/*
let num1 = 72;
let num2 = 32;
let num3 = 5;
if(num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0){
  console.log(true);
}else{
  console.log(false);
}
*/
/*
let num1 = 72;
let num2 = 32;
let num3 = 52;
if(num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0){
  console.log(true);
}else{
  console.log(false);
}
*/

/*
let custo = 1;
let valorVenda = 3;

if(custo >= 0 && valorVenda >= 0){
  let imposto =  custo * 1.2;
  let lucro = (valorVenda - imposto);
  console.log("lucro de 1 produtos ",lucro);
  console.log("lucro de mil produtos ",lucro * 1000);
}else if(custo >= 0 || valorVenda >= 0 ){
  console.log("valores incorretos");
}
*/

let inss;
let ir;
let salarioBruto = 3000.00;


if(salarioBruto <= 1556.94){
  inss = salarioBruto * 0.08
}else if(salarioBruto <= 2594.92){
  inss = salarioBruto * 0.09
}else if(salarioBruto <= 5189.82){
  inss = salarioBruto * 0.11
}else{
  inss = 570.88
}

let salarioBase = salarioBruto - inss;

if (salarioBase <= 1903.98){
  ir = 0;
}else if(salarioBase <= 2826.65){
  ir = (salarioBase * 0.075) - 142.80;
}else if(salarioBase <= 3751.05){
  ir = (salarioBase * 0.15) - 354.80;
}else if(salarioBase <= 4664.68){
  ir = (salarioBase * 0.225) - 636.13;
}else{
  ir = (salarioBase * 0.275) - 869.36;
}

let salarioLiquido = salarioBase - ir;

console.log("Salario Liquido", salarioLiquido);