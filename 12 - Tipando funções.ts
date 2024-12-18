// Função com tipos explícitos nos parâmetros e no retorno
function add(a: number, b: number): number {
    return a + b;
}

// Função que não retorna nada (void)
function logMessage(message: string): void {
    console.log(`Mensagem: ${message}`);
}

// Função com tipo de retorno como string | number (Union Type)
function formatData(input: string | number): string {
    if (typeof input === "number") {
        return `Número formatado: ${input.toFixed(2)}`;
    }
    return `Texto formatado: ${input.toUpperCase()}`;
}

// Função como tipo em uma variável (definindo assinatura)
const multiply: (x: number, y: number) => number = (x, y) => x * y;

// Função com parâmetro opcional
function greet(name?: string): string {
    return name ? `Olá, ${name}!` : "Olá!";
}

// Função com um parâmetro padrão
function calculateArea(width: number, height: number = 10): number {
    return width * height;
}

// Função com Rest Parameters
function sumAll(...numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
}

// Função com retorno de outra função (Higher-Order Function)
function createMultiplier(factor: number): (value: number) => number {
    return (value: number) => value * factor;
}

// Uso das funções
console.log("=== Funções Tipadas ===");
console.log("Soma de 3 + 5:", add(3, 5));
logMessage("Bem-vindo ao TypeScript!");

console.log("Formatando número:", formatData(123.456));
console.log("Formatando texto:", formatData("typescript"));

console.log("Multiplicação 4 * 6:", multiply(4, 6));

console.log(greet("Alice")); // Com nome
console.log(greet());        // Sem nome

console.log("Área (5x10):", calculateArea(5));
console.log("Área (5x15):", calculateArea(5, 15));

console.log("Soma total:", sumAll(1, 2, 3, 4, 5));

const double = createMultiplier(2);
console.log("Dobro de 10:", double(10));
