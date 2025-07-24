<?php


try {

    $postfields = json_decode(file_get_contents('php://input'), true);

    $email = $postfields['email'] ?? null;
    $senha = $postfields['senha'] ?? null;

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

        session_set_cookie_params([
            'httponly' => true,
            'secure' => false, // só funciona com HTTPS
            'samesite' => 'Strict'
        ]);
        session_start();
        $_SESSION['cliente_id'] = $usuario['cliente_id'];
        $result = [
            'status' => 'success',
            'message' => 'Login realizado com sucesso!',
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
