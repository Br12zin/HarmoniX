<?php

require_once __DIR__ . '/vendor/autoload.php';
define('DB_HOST', '50.116.87.103'); // Servidor do banco de dados
define('DB_USER', 'g1aco290_alunos'); // Usuário do banco de dados
define('DB_PASS', 'Alunos@2025'); // Senha do banco de dados
define('DB_NAME', 'g1aco290_grupo01'); // Nome do banco de dados


try {

    // Create connection
    $conn = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME, DB_USER, DB_PASS);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // Define o modo de erro do PDO para exceções
} catch (Exception $e) {
    echo "Connection failed: " . $e->getMessage();
    exit;
}
