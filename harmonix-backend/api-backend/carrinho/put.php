<?php


try {

    $putFields = json_decode(file_get_contents("php://input"), true);

    if (!empty($putFields)) {
        $cliente_id = $putFields['cliente_id'] ?? null;
        $id_produto = $putFields['id_produto'] ?? null;
        $quantidade = $putFields['quantidade'] ?? null;

        if (empty($cliente_id) || empty($id_produto) || $quantidade === null) {
            http_response_code(400);
            throw new Exception('Todos os campos são obrigatórios');
        }

        // Verifica se já existe no carrinho
        $check = $conn->prepare("SELECT id_carrinho FROM carrinho WHERE cliente_id = ? AND id_produto = ?");
        $check->execute([$cliente_id, $id_produto]);
        $data = $check->fetch(PDO::FETCH_ASSOC);

        if ($data) {
            // Atualiza com nova quantidade (substitui, não soma)
            $update = $conn->prepare("UPDATE carrinho SET quantidade = ? WHERE cliente_id = ? AND id_produto = ?");
            $update->execute([$quantidade, $cliente_id, $id_produto]);

            $result = ['status' => 'success', 'message' => 'Quantidade atualizada com sucesso.'];
        } else {
            // Produto não está no carrinho — depende da lógica se vai inserir ou não
            http_response_code(404);
            throw new Exception("Produto não encontrado no carrinho.");
        }
    } else {
        http_response_code(400);
        throw new Exception('Nenhum dado foi enviado!');
    }
} catch (Exception $e) {
    http_response_code(500);
    $result = [
        'status' => 'error',
        'message' => $e->getMessage()
    ];
} finally {
    echo json_encode($result);
    $conn = null;
}
