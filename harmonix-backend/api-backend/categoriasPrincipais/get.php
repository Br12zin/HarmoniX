<?php
try {
  // Monta a sintaxe SQL de busca
  $sql = "
            SELECT *
            FROM categoria_principal
            ORDER BY nome
        ";

  // Preparar a sintaxe SQL
  $stmt = $conn->prepare($sql);
  // Executar a sintaxe SQL
  $stmt->execute();
  // Obter os dados do banco de dados como objeto
  $data = $stmt->fetchAll(PDO::FETCH_OBJ);

  // Verifica se o resultado da pesquisa é vazio
  if (empty($data)) {
    // Se o resultado for vazio, retorna um erro
    http_response_code(204);
    exit;
  } else {
    // Se houver dados, retorna os dados
    $result = array(
      'status' => 'success',
      'message' => 'Data found',
      'data' => $data
    );
  };
} catch (Exception $e) {
  // Se houver erro, retorna o erro
  $result = array(
    'status' => 'error',
    'message' => 'Error: ' . $e->getMessage()
  );
} finally {
  // Retorna os dados em formato JSON
  echo json_encode($result);
  // Fecha a conexão com o banco de dados
  $conn = null;
}
exit;
