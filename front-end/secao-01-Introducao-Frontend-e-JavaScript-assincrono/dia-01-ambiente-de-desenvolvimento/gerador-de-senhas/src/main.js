import './style.css';
import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';

const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');
const paragraph = document.querySelector('p');

passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordEl.innerHTML = randomPassword;
  paragraph.innerText = (' ');
});
displayPasswordEl.addEventListener('click', (event) => {
  copy(event.target.innerHTML);
  paragraph.innerText = ('Senha copiada!');
});
