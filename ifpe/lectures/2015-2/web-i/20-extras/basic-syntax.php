<?php
    /*
     * PHP: Hypertext Preprocessor
     *
     * Linguagem interpretada, open source e multiplataforma para servidores
     *
     * Todo conteúdo que será interpretado pelo PHP deve ser
     * escrito entre as tags <?php ... ?>
     *
     * Comentários de linha em PHP devem ser precedidos pelos símbolos "//" ou
     * "#"
     *
     * Comentários de múltiplas linhas devem ser encapsulados pelos limites
     * deste comentário
     *
     */

    // Variáveis
    $var = 10;          // Variáveis em PHP começam SEMPRE com o símbolo "$"
                        // E a atribuição é feita com sinal de "="

    $var = "string";    // PHP é uma linguagem com tipagem dinâmica,
                        // logo não precisamos declarar o tipo das variáveis;
                        // ele é inferido a partir do que a variável contém

    $_1 = 10;           // Nomes de variáveis devem começar com uma letra ou
                        // "_"; são permitidos letras, números e "_"

    $var = 10;          // gettype($var) == integer
    $var = 1.5;         // gettype($var) == double
    $var = "1.5";       // gettype($var) == string
    $var = false;       // gettype($var) == boolean
    $var = true;        // gettype($var) == boolean
    $var = [1, "2"];    // gettype($var) == array

    $tmp = 10.5;
    $var = (integer)$tmp;   // Pode-se forçar um tipo de variável, através
                        // de casting

    // Arrays
    $arr = [1, 2, "e"]; // PHP aceita arrays "mistos"; cada elemento
                        // pode ter um tipo distinto

    $arr = [];          // Este é um array vazio

    $arr = [1 => 10, 2 => 20, "ok" => false];  // Este é um array indexado;
                        // $arr[1] == 10;
                        // $arr[2] == 20;
                        // $arr["ok"] == false;

    // Imprimindo variávies
    $var = 10;
    print $var;         // O comando "print" é um dos comandos utilizados para
                        // escrever algo na saída padrão

    print($var);        // também pode ser utilizado com parênteses,
                        // como se fosse uma função

    echo $var;          // O comando "echo" tem o mesmo efeito que o print

    echo($var);         // Exatamente o mesmo

    print_r($arr);      // É possível imprimir arrays usando a função print_r();
                        // note que print_r() deve ser chamado como função;
                        // se a variável não for um array, print_r() se
                        // comportará como print()

    var_dump($arr);     // var_dump é outra função extremamente útil;
                        // serve para ver o tipo e conteúdo de uma variável

    // Operações aritméticas
    $var = 8 + 2;       // Soma
    $var = 8 - 2;       // Subtração
    $var = 8 / 2;       // Divisão
    $var = 8 * 2;       // Multiplicação
    $var = 7 % 2;       // Módulo / resto da divisão

    // Strings
    $var = 'string';    // Strings também podem ser escritas com aspas simples

    $s1 = 'parte da ';
    $s2 = 'string';
    $var = $s1 . $s2;   // Concatenação de strings, em PHP, dá-se pelo
                        // uso do operador "."

    $var = "Esta é uma " . $s2 . "!";
    $var = "Esta é uma $s2!";   // Também podemos colocar a variável diretamente
                                // DENTRO da string; note que, para a variável
                                // ser avaliada, a string precisa estar
                                // delimitada com aspas duplas

    // Operações matemáticas
    $n = 2.55;
    $var = abs($n);     // valor absoluto (sem o sinal)
    $var = pow($n, 3);  // potência
    $var = sqrt($n);    // raiz quadrada
    $var = round($n);   // arendondamento
    $var = intval($n);  // valor inteiro (floor)

    number_format("43238.745341", 2, ",", "."); // Formata o número com o
                        // número de casas decimais desejado, utilizando os
                        // separadores definidos
?>