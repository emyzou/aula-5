/*
* Primeiro programa em JavaScript
* Emilly Agatha
*/

console.log("Olá mundo!");
//prompt("Qual é o seu nome?");
const variavelA = 100;
const variavelB = variavelA + 50;
const variavelC = variavelA / variavelB;
console.log(variavelA);
console.log(variavelB);
console.log(variavelC);

//variavel let
let numero = 5;
console.log(numero);
numero = 120 + 5;
console.log(numero);


//Concatenar textos
/*
let nome = "Emilly";
let sobreNome = "Agatha";
let idade = 16;
console.log("Olá", nome, sobreNome, "voce tem", idade, "anos"); 
*/
//booleanas
const variavelFalsa = false;
const variavelVerdadeira = true;

console.log("Variável falsa: " + variavelFalsa);
console.log("Variável verdadeira: " + variavelVerdadeira);

//Exercício 1

let nome = "Emilly";
let sobreNome = "Agatha";
let idade = 16; 
let profissao = "estudante";
console.log("Meu nome é", nome, sobreNome, "tenho", idade, "anos e sou", profissao);

 //typeof
 console.log(typeof nome);
 console.log(typeof idade);
 console.log(typeof profissao);

 let banana;
 console.log(typeof banana);
 banana = "fruta";
 console.log(typeof banana);

 const vazio = null;
 console.log(typeof vazio);


 //PROMPT

 let valor = prompt("Seu nome");
 let valor2 = prompt("Sua idade");
 console.log(valor);
 console.log(typeof valor);
 console.log(typeof Number (valor2));

 

