// Tipagem de Arrays

// number[] vou Array<number>
const numeros: number[] = [1, 2, 3, 4, 5];
const strings: string[] = ['a', 'b', 'c', 'd', 'e'];

const misto: (number | string)[] = [1, 'a', 2, 'b', 3, 'c']; //union type - nao recomendado
console.log(misto);

const misto2: any[] = [1, 'a', { nome: 'Luis', idade: 27 }, () => { }, true]; //usar any é como anular o typescript - nao recomendado
console.log(misto2);

const idades: number[] = [];
idades.push(29);
idades.push(27);
idades.push(13);
idades.push(16);
idades.push(37);
idades.push(45);

const menorDeIdade = idades.filter((idade) => idade < 18);
console.log(menorDeIdade);

//Tupla
const pessoaTupla: [string, number] = ['Andre', 27];
console.log(pessoaTupla);
