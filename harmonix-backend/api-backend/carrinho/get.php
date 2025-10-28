<?php
try {

    // Recebe o ID do cliente por query string
    $cliente_id = $_GET['cliente_id'] ?? null;

    if (empty($cliente_id)) {
        http_response_code(400);
        throw new Exception("ID do cliente não fornecido.");
    }

    // Consulta os produtos no carrinho
    $query = "
        SELECT c.id_carrinho, c.quantidade, p.id_produto, p.produto, p.preco, p.imagem, p.desconto
        FROM carrinho c
        JOIN produtos p ON c.id_produto = p.id_produto
        WHERE c.cliente_id = ?
    ";
    $stmt = $conn->prepare($query);
    $stmt->execute([$cliente_id]);

    $carrinho = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        "status" => "success",
        "carrinho" => $carrinho
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
