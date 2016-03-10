<?php
    session_start();

    function wtfbea($file_name) {
        $content = file_get_contents($file_name);
        $arr = explode(";", $content);
        return $arr;
    }

    function bruno($file_name) {
        $content = file_get_contents($file_name);
        $arr = explode(';', $content);
        $user_pw_arr = [];
        foreach($arr as $user_pw) {
            list($user, $pw) = explode(":", $user_pw);;
            $user_pw_arr[$user] = $pw;
        }
        return $user_pw_arr;
    }

    function redirect($page) {
        header("location:" . $page);
    }

    if (isset($_POST['login'])
        && isset($_POST['password'])) {
        $login = $_POST['login'];
        $password = $_POST['password'];

        $users_arr = wtfbea("users.txt");
        $passwords_arr = wtfbea("passwords.txt");

        $user_passwords = bruno("users_passwords.txt");

        if (array_search($login, $users_arr) !== false) {
            $user_idx = array_search($login, $users_arr);
            if ($passwords_arr[$user_idx] == $password) {
                $_SESSION['user'] = $login;
                $_SESSION['logged'] = true;
                unset($_SESSION['error']);
                redirect("home.php");
            } else {
                $_SESSION['error'] = 'senha incorreta';
                redirect("index.php");
            }
        } else {
            $_SESSION['error'] = 'usuario nao existe';
            redirect("index.php");
        }
    }
?>