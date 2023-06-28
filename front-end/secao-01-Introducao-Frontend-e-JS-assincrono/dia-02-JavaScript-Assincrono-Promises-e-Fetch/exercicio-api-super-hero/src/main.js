import './style.css';
import Swal from 'sweetalert2'

const cardHero = document.querySelector('#cardHero');
const imgHero = document.querySelector('#imgHero')
const nameHero = document.querySelector('#nameHero');
const btnRandom = document.querySelector('#btnRandom');

const apiHero = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api';


function randomHero() {
  const randomId = Math.floor(Math.random() * 563) + 1;
  fetch(`${apiHero}/id/${randomId}.json`)
    .then((response) => response.json())
    .then((data) => {
      imgHero.src = data.images.md;
      nameHero.innerText = data.name;
    })
    .catch((error) =>
      Swal.fire({
        icon: 'error',
        title: error.message,
        text: 'tente gerar um novo personagem',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    );
}

btnRandom.addEventListener('click', randomHero);

window.onload = randomHero