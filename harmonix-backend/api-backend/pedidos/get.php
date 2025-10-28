<?php

try {
    if (isset($_GET["cliente_id"]) && is_numeric($_GET["cliente_id"])) {
        $cliente_id = $_GET["cliente_id"];

        // Monta a sintaxe SQL de busca
        $sql = "
            SELECT pd.cliente_id,
            GROUP_CONCAT(
                JSON_OBJECT(
                    'id_produto', p.id_produto,
                    'produto', p.produto,
                    'quantidade', pd.quantidade,
                    'preco_unitario', pd.preco_unitario
                )
            ) AS produtos,
            SUM(pd.quantidade) AS quantidade_total,
             SUM(p.preco) AS preco_total
             FROM pedidos AS pd
             JOIN produtos AS p ON pd.id_produto = p.id_produto
             WHERE pd.cliente_id = :cliente_id
        ";

        // Preparar a sintaxe SQL
        $stmt = $conn->prepare($sql);
        // Vincular o parâmetro :cliente_id com o valor da variável $cliente_id
        $stmt->bindParam(':cliente_id', $cliente_id, PDO::PARAM_INT);
    }


    // Executar a sintaxe SQL
    $stmt->execute();
    // Obter os dados do banco de dados como objeto
    $data = $stmt->fetchAll(PDO::FETCH_OBJ);

    if (empty($data)) {
        // Se o resultado for vazio, retorna um erro
        http_response_code(204);
        exit;
    } else {

        $result = array(
            'status' => 'success',
            'message' => 'Data found',
            'data' => $data
        );
    }
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
