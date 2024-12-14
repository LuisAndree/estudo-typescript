// Exemplo com ReadonlyArray em TypeScript

const myArray: ReadonlyArray<number> = [1, 2, 3, 4, 5];

const doubledArray = myArray.map(x => x * 2);
console.log("Array dobrado:", doubledArray); 

const filteredArray = myArray.filter(x => x > 3);
console.log("Elementos maiores que 3:", filteredArray); 

const mutableArray = [...myArray];
mutableArray.push(6);
console.log("Array mutável após conversão:", mutableArray); 

function printNumbers(numbers: ReadonlyArray<number>) {
  numbers.forEach(num => console.log("Número:", num));
}

printNumbers(myArray); 

const readonlyTuple: readonly [number, string] = [1, "TypeScript"];

console.log("Tupla somente leitura:", readonlyTuple); // [1, "TypeScript"]

type ReadonlyPerson = {
  readonly name: string;
  readonly age: number;
};

const person: ReadonlyPerson = { name: "Alice", age: 30 };

console.log("Pessoa somente leitura:", person); // { name: "Alice", age: 30 }
