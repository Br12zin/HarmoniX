<?php

try {
  // Recuperar informações de formulário vindo do Frontend
  $postfields = json_decode(file_get_contents('php://input'), true);

  // Verificar se existe informações de formulário
  if (!empty($postfields)) {
    // Extrair os campos do formulário
    $cliente_id = $postfields['cliente_id'] ?? null;
    $total = $postfields['total'] ?? null;
    $produtos = $postfields['produtos'] ?? null;


    // Verifica campos obrigatórios
    if (empty($cliente_id) || empty($produtos)) {
      http_response_code(400);
      throw new Exception('Todos os campos são obrigatórios');
    }




    $sql = "INSERT INTO pedidos(cliente_id, total, status) VALUES (
            :cliente_id,
            :total,
            'Aguardando Pagamento'
        )";

    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':cliente_id', $cliente_id, PDO::PARAM_INT);
    $stmt->bindParam(':total', $total, PDO::PARAM_STR);
    $stmt->execute();

    $id_pedido = $conn->lastInsertId();

    $sql_produtos = "INSERT INTO itenspedidos(id_pedido, id_produto, quantidade, preco_unitario) VALUES";

    foreach ($produtos as $index => $produto) {

      $id_produto = $produto['id_produto'] ?? null;
      $quantidade = $produto['quantidade'] ?? 1;
      $preco_unitario = $produto['preco_unitario'] ?? 0.00;

      // Verifica campos obrigatórios
      if (empty($id_produto)) {
        http_response_code(400);
        throw new Exception('Id do produto obrigatório');
      }

      $sql_produtos .= "(
                :id_pedido,
                :id_produto_$index,
                :quantidade_$index,
                :preco_unitario_$index
            ),";




      // $stmt_produtos = $conn->prepare($sql_produtos);
      // $stmt_produtos->bindValue(":id_pedido", $id_pedido, PDO::PARAM_INT);
      // $stmt_produtos->bindValue(":id_produto_$index", $id_produto, PDO::PARAM_INT);
      // $stmt_produtos->bindValue(":quantidade_$index", $quantidade, PDO::PARAM_INT);
      // $stmt_produtos->bindValue(":preco_unitario_$index", $preco_unitario, PDO::PARAM_STR);
      // $stmt_produtos->execute();

    }

    $sql_produtos = rtrim($sql_produtos, ',');
    $stmt = $conn->prepare($sql_produtos);

    $stmt->bindValue(":id_pedido", $id_pedido, PDO::PARAM_INT);


    foreach ($produtos as $index => $produto) {
      $id_produto = $produto['id_produto'] ?? null;
      $quantidade = $produto['quantidade'] ?? 1;
      $preco_unitario = $produto['preco_unitario'] ?? 0.00;

      $stmt->bindValue(":id_produto_$index", $id_produto, PDO::PARAM_INT);
      $stmt->bindValue(":quantidade_$index", $quantidade, PDO::PARAM_INT);
      $stmt->bindValue(":preco_unitario_$index", $preco_unitario, PDO::PARAM_STR);
    }

    $stmt->execute();

    http_response_code(201);
    $result = array(
      'status' => 'success'
    );

    // Verifica se a inserção foi bem-sucedida
    if ($stmt->rowCount() == 0) {
      http_response_code(400);
      $result = "erro";
      throw new Exception('Erro ao adicionar produto ao pedidos');
    }

    // 201 - Created
    http_response_code(201);
    $result = array(
      'status' => 'success',
      'message' => 'Produto adicionado ao pedidos com sucesso!'
    );
  } else {
    throw new Exception('Nenhum dado foi enviado!', 400);
  }
} catch (Exception $e) {
  $code = !empty($e->getCode()) ? $e->getCode() : 400; // Define o código de status HTTP
  // http_response_code($code); // Define o código de status HTTP
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
