<?php
    $filename = $_POST['nome'] . ".txt";
    if (file_exists($filename)) {
        echo "usuário já cadastrado";
    } else {
        echo "usuario: " . $_POST['nome'];
        echo "<br>";
        echo "email: " . $_POST['email'];
    }
?>