<?php
include"../verificar-autenticacao.php";

try {
    // Recuperar informações de formulário vindo do Frontend
    $postfields = json_decode(file_get_contents('php://input'), true);

    // Verificar se existe informações de formulário
    if (!empty($postfields)) {
        $cliente = $postfields['cliente'] ?? null;
        $email = $postfields['email'] ?? null;
        $senha = $postfields['senha'] ?? null;
        $telefone = $postfields['telefone'] ?? null;
        $telefone_residencial = $postfields['telefone_residencial'] ?? null;
        $logradouro = $postfields['endereco']['logradouro'] ?? null;
        $numero = $postfields['endereco']['numero'] ?? null;
        $complemento = $postfields['endereco']['complemento'] ?? null;
        $bairro = $postfields['endereco']['bairro'] ?? null;
        $cidade = $postfields['endereco']['cidade'] ?? null;
        $estado = $postfields['endereco']['estado'] ?? null;
        $cep = $postfields['endereco']['cep'] ?? null;

        // Verifica campos obrigatórios
        if (empty($cliente)) {
            http_response_code(400);
            throw new Exception('Nome, E-mail, Senha, Telefone e Endereço são obrigatórios');
        }

        $sql = "
        INSERT INTO clientes (nome, email, senha,  celular, telefone, telefone_residencial, cep, endereco, numero, cidade, estado, complemento, bairro) VALUES 
        (
            :cliente,
            :email,
            :senha,
            :telefone,
            :telefone_residencial,
            :cep,
            :endereco, 
            :numero, 
            :cidade,
            :estado,
            :complemento, 
            :bairro    
        )";

        $stmt = $conn->prepare($sql);

        $stmt->bindParam(':cliente', $cliente, PDO::PARAM_STR);
        $stmt->bindParam(':email', $email, PDO::PARAM_STR);
        $stmt->bindParam(':senha', $senha, PDO::PARAM_STR);
        $stmt->bindParam(':telefone', $telefone, PDO::PARAM_STR);
        $stmt->bindParam(':telefone_residencial', $telefone_residencial, is_null($telefone_residencial) ? PDO::PARAM_NULL : PDO::PARAM_STR);
        $stmt->bindParam(':cep', $cep);
        $stmt->bindParam(':logradouro', $logradouro);
        $stmt->bindParam(':numero', $numero);
        $stmt->bindParam(':cidade', $cidade);
        $stmt->bindParam(':estado', $estado);
        $stmt->bindParam(':complemento', $complemento, is_null($complemento) ? PDO::PARAM_NULL : PDO::PARAM_STR);
        $stmt->bindParam(':bairro', $bairro);



        $stmt->execute();

        $result = array(
            'status' => 'success',
            'message' => 'Cliente cadastrado com sucesso!'
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
