<?php
  session_start();
  if (!isset($_SESSION['tasks'])) {
    $_SESSION['tasks'] = array();
  }
  if (isset($_POST['task'])) {
    array_push($_SESSION['tasks'], $_POST['task']);
  }
  if (isset($_GET['remove'])) {
    $id = $_GET['remove'];
    if (isset($_SESSION['tasks']) && isset($_SESSION['tasks'][$id])) {
      unset($_SESSION['tasks'][$id]);
    }
    header("location:/todo/");
  }
?>
<html>
  <head>
    <meta charset="utf-8">
    <title>Lista de tarefas</title>
  </head>
  <body>
    <form action="index.php" method="POST">
      Nova tarefa: <input type="text" name="task"> <input type="submit" value="ok">
    </form>
    Lista de tarefas:
    <ul>
      <?php
        $tasks = $_SESSION['tasks'];
        foreach($tasks as $id => $task) {
        ?>
          <li>
            <strong><?= $task; ?></strong>
            <small><a href="index.php?remove=<?= $id; ?>">x</a></small>
          </li>
        <?php
        }
      ?>
    </ul>
  </body>
</html>