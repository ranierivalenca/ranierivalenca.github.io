<?php
  class Questao
  {
      private $descricao;
      private $alternativas;
      private $audio;
      private $imagem;

      function __construct() {
        $this -> alternativas = [];

        $attrs = [
          'descricao', 'audio', 'imagem'
        ];
        foreach($attrs as $attr) {
          var_dump($attr);
          $this -> $attr = "";
        }
      }

      function getAudio() {
        return $this -> audio;
      }

      function setAudio($audio) {
        $this -> audio = $audio;
      }

      function __get($var) {
        if ($var == 'imagem') {
          return $this -> imagem . ".jpg";
        }
        return $this -> $var;
      }

      function __set($var, $value) {
        if ($var == 'imagem') {
          $value_arr = explode(".", $value);
          array_pop($value_arr);
          $this -> imagem = implode(".", $value_arr);
          return;
        }
        $this -> $var = $value;
      }
  }

  function adauto() {
    echo "adauto\n\n";
  }
  function bea() {
    echo "bea\n\n";
  }

  if ($_GET['a'] > $_GET['b']) {
    $fn = "adauto";
  } else {
    $fn = "bea";
  }

  $fn();

  $q = new Questao();

  $q -> setAudio("latido.mp3");

  $q -> imagem = "flaviana.jpg";
  var_dump($q -> imagem);

  var_dump($q);

  $dirs = explode(DIRECTORY_SEPARATOR, __FILE__);
  array_pop($dirs);
  var_dump(implode(DIRECTORY_SEPARATOR, $dirs));
?>