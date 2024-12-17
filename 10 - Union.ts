// Definição de um Union Type
type Status = "Pending" | "InProgress" | "Completed" | "Cancelled";

// Função para exibir o status atual
function displayStatus(status: Status): void {
    console.log(`O status atual é: ${status}`);
}

// Função para avançar para o próximo status
function getNextStatus(status: Status): Status {
    switch (status) {
        case "Pending":
            return "InProgress";
        case "InProgress":
            return "Completed";
        case "Completed":
            return "Completed"; // Nenhum próximo status
        case "Cancelled":
            return "Cancelled"; // Nenhum próximo status
        default:
            throw new Error("Status inválido!");
    }
}

// Exemplo com Union Type para valores numéricos ou strings
type ID = number | string;

// Função para exibir um identificador
function displayID(id: ID): void {
    if (typeof id === "number") {
        console.log(`ID numérico: ${id}`);
    } else {
        console.log(`ID string: ${id}`);
    }
}

// Uso das funções
console.log("=== Trabalhando com Status ===");
let currentStatus: Status = "Pending";
displayStatus(currentStatus); // Exibe "Pending"

currentStatus = getNextStatus(currentStatus);
displayStatus(currentStatus); // Exibe "InProgress"

console.log("\n=== Trabalhando com ID ===");
let userID: ID = 12345; // ID como número
displayID(userID);

userID = "abc-123"; // ID como string
displayID(userID);
