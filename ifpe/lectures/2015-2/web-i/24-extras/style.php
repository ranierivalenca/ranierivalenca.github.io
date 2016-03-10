<?php
  include_once 'init.php';
  header('content-type: text/css');

  define('FONT_FAMILY', 'arial');

  $font_size = '15px';
  // if (!isset($_SESSION['color'])) {
  //   $_SESSION['color'] = '#fff';
  // }
  // $cor = $_SESSION['color'];
  $file_name = "color_" . $_SESSION['user'] . ".txt";
  if (file_exists($file_name)) {
    $cor = file_get_contents($file_name);
  } else {
    $cor = "#fff";
  }

?>

* {
  background: <?= $cor ?>;
  font-family: '<?= FONT_FAMILY; ?>';
}
p {
    font-size: <?= $font_size; ?>;
}
div {
    font-size: <?= $font_size; ?>;
}
span {
    font-size: <?= $font_size; ?>;
}