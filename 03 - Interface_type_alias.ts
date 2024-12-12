// Interface
// interface Person {
//     nome: string;
//     idade: number;
//     profissao?: string; // o ? indica q o atributo pode ser opcional
//     altura: number;
// }

type Person = {
    nome: string;
    idade: number;
    profissao?: string; // o ? indica q o atributo pode ser opcional
    altura: number;
}
const pessoa: Person = {
    nome: 'Luis',
    idade: 27,
    profissao: 'dev',
    altura: 1.70,
}

const pessoa2: Person = {
    nome: 'Luis',
    idade: 27,
    altura: 1.70,
}

console.log(pessoa);
console.log(pessoa2);

//type aliases
type Criterio = "greater" | "lower"
function choseNumber(n1: number, n2: number, criterio?: Criterio): number {

    switch (criterio) {
        case "greater":
            return n1 > n2 ? n1 : n2;
        case "lower":
            return n1 < n2 ? n1 : n2;
        default:
            const aleatorio = Math.random();
            if (aleatorio >= 0.5) return n1;
            return n2;
    }
}

console.log(choseNumber(10, 20, "lower"));
