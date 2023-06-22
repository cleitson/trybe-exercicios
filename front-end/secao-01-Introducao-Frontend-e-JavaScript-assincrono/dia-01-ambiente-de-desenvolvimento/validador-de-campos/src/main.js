import './style.css';
import validator from 'validator';

const textValue = document.querySelector('#textValue');
const inputSelect = document.querySelector('#inputSelect');
const btnValidar = document.querySelector('#btnValidar');
const textValidation = document.querySelector('#textValidation');
const cpfNumber = 11;

const validateEmail = () => (!validator.isEmpty(textValue.value)
  && validator.isEmail(textValue.value));

const emailIsEmailSelect = () => (validateEmail() === true
  && inputSelect.value === 'Email');

const validateCpf = () => (!validator.isEmpty(textValue.value)
  && validator.isNumeric(textValue.value)
  && textValue.value.length === cpfNumber);

const cpfIsCpfSelect = () => (validateCpf() === true && inputSelect.value === 'CPF');

btnValidar.addEventListener('click', (event) => {
  event.preventDefault();
  if (cpfIsCpfSelect() === true || emailIsEmailSelect() === true) {
    textValidation.style.backgroundColor = 'green';
    textValidation.innerHTML = ('A validação retornou true');
  } else {
    textValidation.style.backgroundColor = 'red';
    textValidation.innerHTML = ('A validação retornou false');
  }
});
