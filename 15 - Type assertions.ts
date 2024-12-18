// Exemplo básico: Assert como string
let someValue: unknown = "Este é um texto";
let strLength: number = (someValue as string).length;
console.log(`Comprimento da string: ${strLength}`);

// Outro método para assertions (menos comum)
let strLengthAlternative: number = (<string>someValue).length;
console.log(`Comprimento da string (alternativo): ${strLengthAlternative}`);

// Trabalhando com DOM (comumente usado em TypeScript para Type Assertions)
const inputElement = document.getElementById("username") as HTMLInputElement;
if (inputElement) {
    inputElement.value = "Preenchendo o input com type assertions!";
    console.log(`Valor do input: ${inputElement.value}`);
}

// Evitando erros ao acessar propriedades de um tipo desconhecido
let unknownValue: unknown = { name: "Alice", age: 30 };
if ((unknownValue as { name: string }).name) {
    console.log(`Nome: ${(unknownValue as { name: string }).name}`);
}

// Type assertion com Union Types
type Animal = { name: string; species: string };
type Robot = { name: string; model: string };

let petOrBot: Animal | Robot = { name: "Sparky", species: "Dog" };

if ((petOrBot as Animal).species) {
    console.log(`É um animal da espécie: ${(petOrBot as Animal).species}`);
} else if ((petOrBot as Robot).model) {
    console.log(`É um robô do modelo: ${(petOrBot as Robot).model}`);
}

// Type assertion em arrays
let mixedArray: (string | number)[] = ["Texto", 42, "Outro texto"];
let firstElement = mixedArray[0] as string;
console.log(`O primeiro elemento é uma string: ${firstElement.toUpperCase()}`);

// Type assertion com funções genéricas
function getElement<T>(elements: T[], index: number): T {
    return elements[index];
}

let numbers = [10, 20, 30];
let numberElement = getElement(numbers, 1) as number; // Garantindo que o retorno é um número
console.log(`Elemento do array de números: ${numberElement}`);
