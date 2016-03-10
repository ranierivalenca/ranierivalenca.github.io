<?php
  require 'init.php';

  if (isLogged()) {
    redirect('home.php');
  }
?>

<html>
  <head>
    <meta charset="utf-8">
    <title>Login</title>
  </head>
  <body>
    <form action="login1.php" method="POST">
      <label>
        Usuário:
        <input type="text" name="login">
      </label>
      <br>
      <label>
        Senha:
        <input type="password" name="password">
      </label>
      <br>
      <input type="submit" value="ok">
    </form>
    <?php
      if (isset($_SESSION['error'])) {
        echo $_SESSION['error'];
      }
    ?>
  </body>
</html>