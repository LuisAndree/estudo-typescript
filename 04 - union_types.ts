// * Utility Types 

// 1. Partial 
type PersonPartial = Partial<Person> // torna todos os parametros não obrigatorios

const outraPessoa: PersonPartial = {

}

type PersonRequired = Required<Person> // torna todos os parametros obrigatorios

type PersonPicked = Pick<Person, 'nome' | 'idade'> // escolhe alguns atributos

type PersonOmit = Omit<Person, 'profissao'> // omite catributos escolhidos

type CriterioExclude = Exclude<Criterio, 'greater'> // exclue um dos tipos da uniao

type CatName = "miffy" | "boris" | "mordred";

interface CatInfo {
    age: number;
    breed: string;
}

const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};

cats.boris;

console.log(cats)
