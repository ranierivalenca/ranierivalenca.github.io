<?php
    include_once 'init.php';
    include_once 'check_login.php'
?>

<html>
  <head>
    <meta charset="utf-8">
    <title>Configurações</title>
  </head>
  <body>
    <h1>Configurações</h1>
    <form action="update.php" method="POST">
      <div>
        Cor: <input type="color" name="background">
      </div>
      <div>
        <input type="submit" value="ok">
      </div>
    </form>
  </body>
</html>