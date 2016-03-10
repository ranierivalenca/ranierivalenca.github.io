<?php
  include 'init.php';

  if (!isLogged()) {
    redirect('index.php');
  }
?>

<html>
  <head>
    <meta charset="utf-8">
    <title>Bem vindo, <?= $_SESSION['user'] ?></title>
    <link rel="stylesheet" href="style.php">
  </head>
  <body>
    <img src="image.php">
    <h1>Página pessoal</h1>
    <h2>Bem vindo, <?= $_SESSION['user'] ?></h2>
    <p>
      <a href="config.php">Configurações</a>
    </p>
    <p>
      <a href="logout.php">Logout</a>
    </p>
  </body>
</html>