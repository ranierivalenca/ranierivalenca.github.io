<html>
  <body>
    <h1>Hello World!</h1>
    <?php
      //$videos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      $videos = range(1, 10);
      // for ($i = 0; $i < sizeof($videos); $i++) {
      foreach($videos as $video) {
    ?>
        <li>
          <a href="pagina.php?video=<?php echo $video; ?>">
            Video <?php echo $video; ?>
          </a>
        </li>
    <?php
      }
    ?>
    <form action="submit.php" method="POST">
      Digite o texto:
      <input type="text" name="texto-1">
      <br />
      Digite outro texto:
      <input type="text" name="texto-2">
      <br />
      <input type="submit" value="Enviar" />
    </form>
  </body>
</html>