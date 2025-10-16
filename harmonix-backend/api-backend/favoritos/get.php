<?php
header('Content-Type: application/json; charset=utf-8');

try {
  // valida parâmetro
  if (!isset($_GET['cliente_id'])) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Parâmetro cliente_id ausente']);
    exit;
  }

  $cliente_id = $_GET['cliente_id'];
  if (!is_numeric($cliente_id) || intval($cliente_id) <= 0) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Parâmetro cliente_id inválido']);
    exit;
  }
  $cliente_id = intval($cliente_id);

  // verifica conexão
  if (!isset($conn) || !($conn instanceof PDO)) {
    throw new Exception('Conexão com o banco de dados inexistente ou inválida');
  }

  // prepara query
  $query = $conn->prepare("        SELECT p.id_produto, p.produto, p.preco, p.imagem, p.desconto
        FROM favoritos f
        INNER JOIN produtos p ON f.id_produto = p.id_produto
        WHERE f.cliente_id = ?
");
  if ($query === false) {
    throw new Exception('Falha ao preparar a consulta');
  }

  // executa query
  $executed = $query->execute([$cliente_id]);
  if ($executed === false) {
    $errorInfo = $query->errorInfo();
    throw new Exception('Falha na execução da consulta: ' . ($errorInfo[2] ?? 'erro desconhecido'));
  }

  $favoritos = $query->fetchAll(PDO::FETCH_ASSOC);
  http_response_code(200);
  echo json_encode(['status' => 'success', 'data' => $favoritos]);
} catch (Exception $e) {
  http_response_code(500);
  echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}
