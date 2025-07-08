<?php
// CHAMA O ARQUIVO ABAIXO NESTA TELA
include "../verificar-autenticacao.php";

// INDICA QUAL PÁGINA ESTOU NAVEGANDO
$pagina = "produtos";

if (isset($_GET["key"])) {
    $key = $_GET["key"];
    require("../requests/produtos/get.php");
    $key = null;
    if (isset($response["data"]) && !empty($response["data"])) {
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
    <title>Cadastro de Produtos</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
    <?php
    include "../mensagens.php";
    include "../navbar.php";
    ?>

    <div class="container mt-5">
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Cadastrar Produto</h5>
                        <a href="/produtos/formulario.php" class="btn btn-primary btn-sm">Novo Produto</a>
                    </div>
                    <div class="card-body">
                        <form id="produtoForm" action="/produtos/cadastrar.php" method="POST" enctype="multipart/form-data">
                            <div class="row mb-3 align-items-end">
                                <div class="col-md-2">
                                    <label for="productId" class="form-label">Código</label>
                                    <input type="text" class="form-control" id="productId" name="productId" readonly value="<?php echo isset($produto) ? $produto['id_produto'] : ""; ?>">
                                </div>
                                <div class="col-md-10">
                                    <label for="produto" class="form-label">Nome do Produto</label>
                                    <input type="text" class="form-control" id="produto" name="produto" required value="<?php echo isset($produto) ? $produto["produto"] : ""; ?>">
                                </div>
                            </div>


                            <div class="row">
                                <div class="mb-3 col-md-4">
                                    <label for="id_marca" class="form-label">Marca</label>
                                    <select class="form-select" id="id_marca" name="id_marca" required>
                                        <option value="" disabled selected>Selecione uma Marca...</option>
                                        <?php
                                        require("../requests/marcas/get.php");
                                        if (!empty($response)) {
                                            foreach ($response["data"] as $marca) {
                                                $selected = (isset($produto) && $produto["id_marca"] == $marca["id_marca"]) ? "selected" : "";
                                                echo '<option ' . $selected . ' value="' . $marca["id_marca"] . '">' . $marca["marca"] . '</option>';
                                            }
                                        } else {
                                            echo '<option value="" disabled>Nenhuma marca cadastrada</option>';
                                        }
                                        ?>
                                    </select>
                                </div>
                                <div class="mb-3 col-md-4">
                                    <label for="id_categoria" class="form-label">Categoria</label>
                                    <select class="form-select" id="id_categoria" name="id_categoria" required>
                                        <option value="" disabled selected>Selecione uma categoria...</option>
                                        <?php
                                        require("../requests/categorias/get.php");
                                        if (!empty($response)) {
                                            foreach ($response["data"] as $categoria) {
                                                $selected = (isset($produto) && $produto["id_categoria"] == $categoria["id_categoria"]) ? "selected" : "";
                                                echo '<option ' . $selected . ' value="' . $categoria["id_categoria"] . '">' . $categoria["categoria"] . '</option>';
                                            }
                                        } else {
                                            echo '<option value="" disabled>Nenhuma categoria cadastrada</option>';
                                        }
                                        ?>
                                    </select>
                                </div>
                                <div class="mb-3 col-md-4">
                                    <label for="modelo" class="form-label">Modelo</label>
                                    <input type="text" class="form-control" id="modelo" name="modelo" required value="<?php echo isset($produto) ? $produto["modelo"] : ""; ?>">
                                </div>

                            </div>

                            <div class="row">
                                <div class="mb-3 col-md-3">
                                    <label for="preco" class="form-label">Preço</label>
                                    <div class="input-group">
                                        <span class="input-group-text">R$</span>
                                        <input type="number" step="0.01" class="form-control" id="preco" name="preco" required value="<?php echo isset($produto) ? $produto["preco"] : ""; ?>">
                                    </div>
                                </div>

                                <div class="mb-3 col-md-3">
                                    <label for="desconto" class="form-label">Desconto</label>
                                    <div class="input-group">
                                        <span class="input-group-text">R$</span>
                                        <input type="number" step="0.01" class="form-control" id="desconto" name="desconto" required value="<?php echo isset($produto) ? $produto["desconto"] : ""; ?>">
                                    </div>
                                </div>
                                <div class="mb-3 col-md-3">
                                    <label class="form-label">Preço com desconto</label>
                                    <div id="resultado" class="form-control bg-light fw-bold">R$ 0,00</div>
                                </div>
                                <div class="mb-3 col-md-3">
                                    <label for="quantidade" class="form-label">Quantidade</label>
                                    <input type="number" class="form-control" id="quantidade" name="quantidade" required value="<?php echo isset($produto) ? $produto["quantidade"] : ""; ?>">
                                </div>
                            </div>
                            <div class="row">
                                <div class="mb-3 col-md">
                                    <label for="imagem" class="form-label">Imagem</label>
                                    <input type="file" class="form-control" id="imagem" name="imagem" accept="image/*">
                                    <!-- Preview da imagem -->
                                    <img id="preview" src="#" alt="Prévia da imagem" class="img-thumbnail mt-2 d-none" style="width: 120px; height: 120px; object-fit: cover;">
                                </div>


                                <?php if (isset($produto["imagem"])): ?>
                                    <div class="mb-3 col-md-4 text-center">
                                        <input type="hidden" name="currentImage" value="<?php echo $produto["imagem"]; ?>">
                                        <img src="http://localhost:8080/produtos/imagens/<?php echo $produto["imagem"]; ?>" class="img-thumbnail rounded" style="width: 120px; height: 120px; object-fit: cover;">
                                        <p class="small text-muted mt-1">Imagem atual</p>
                                    </div>
                                <?php endif; ?>
                            </div>
                            <div class="mb-3">
                                <label for="especificacoes" class="form-label">Especificações Técnicas</label>
                                <textarea class="form-control" id="especificacoes" name="especificacoes" placeholder="Digite as especificações tecnicas do produto..." rows="3" maxlength="500" required><?php echo isset($produto) ? $produto["especificacoes"] : ""; ?></textarea>
                            </div>

                            <div class="mb-3">
                                <label for="descricao" class="form-label">Descrição</label>
                                <textarea class="form-control" id="descricao" name="descricao" placeholder="Digite uma descrição detalhada do produto..." rows="3" maxlength="1300" required><?php echo isset($produto) ? $produto["descricao"] : ""; ?></textarea>
                            </div>
                    </div>



                    <div class="card-footer text-end">
                        <a href="./" class="btn btn-secondary">Cancelar</a>
                        <button type="submit" class="btn btn-primary">Salvar</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>

    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        const precoInput = document.getElementById("preco");
        const descontoInput = document.getElementById("desconto");
        const resultadoDiv = document.getElementById("resultado");

        function calcular() {
            const preco = parseFloat(precoInput.value) || 0;
            const desconto = parseFloat(descontoInput.value) || 0;
            const valorFinal = preco - desconto;
            resultadoDiv.textContent = `R$ ${valorFinal.toFixed(2).replace(".", ",")}`;
        }

        precoInput.addEventListener("input", calcular);
        descontoInput.addEventListener("input", calcular);

        // Calcular ao abrir a página
        document.addEventListener("DOMContentLoaded", calcular);
    </script>
</body>

</html>