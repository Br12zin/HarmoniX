<?php
// CHAMA O ARQUIVO ABAIXO NESTA TELA
include "../verificar-autenticacao.php";

// INDICA QUAL PÁGINA ESTOU NAVEGANDO
$pagina = "clientes";

if (isset($_GET["key"])) {
    $key = $_GET["key"];
    // SE HOUVER KEY, BUSCA O CLIENTE NO BANCO DE DADOS
    require("../requests/clientes/get.php");
    $key = null;
    if (isset($response["data"]) && !empty($response["data"])) {
        // Se houver dados, pega o primeiro e unico cliente na posição [0]
        $client = $response["data"][0];
    } else {
        $client = null;
    }
}

?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard - Cadastro de Clientes</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
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
                    <div class="card-header">
                        <!-- Formulário de cadastro de clientes -->
                        <h2>
                            Cadastrar Cliente
                            <a href="/clientes/formulario.php" class="btn btn-primary btn-sm">Novo Cliente</a>
                        </h2>
                    </div>
                    <div class="card-body">
                        <form id="clientForm" action="/clientes/cadastrar.php" method="POST"
                            enctype="multipart/form-data">
                            <div class="row">
                                <div class="mb-3 col-md-4">
                                    <label for="clientId" class="form-label">Código do Cliente</label>
                                    <input type="text" class="form-control" id="clientId" name="clientId" readonly
                                        value="<?php echo isset($client) ? $client['id_cliente'] : ""; ?>">
                                </div>
                                <div class="mb-3 col-md-4">
                                    <label for="clientName" class="form-label">Nome do Cliente</label>
                                    <input onblur="teste()" type="text" class="form-control" id="clientName"
                                        name="clientName" required
                                        value="<?php echo isset($client) ? $client["nome"] : ""; ?>">
                                </div>
                                <div class="mb-3 col-md-4">
                                    <label for="clientCPF" class="form-label">CPF</label>
                                    <input data-mask="000.000.000-00" type="text" class="form-control" id="clientCPF"
                                        name="clientCPF" required
                                        value="<?php echo isset($client) ? $client["cpf"] : ""; ?>">
                                </div>

                            </div>
                            <div class="row">
                                <div class="mb-3 col-md-6">
                                    <label for="clientEmail" class="form-label">E-mail</label>
                                    <input type="email" class="form-control" id="clientEmail" name="clientEmail"
                                        required value="<?php echo isset($client) ? $client["email"] : ""; ?>">
                                </div>


                                <div class="mb-3 col-md-6">
                                    <label for="clientWhatsapp" class="form-label">Whatsapp</label>
                                    <input data-mask="(00) 0 0000-0000" type="text" class="form-control"
                                        id="clientWhatsapp" name="clientWhatsapp" required
                                        value="<?php echo isset($client) ? $client["whatsapp"] : ""; ?>">
                                </div>
                                <div class="row">
                                    <div class="mb-3 col-md-8">
                                        <label for="clientImage" class="form-label">Imagem</label>
                                        <input type="file" class="form-control" id="clientImage" name="clientImage"
                                            accept="image/*" value="<?php echo isset($client) ? $client["imagem"] : ""; ?>">

                                    </div>
                                    <?php
                                    // SE HOUVER IMAGEM NO CLIENTE, EXIBIR MINIATURA
                                    if (isset($client["imagem"])) {
                                        echo '
                                        <div class="mb-3 col-md-4">
                                            <input type="hidden" name="currentClientImage" value="' . $client["imagem"] . '">
                                            <img width="100" src="/clientes/imagens/' . $client["imagem"] . '">
                                        </div>
                                        ';
                                    }
                                    ?>
                                </div>
                                <div class="row">
                                    <div class="mb-3 col-md-3">
                                        <label for="clientCEP" class="form-label">CEP</label>
                                        <input data-mask="00000-000" type="text" class="form-control" id="clientCEP"
                                            name="clientCEP" required
                                            value="<?php echo isset($client) ? $client["endereco"]["cep"] : ""; ?>">
                                    </div>
                                    <div class="mb-3 col-md-7">
                                        <label for="clientAddress" class="form-label">Logradouro</label>
                                        <input type="text" class="form-control" id="clientAddress" name="clientAddress"
                                            required
                                            value="<?php echo isset($client) ? $client["endereco"]["logradouro"] : ""; ?>">
                                    </div>
                                    <div class="mb-3 col-md-2">
                                        <label for="clientNumber" class="form-label">Número</label>
                                        <input type="text" class="form-control" id="clientNumber" name="clientNumber"
                                            required
                                            value="<?php echo isset($client) ? $client["endereco"]["numero"] : ""; ?>">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="mb-3 col-md-3">
                                        <label for="clientComplement" class="form-label">Complemento</label>
                                        <input type="text" class="form-control" id="clientComplement"
                                            name="clientComplement"
                                            value="<?php echo isset($client) ? $client["endereco"]["complemento"] : ""; ?>">
                                    </div>

                                    <div class="mb-3 col-md-3">
                                        <label for="clientNeighborhood" class="form-label">Bairro</label>
                                        <input type="text" class="form-control" id="clientNeighborhood" name="clientNeighborhood"
                                            required value="<?php echo isset($client) ? $client["endereco"]["bairro"] : ""; ?>">
                                    </div>
                                    <div class="mb-3 col-md-3">
                                        <label for="clientCity" class="form-label">Cidade</label>
                                        <input type="text" class="form-control" id="clientCity" name="clientCity" required
                                            value="<?php echo isset($client) ? $client["endereco"]["cidade"] : ""; ?>" readonly>
                                    </div>
                                    <div class="mb-3 col-md-3">
                                        <label for="clientState" class="form-label">Estado (UF)</label>
                                        <select class="form-select" id="clientState" name="clientState" required>
                                            <option value="">Selecione um estado</option>
                                            <?php
                                            $ufs = [
                                                "AC",
                                                "AL",
                                                "AP",
                                                "AM",
                                                "BA",
                                                "CE",
                                                "DF",
                                                "ES",
                                                "GO",
                                                "MA",
                                                "MT",
                                                "MS",
                                                "MG",
                                                "PA",
                                                "PB",
                                                "PR",
                                                "PE",
                                                "PI",
                                                "RJ",
                                                "RN",
                                                "RS",
                                                "RO",
                                                "RR",
                                                "SC",
                                                "SP",
                                                "SE",
                                                "TO"
                                            ];
                                            foreach ($ufs as $uf) {
                                                $selected = (isset($client) && $client["endereco"]["estado"] === $uf) ? "selected" : "";
                                                echo "<option value='$uf' $selected>$uf</option>";
                                            }
                                            ?>
                                        </select>
                                    </div>
                                    <!-- <div class="mb-3">
                        <label for="clientState" class="form-label">Estado</label>
                        <input type="text" class="form-control" id="clientState" name="clientState" required value="<?php echo isset($client) ? $client["clientState"] : ""; ?>">
                    </div> -->


                                </div>
                            </div>
                    </div>

                    <div class="card-footer">
                        <a href="./" class="btn btn-danger ">Cancelar</a>
                        <button type="submit" class="btn btn-primary">Salvar</button>
                    </div>


                </div>


                </form>

            </div>


        </div>

    </div>
    </div>

    <!-- Bootstrap JS (opcional, para funcionalidades como o menu hamburguer) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!-- jQuery Mask Plugin -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js"></script>

    <script>
        $('#clientCEP').on('blur', function() {
            var cep = $(this).val().replace(/\D/g, '');
            // Verifica se o CEP tem 8 dígitos
            if (cep.length === 8) {
                // Faz a requisição para a API ViaCEP
                $.getJSON('https://viacep.com.br/ws/' + cep + '/json/?callback=?', function(data) {
                    if (!data.erro) {
                        $('#clientAddress').val(data.logradouro);
                        $('#clientNeighborhood').val(data.bairro);
                        $('#clientCity').val(data.localidade);
                        $('#clientState').val(data.uf);
                    } else {
                        alert('CEP não encontrado.');
                        $("#clientCEP").val("");
                        $("#clientAddress").val("");
                        $("#clientNeighborhood").val("");
                        $("#clientCity").val("");
                        $("#clientState").val("");
                    }
                });
            } else {
                alert('Formato de CEP inválido.');
                // Limpa os campos de endereço
                $("#clientCEP").val("");
                $("#clientAddress").val("");
                $("#clientNeighborhood").val("");
                $("#clientCity").val("");
                $("#clientState").val("");
            }
        });
    </script>

</body>

</html>