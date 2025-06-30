<?php
// CHAMA O ARQUIVO ABAIXO NESTA TELA
include "../verificar-autenticacao.php";

// DEFINE TIMEZONE PARA BRASIL
date_default_timezone_set('America/Sao_Paulo');
$filename = "produtos_" . date('YmdHis') . ".xls";

// CABEÇALHO PARA EXPORTAR O ARQUIVO EM EXCEL
header("Content-Type: application/vnd.ms-excel");
header("Content-Disposition: attachment; filename=$filename");
header("Pragma: no-cache");

?>

<head>
    <meta charset="utf-8">
</head>
<table>
    <thead>
        <tr>
            <th style="background:gray;font-weight:bold">#</th>
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
        <!-- Os produtos serão carregados aqui via PHP -->
        <?php
        require('../requests/produtos/get.php');
        // SE HOUVER produtos NA SESSÃO, EXIBIR
        if (!empty($response)) {
            foreach ($response["data"] as $key => $produto) {
                echo '
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
                <td colspan="4">Nenhum cliente cadastrado</td>
            </tr>
            ';
        }
        ?>
    </tbody>
</table>