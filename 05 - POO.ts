console.log('POO')

interface Pessoa {
    nome: string;
    idade: number;
    altura: number;
}

class Dev implements Pessoa {
    nome: string;
    idade: number;
    altura: number;
    private _cpf: string;
    especialidade: string;
    senioridade: string;

    constructor(nome: string, idade: number, altura: number, _cpf: string,especialidade: string, senioridade: string) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this._cpf = _cpf;
        this.especialidade = especialidade;
        this.senioridade = senioridade;
    }

    get cpf(): string {
        return this._cpf;
    }

    set cpf(newCpf: string) {
        this._cpf = newCpf;
    } 

    programar() {
        console.log('UGA MIM PROGRAMAR');
    }
}

const d1 = new Dev('Andre', 27, 1.70, '611.490.743-45','Java', 'Jr');

console.log(d1);
d1.programar();
console.log(d1.cpf);
d1.cpf = '611.490.743-56';
console.log(d1.cpf);

