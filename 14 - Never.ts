// Função que lança um erro (não retorna nada, termina a execução)
function throwError(message: string): never {
    throw new Error(message);
}

// Função com loop infinito (não retorna, fica em execução contínua)
function infiniteLoop(): never {
    while (true) {
        console.log("Executando para sempre...");
    }
}

// Função para garantir que todas as possibilidades de um Union Type foram tratadas
type Status = "Pending" | "InProgress" | "Completed";

function handleStatus(status: Status): string {
    switch (status) {
        case "Pending":
            return "Aguardando...";
        case "InProgress":
            return "Em andamento...";
        case "Completed":
            return "Concluído!";
        // Garantir que todas as possibilidades foram tratadas
        default:
            return assertUnreachable(status);
    }
}

// Função auxiliar que usa `never` para garantir que o código não é alcançado
function assertUnreachable(value: never): never {
    throw new Error(`Valor inesperado: ${value}`);
}

// Uso das funções
console.log("=== Funções com never ===");

try {
    console.log("Status:", handleStatus("Pending")); // Tratado corretamente
    console.log("Status:", handleStatus("Unknown" as Status)); // Erro esperado
} catch (error) {
    console.error("Erro capturado:", error.message);
}

try {
    // Função que lança um erro
    throwError("Algo deu errado!");
} catch (error) {
    console.error("Erro capturado:", error.message);
}

// Atenção: Não execute este código sem supervisão, pois ele entrará em loop infinito!
// infiniteLoop();
