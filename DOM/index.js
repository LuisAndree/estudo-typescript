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

// Acessando/alterando os conteudos HTML das tags

const primeiroParagrafo = document.querySelector('p.paragrafo');
console.log(primeiroParagrafo);

console.log('conteudo:', primeiroParagrafo.textContent);
console.log('conteudo:', primeiroParagrafo.innerHTML);

primeiroParagrafo.innerHTML = "<strong> AOBBAAA BAOO </strong>";
primeiroParagrafo.textContent = "<strong>AOBBAA BAOO</strong>";

console.log('conteudo:', primeiroParagrafo.textContent);
console.log('conteudo:', primeiroParagrafo.innerHTML);

emailInput[0].value = "ANDRE2016999@GMAIL.COM";
console.log(emailInput[0].value);

// Criando elementos na pagina web

const listaUl = document.querySelector('ul#lista'); // pega a tag ul
const listaLis = document.querySelectorAll('ul > li')

const novaTagLi = document.createElement('li');
novaTagLi.textContent = 'SEGUNDO ITEN'; // pode ser com innerHTML tbm
console.log(novaTagLi);

//listaUl.appendChild(novaTagLi); 

listaUl.insertBefore(novaTagLi, listaLis[1]);

// Removendo elementos

listaUl.removeChild(listaLis[0]);