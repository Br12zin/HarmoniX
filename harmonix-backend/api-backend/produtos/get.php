<?php
try {

    // Verifica se há um ID na URL para consulta específica
    if (isset($_GET["id"]) && is_numeric($_GET["id"])) {
        $id = $_GET["id"];

        // Monta a sintaxe SQL de busca
        $sql = "
            SELECT * 
            FROM produtos
            JOIN marcas ON produtos.id_marca = marcas.id_marca
            JOIN categorias ON produtos.id_categoria = categorias.id_categoria
            WHERE id_produto = :id
        ";

        // Preparar a sintaxe SQL
        $stmt = $conn->prepare($sql);
        // Vincular o parâmetro :id com o valor da variável $id
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    }
    // Verifica se há um produto na URL para consulta
    elseif (isset($_GET["produto"]) && is_string($_GET["produto"])) {
        $produto = $_GET["produto"];

        // Monta a sintaxe SQL de busca
        $sql = "
            SELECT * 
            FROM produtos
            JOIN marcas ON produtos.id_marca = marcas.id_marca
            JOIN categorias ON produtos.id_categoria = categorias.id_categoria
            WHERE produto LIKE :produto
            ORDER BY produto
        ";

        // Preparar a sintaxe SQL
        $stmt = $conn->prepare($sql);
        // Vincular o parâmetro :produto com o valor da variável $produto
        $stmt->bindValue(':produto', '%' . $produto . '%', PDO::PARAM_STR);
    }
    // Verifica se há um produto na URL para consulta
    elseif (isset($_GET["id_marca"]) && is_string($_GET["id_marca"])) {
        $id_marca = $_GET["id_marca"];

        // Monta a sintaxe SQL de busca
        $sql = "
            SELECT * 
            FROM produtos
            JOIN marcas ON produtos.id_marca = marcas.id_marca
            WHERE id_marca = :id_marca

        ";

        // Preparar a sintaxe SQL
        $stmt = $conn->prepare($sql);
        // Vincular o parâmetro :produto com o valor da variável $produto
        $stmt->bindValue(':id_marca', '%' . $id_marca . '%', PDO::PARAM_STR);
    } elseif (isset($_GET["id_categoria"]) && is_string($_GET["id_categoria"])) {
        $id_categoria = $_GET["id_categoria"];

        // Monta a sintaxe SQL de busca
        $sql = "
            SELECT * 
            FROM produtos
            JOIN categorias ON produtos.id_categoria = categorias.id_categoria
            WHERE id_categoria = :id_categoria

        ";

        // Preparar a sintaxe SQL
        $stmt = $conn->prepare($sql);

        $stmt->bindValue(':id_categoria',   $id_categoria, PDO::PARAM_STR);
    } elseif (isset($_GET["categoria"]) && is_string($_GET["categoria"])) {
        // Decodifica a url
        $categoriaNome = urldecode($_GET["categoria"] ?? "");
        if (empty($categoriaNome)) {
            // Se a categoria estiver vazia, retorna um erro
            $result = array(
                'status' => 'error',
                'message' => 'Categoria não informada.',
                'categoria' => $categoriaNome
            );
        }

        $sqlCategoria = "SELECT id_categoria FROM categorias WHERE categoria = :categoriaNome";
        $stmtCategoria = $conn->prepare($sqlCategoria);
        $stmtCategoria->bindValue(':categoriaNome', $categoriaNome, PDO::PARAM_STR);
        $stmtCategoria->execute();

        $categoria = $stmtCategoria->fetch(PDO::FETCH_ASSOC);

        if (!$categoria) {
            // Se a categoria não for encontrada, retorna um erro

            $result = array(
                'status' => 'error',
                'message' => 'Categoria não encontrada.'
            );
        }

        $idCategoria = $categoria["id_categoria"];
        // Monta a sintaxe SQL de busca
        $sqlProdutos = "
            SELECT * 
            FROM produtos
            WHERE id_categoria = :idCategoria
        ";

        // Preparar a sintaxe SQL
        $stmt = $conn->prepare($sqlProdutos);
        $stmt->bindValue("idCategoria", $idCategoria, PDO::PARAM_INT);
    } elseif (isset($_GET["marca"]) && is_string($_GET["marca"])) {
        // Decodifica a URL
        $marcaNome = urldecode($_GET["marca"] ?? "");

        if (empty($marcaNome)) {
            $result = array(
                'status' => 'error',
                'message' => 'Marca não informada.',
                'marca' => $marcaNome
            );
            echo json_encode($result);
            exit;
        }

        // Busca o ID da marca pelo nome
        $sqlMarca = "SELECT id_marca FROM marcas WHERE marca = :marcaNome";
        $stmtMarca = $conn->prepare($sqlMarca);
        $stmtMarca->bindValue(':marcaNome', $marcaNome, PDO::PARAM_STR);
        $stmtMarca->execute();

        $marca = $stmtMarca->fetch(PDO::FETCH_ASSOC);

        if (!$marca) {
            $result = array(
                'status' => 'error',
                'message' => 'Marca não encontrada.'
            );
            echo json_encode($result);
            exit;
        }

        $idMarca = $marca["id_marca"];

        // Busca os produtos com a marca correspondente
        $sqlProdutos = "
        SELECT produtos.*, marcas.marca AS nome_marca
        FROM produtos
        JOIN marcas ON produtos.id_marca = marcas.id_marca
        WHERE produtos.id_marca = :idMarca
    ";

        $stmt = $conn->prepare($sqlProdutos);
        $stmt->bindValue(":idMarca", $idMarca, PDO::PARAM_INT);
    } elseif (isset($_GET["q"])) {
        $q = trim($_GET["q"]);

        if (empty($q)) {
            $result = array(
                'status' => 'error',
                'message' => 'Termo de busca vazio.'
            );
            echo json_encode($result);
            exit;
        }

        $sql = "
        SELECT produtos.*, marcas.marca AS nome_marca, categorias.categoria AS nome_categoria
        FROM produtos
        JOIN marcas ON produtos.id_marca = marcas.id_marca
        JOIN categorias ON produtos.id_categoria = categorias.id_categoria
        WHERE produtos.produto LIKE :q
           OR marcas.marca LIKE :q
           OR categorias.categoria LIKE :q
        ORDER BY produtos.produto
    ";

        $stmt = $conn->prepare($sql);
        $stmt->bindValue(':q', '%' . $q . '%', PDO::PARAM_STR);
    } else {
        // Monta a sintaxe SQL de busca
        $sql = "
            SELECT * 
            FROM produtos
            JOIN marcas ON produtos.id_marca = marcas.id_marca
             JOIN categorias ON produtos.id_categoria = categorias.id_categoria
            ORDER BY produto
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


// // VERIFICAR SE O ID FOI PASSADO NA URL E SE É UM NÚMERO
// if (isset($_GET["id"]) && is_numeric($_GET["id"])) {
//     $id = $_GET["id"];
//     // BUSCAR O CLIENTE COM O ID PASSADO NA URL
//     $found = false;
//     foreach ($data as $produto) {
//         if ($produto->id == $id) {
//             $data = $produto;
//             $found = true;
//             break;
//         }
//     }
//     // SE O CLIENTE NÃO FOI ENCONTRADO, RETORNAR UM ERRO
//     // $data = $found ? $data : null;
//     if (!$found) {
//         http_response_code(204);
//     }
// } elseif (isset($_GET["produto"]) && is_string($_GET["produto"])) {
//     $produto = $_GET["produto"];
//     $result = array();
//     // BUSCAR O CLIENTE COM O ID PASSADO NA URL
//     $found = false;
//     foreach ($data as $produto) {
//         if (stripos($produto->produto, $produto) !== false) {
//             $result[] = $produto;
//             $found = true;
//         }
//     }
//     // SE O produto NÃO FOI ENCONTRADO, RETORNAR UM ERRO
//     // $data = $found ? $data : null;
//     if (!$found) {
//         http_response_code(204);
//     } else {
//         $data = $result;
//     }
// }

// echo json_encode(
//     array(
//         'status' => 'success',
//         'message' => 'GET method called',
//         'data' => $data
//     )
// );
