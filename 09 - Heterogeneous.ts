// Definição de um Enum Heterogêneo
enum HeterogeneousEnum {
    Success = 1,          // Número
    Error = "ERROR",      // String
    Pending = 0,          // Número
    Canceled = "CANCELED" // String
}

// Função para exibir valores do enum
function displayEnumValue(value: HeterogeneousEnum): void {
    console.log(`Valor do enum: ${value}`);
}

// Função que interpreta o valor do enum e retorna uma mensagem personalizada
function interpretEnum(value: HeterogeneousEnum): string {
    switch (value) {
        case HeterogeneousEnum.Success:
            return "Operação foi um sucesso!";
        case HeterogeneousEnum.Error:
            return "Ocorreu um erro durante a operação.";
        case HeterogeneousEnum.Pending:
            return "A operação está pendente.";
        case HeterogeneousEnum.Canceled:
            return "A operação foi cancelada.";
        default:
            return "Status desconhecido!";
    }
}

// Exemplo de uso
console.log("=== Valores do Enum Heterogêneo ===");
displayEnumValue(HeterogeneousEnum.Success);   // Exibe 1
displayEnumValue(HeterogeneousEnum.Error);     // Exibe "ERROR"

console.log("\n=== Interpretação dos Valores ===");
console.log(interpretEnum(HeterogeneousEnum.Success));  // "Operação foi um sucesso!"
console.log(interpretEnum(HeterogeneousEnum.Error));    // "Ocorreu um erro durante a operação."
console.log(interpretEnum(HeterogeneousEnum.Pending));  // "A operação está pendente."
console.log(interpretEnum(HeterogeneousEnum.Canceled)); // "A operação foi cancelada."
