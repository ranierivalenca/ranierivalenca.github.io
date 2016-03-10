<?php
  include_once 'init.php';
  include_once 'check_login.php';

  if (isset($_POST['background'])) {
    // $_SESSION['color'] = $_POST['background'];
    $file_name = "color_" . $_SESSION['user'] . ".txt";
    file_put_contents($file_name, $_POST['background']);
  }

  redirect('home.php');
?>