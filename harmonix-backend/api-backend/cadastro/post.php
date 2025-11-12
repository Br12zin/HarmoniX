<?php

// Lê o corpo da requisição JSON
$input = json_decode(file_get_contents("php://input"), true);

// Validação dos campos recebidos
$name = $input['name'] ?? '';
$email = $input['email'] ?? '';
$password = $input['password'] ?? '';

if (!$name || !$email || !$password) {
  http_response_code(400);
  echo json_encode(['error' => 'Campos obrigatórios não preenchidos.']);
  exit;
}

// Hash da senha (segurança)
// $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

try {
  // Verifica se o e-mail já existe
  $checkStmt = $conn->prepare("SELECT cliente_id FROM clientes WHERE email = :email");
  $checkStmt->execute(['email' => $email]);
  if ($checkStmt->rowCount() > 0) {
    http_response_code(409);
    echo json_encode(['error' => 'E-mail já cadastrado.']);
    exit;
  }

  // Insere novo cliente
  $stmt = $conn->prepare("INSERT INTO clientes (nome, email, senha) VALUES (:nome, :email, :senha)");
  $stmt->execute([
    ':nome' => $name,
    ':email' => $email,
    ':senha' => $password
  ]);

  http_response_code(201);
  echo json_encode(['message' => 'Cliente cadastrado com sucesso!']);
} catch (PDOException $e) {
  http_response_code(500);
  echo json_encode(['error' => 'Erro no servidor: ' . $e->getMessage()]);
}
