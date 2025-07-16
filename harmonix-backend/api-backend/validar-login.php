<?php
// INICIAR SESSÃO GLOBAL
session_start(); // PERMITE TRABALHAR COM VARIÁVEIS GLOBAIS

// EXIBIR DADOS DO ARRAY (vetor)
// var_dump($_POST);exit;

if ($_POST) {
    // ARMAZENA OS DADOS DIGITADOS NA TELA DE LOGIN
    $email = $_POST["email"];
    $password = $_POST["password"];
    $remember = $_POST["remember"] ?? "off";

    // VERIFICA SE O EMAIL E SENHA ESTÃO CORRETOS
    require("requests/login/get.php");
    // var_dump($response);exit;
    if ($response['status'] == "success") {
        $_SESSION["autenticado"] = true; // CRIA VARIÁVEL GLOBAL
        $_SESSION["tempo_login"] = time(); // CRIA VARIÁVEL COM TEMPO DE LOGIN

        // VERIFICAR SE É NECESSÁRIO GRAVAR EMAIL E SENHA
        if ($remember == "on") {
            setcookie("email", $email);
            setcookie("password", $password);
            setcookie("remember", $remember);
        } else {
            setcookie("email");
            setcookie("password");
            setcookie("remember");
        }

<<<<<<< HEAD
        $_SESSION['url'] = "http://localhost:8080";
        header("Location: ./index.php");
=======
        $_SESSION['url'] = "http://localhost:3000";
        header("Location: /pages/main");
>>>>>>> d415dfeecb561643d6e9ba650855d76dc14cd943
    } else {
        $_SESSION['msg'] = "E-mail ou senha incorretos!";
        header("Location: ./tela-login.php");
    }
} else {
    // REDIRECIONA PARA A TELA DE LOGIN
    header("Location: ./tela-login.php");
}
