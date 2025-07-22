<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

// Conecta-se ao banco de dados
require_once 'conn.php';

// Define os headers CORS
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json; charset=utf-8');

// Responde imediatamente a requisições OPTIONS (pré-flight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Define uma constante com o método HTTP da requisição
define('method', $_SERVER['REQUEST_METHOD']);
