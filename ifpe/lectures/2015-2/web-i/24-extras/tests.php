<?php
  $alunos_str = "gleibson,flaviana,dulci,jp,sergio,mateus,bruno,pedro";
  var_dump($alunos_str);
  $alunos = explode(',', $alunos_str);
  $str = strstr($alunos_str, "dulci");
  var_dump($str);

  if ($str !== false) {
    echo "estah na sala";
  } else {
    echo "naum estah na sala";

  }
?>
