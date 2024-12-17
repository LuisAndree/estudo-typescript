// Definição do Enum
enum Status {
    Pending = "PENDING",
    InProgress = "IN_PROGRESS",
    Completed = "COMPLETED",
    Cancelled = "CANCELLED",
}

// Função para exibir o status
function displayStatus(status: Status): void {
    console.log(`O status atual é: ${status}`);
}

// Função para obter a próxima etapa com base no status atual
function getNextStatus(status: Status): Status {
    switch (status) {
        case Status.Pending:
            return Status.InProgress;
        case Status.InProgress:
            return Status.Completed;
        case Status.Completed:
            return Status.Completed; // Nenhum próximo status
        case Status.Cancelled:
            return Status.Cancelled; // Nenhum próximo status
        default:
            throw new Error("Status inválido!");
    }
}

// Uso do Enum
let currentStatus: Status = Status.Pending;

// Exibindo o status inicial
displayStatus(currentStatus);

// Atualizando o status
currentStatus = getNextStatus(currentStatus);
displayStatus(currentStatus);

// Atualizando para o próximo status
currentStatus = getNextStatus(currentStatus);
displayStatus(currentStatus);

// Tentando avançar além do estado final
try {
    currentStatus = getNextStatus(currentStatus);
    displayStatus(currentStatus);
} catch (error) {
    console.error(error);
}
