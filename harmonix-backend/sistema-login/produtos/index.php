<?php
// CHAMA O ARQUIVO ABAIXO NESTA TELA
include "../verificar-autenticacao.php";

// INDICA QUAL PÁGINA ESTOU NAVEGANDO
$pagina = "produtos";

if (isset($_GET["key"])) {
    $key = $_GET["key"];
    // SE HOUVER KEY, BUSCA O CLIENTE NO BANCO DE DADOS
    require("../requests/produtos/get.php");
    // 
    $key = null;
    if (isset($response["data"]) && !empty($response["data"])) {
        // Se houver dados, pega o primeiro e unico cliente na posição [0]
        $produto = $response["data"][0];
    } else {
        $produto = null;
    }
}

?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HarmoniX - Cadastro de Produtos</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.datatables.net/2.3.2/css/dataTables.dataTables.min.css" rel="stylesheet">

</head>

<body>
    <?php
    include "../mensagens.php";
    include "../navbar.php";
    ?>

    <!-- Conteúdo principal -->
    <div class="container mt-5">

        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h1 class="h5 mb-0">Produtos Cadastrados</h1>

                        <div>
                            <a href="/produtos/formulario.php" class="btn btn-primary btn-sm me-1">Novo Produto</a>
                            <a href="/produtos/exportar.php" class="btn btn-success btn-sm me-1">Excel</a>
                            <a href="/produtos/exportar_pdf.php" class="btn btn-danger btn-sm">PDF</a>
                        </div>
                    </div>

                    <div class="card-body overflow-auto">
                        <table class="table table-striped table-hover table-bordered align-middle text-center" id="produtos">
                            <thead class="table-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>Imagem</th>
                                    <th class="text-center">Produto</th>
                                    <th class="text-center">Descrição</th>
                                    <th class="text-center" style="min-width: 150px;">Marca</th>
                                    <th class="text-center">Categoria</th>
                                    <th class="text-center">Qtd</th>
                                    <th class="text-center" style="min-width: 120px;">Preço</th>
                                    <th class="text-center">Desconto</th>
                                    <th class="text-center" style="min-width: 120px;">Preço Final</th>
                                    <th class="text-center" style="min-width: 120px;">Ações</th>

                                </tr>

                            </thead>
                            <tbody id=" produtoTableBody">
                                <!-- Os clientes serão carregados aqui via PHP -->
                                <?php

                                // SE HOUVER CLIENTES NA BD, EXIBIR
                                require("../requests/produtos/get.php");
                                if (!empty($response)) {
                                    foreach ($response["data"] as $key => $produto) {
                                        echo '
<tr>
    <th scope="row">' . $produto['id_produto'] . '</th>
    <td><img width="60" src="http://localhost:8080/produtos/imagens/' . $produto["imagem"] . '"></td>

    <td style="max-width: 100px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">' . $produto["produto"] . '</td>
    <td  style="min-width: 100px; max-width: 150px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="' . htmlspecialchars($produto["descricao"]) . '">
  ' . $produto["descricao"] . '
</td>
    <td>' . $produto["marca"] . '</td>
                                        <td>' . $produto["categoria"] . '</td>
    <td class="text-center">' . $produto["quantidade"] . '</td>
  <td class="text-center">R$ ' . number_format($produto["preco"], 2, ',', '.') . '</td>
<td class="text-center">R$ ' . number_format($produto["desconto"], 2, ',', '.') . '</td>
<td class="text-center">R$ ' . number_format($produto["preco"] - $produto["desconto"], 2, ',', '.') . '</td>

  <td>
  <a href="/produtos/formulario.php?key=' . $produto['id_produto'] . '" class="btn btn-warning btn-sm">
    ✏️ Editar
  </a>
  <a href="/produtos/remover.php?key=' . $produto['id_produto'] . '" class="btn btn-danger btn-sm" onclick="return confirm(\'Tem certeza que quer excluir?\')">
    🗑️ Excluir
  </a>
</td>
</tr>
';
                                    }
                                }

                                ?>
                            </tbody>
                        </table>



                    </div>

                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap JS (opcional, para funcionalidades como o menu hamburguer) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!-- DataTables JS (para Bootstrap 5) -->
    <script src="https://cdn.datatables.net/2.3.2/js/dataTables.min.js"></script>

    <script>
        let table = new DataTable('#produtos', {
            language: {
                url: "https://cdn.datatables.net/plug-ins/2.3.2/i18n/pt-BR.json"
            }


        });
    </script>

</body>

</html>