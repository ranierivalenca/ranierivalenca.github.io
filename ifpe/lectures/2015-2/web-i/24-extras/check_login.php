<?php
  include_once 'init.php';

  if (!isLogged()) {
    redirect('index.php');
  }
?>