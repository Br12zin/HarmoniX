<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

// Conecta-se ao banco de dados
$allowed_origins = [
    'http://localhost:3000',
    'http://localhost:8081',
    'http://localhost:8082',
    'http://localhost:8083',
    'http://localhost:8084',
    'http://localhost:8085',
    'http://localhost:8086',
    'http://localhost:8087',
    'http://localhost:8088',
    'http://localhost:8000',
    'https://meusite.com',
    'https://g1a.com.br/grupo-01/api-backend/',
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
}

// Define os headers CORS
// header('Access-Control-Allow-Origin: http://localhost:3000, http://localhost:8081'); // Mudar Depois
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json; charset=utf-8');

// Define uma constante com o método HTTP da requisição
define('method', $_SERVER['REQUEST_METHOD']);

// Responde imediatamente a requisições OPTIONS (pré-flight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once 'conn.php';

if (!isset($conn) || !($conn instanceof PDO)) {
    http_response_code(500);
    $result = array(
        'status' => 'error',
        'message' => 'Database connection not established'
    );
    echo json_encode($result);
    exit;
}

$headers = function_exists('getallheaders') ? getallheaders() : [];

// Normaliza todas as chaves para minúsculas
$normalized = [];

foreach ($headers as $key => $value) {
    $normalized[strtolower($key)] = $value;
}

$token = $normalized['authorization'] ?? ''; // funciona mesmo se vier minúsculo
$token = trim($token);

// $headers = apache_request_headers();
// $token = isset($headers['Authorization']) ? $headers['Authorization'] : null;

if (empty($token)) {
    http_response_code(400);
    $result = array(
        'status' => 'error',
        'message' => 'Authorization token is required'
    );
    echo json_encode($result);
    exit;
} else {
    // Monta a sintaxe SQL de busca
    // SHA1 está sendo usado para diferenciar maiusculas de minusculas atraves de criptografia
    $sql = "
    SELECT cliente, validade, status
    FROM token
    WHERE SHA1(token) = SHA1(:token)
    ";

    // Preparar a sintaxe SQL
    $stmt = $conn->prepare($sql);
    // Vincular o parâmetro :token com o valor da variável $token
    $stmt->bindParam(':token', $token, PDO::PARAM_STR);

    // Executar a sintaxe SQL
    $stmt->execute();
    // Obter os dados do banco de dados como objeto

    $data = $stmt->fetch(PDO::FETCH_OBJ);

    // Verifica se o resultado da pesquisa é vazio
    if (empty($data)) {
        // Se o resultado for vazio, retorna um erro
        http_response_code(401);
        $result = array(
            'status' => 'error',
            'message' => 'Invalid authorization token'
        );
        echo json_encode($result);
        exit;
    } else {


        // SE usasse fetchAll Seria $data[0]
        // Se for 0 o token esta inativo
        if ($data->status == 0) {
            http_response_code(401); // Unauthorized
            $result = array(
                'status' => 'error',
                'message' => 'Token is inactive'
            );
            echo json_encode($result);
            exit;
        }
        // Verifica se o token expirou
        elseif (strtotime($data->validade) < strtotime(date('Y-m-d'))) {
            http_response_code(401);
            $result = array(
                'status' => 'error',
                'message' => 'Token has expired'
            );
            echo json_encode($result);
            exit;
        }
    }
}
