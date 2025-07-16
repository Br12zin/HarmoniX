<?php

try {
    // Recuperar informações de formulário vindo do Frontend
    $postfields = json_decode(file_get_contents('php://input'), true);

    // Verificar se existe informações de formulário
    if (!empty($postfields)) {
        $id = $postfields['id_produto'] ?? null;
        $id_categoria = $postfields['id_categoria'] ?? null;
        $id_marca = $postfields['id_marca'] ?? null;
        $produto = $postfields['produto'] ?? null;
        $descricao = $postfields['descricao'] ?? null;
        $preco = $postfields['preco'] ?? null;
        $desconto = $postfields['desconto'] ?? null;
        $quantidade = $postfields['quantidade'] ?? null;
        $especificacoes = $postfields['especificacoes'] ?? null;
        $imagem = $postfields['imagem'] ?? null;


        // Verifica campos obrigatórios
        if (empty($id)) {
            http_response_code(400);
            throw new Exception('ID do produto é obrigatório');
        }
        if (empty($produto) || empty($postfields['id_marca'])) {
            http_response_code(400);
            throw new Exception('Marca e produto são obrigatórios');
        }

        $sql = "
UPDATE produtos SET 
    id_categoria = :id_categoria,
    id_marca = :id_marca,
    produto = :produto,
    descricao = :descricao,
    quantidade = :quantidade, 
    preco = :preco,
    desconto = :desconto
";

        // Se imagem veio no postfields, adiciona no SQL
        if (!empty($imagem)) {
            $sql .= ", imagem = :imagem";
        }

        $sql .= " WHERE id_produto = :id";

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->bindParam(':id_categoria', $id_categoria, PDO::PARAM_INT);
        $stmt->bindParam(':id_marca', $id_marca, PDO::PARAM_INT);
        $stmt->bindParam(':produto', $produto, PDO::PARAM_STR);
        $stmt->bindParam(':descricao', $descricao, PDO::PARAM_STR);
        $stmt->bindParam(':preco', $preco, PDO::PARAM_STR);
        $stmt->bindParam(':desconto', $desconto, PDO::PARAM_STR);
        $stmt->bindParam(':quantidade', $quantidade, PDO::PARAM_INT);

        // Só bind se imagem não estiver vazia
        if (!empty($imagem)) {
            $stmt->bindParam(':imagem', $imagem, PDO::PARAM_STR);
        }

        $stmt->execute();


        $result = array(
            'status' => 'success',
            'message' => 'Produto alterado com sucesso!'
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
