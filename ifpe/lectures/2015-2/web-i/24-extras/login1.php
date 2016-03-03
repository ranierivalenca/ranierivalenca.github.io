<?php
    session_start();

    if (isset($_POST['login'])
        && isset($_POST['password'])) {
        $login = $_POST['login'];
        $password = $_POST['password'];

        $users_str = file_get_contents("users.txt");
        $users_arr = explode(";", $users_str);

        $passwords_str = file_get_contents("passwords.txt");
        $passwords_arr = explode(";", $passwords_str);

        if (array_search($login, $users_arr) !== false) {
            $user_idx = array_search($login, $users_arr);
            if ($passwords_arr[$user_idx] == $password) {
                $_SESSION['user'] = $login;
                $_SESSION['logged'] = true;
                unset($_SESSION['error']);
                header("location:home.php");
            } else {
                $_SESSION['error'] = 'senha incorreta';
                header("location:index.php");
            }
        } else {
            $_SESSION['error'] = 'usuario nao existe';
            header("location:index.php");
        }
    }
?>