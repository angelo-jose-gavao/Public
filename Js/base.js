const nome = "Angelo Neto";
let nome2 = ""
let pessoaDefault = {
    nome: "Angelo Neto",
    idade: "33",
    trabalho: "DevJr"
}
let nomes = ["Angelo Neto", "Maria Godoi", "Pedro silva"];

let pessoasListaVazia[];

let pessoas = [
    {
        nome: "Angelo Neto",
        idade: "33",
        trabalho: "DevJr"
    },
    {
        nome: "Angelo Neto",
        idade: "33",
        trabalho: "DevJr"
    }
];

function alterarnome() {
    nome2 = "Maria Silva"
    console.log("valor alterado");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("valor alterado recebendo um nome");
    console.log(nome2);

}

function imprimirPessoa(pessoa) {
    console.log("nome:");
console.log(pessoa.nome);

console.log("idade:");
console.log(pessoa.idade);

console.log("trabalho:");
console.log(pessoa.trabalho);

}

function adicionarPessoas(pessoa) {
pessoas.push(pessoa);
}

//imprimirPessoa(pessoaDefault);
//imprimirPessoa({
//   nome: "Maria Godoi",
  //  idade: "55",
 //   trabalho: "Engenheira"
//});



//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silva");

//alterarnome();
