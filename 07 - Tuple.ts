// Definindo uma tupla
let TS: [string, number, boolean];

// Inicializando a tupla
TS = ["TypeScript", 2024, true];

// Função para exibir os valores da tupla
function displayTuple(tuple: [string, number, boolean]): void {
    console.log("Primeiro elemento:", tuple[0]);
    console.log("Segundo elemento:", tuple[1]);
    console.log("Terceiro elemento:", tuple[2]);
}

// Função para modificar a tupla
function updateTuple(tuple: [string, number, boolean], newString: string, newNumber: number, newBoolean: boolean): [string, number, boolean] {
    tuple[0] = newString;
    tuple[1] = newNumber;
    tuple[2] = newBoolean;
    return tuple;
}

// Exibindo a tupla inicial
console.log("Tupla inicial:");
displayTuple(TS);

// Atualizando a tupla
TS = updateTuple(TS, "JavaScript", 2025, false);

// Exibindo a tupla atualizada
console.log("\nTupla atualizada:");
displayTuple(TS);
