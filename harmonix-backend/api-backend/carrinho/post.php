<?php


try {

    $postfields = json_decode(file_get_contents("php://input"), true);

    if (!empty($postfields)) {
        $cliente_id = $postfields['cliente_id'] ?? null;
        $id_produto = $postfields['id_produto'] ?? null;
        $quantidade = $postfields['quantidade'] ?? null;

        if (empty($cliente_id) || empty($id_produto) || empty($quantidade)) {
            http_response_code(400);
            throw new Exception('Todos os campos são obrigatórios');
        }

        $check = $conn->prepare("SELECT id_carrinho FROM carrinho WHERE cliente_id = ? AND id_produto = ?");
        $check->execute([$cliente_id, $id_produto]);
        $data = $check->fetch(PDO::FETCH_ASSOC);

        if ($data) {
            $update = $conn->prepare("UPDATE carrinho SET quantidade = quantidade + ? WHERE cliente_id = ? AND id_produto = ?");
            $update->execute([$quantidade, $cliente_id, $id_produto]);
        } else {
            $insert = $conn->prepare("INSERT INTO carrinho (cliente_id, id_produto, quantidade) VALUES (?, ?, ?)");
            $insert->execute([$cliente_id, $id_produto, $quantidade]);
        }
        $result = array(
            'status' => 'success'
        );
    } else {
        http_response_code(400);
        // Se não existir dados, retornar erro
        throw new Exception('Nenhum dado foi enviado!');
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
