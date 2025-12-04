<?php

try {
    // Verificar se a conexão com o banco de dados existe
    if (!isset($conn) || $conn === null) {
        http_response_code(500);
        throw new Exception('Conexão com o banco de dados não foi estabelecida');
    }

    // Recuperar informações do Frontend
    $postfields = json_decode(file_get_contents('php://input'), true);

    if (empty($postfields)) {
        http_response_code(400);
        throw new Exception('Nenhum dado foi enviado!');
    }

    // ID é obrigatório
    $id = $postfields['id'] ?? null;
    if (empty($id)) {
        http_response_code(400);
        throw new Exception('ID do cliente é obrigatório');
    }

    // Lista de campos diretos da tabela
    $camposSimples = [
        'nome',
        'cpf',
        'email',
        'telefone'
    ];

    // Campos de endereço
    $camposEndereco = [
        'endereco',
        'numero',
        'complemento',
        'bairro',
        'cidade',
        'estado',
        'cep'
    ];

    $set = [];
    $params = [':id' => $id];

    // Monta campos simples
    foreach ($camposSimples as $campo) {
        if (isset($postfields[$campo])) {
            $set[] = "$campo = :$campo";
            $params[":$campo"] = $postfields[$campo];
        }
    }

    // Monta campos de endereço
    if (isset($postfields['endereco']) && is_array($postfields['endereco'])) {
        foreach ($camposEndereco as $campo) {
            if (isset($postfields['endereco'][$campo])) {
                $set[] = "$campo = :$campo";
                $params[":$campo"] = $postfields['endereco'][$campo];
            }
        }
    }

    // Verifica se existe algo para atualizar
    if (empty($set)) {
        http_response_code(400);
        throw new Exception('Nenhum campo válido para atualizar');
    }

    // Monta UPDATE dinâmico
    $sql = "UPDATE clientes SET " . implode(", ", $set) . " WHERE cliente_id = :id";

    $stmt = $conn->prepare($sql);
    $stmt->execute($params);

    $result = [
        'status' => 'success',
        'message' => 'Cliente alterado com sucesso!'
    ];
} catch (Exception $e) {

    $result = [
        'status' => 'error',
        'message' => $e->getMessage()
    ];
} finally {

    echo json_encode($result);
    $conn = null;
}
