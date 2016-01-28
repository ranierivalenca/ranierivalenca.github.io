// Comentários de linha em JavaScript são escritos utilizando "//"
// Esses comentários também podem ser colocados após uma linha de código

// Em JavaScript utiliza-se a palavra-chave "var" para declarar uma variável:
var x; // Declara a variável x

// Para atribuir um valor a uma variável, utiliza-se a sintaxe padrão de muitas linguagens, utilizando o sinal de "=":
x = 0;

// JavaScript não restringe uma variável a um tipo de dados específico;
// portanto, uma variável pode assumir valores de diversos tipos:
x = 1;              // number
x = 0.01;           // number (mesmo sendo ponto flutuante, JavaScript considera tudo como "number")
x = "hello world";  // string
x = 'hello world';  // string (também podem ser declaradas utilizando apóstrofos)
x = true;           // boolean
x = false;          // boolean (!)
x = null;           // representa "valor nenhum"
x = undefined;      // similar ao "null"

/* JavaScript também permite 
   comentários com múltiplas linhas.

   Basta que seja delimitado pelos símbolos
   deste comentário */

// Dois tipos muito importantes em JavaScript são os objetos e arrays
// Um objeto é uma "coleção" de pares nome/valor:
var livro = {               // objetos em JavaScript são declarados entre chaves
    topico: "JavaScript",   // a propriedade 'topic' tem o valor 'JavaScript'; note também a vírgula ao final da linha
    paginas: 1061,          // a propriedade 'paginas' tem o valor 1061 (numérico)
    completo: true,         // a propriedade 'completo' tem o valor true (booleano)
    conteudo: {}            // {} descreve um objeto vazio, sem quaisquer propriedades; note que ao final da última propriedade, a vírgula é dispensável
}

// Para acessar ou modificar as propriedades de um objeto, pode-ser utilizar "." ou "[]":
livro.topico                // vai retornar "JavaScript"
livro['paginas']            // retorna 1061; note que a propriedade é passada como uma string, entre aspas (simples ou duplas)
livro.completo = false;     // podemos alterar o valor de uma propriedade utilizando o sinal de "="
livro.autor = "alguém";     // assim como podemos incluir novas propriedades que não estavam definidas
livro.capa;                 // CUIDADO!!! Isso vai gerar um erro, porque essa propriedade não existe. Mas tem como testar isso, conforme veremos.

// JavaScript também aceita a criação de arrays, que são nada mais do que objetos indexados com números:
var primos = [2, 3, 5, 7];  // Utiliza-se os operadores [] para criar um array.
primos[0]                   // retorna 2; note que o índice (propriedade do objeto) é um inteiro, e não uma string.
primos.length;              // propriedade de um objeto do tipo array, contendo a quantidade de elementos no array; neste caso, 4.
primos[4] = 11;             // similar aos objetos, podemos adicionar novos elementos simplesmente usando a atribuição

// Podemos também combinar objetos e arrays em estruturas mais complexas:
var pontos = [
    {x: 0, y: 0},
    {x: 1, y: 1}
];
var dados = {
    interacao_1: [1, 1, 3, 4],
    interacao_2: [2, 3, 3, 5]
}

// JavaScript possui os quatro operadores aritméticos básicos:
2 + 3;      // adição
5 - 10;     // subtração
3 * 9;      // multiplicação
17 / 2;     // divisão

// O nível de complexidade dos operandos é abstraído
dados.interacao_2[0] - dados.interacao_1[0];

// JavaScript também tem formas abreviadas de alguns operadores:
var count = 0;      // variável
count++;            // incrementa (soma 1)
count += 5;         // soma 3
count--;            // decrementa (subtrai 1)
count -= 2;         // subtrai 2
count *= 4;         // multiplica por 4
count;

// Há também os operadores lógicos:
var x = 2, y = 3;   // podemos declarar múltiplas variáveis numa mesma linha

x == y;             // igualdade
x != y;             // diferente
x < y;              // menor que
x <= y;             // menor ou igual a
x > y;              // maior que
x >= y;             // maior ou igual a
"um" == "um";       // true
"um" == "dois";     // false
"três" > "quatro";  // true; "t" > "q"
false == (x > y);   // true; (x > y) é false, que é igual a false

(x == 2) && (y == 3);   // operador "E"; true
(x > 3) || (y < 3);     // operador "OU"; false
!(x == y);              // operador "NOT"; true

// Em JavaScript também podemos escrever funções:
function soma1(x) {     // define uma função chamada "soma1", que recebe um parâmetro
    return x + 1;       // retorna o valor do argumento recebido somado de 1
}                       // usamos chaves para delimitar o escopo da função

soma1(y);               // 4; (y continua com o valor 3)

var quadrado = function(x) {    // funções podem ser atribuídas a variáveis. É como se tivéssemos uma função chamada "quadrado"
    return x * x;
};                              // como é uma atribuição, utilizamos um ; para delimitar o final da função

// E claro, JavaScript também tem suas estruturas de controle, que utilizam a mesma sintaxe de Java
function absoluto(x) {
    if (x > 0) {
        return x;
    } else {
        return -x;
    }
}

function fatorial(x) {
    var prod = 1;
    while (x > 1) {
        prod *= x;
        x--;
    }
    return prod;
}

function fatorial2(x) {
    var prod = 1;
    for (i = 2; i <= x; i++)
        prod *= i;              // como temos apenas uma linha de comando dentro do laço, as chaves são desnecessárias
    return prod;
}

// JavaScript é uma linguagem orientada a objetos, portanto seus objetos podem ter métodos:
var a = [];         // Declara um array vazio
a.push(1, 3, 7);    // Chama o método "push" de arrays, que insere elementos no final do array
a.reverse();        // Chama o método "reverse" do array, que inverte a ordem dos elementos