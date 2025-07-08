<?php
// CHAMA O ARQUIVO ABAIXO NESTA TELA
include "../verificar-autenticacao.php";

// CARREGAR BIBLIOTECA MPDF
require_once '../mpdf/vendor/autoload.php';

$lista = "";
require("../requests/produtos/get.php");

if (!empty($response)) {
    foreach ($response["data"] as $key => $produto) {
        // .= ADICIONA ITENS NA VARIÁVEL $lista
        $lista .= '
 <tr>
                                    <th scope="row">' . $produto['id_produto'] . '</th>
                                    

                                    <td>' . $produto["produto"] . '</td>
                                    <td class="text-truncate" style="max-width: 150px;">' . $produto["descricao"] . '</td>
                                    <td>' . $produto["marca"] . '</td>
                                                                        <td>' . $produto["categoria"] . '</td>
                                    <td>' . $produto["quantidade"] . '</td>
                                    <td style="width: 90px">R$ ' . $produto["preco"] . '</td>           
                                    <td >R$ ' . $produto["desconto"] . '</td>   
                                   
                                     <td style="width: 90px">R$ ' . $produto["preco"] - $produto["desconto"] . '</td>   
        </tr>
        ';
    }
} else {
    echo '
    <tr>
        <td colspan="4">Nenhum produto cadastrado</td>
    </tr>
    ';
}

$html = '
<html>
<head>
    <meta charset="utf-8">
    <style>
    body {
        font-family: Arial, sans-serif;
        font-size: 12px;
    }
    table {
        width: 100%;
        border-collapse: collapse;
    }
    th, td {
        padding: 8px;
        text-align: left;
        border: 1px solid black;
    }
    </style>
</head>
<body>
    <h1 style="text-align:center">Lista de Produtos</h1>
    <p style="text-align:center">Data: ' . date('d/m/Y') . '</p>
    <p style="text-align:center">Total de Produtos: ' . count($response["data"]) . '</p>
    <table>
        <thead>
            <tr>
                                <th style="background:gray;font-weight:bold">#</th>
                                <th style="background:gray;font-weight:bold">Imagem</th>
                                <th style="background:gray;font-weight:bold">Produto</th>
                                <th style="background:gray;font-weight:bold">Descrição</th>
                                <th style="background:gray;font-weight:bold">Marca</th>
                                <th style="background:gray;font-weight:bold">Categoria</th>
                                <th style="background:gray;font-weight:bold">Qtd</th>
                                <th style="background:gray;font-weight:bold">Preço</th>
                                <th style="background:gray;font-weight:bold">Desconto</th>
                                <th style="background:gray;font-weight:bold">Preço Final</th>
                            </tr>
        </thead>
        <tbody id="clientTableBody">
            ' . $lista . '
        </tbody>
    </table>
</body>
</html>
';

// Cria uma instância do MPDF
$mpdf = new \Mpdf\Mpdf();

// Escreve o conteúdo HTML no PDF
$mpdf->WriteHTML($html);

// Define o nome do arquivo PDF para download
$nomeArquivo = 'Produtos_' . date('YmdHis') . '.pdf';
// Define as dimensões do PDF
$mpdf->SetDisplayMode('fullpage');
$mpdf->SetMargins(10, 10, 10);
$mpdf->SetDefaultBodyCSS('background', '#FFF');
// Gera o PDF e força o download
$mpdf->Output($nomeArquivo, \Mpdf\Output\Destination::DOWNLOAD);
