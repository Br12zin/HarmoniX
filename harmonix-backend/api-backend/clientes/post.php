<?php
// include"../verificar-autenticacao.php";
$conn = new PDO('mysql:host=localhost;dbname=harmonix', 'root', 'senha123');
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

try {
    // Recuperar informações de formulário vindo do Frontend
    $postfields = json_decode(file_get_contents('php://input'), true);
    // Verificar se existe informações de formulário
    if (!empty($postfields)) {
        $nome = $postfields['nome'] ?? null;
        $email = $postfields['email'] ?? null;
        $senha = $postfields['senha'] ?? null;
        $telefone = $postfields['telefone'] ?? null;
        $endereco = $postfields['endereco']['endereco'] ?? null;
        $numero = $postfields['endereco']['numero'] ?? null;
        $complemento = $postfields['endereco']['complemento'] ?? null;
        $bairro = $postfields['endereco']['bairro'] ?? null;
        $cidade = $postfields['endereco']['cidade'] ?? null;
        $estado = $postfields['endereco']['estado'] ?? null;
        $cep = $postfields['endereco']['cep'] ?? null;

        // Verifica campos obrigatórios
        if (empty($nome) || empty($email) || empty($senha) || empty($telefone) || empty($endereco) || empty($numero) || empty($cep) || empty($bairro) || empty($cidade) || empty($estado)) {
    http_response_code(400);
    throw new Exception('Nome, E-mail, Senha, Telefone e Endereço são obrigatórios');
    }

        $sql = "
        INSERT INTO clientes (nome,email,senha, telefone, cep, endereco, numero, cidade, estado, complemento, bairro) VALUES 
        (
            :nome,
            :email,
            :senha,
            :telefone,
            :cep,
            :endereco, 
            :numero, 
            :cidade,
            :estado,
            :complemento, 
            :bairro    
        )";

        $stmt = $conn->prepare($sql);

        $stmt->bindParam(':nome', $nome, PDO::PARAM_STR);
        $stmt->bindParam(':email', $email, is_null($email) ? PDO::PARAM_NULL : PDO::PARAM_STR);
        $stmt->bindParam(':senha', $senha, is_null($senha) ? PDO::PARAM_NULL : PDO::PARAM_STR);
        $stmt->bindParam(':telefone', $telefone, PDO::PARAM_STR);
        $stmt->bindParam(':cep', $cep);
        $stmt->bindParam(':endereco', $endereco);
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
