<?php

require_once('../headers.php');
try {


    // Recebe o corpo do DELETE como JSON

    $cliente_id = $_GET['cliente_id'] ?? null;
    $id_produto = $_GET['id_produto'] ?? null;

    if (empty($cliente_id) || empty($id_produto)) {
        http_response_code(400);
        throw new Exception("ID do cliente e do produto são obrigatórios.");
    }

    // Executa remoção
    $delete = $conn->prepare("DELETE FROM carrinho WHERE cliente_id = ? AND id_produto = ?");
    $delete->execute([$cliente_id, $id_produto]);

    echo json_encode([
        "status" => "success",
        "message" => "Item removido do carrinho."
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
} finally {
    $conn = null;
}
