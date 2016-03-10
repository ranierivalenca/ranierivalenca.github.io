<?php
  session_start();

  function isLogged() {
    if (isset($_SESSION['logged']) && $_SESSION['logged'] === true) {
      return true;
    }
    return false;
  }

  function redirect($to) {
    header("location:$to");
  }

  function login($user, $password) {
    function read_file($file) {
      $content = file_get_contents($file);
      $arr = explode(';', $content);
      return $arr;
    }

    $users = read_file('users.txt');
    $passwords = read_file('passwords.txt');

    $key = array_search($user, $users);
    if ($key !== false) {
      if ($passwords[$key] == $password) {
        $_SESSION['user'] = $user;
        $_SESSION['logged'] = true;
        unset($_SESSION['error']);
      } else {
        $_SESSION['error'] = 'senha errada';
      }
    } else {
      $_SESSION['error'] = 'usuário não existe';
    }
  }

  function logout() {
    unset($_SESSION['user']);
    unset($_SESSION['logged']);
  }
?>