<?php
    $imagem = file_get_contents("pudim.jpg");
    header("content-type:image/png");
    echo $imagem;
?>