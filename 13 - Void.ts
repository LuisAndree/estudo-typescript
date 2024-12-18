// Função que não retorna nenhum valor
function logMessage(message: string): void {
    console.log(`Log: ${message}`);
}

// Função que executa uma ação e também não retorna nada
function notifyUser(): void {
    console.log("Notificando o usuário...");
}

// Callback tipado com void
function executeAction(action: () => void): void {
    console.log("Executando uma ação...");
    action();
}

// Exemplo de função que aceita um callback sem retorno
function iterateArray(arr: number[], callback: (value: number) => void): void {
    arr.forEach(callback);
}

// Função assíncrona que retorna void (simulando um processo assíncrono)
async function performAsyncTask(): Promise<void> {
    console.log("Iniciando uma tarefa assíncrona...");
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simula um atraso
    console.log("Tarefa assíncrona concluída.");
}

// Uso das funções
console.log("=== Funções com void ===");

logMessage("Bem-vindo ao TypeScript!"); // Exibe a mensagem no console

notifyUser(); // Notifica o usuário

// Executando uma ação com callback
executeAction(() => console.log("Ação foi executada!"));

// Iterando sobre um array com um callback que não retorna nada
const numbers = [1, 2, 3, 4, 5];
iterateArray(numbers, (value) => console.log(`Número: ${value}`));

// Executando uma função assíncrona que retorna void
performAsyncTask().then(() => console.log("Processo assíncrono finalizado."));
