let primeiroNome = "2";
console.log("Olá, " + primeiroNome + "!");

let idadePessoa = 11;
console.log("Você tem " + idadePessoa + " anos de idade.");

let maiorDeIdade = idadePessoa >= 18;
console.log("É maior de idade? " + maiorDeIdade);

// null e undefined

let enderecoPessoa = null;
console.log("Endereço: " + enderecoPessoa);

//console.log("Multiplicação: " + enderecoPessoa * 2);

let telefonePessoa;
console.log("Telefone: " + telefonePessoa);

//console.log("Multiplicação: " + telefonePessoa * 2);

if (primeiroNome) {
    console.log("Multiplicação: " + primeiroNome * 2);
} else {
    console.log("Nome nao existe");
}

// NULL E UNDEFINED => são tratados como false em contextos booleanos
// Strings e números => são tratados como true em contextos booleanos
// Exceto 0 e a string vazia ("")

// Transformar um número em uma string
let numeroOriginal = 1;
let numeroComoTexto = String(numeroOriginal);
console.log(typeof(numeroComoTexto));

// Transformar uma string em um número
let textoNumerico = "123";
let textoComoNumero = Number(textoNumerico);
console.log(typeof(textoComoNumero));

// VARIÁVEIS
// let, var, const

// let é usado para declarar variáveis que podem mudar de valor
let numeroVariavel = 21;
numeroVariavel = 12;

// const é usado para declarar variáveis que não podem mudar de valor

const numeroConstante = 12;
// numeroConstante = 31 = SyntaxError