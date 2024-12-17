// Função que aceita e retorna um tipo `any`
function processData(input: any): any {
    console.log("Tipo recebido:", typeof input);
    console.log("Valor recebido:", input);

    // Fazendo diferentes operações com base no tipo
    if (typeof input === "string") {
        return input.toUpperCase(); // Converte string para maiúsculas
    } else if (typeof input === "number") {
        return input * 2; // Dobra o número
    } else if (Array.isArray(input)) {
        return input.length; // Retorna o tamanho do array
    } else if (typeof input === "object" && input !== null) {
        return Object.keys(input); // Retorna as chaves do objeto
    } else {
        return "Tipo não suportado";
    }
}

// Exemplo de uso com `any`
console.log("=== Processando Dados ===");

let data: any; // Declaração de uma variável do tipo `any`

// Trabalhando com strings
data = "hello";
console.log("Resultado:", processData(data));

// Trabalhando com números
data = 42;
console.log("Resultado:", processData(data));

// Trabalhando com arrays
data = [1, 2, 3];
console.log("Resultado:", processData(data));

// Trabalhando com objetos
data = { name: "TypeScript", version: 5 };
console.log("Resultado:", processData(data));

// Trabalhando com um tipo desconhecido
data = true;
console.log("Resultado:", processData(data));
