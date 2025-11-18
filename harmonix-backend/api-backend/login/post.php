<?php


//  Antigo que funciona

// try {

//     $postfields = json_decode(file_get_contents('php://input'), true);

//     $email = $postfields['email'] ?? null;
//     $senha = $postfields['password'] ?? null;

//     if (empty($email) || empty($senha)) {
//         http_response_code(400);
//         throw new Exception('Email e senha são obrigatórios.');
//     }

//     $sql = "SELECT * FROM clientes WHERE email = :email AND senha = :senha";
//     $stmt = $conn->prepare($sql);
//     $stmt->bindParam(':email', $email);
//     $stmt->bindParam(':senha', $senha);
//     $stmt->execute();

//     $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

//     if ($usuario) {

//         session_set_cookie_params([
//             'httponly' => true,
//             'secure' => false, // só funciona com HTTPS
//             'samesite' => 'Strict'
//         ]);
//         session_start();
//         $_SESSION['cliente_id'] = $usuario['cliente_id'];
//         $result = [
//             'status' => 'success',
//             'message' => 'Login realizado com sucesso!',
//             'usuario' => $usuario
//         ];
//     } else {
//         $result = [
//             'status' => 'error',
//             'message' => 'Email ou senha inválidos.'
//         ];
//     }
// } catch (Exception $e) {
//     $result = [
//         'status' => 'error',
//         'message' => $e->getMessage()
//     ];
// } finally {
//     echo json_encode($result);
//     $conn = null;
// }


// Novo com token pra login e biometria

// Funcionalidade de login usando JWT que pode ser usada por apps móveis e frontends modernos
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$key = "1234"; // depois substitua por algo forte

try {
    $postfields = json_decode(file_get_contents('php://input'), true);

    $email = $postfields['email'] ?? null;
    $senha = $postfields['password'] ?? null;

    if (empty($email) || empty($senha)) {
        http_response_code(400);
        throw new Exception('Email e senha são obrigatórios.');
    }

    $sql = "SELECT * FROM clientes WHERE email = :email AND senha = :senha";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':senha', $senha);
    $stmt->execute();
    $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($usuario) {

        // Criar token JWT
        $payload = [
            "cliente_id" => $usuario["cliente_id"],
            "email" => $usuario["email"],
            "exp" => time() + (60 * 60 * 24 * 7), // expira em 7 dias
        ];

        $jwt = JWT::encode($payload, $key, 'HS256');

        $result = [
            'status' => 'success',
            'message' => 'Login realizado com sucesso!',
            'token' => $jwt,
            'usuario' => $usuario
        ];
    } else {
        $result = [
            'status' => 'error',
            'message' => 'Email ou senha inválidos.'
        ];
    }
} catch (Exception $e) {
    $result = [
        'status' => 'error',
        'message' => $e->getMessage()
    ];
} finally {
    echo json_encode($result);
    $conn = null;
}
