let number = 10; //inferencia de tipo

const pi = 3.14; //constante sempre vai ter o msm valor 

let nome: string = 'Luis Andre';
nome = 'André'
console.log(nome);

let correta: boolean;
correta = true;
console.log(correta);

let resultado = number * pi; // inferencia de tipo
const nomeDoUsuario = prompt("aoba baoo");
console.log(nomeDoUsuario?.toUpperCase()); // ? é umoperador do ts q ajuda a