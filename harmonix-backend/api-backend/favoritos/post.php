<?php

try {
  $postfields = json_decode(file_get_contents('php://input'), true);

  $cliente_id = $postfields['cliente_id'];
  $id_produto = $postfields['id_produto'];

  $check = $conn->prepare("SELECT * FROM favoritos WHERE cliente_id = ? AND id_produto = ?");
  $check->execute([$cliente_id, $id_produto]);
  if ($check->rowCount() > 0) {
    // Remove (toggle off)
    $delete = $conn->prepare("DELETE FROM favoritos WHERE cliente_id = ? AND id_produto = ?");
    $delete->execute([$cliente_id, $id_produto]);
    $result = (["status" => "removed"]);
  } else {
    // Adiciona (toggle on)
    $insert = $conn->prepare("INSERT INTO favoritos (cliente_id, id_produto) VALUES (?, ?)");
    $insert->execute([$cliente_id, $id_produto]);
    $result = (["status" => "added"]);
  }
} catch (Exception $e) {
  // Se houver erro, retorna o erro
  $result = array(
    'status' => 'error',
    'message' => $e->getMessage(),
  );
} finally {
  // Retorna os dados em formato JSON
  echo json_encode($result);
  // Fecha a conexão com o banco de dados
  $conn = null;
}
