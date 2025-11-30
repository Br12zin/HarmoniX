<?php

try {
    // Verificar se a conexão com o banco de dados existe
    if (!isset($conn) || $conn === null) {
        http_response_code(500);
        throw new Exception('Conexão com o banco de dados não foi estabelecida');
    }

    // Recuperar informações de formulário vindo do Frontend
    $postfields = json_decode(file_get_contents('php://input'), true);

    // Verificar se existe informações de formulário
    if (!empty($postfields)) {
        $id = $postfields['id'] ?? null;
        $nome = $postfields['nome'] ?? null;
        $cpf = $postfields['cpf'] ?? null;
        $email = $postfields['email'] ?? null;
        $telefone = $postfields['telefone'] ?? null;
        $endereco = $postfields['endereco']['endereco'] ?? '';
        $numero = $postfields['endereco']['numero'] ?? '';
        $complemento = $postfields['endereco']['complemento'] ?? '';
        $bairro = $postfields['endereco']['bairro'] ?? '';
        $cidade = $postfields['endereco']['cidade'] ?? '';
        $estado = $postfields['endereco']['estado'] ?? '';
        $cep = $postfields['endereco']['cep'] ?? '';


        // Verifica campos obrigatórios
        if (empty($id)) {
            http_response_code(400);
            throw new Exception('ID do cliente é obrigatório');
        }
        if (empty($nome)) {
            http_response_code(400);
            throw new Exception('Nome é obrigatório');
        }

        $sql = "
        UPDATE clientes SET 
            nome = :nome,
            cpf = :cpf,
            telefone = :telefone,
            email = :email, 
            endereco = :endereco, 
            numero = :numero, 
            complemento = :complemento, 
            bairro = :bairro, 
            cidade = :cidade,
            estado = :estado,
            cep = :cep
        WHERE cliente_id = :id
        ";

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->bindParam(':nome', $nome, PDO::PARAM_STR);
        $stmt->bindParam(':cpf', $cpf, PDO::PARAM_STR);
        $stmt->bindParam(':telefone', $telefone, PDO::PARAM_STR);
        $stmt->bindParam(':email', $email, PDO::PARAM_STR);
        $stmt->bindParam(':endereco', $endereco);
        $stmt->bindParam(':numero', $numero);
        $stmt->bindParam(':complemento', $complemento, is_null($complemento) ? PDO::PARAM_NULL : PDO::PARAM_STR);
        $stmt->bindParam(':bairro', $bairro);
        $stmt->bindParam(':cidade', $cidade);
        $stmt->bindParam(':estado', $estado);
        $stmt->bindParam(':cep', $cep);

        $stmt->execute();

        $result = array(
            'status' => 'success',
            'message' => 'Cliente alterado com sucesso!'
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
