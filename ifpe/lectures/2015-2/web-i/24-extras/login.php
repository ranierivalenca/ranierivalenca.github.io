<?php
  include 'init.php';

  function read_file($file) {
    $content = file_get_contents($file);
    $arr = explode(';', $content);
    return $arr;
  }

  if (isset($_POST['login']) && isset($_POST['password'])) {
    $login = $_POST['login'];
    $password = $_POST['password'];

    login($login, $password);
  }

  if (isLogged()) {
    redirect('home.php');
  }
  redirect('index.php');
?>