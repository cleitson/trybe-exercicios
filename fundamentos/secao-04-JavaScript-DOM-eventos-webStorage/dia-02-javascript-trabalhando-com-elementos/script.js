const body = document.body

// 1 - Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;
const h1 = document.createElement('h1');
h1.innerText = 'TrybeTrip - Agência de Viagens'
body.appendChild(h1);

// 2 - Adicione a tag main com a classe main-content como filho da tag body;
const mainContent = document.createElement('main');
mainContent.className = 'main-content';
body.appendChild(mainContent);

// 3 - Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const centerContent = document.createElement('section');
centerContent.className = 'center-content';
mainContent.appendChild(centerContent);

// 4 - Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const p = document.createElement('p');
p.innerText = 'Agência de Viagens';
centerContent.appendChild(p);

// 5 - Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const leftContent = document.createElement('section')
leftContent.className = 'left-content';
mainContent.appendChild(leftContent);

// 6 - Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const rightContent = document.createElement('section');
rightContent.className = 'right-content';
mainContent.appendChild(rightContent);

// 7 - Adicione uma imagem com src configurado para valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
const imagem = document.createElement('img');
imagem.src = 'https://picsum.photos/200 ';
imagem.className = 'small-image';
leftContent.appendChild(imagem);
// 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, e assim por diante. Essa lista deve ser filha do section criado no passo 6;
const ulList = document.createElement('ul');
rightContent.appendChild(ulList);
let num = ['Um', 'Dois', 'Tres', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez',]
for (let index = 0; index < num.length; index += 1) {
  const liList = document.createElement('li');
  liList.innerText = num[index];
  ulList.appendChild(liList);

}
// 9 - Adicione 3 tags h3, todas filhas do main criado no passo 2.
for (let index = 0; index < 3; index += 1) {
  const h3 = document.createElement('h3');
  h3.className = 'description'
  h3.innerText = index;
  mainContent.appendChild(h3);
}


// Bônus
// Suponha que, depois da criação das tags indicadas, sua liderança tenha visualizado a estrutura inicial da página e pedido a você que fizesse as seguintes alterações:

// Adicione a classe title na tag h1 criada;
h1.className = 'title';

// Adicione a classe description nas 3 tags h3 criadas;
/* criado dentro do for criado no passo 9*/

// Remova a section criada no passo 5 (aquela que possui a classe left-content) por meio da função .removeChild();
mainContent.removeChild(leftContent);
// Centralize a section criada no passo 6 (aquela que possui a classe right-content).
rightContent.style.marginRight = 'auto';
// De olho na dica 👀: Para centralizar a section, basta configurar o margin-right: auto da section.

// Troque a cor de fundo do elemento-pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
centerContent.style.backgroundColor = 'green'
// Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
ulList.lastChild.remove();
ulList.lastChild.remove();