<?php
    require "config.php";

    mysql_connect(DB_SERVER, DB_USER);
    mysql_select_db("mafia_digital");
    $result = mysql_query("SELECT * FROM `usuarios`");
    while($row = mysql_fetch_assoc($result)) {
        echo "Usuário: " . $row['usuario'];
    }
?>