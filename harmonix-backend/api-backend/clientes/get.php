<?php
try {

    // Verifica se há um ID na URL para consulta específica
    if (isset($_GET["id"]) && is_numeric($_GET["id"])) {
        $id = $_GET["id"];

        // Monta a sintaxe SQL de busca
        $sql = "
            SELECT * 
            FROM clientes
            WHERE cliente_id = :id
        ";

        // Preparar a sintaxe SQL
        $stmt = $conn->prepare($sql);
        // Vincular o parâmetro :id com o valor da variável $id
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    }
    // Verifica se há um NOME na URL para consulta
    elseif (isset($_GET["nome"]) && is_string($_GET["nome"])) {
        $cliente = $_GET["nome"];

        // Monta a sintaxe SQL de busca
        $sql = "
            SELECT * 
            FROM clientes
            WHERE nome LIKE :nome
            ORDER BY nome
        ";

        // Preparar a sintaxe SQL
        $stmt = $conn->prepare($sql);
        // Vincular o parâmetro :nome com o valor da variável $nome
        $stmt->bindValue(':nome', '%' . $cliente . '%', PDO::PARAM_STR);
    } else {
        // Monta a sintaxe SQL de busca
        $sql = "
            SELECT * 
            FROM clientes
            ORDER BY nome
        ";

        // Preparar a sintaxe SQL
        $stmt = $conn->prepare($sql);
    }

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
        // Organizar o endereço como objeto
        foreach ($data as $key => $cliente) {
            $data[$key]->endereco = array(
                'endereco' => $cliente->endereco,
                'numero' => $cliente->numero,
                'complemento' => $cliente->complemento,
                'bairro' => $cliente->bairro,
                'cidade' => $cliente->cidade,
                'estado' => $cliente->estado,
                'cep' => $cliente->cep
            );
            // Remove os campos que não são mais necessários
            unset($data[$key]->endereco);
            unset($data[$key]->numero);
            unset($data[$key]->complemento);
            unset($data[$key]->bairro);
            unset($data[$key]->cidade);
            unset($data[$key]->estado);
            unset($data[$key]->cep);
        }
        // Se o resultado não for vazio, retorna os dados
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
exit;