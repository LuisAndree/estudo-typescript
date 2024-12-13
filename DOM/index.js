// Selecionar elementos html da nossa pagina usando o document

// 1 - pelo nome da tag
const todosP = document.getElementsByTagName('p');
console.log(todosP);

// 2 - pelo nome da classe
const todosClassParagrafo = document.getElementsByClassName('paragrafo');
console.log(todosClassParagrafo);

// 3 - pelo name da tag
const emailInput = document.getElementsByName("email");
console.log(emailInput);

// 4 - pelo id da tag
const img = document.getElementById('js-logo');
console.log(img);

// 5 - usando query selector
const imgg = document.querySelector('body > img#js-logo');
console.log(imgg);

const p1 = document.querySelector('p'); // pega so o 1° elemento
console.log(p1);
const p2 = document.querySelectorAll('p'); // pega todos os elementos
console.log(p2);